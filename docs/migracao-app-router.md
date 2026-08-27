# Migração — App Router, Tailwind 4 e shadcn/ui

> Status: **planejado, não iniciado.**
> Ponto de partida: Next 13.0.7 · React 18.2 · Pages Router · CSS global + styled-components
> Destino: Next 15.5 · React 19 · App Router · Tailwind 4 + shadcn/ui

## Por que

O site está no Next 13.0.7, de dezembro de 2022. Isso já custa caro hoje: o plano do blog (`docs/blog.md`) precisou de três saídas de emergência para ESM, teve que descartar a solução padrão de sitemap porque `outputFileTracingIncludes` só existe a partir da 13.1, e não pode usar imagem OG dinâmica porque `@vercel/og` exige 13.3+. Cada coisa nova custa mais do que deveria.

**Sendo honesta sobre o ganho:** o App Router **não vai deixar este site mais rápido**. É uma landing page animada — 9 dos 17 arquivos usam framer-motion, então quase tudo continua sendo Client Component. A redução de JavaScript que o App Router promete não se aplica aqui.

O que se ganha de verdade:

- **Metadata API** — metadata por rota, resolvido no servidor. Substitui todo o desenho de `<Seo>` do plano do blog e elimina de uma vez o problema de tag duplicada do `_document`.
- **`sitemap.ts` e `robots.ts`** por convenção de arquivo, em vez do script de `postbuild`.
- **Layouts** — nav e footer deixam de ser repetidos em cada página.
- **Estar numa versão suportada**, com acesso ao ecossistema atual (shadcn, Tailwind 4, `@next/third-parties`).
- **Uma engine de estilo só.** Hoje são duas: CSS global e styled-components.

## Decisões

| Assunto | Decisão |
|---|---|
| Visual | **Port fiel.** Mesmo resultado na tela, tecnologia diferente |
| Versões | Next 15.5 · React 19 · Tailwind 4 · shadcn/ui |
| Código morto | **Deletar antes de migrar**, arquivos e dependências |
| `/contato` | Reescrever sem styled-components e **remover a dependência do projeto** |

Next 15.5 e não 16.3 porque é onde o shadcn está documentado e testado hoje; o ganho da 16 para este site é pequeno perto do risco a mais.

---

## Passo 1 — deletar o código morto

Nada em `src/pages/` alcança os arquivos abaixo. Migrar qualquer um deles seria trabalho jogado fora.

**Arquivos**

```
src/components/About/         src/components/MyJobs/
src/components/CardProjects/  src/components/Photo/
src/components/CardSlider/    src/components/Slider/
src/components/Courses/       src/components/Title/
src/components/Footer/        src/components/stackMock.ts
src/components/Header/        src/components/useAnalticsEventTraker.tsx
src/templates/Home/
src/landing/threeHero.ts              ← importa three.js e ninguém o importa
src/sharedstyles.tsx
src/styles/globalstyles.tsx
src/styles/theme/ThemeContext.tsx
src/styles/theme/useDarkTheme.ts
src/styles/theme/light.ts
```

Sobrevive: `src/components/Analytics/` (usado pelo `_document`) — mas ver a nota abaixo.

**Dependências que saem junto**

| Pacote | Por quê |
|---|---|
| `three`, `@types/three` | só o `threeHero.ts` órfão importava. ~600 KB |
| `react-slick`, `@types/react-slick` | só o `Slider` morto |
| `react-scroll`, `@types/react-scroll` | só componentes mortos |
| `react-ga` | só o `useAnalticsEventTraker` órfão |
| `react-loading` | nenhum arquivo importa |
| `@react-icons/all-files` | nenhum arquivo importa |

`react-icons` fica por enquanto: 6 dos 7 arquivos que o usam são mortos, mas o `/contato` usa `FaWhatsapp` e `FaShareAlt`. Sai no passo 2, trocado por `lucide-react` (que vem com o shadcn).

> **Bug de brinde:** `src/components/Analytics/index.tsx` chama `gtag('config', G-51GJLR30MC, …)` com um identificador solto em vez de string — é um `ReferenceError`. O GTM real vem do `react-gtm-module` no `_app`. Esse componente pode ser deletado; o GTM é reconfigurado no passo 4.

Depois deste passo o código vivo é: `src/landing/` (17 arquivos, ~1.485 linhas), `src/templates/SociaisMedias` + `Container`, `src/pages/api/contato.ts`, `_app`, `_document` e `src/styles/site.css` (400 linhas). **É isso que de fato migra.**

---

## Passo 2 — matar o styled-components antes de subir de versão

Esta ordem não é preferência, é obrigação: **styled-components v5 não funciona com React 19.** Se o upgrade vier primeiro, a `/contato` quebra no meio do caminho.

`/contato` é uma página de linktree: um punhado de links, um `useState`, dois ícones. Reescrever com as classes do `site.css` que já existem é mais barato do que subir para o styled-components v6, montar registry de SSR e marcar tudo como `"use client"` — só para depois deletar de qualquer jeito.

Com a página convertida, saem:

```
styled-components, @types/styled-components   (package.json)
src/styles/styled.d.ts        + a entrada "files" do tsconfig.json
src/templates/SociaisMedias/style.ts, src/templates/Container/style.ts
src/styles/theme/dark.ts
o ServerStyleSheet / getInitialProps do _document.tsx
o <ThemeProvider theme={dark}> do _app.tsx
compiler.styledComponents do next.config.js
```

Ao fim: **uma engine de estilo só**, e o `_document.tsx` vira só as meta tags — o que torna a remoção dele, no passo 5, trivial.

---

## Passo 3 — subir de versão, ainda no Pages Router

Trocar o router e a versão do React ao mesmo tempo é como se depurar dois problemas de uma vez. Este passo sobe as versões **sem mexer na estrutura**, e tem que ficar verde antes de seguir.

```jsonc
"next": "15.5.24",        // era "latest", com 13.0.7 instalado
"react": "19.2.0",
"react-dom": "19.2.0",
"framer-motion": "13.1.1", // era 7.3.2
"typescript": "~5.9.0"
```

> Continua valendo o alerta do `docs/blog.md`: `"next": "latest"` é dist-tag e re-resolve sozinho para a 16.3. **Pinar exato.**

O que muda no código:

- **framer-motion 7 → 13.** O pacote foi renomeado para `motion`, mas o nome `framer-motion` continua publicado como alias — **manter o import `from "framer-motion"`** para não gerar diff em 10 arquivos. A API que este site usa (`motion.*`, `AnimatePresence`, `variants`, `whileHover`) é estável entre as duas.
- **Vercel Analytics**: `@vercel/analytics/react` → `@vercel/analytics/next` (só no passo 5, junto com o layout).
- **React 19**: `forwardRef` deixou de ser necessário e `propTypes` saiu. Este código não usa nenhum dos dois.
- O comentário no topo do `_app.tsx` sobre `useParams` não existir antes da 13.3 fica obsoleto — apagar.

**Portão:** `npm run build` verde, `/` e `/contato` conferidas no navegador, animações rodando. Só então seguir.

---

## Passo 4 — Tailwind 4, path aliases e shadcn

### Tailwind 4

```bash
npm i tailwindcss @tailwindcss/postcss postcss
```

```js
// postcss.config.mjs
export default { plugins: { "@tailwindcss/postcss": {} } };
```

Tailwind 4 configura **por CSS**, não por `tailwind.config.js` — o que encaixa direto no design system atual, que já é custom properties.

> Tailwind 4 exige Chrome 111+, Safari 16.4+, Firefox 128+ (usa `@property` e `color-mix`). O `site.css` já usa `color-mix` hoje, então o piso de navegador na prática não muda.

### A inversão claro/escuro

O gotcha central desta migração:

| | Hoje | Convenção shadcn / Tailwind |
|---|---|---|
| Padrão | `:root` = **escuro** | `:root` = **claro** |
| Override | `[data-theme="light"]` | `.dark` |

Manter a convenção invertida significa brigar com todo componente do shadcn que for instalado. **Inverter os dois blocos** é uma edição mecânica de ~35 linhas, feita uma vez, e depois tudo do ecossistema funciona sem adaptação. O site continua abrindo escuro — isso vira `defaultTheme="dark"` no `next-themes`, não uma inversão de CSS.

### `@theme` vs `@theme inline`

Este é o erro que quebra o modo claro sem dar erro nenhum:

```css
/* ERRADO — cor assada no build, não troca com o tema */
@theme { --color-accent: #8b5cf6; }

/* CERTO — a var troca em runtime, o Tailwind só a referencia */
:root       { --accent: #6d28d9; }   /* claro */
.dark       { --accent: #8b5cf6; }   /* escuro */
@theme inline { --color-accent: var(--accent); }
```

Toda cor que precisa trocar de tema tem que vir por `@theme inline`. É exatamente o padrão que o shadcn usa no Tailwind 4.

### Path aliases

O `tsconfig.json` não tem `baseUrl` nem `paths` hoje — e o shadcn **exige**:

```jsonc
"baseUrl": ".",
"paths": { "@/*": ["./src/*"] }
```

Como o passo 5 reescreve os imports ao mover tudo para `app/`, o custo é praticamente zero se feito junto.

### shadcn

```bash
npx shadcn@latest init
```

Cria `components.json`, `src/lib/utils.ts` (o helper `cn()`) e instala `clsx`, `tailwind-merge`, `lucide-react`.

**Onde o shadcn realmente ajuda aqui** — vale ser específica, porque este é um site de marketing, não um painel, e a maior parte dele não tem "componente" no sentido do shadcn:

| Componente | Vale? |
|---|---|
| `Form` + `Input` + `Textarea` + `Label` (com react-hook-form + zod) | **Sim.** O formulário de contato hoje valida na mão; ganha validação, mensagens de erro e acessibilidade de graça |
| `Sonner` (toast) | **Sim.** Feedback de envio melhor que o estado atual |
| `Sheet` | **Sim.** O menu mobile do `Nav` vira um Sheet, com foco e ESC resolvidos |
| `Badge` | Talvez — para as tags de projeto |
| `Button` | **Não.** O `.btn-primary` tem gradiente, sweep de luz infinito e borda animada; embrulhar isso no Button do shadcn dá mais trabalho que manter. Melhor virar `cva` próprio |
| Hero, cards de projeto, planos | **Não.** São layout autoral, não componente de biblioteca |

Ou seja: o shadcn entra por acessibilidade e pelo formulário, não como skin.

---

## Passo 5 — App Router, rota a rota

`app/` e `pages/` **convivem** no mesmo projeto, então dá para migrar uma rota por vez e verificar cada uma.

```
src/app/
  layout.tsx              # <html lang="pt-BR">, fontes, metadata raiz, providers, GTM, Analytics
  globals.css             # @import "tailwindcss" + tokens + @theme inline
  page.tsx                # a landing
  contato/page.tsx        # o linktree
  api/contato/route.ts    # POST handler
  sitemap.ts              # substitui o script de postbuild do plano do blog
  robots.ts
  icon.png / apple-icon.png
```

Ordem: `/contato` (menor) → `/api/contato` → `/` → deletar `src/pages/` inteiro.

### Metadata substitui `_document` e `_app`

`_document.tsx` e `_app.tsx` **deixam de existir**. As meta tags viram um objeto:

```ts
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://renatakarolina.vercel.app"),
  title: { default: "Renata Karolina · Desenvolvedora Web", template: "%s · Renata Karolina" },
  description: "...",
  openGraph: { ... },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon/favicon-32x32.png", apple: "/favicon/apple-icon-180x180.png" },
};
```

Isso resolve de graça **os três bugs** catalogados no `docs/blog.md`:

1. **Favicons com caminho relativo** (`./favicon/...`, que dariam 404 em `/blog/post`) — o `metadataBase` torna tudo absoluto.
2. **`<html>` sem `lang`** — agora é escrito à mão no layout, `lang="pt-BR"`.
3. **`theme-color` duplicado** com valores conflitantes — só existe uma chave `themeColor`, não tem como duplicar.

E torna obsoleto todo o desenho do `<Seo>` e a análise de dedupe por `key` do plano do blog: **no App Router isso deixa de ser um problema.**

### Route Handler

```ts
// app/api/contato/route.ts
export async function POST(req: Request) { … return NextResponse.json({ ok: true }); }
```

A lógica de `src/pages/api/contato.ts` (honeypot `empresa`, limites por campo, `escapeHtml`, Resend) migra sem alteração — muda só a casca. O 405 para outros métodos passa a ser automático.

### `"use client"`

Precisam da diretiva: `Nav`, `Hero`, `HeroMockups`, `Contato`, `Reveal`, `Servicos`, `Sobre`, `Stack`, `Trabalhos`, `WhatsAppFab`, `Background` — praticamente a landing inteira, por causa de framer-motion e de estado.

Isso não é sinal de migração malfeita: **é uma landing animada**. O `page.tsx` continua sendo Server Component e resolve a metadata no servidor, que é o ponto.

### GTM

`react-gtm-module` num `useEffect` do `_app` → `@next/third-parties`:

```tsx
import { GoogleTagManager } from "@next/third-parties/google";
<GoogleTagManager gtmId="GTM-T98BFRQ" />
```

Sai mais uma dependência (`react-gtm-module`, `@types/react-gtm-module`) e o script passa a carregar com a estratégia certa.

---

## Passo 6 — portar o site.css para Tailwind

400 linhas, feitas à mão. O critério é **port fiel**: se der para ver a diferença, está errado.

**O que vira token** (`@theme inline` sobre vars de `:root`/`.dark`): as ~16 cores, `--maxw`, `--shadow`, `--glow`.

**O que vira utilitária no JSX**: `.wrap`, `.sec`, `.sec-head`, `.grad`, `.eyebrow`, `.kicker`, e os layouts de grid.

**O que continua CSS** — e aqui é onde não vale forçar Tailwind:

- `@keyframes` e as animações contínuas: `btn-shine`, `btn-border-spin` (com `@property --btn-angle`), `mock-fill`, `spin`, o pulso do WhatsApp
- `.prose` (quando o blog chegar) — tipografia de artigo é CSS, não utilitária
- Os gradientes cônicos com `mask-composite` da borda animada
- `.bg-fx` e as camadas decorativas da hero

Tailwind 4 aceita `@utility` e `@layer components` para isso; classes utilitárias arbitrárias com `[...]` até fariam, mas ficariam ilegíveis. **A meta não é zerar o CSS — é ter um sistema só.**

**Ponto de atenção:** `site.css:50` tem `a { color: inherit; text-decoration: none; }` global. O Preflight do Tailwind já zera link por padrão, então essa regra sai — mas conferir que nenhum link do site dependia dela.

---

## Ordem e esforço

| # | | Esforço | Portão |
|---|---|---|---|
| 1 | Deletar código morto + 6 dependências | 1 h | build verde, `/` e `/contato` iguais |
| 2 | Reescrever `/contato` sem styled-components; remover a dep | 2 h | zero ocorrência de `styled-components` |
| 3 | Next 15.5 + React 19 + framer-motion 13, ainda em Pages | 2–4 h | **build verde, animações rodando** |
| 4 | Tailwind 4 + inversão claro/escuro + aliases + `shadcn init` | 2 h | Tailwind e `site.css` convivendo |
| 5 | App Router: layout, metadata, `/contato`, `/api/contato`, `/` | 4–6 h | as 3 rotas iguais às de antes |
| 6 | Portar `site.css` → tokens + utilitárias | 4–6 h | **diff visual zero** |
| 7 | `sitemap.ts`, `robots.ts`, deletar `src/pages/` | 1 h | |
| 8 | shadcn no formulário (Form + zod + Sonner) e no menu mobile (Sheet) | 3 h | |

**≈ 20–25 h.** Cada passo é um commit revisável; os passos 3 e 6 são os que mais merecem revisão com calma.

---

## Verificação

**Não há testes, lint nem CI neste repo.** A migração não tem rede de segurança automática, e é o maior risco do projeto — a verificação precisa ser deliberada.

**Antes de começar:** capturar a referência visual com o site atual rodando — `/` e `/contato`, nos dois temas, em 1440px / 768px / 390px. **12 imagens.** É contra elas que "port fiel" vai ser julgado no passo 6; sem isso, a comparação vira memória.

Depois de cada passo:

```bash
npx tsc --noEmit && npm run build
```

**Passo 1** — `grep -rn "three\|react-slick\|react-scroll\|react-ga" src/` sem resultado; build verde.

**Passo 2** — `grep -rn "styled-components" src/` sem resultado; `/contato` idêntica à referência; os links de WhatsApp e compartilhar funcionando.

**Passo 3** — o mais delicado. Percorrer a landing inteira: carrossel de mockups trocando, brilho do "Ver mais trabalhos", borda girando no "Conhecer os planos", menu mobile abrindo, tema alternando, formulário enviando de verdade (chega e-mail).

**Passo 5** — as 3 rotas respondem; `POST /api/contato` envia e outro método devolve 405; no HTML servido, `<html lang="pt-BR">`, um `<title>` só, um `og:title` só, favicon absoluto:

```bash
curl -s localhost:3000/ | grep -o 'property="og:title"' | wc -l   # 1
curl -s localhost:3000/ | grep -o 'lang="pt-BR"'        | wc -l   # 1
```

**Passo 6** — comparar contra as 12 imagens de referência, **nos dois temas**. É o teste de aceite do "port fiel".

**Fim** — Lighthouse em `/` antes e depois: performance e acessibilidade não podem cair. Deploy num preview da Vercel antes de encostar em produção.

---

## Riscos

| Risco | Mitigação |
|---|---|
| Trocar router e versão do React juntos | Passos 3 e 5 separados, com portão entre eles |
| styled-components v5 quebra no React 19 | Passo 2 vem **antes** do passo 3; não é opcional |
| Cor no `@theme` em vez de `@theme inline` → modo claro morre calado | Toda cor de tema passa por `@theme inline`; conferir os dois temas a cada bloco |
| Regressão visual sem ninguém notar | As 12 capturas de referência, feitas **antes** de começar |
| framer-motion 7 → 13 muda comportamento sutil | Passo 3 isolado; conferir cada animação uma a uma |
| `npm install` puxa Next 16 pelo `"latest"` | Pinar exato e conferir a versão após cada install |
| Sem CI, uma regressão chega em produção | Preview da Vercel antes de promover |

---

## Efeito sobre o plano do blog

O `docs/blog.md` foi escrito para o Pages Router. Depois desta migração, boa parte dele **melhora ou desaparece**:

| No plano atual | Depois da migração |
|---|---|
| Componente `<Seo>` + estratégia de `key` para não duplicar | **Some.** Metadata API resolve |
| Análise do `_document` e das tags congeladas | **Some.** Não existe mais `_document` |
| `scripts/generate-sitemap.mjs` + `postbuild` | Vira `app/sitemap.ts` |
| `public/robots.txt` estático | Vira `app/robots.ts` |
| `next-mdx-remote@4.4.1` + as 3 saídas de ESM | `next-mdx-remote@6` (`/rsc`) ou `@next/mdx`, sem a ginástica |
| `getStaticProps` / `getStaticPaths` / `fallback: false` | `generateStaticParams` + Server Component `async` |
| Sem imagem OG dinâmica (exige 13.3+) | `@vercel/og` liberado |
| Os 3 bugs do `_document` | Corrigidos como efeito colateral do passo 5 |

**Recomendação: migrar primeiro, blog depois.** Construir o blog no Pages Router hoje significa escrever a camada de SEO duas vezes — e é justamente a parte mais delicada do plano do blog.

O que continua valendo do `docs/blog.md`, sem alteração: o contrato de frontmatter, a armadilha da data sem aspas, os slugs, a estratégia de conteúdo e os critérios de verificação de SEO. **Quando esta migração terminar, o `docs/blog.md` precisa ser revisado** — as seções de SEO, sitemap e pipeline ficam desatualizadas.
