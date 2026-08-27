# Blog — decisões técnicas e plano de implementação

> Status: **planejado, não implementado.** Este documento é a referência para construir o blog e o registro do porquê de cada escolha.

## Por que

O site é uma landing page de página única que vende serviços de desenvolvimento web. Não existe canal de conteúdo: quem chega já precisa estar procurando pela Renata.

Os cinco primeiros temas são todos de intenção de busca de cliente pequeno — "por que ter um site", "como saber se meu site está no Google", "como escolher domínio". O blog é uma jogada de aquisição: chegar em quem ainda não sabe que precisa contratar alguém.

Isso define o critério de sucesso. **Um blog que não ranqueia não serve para nada aqui**, e o site não tem nenhuma infraestrutura de SEO por página hoje: um `<title>` fixo no `_app.tsx` e meta tags estáticas no `_document.tsx`. Boa parte do trabalho é construir essa base — que de quebra conserta a landing, hoje sem canonical e com meta duplicada.

Existe um ponto de credibilidade junto: um dos posts é sobre características de um site bem rankeado. O blog precisa passar no que ensina.

## Decisões

| Assunto | Decisão |
|---|---|
| Conteúdo | Arquivos `.mdx` em `content/blog/`. Publicar = commit + deploy |
| SEO | Completo: meta + Open Graph por página, JSON-LD, `sitemap.xml`, `robots.txt` |
| Domínio | Centralizado em `src/seo/config.ts` (env var + fallback), nunca hardcoded |
| CTA nos posts | Nenhum por enquanto |
| Router | Continua Pages Router. **Sem upgrade do Next** |

---

## Restrições do projeto

O que limita as escolhas técnicas:

- **Next 13.0.7** (dez/2022), React 18.2, TypeScript 4.8, **Pages Router**. App Router não é viável sem upgrade.
- **Sem path aliases** — o `tsconfig.json` não tem `baseUrl`/`paths`. Todos os imports são relativos, e não é hora de mudar isso: mexeria na resolução de todo import existente.
- **Dois sistemas de estilo.** A landing usa CSS global com custom properties (`src/styles/site.css`); o styled-components só atende a página legada `/contato` e um monte de código morto em `src/components/`. **O blog segue o `site.css`.**
- `getStaticProps` / `getStaticPaths` não existem em lugar nenhum do repo ainda.

### ⚠️ `"next": "latest"` no package.json

O `package.json` declara `"next": "latest"`, mas o instalado e travado no lockfile é o **13.0.7**. `latest` é uma dist-tag: **qualquer `npm install <pacote>` re-resolve e arrasta o projeto para o Next 16**, quebrando o `_document.tsx` (SSR do styled-components).

Antes de instalar qualquer coisa:

```jsonc
"next": "13.0.7",        // era "latest"
"typescript": "~4.8.4",  // era "^4.7.4" — TS 5 quebraria styled.d.ts
```

E conferir `node -p "require('next/package.json').version"` depois de **cada** install.

---

## Pipeline de MDX

**`next-mdx-remote@4.4.1`.** A linha 4.x é MDX v2 e aceita `react >=16 <=18`; a 5.x/6.x exigem MDX v3 e RSC (App Router).

Versões pinadas exatas — todas da linha MDX v2:

```
next-mdx-remote@4.4.1
gray-matter@4.0.3
remark-gfm@3.0.1               # v4 exige unified 11 / MDX v3 — NÃO instalar 4.x
rehype-slug@5.1.0              # v6 = linha MDX v3
rehype-autolink-headings@6.1.1 # v7 = linha MDX v3
```

Não instalar `@mdx-js/react` (já vem embutido; `components` vai por prop) nem `reading-time` (são três linhas: `palavras / 200`).

**Alternativas descartadas.** `@next/mdx` transforma cada `.mdx` numa rota, então o conteúdo teria que morar em `src/pages/`, não dá para pôr `getStaticProps` num `.mdx`, e o índice continuaria precisando ler o frontmatter por fora — a camada `gray-matter` seria escrita de qualquer jeito. `remark` + `remark-html` puro obrigaria a pinar `remark@13`/`unified@9` (últimas CJS, de 2021, sem manutenção) e mataria o motivo de usar MDX: componentes React dentro do texto.

### Risco de ESM

`next-mdx-remote@4` é ESM puro. Funciona no Pages Router porque as páginas `.tsx` compilam para ESM, então o webpack as trata como `import` legítimo. Mas o Next 13.0.7 é antigo — por isso o **primeiro passo da implementação é um smoke-test isolado**, não um voto de confiança.

Se o build quebrar, nesta ordem:

```js
// next.config.js — saída 1: força o webpack a empacotar em vez de externalizar
experimental: {
  transpilePackages: ["next-mdx-remote", "@mdx-js/mdx", "@mdx-js/react",
                      "remark-gfm", "rehype-slug", "rehype-autolink-headings",
                      "unified", "vfile", "vfile-matter"],
}
// saída 2: experimental: { esmExternals: "loose" }
```

`transpilePackages` fica **dentro de `experimental`** no 13.0.7 — no topo só a partir da 13.1. Custo: builds mais lentos (liga o loader SWC para `node_modules`), irrelevante num site de 7 páginas.

**Saída 3 (bail-out):** `gray-matter` + `remark@13.0.0` + `remark-html@13.0.1` + `dangerouslySetInnerHTML`. Todo o resto — SEO, sitemap, nav, CSS, tema — fica idêntico; só muda o render do `[slug].tsx`.

---

## Estrutura

```
content/blog/*.mdx                 # 5 arquivos, fora de src/ — conteúdo não é código

src/blog/
  types.ts          # tipos apenas — seguro no cliente
  posts.server.ts   # fs + gray-matter. SÓ SERVIDOR.
  mdxComponents.tsx # mapa de h2/h3/a/img + <Callout/> <Checklist/>
  PostCard.tsx
  PostShell.tsx     # Background + Nav + children + Footer + WhatsAppFab

src/seo/
  config.ts   # SITE_URL, defaults, helper abs()
  Seo.tsx
  jsonld.ts   # BlogPosting / Blog / BreadcrumbList

src/pages/blog/index.tsx      # getStaticProps
src/pages/blog/[slug].tsx     # getStaticPaths(fallback:false) + getStaticProps
src/styles/blog.css           # importado no _app depois do site.css
scripts/generate-sitemap.mjs  # postbuild
public/robots.txt, public/sitemap.xml, public/blog/covers/*.png
```

`src/blog/` e `src/seo/` são irmãos de `src/landing/`, deliberadamente **não** `src/components/` — essa pasta é o cemitério styled-components e código novo ali fica enterrado.

### Fronteira servidor/cliente

`posts.server.ts` começa com um `throw` se `typeof window !== "undefined"` e **só pode ser importado de `getStaticProps`/`getStaticPaths`/`scripts/`**.

O motivo é preciso: o transform `next-ssg` do Next remove do bundle do cliente os imports usados exclusivamente por `getStaticProps` — mas trabalha por **módulo, não por export**. Se `posts.server.ts` um dia exportar um formatador que um componente use, o módulo inteiro (com `fs`) vai para o cliente e o build morre com `Can't resolve 'fs'`.

Por isso os tipos moram em `types.ts` e são importados com `import type` — obrigatório, já que `isolatedModules: true` está ligado.

---

## Como escrever um post

Criar um `.mdx` em `content/blog/`. O nome do arquivo vira a URL.

```yaml
---
title: "Por que devo ter um site profissional"
description: "Até 160 caracteres — é o que aparece no Google."
date: "2026-02-10"
tags: ["site profissional", "presença digital"]
cover: "/blog/covers/por-que-devo-ter-um-site-profissional.png"
draft: false
---
```

Duas regras que quebram o build se ignoradas:

1. **Datas entre aspas.** Sem aspas, o `js-yaml` do `gray-matter` devolve um objeto `Date` e o `getStaticProps` estoura com `Reason: object ("[object Date]") cannot be serialized as JSON`. Há defesa dupla no `posts.server.ts` (`new Date(x).toISOString()`), mas a convenção vem primeiro.
2. **O corpo começa em `##`, nunca `#`.** O `<h1>` é do shell da página; dois H1 é erro de SEO.

`draft: true` esconde o post do índice e do sitemap — útil para deixar rascunho commitado.

Capas: PNG 1200×630 em `public/blog/covers/`. Sem capa, `cover: null` cai no gradiente do card e o `<Seo>` cai na imagem padrão. Geração dinâmica de OG exigiria `@vercel/og`, que **precisa de Next 13.3+**.

### Pré-renderização

`getStaticPaths` usa **`fallback: false`**, e isso é estrutural: garante que todo post é HTML em disco depois do build, sem `fs` em runtime.

O `experimental.outputFileTracingIncludes` **não existe na 13.0.7** (chegou na 13.1), então qualquer leitura de `content/` em runtime na Vercel é loteria — o `@vercel/nft` não rastreia `readdirSync` de diretório dinâmico e os `.mdx` não subiriam para a lambda. **Não trocar por `blocking`/ISR sem resolver isso antes.** Um post novo exige redeploy, o que é consistente com "publicar = commit + deploy".

---

## SEO

### Por que as meta tags duplicam hoje

O `_document` renderiza o `<head>` nesta ordem: tags do `next/head` (filtradas por `unique()`) → marcador `next-head-count` → **filhos do `_document`, crus**. Duas consequências:

1. **O `unique()` nunca vê os filhos do `_document`.** Tudo que estiver lá e também for emitido por um componente de SEO aparece **duas vezes**, garantido — nenhum `key` evita. Dá para confirmar hoje: o site tem **dois** `<meta charset>`.
2. Os filhos do `_document` ficam **depois** do marcador, e o head-manager do cliente só mexe no que está antes dele. Ou seja, **tags do `_document` congelam pelo resto da aba**: navegar `/blog` → `/blog/post` deixaria o `og:title` errado para sempre.

Por isso a estratégia é **mover, não sobrescrever**.

### Regras de `key`

- `<title>`, `<base>`: deduplicam por nome de tag, `key` irrelevante.
- `meta property=` (todo `og:*`): sempre deduplica pela property.
- `meta name=`: assim que **uma** tag `name` ganha `key`, a dedupe por nome desliga e só vale o `key`. Ou key em todas, ou em nenhuma.
- **`<link>` e `<script>`: `key` é o *único* mecanismo.** Um `<link rel="canonical">` sem `key` duplica — o erro mais fácil de cometer.

Decisão: **um `<Seo>` por página, nenhum no `_app`** (são só 4 páginas), com `key` em toda tag emitida.

### O que muda no `_document.tsx` e `_app.tsx`

**Sai do `_document`** (vira responsabilidade do `<Seo>`): `description`, `keywords` (o Google ignora desde 2009 — dropar, não mover), os 8 `og:*`, os 6 `twitter:*`, `charSet` (já vem do `defaultHead()`), e o **segundo** bloco `theme-color`/`msapplication-*`.

**Fica no `_document`**: `author`, os 15 favicons + manifest, o primeiro bloco `theme-color`, os `preconnect` + a folha do Google Fonts.

**No `_app`**: remover o `<title>` fixo; manter um `<Head>` com só `<meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />` — o `defaultHead()` injeta viewport **sem** `initial-scale`, e sobrescrever só funciona a partir do `_app`. Adicionar `import "../styles/blog.css"`.

### Três bugs pré-existentes que o blog expõe

1. **Favicons com caminho relativo** (`_document.tsx:90-159`): `href="./favicon/..."`. Em `/` resolve certo; em **`/blog/meu-post` resolve para `/blog/favicon/...` → 15 requests 404.** Trocar para `/favicon/...`.
2. **`<Html>` sem `lang`** (linha 35). Blog em português precisa de `<Html lang="pt-BR">` — auditoria de SEO e de acessibilidade.
3. **`theme-color` e `msapplication-*` duplicados** com valores conflitantes (`#1A1A1A` nas linhas 49-54, `#ffffff` nas 160-162), e o segundo `TileImage` aponta para `/ms-icon-144x144.png`, que não existe.

### URL base

```ts
// src/seo/config.ts
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://renatakarolina.vercel.app").replace(/\/$/, "");
export const abs = (p: string) => (p.startsWith("http") ? p : `${SITE_URL}${p}`);
```

Canonical, OG, JSON-LD e sitemap consomem só isso — trocar de domínio é uma env var na Vercel. Documentar no `.env.example`.

**`og:image` tem que ser absoluta.** Imagem relativa é silenciosamente ignorada por WhatsApp, Facebook e LinkedIn — e como a venda acontece por WhatsApp, isso é bug de receita.

### sitemap.xml e robots.txt

**Script de `postbuild` que escreve `public/sitemap.xml`.**

Não `getServerSideProps` — essa é a resposta popular e está **errada para este repo**: leria `content/blog` em runtime, os `.mdx` não seriam rastreados para a lambda, e sem `outputFileTracingIncludes` na 13.0.7 não há como forçar. Funcionaria em localhost e daria 500 na Vercel.

Não `next-sitemap` — para 7 URLs é mais superfície que o script, e ainda exigiria um callback lendo `content/` do mesmo jeito.

O script lê o diretório, pula `draft: true` e emite `/`, `/blog` e os posts com `lastmod`. Exclui `/contato`, a página legada de linktree, que também deve receber `noindex`. A Vercel coleta `public/` **depois** do comando de build, então o `postbuild` chega a tempo — é o mesmo mecanismo do `next-sitemap`.

**Commitar o `public/sitemap.xml`**: garante que existe mesmo se o postbuild for pulado, e o diff fica visível no PR.

Trade-off assumido: o `.mjs` não importa o `posts.server.ts` (TypeScript), então ~12 linhas de leitura de frontmatter ficam duplicadas. O script confere que a contagem de slugs bate com a de arquivos `.mdx` e falha o build se divergir.

---

## Navegação

Hoje o `Nav.tsx` é 100% âncora e o `go()` sempre dá `preventDefault()`. Em `/blog`, clicar em "Sobre" chama `querySelector("#sobre")` → `null` → **nada acontece**. Nav morto e silencioso.

```tsx
const links = [["Sobre","/#sobre"], ["Trabalhos","/#trabalhos"],
               ["Serviços","/#servicos"], ["Blog","/blog"], ["Contato","/#contato"]];

const onHome = useRouter().pathname === "/";

const go = (e, href) => {
  setOpen(false);
  const hash = href.startsWith("/#") ? href.slice(1) : null;
  if (!hash || !onHome) return;        // deixa o next/link rotear
  e.preventDefault();
  const el = document.querySelector(hash);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 80, behavior: "smooth" });
};
```

Hrefs completos (`/#sobre`) para funcionarem em nova aba e para o crawler ver um destino válido. Trocar os `<a>` por `<Link>` nos quatro pontos (lista desktop, menu mobile, os dois CTAs) — no Next 13 o `<Link>` já renderiza o próprio `<a>`, igual ao que `Trabalhos.tsx` faz. Logo: `href={onHome ? "#top" : "/"}`. "Blog" entra antes de "Contato".

**`section[id], header[id] { scroll-margin-top: 96px; }`** no `site.css`: sem isso, cair em `/#sobre` vindo de outra página usa o scroll nativo do navegador, que ignora a nav fixa de 80px e enterra o título embaixo dela.

Adicionar "Blog" também no `Footer.tsx` — link interno da página de maior autoridade é como `/blog` é descoberto.

---

## Tema

**Subir o `useTheme()` para o `_app` atrás de um contexto.**

Chamar `useTheme()` por página compila, mas o hook inicializa em `"dark"` e só lê o `localStorage` num efeito — então **toda navegação cliente pisca escuro** para quem usa tema claro. Num blog, onde se navega o tempo todo, é inaceitável.

`src/landing/ThemeContext.tsx` (~20 linhas) envolve `useTheme()`; o `_app` monta o provider **dentro** do `ThemeProvider` do styled-components (que precisa continuar para a `/contato`). `Nav` e `Hero` passam a chamar `useThemeCtx()` em vez de receber props. O `useTheme.ts` em si não muda. Como o `_app` não remonta, o estado sobrevive à troca de rota.

> Existe um `src/styles/theme/ThemeContext.tsx` morto da era styled-components — não reaproveitar.

**Mais o script anti-flash** no `<Head>` do `_document`:

```html
<script dangerouslySetInnerHTML={{__html:
  `(function(){try{if(localStorage.getItem('rk-theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}})()`}} />
```

Corrige um bug que já existe: no reload duro o servidor não manda `data-theme`, e quem usa claro leva um flash escuro inteiro. Seguro para hidratação (o React não faz diff de atributos do `<html>`).

---

## Estilos

**`src/styles/blog.css` novo**, importado no `_app` depois do `site.css` — não anexado a ele, que tem 400 linhas organizadas por seção da landing e ficaria soterrado por ~200 linhas de tipografia. Os tokens `:root` / `[data-theme="light"]` cascateiam de graça, então **o modo claro sai sem trabalho extra**, desde que todo valor seja token.

- **Índice**: `.post-grid` (`auto-fill, minmax(320px, 1fr)`), `.post-card` espelhando `.work-card`, `.post-card-thumb` com `aspect-ratio: 16/9` e gradiente de fallback sem capa.
- **Artigo**: `.article` (padding-top 130px pela nav fixa), `.breadcrumb`, `.article-cover`, `.post-nav`.
- **`.prose`**: `max-width: 760px; font-size: 18px; line-height: 1.75`, regras para `h2/h3/p/strong/ul/ol/blockquote/code/pre/img/figure/hr/table`.

> **Atenção:** `site.css:50` tem `a { color: inherit; text-decoration: none; }` global — links dentro do artigo ficariam invisíveis. `.prose a` precisa restaurar cor e sublinhado explicitamente.

`.prose h2/h3` levam `scroll-margin-top: 100px` por causa dos ids do `rehype-slug`.

As páginas do blog reaproveitam `Background`, `Nav`, `Footer` e `WhatsAppFab` de `src/landing/` sem alteração — todos são stateless e movidos a className.

---

## Ordem de implementação

Os passos 0-1 são portão: não seguir sem build verde. Os passos 3-5 mexem na landing que já está no ar — um commit revisável cada.

| # | | Esforço |
|---|---|---|
| 0 | Pinar `next` e `typescript` | 5 min |
| 1 | Instalar as 5 deps + **smoke-test isolado do MDX** | 30 min |
| 2 | `types.ts` + `posts.server.ts`; os 5 `.mdx` só com frontmatter | 1 h |
| 3 | `src/seo/*`; cirurgia no `_document`/`_app`; os 3 bugs; `<Seo>` em `/` e `/contato` | 1,5 h |
| 4 | `ThemeContext` + fiação + script anti-flash | 1 h |
| 5 | Nav cross-page + item "Blog" + `scroll-margin-top` + footer | 1 h |
| 6 | `/blog` + `PostCard` + `PostShell` | 1,5 h |
| 7 | `/blog/[slug]` + `mdxComponents` + JSON-LD + prev/next | 2 h |
| 8 | `blog.css` — cards, prose. Checar modo claro a cada bloco | 2 h |
| 9 | `generate-sitemap.mjs` + `postbuild` + `robots.txt` | 45 min |
| 10 | Post nº 1 completo; outlines 2-5; as capas | 3 h |
| 11 | Verificação + deploy + Search Console | 1 h |

**≈ 15 h.**

---

## Verificação

**Build.** `npx tsc --noEmit` e `npm run build` limpos; na tabela de rotas, `● /blog/[slug]` com os paths listados, `● /blog`, e **nenhum `λ`** para `/sitemap.xml`.

**Meta sem duplicata** — o teste de aceite da parte de SEO. Com `npm run build && npm start`, para `/`, `/blog` e um post:

```bash
curl -s localhost:3000$p | grep -o 'rel="canonical"'     | wc -l   # 1
curl -s localhost:3000$p | grep -o 'name="description"'  | wc -l   # 1
curl -s localhost:3000$p | grep -o 'property="og:title"' | wc -l   # 1
curl -s localhost:3000$p | grep -o 'charset'             | wc -l   # 1 (era 2)
curl -s localhost:3000$p | grep -o 'name="viewport"'     | wc -l   # 1
```

E o `og:title` do post tem que ser o título do post, não `"Renata Karolina | Web Developer"`.

**Navegação cliente** — é o que as tags congeladas do `_document` quebrariam: ir de `/blog` para um post pelo link e conferir no console que `document.title` e `link[rel=canonical].href` acompanharam.

**Artigo no HTML servido** (a premissa de SEO inteira): `curl -s .../post | grep -c "seu negócio"` > 0, e `grep -o '<h1' | wc -l` = exatamente 1.

**Favicon em rota aninhada**: em `/blog/<slug>`, nenhum request de favicon em 404.

**Sitemap**: `xmllint --noout public/sitemap.xml`, contagem de `<url>` correta, URLs absolutas no domínio certo. `/robots.txt` responde.

**Dados estruturados**: o HTML do post no Rich Results Test do Google → `BlogPosting` + `BreadcrumbList`, 0 erros.

**Preview social**: depois do deploy, mandar a URL no WhatsApp para si mesma. Se a imagem não aparecer, `og:image` não está absoluta.

**Lighthouse** num post: SEO **100** (checa `html[lang]`, title único, description, canonical), acessibilidade ≥ 95 (contraste do `--text-2` **nos dois temas**, ordem de headings sem pular nível).

**Nav cruzada**: de `/blog/<slug>`, clicar "Sobre" tem que levar a `/` rolado até a seção, com o título livre da nav. Testar também no menu mobile.

**Tema**: modo claro + reload duro em `/blog/<slug>` → sem flash escuro; navegar `/blog` → `/` → `/blog` mantendo a preferência.

---

## Riscos

| Risco | Mitigação |
|---|---|
| `npm install` sobe o Next para a 16 via `"latest"` | Passo 0; conferir a versão após cada install |
| ESM do next-mdx-remote quebra no 13.0.7 | Passo 1 é portão; 3 saídas documentadas, a última preserva 90% do plano |
| Data sem aspas → crash de serialização | Aspas no frontmatter **e** normalização no `posts.server.ts` |
| `posts.server.ts` vaza para o cliente → `Can't resolve 'fs'` | Disciplina de import + `throw` se `window` + tipos isolados |
| Meta duplicada sobrevive | A matriz de `curl \| grep -c` é o teste de aceite |
| Sitemap com `ENOENT` na Vercel | Eliminado: script de build, zero `fs` em runtime |

## Fora de escopo

A camada de dados já suporta; fazer depois que o primeiro post ranquear:

- `/blog/tag/[tag]`
- Feed RSS
- Índice lateral (table of contents)
- Busca
- Imagem OG dinâmica — precisa de `@vercel/og`, que exige Next 13.3+

## Primeiros posts

| Slug | Status |
|---|---|
| `por-que-devo-ter-um-site-profissional` | escrito por inteiro |
| `como-saber-se-meu-site-esta-no-google` | outline |
| `o-que-nao-pode-faltar-num-site-profissional` | outline |
| `caracteristicas-de-um-site-bem-rankeado-no-google` | outline |
| `como-escolher-o-nome-do-dominio-do-meu-site` | outline |

Os cinco saem com frontmatter completo e válido — é isso que prova o esqueleto de ponta a ponta (5 cards no índice, 5 URLs no sitemap, 5 HTMLs pré-renderizados).

O post nº 1 tem ~1500-1800 palavras, no tom do `about` em `data.ts` — direto, sem jargão. Links internos para `/#servicos` e `/#trabalhos` (prova real de portfólio) e para os posts 2 e 4, semeando o cluster de tópico.
