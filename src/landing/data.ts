// site content for the landing page (ported from the Claude Design project)

export interface Stat {
	num: string;
	lbl: string;
}

export interface Project {
	title: string;
	cat: string;
	catLabel: string;
	desc: string;
	tags: string[];
	hue: number;
	image: string;
	link: string;
}

export interface Tech {
	name: string;
	abbr: string;
	color: string;
	lvl: string;
}

export interface StackGroup {
	group: string;
	items: Tech[];
}

export interface Social {
	k: string;
	v: string;
	href?: string;
}

export interface Plan {
	id: string;
	name: string;
	badge: string;
	/** the pricier plan gets the accent treatment on the card */
	featured: boolean;
	price: string;
	note: string;
	/** shown above the list when the plan builds on the cheaper one */
	inherits?: string;
	features: string[];
	cta: string;
}

export interface SiteData {
	name: string;
	brand: string;
	role: string;
	email: string;
	stats: Stat[];
	about: string[];
	aboutTags: string[];
	filters: string[];
	projects: Project[];
	stack: StackGroup[];
	plans: Plan[];
	socials: Social[];
}

const SITE: SiteData = {
	name: "Renata Karolina",
	brand: "renata",
	role: "Desenvolvedora Web",
	email: "renatakarolinarko@gmail.com",

	stats: [
		{ num: "12+", lbl: "projetos no ar" },
		{ num: "4 anos", lbl: "de experiência" },
		{ num: "100%", lbl: "código próprio" },
	],

	about: [
		"Oi! Eu sou a **Renata** — desenvolvedora web apaixonada por transformar ideias soltas em produtos digitais que funcionam de verdade (e bonitos, de quebra).",
		"Trabalho ponta a ponta: desenho a interface no **Figma**, codo o front em **React + Next.js** com **TypeScript**, conecto banco de dados e integrações, e entrego um site rápido, acessível e fácil de manter.",
		"Sem termo técnico desnecessário, sem prazo furado. Eu cuido da parte chata pra você focar no seu negócio.",
	],
	aboutTags: [
		"UI/UX no Figma",
		"Front-end moderno",
		"APIs & Integrações",
		"Performance & SEO",
		"Acessibilidade",
	],

	filters: ["Tudo", "Landing Pages", "Sites & Blog", "Sistemas", "Design / Figma"],
	projects: [
		{
			title: "Professor de Música",
			cat: "Landing Pages",
			catLabel: "Landing Page",
			desc: "Site de captação de alunos com agenda de aulas, depoimentos e player de demonstração. Foco em conversão.",
			tags: ["Next.js", "Tailwind", "SEO"],
			hue: 265,
			image: "/projects/lp-romualdo.png",
			link: "https://www.romualdocosta.com/"
		},
		{
			title: "Psicóloga · Institucional + Blog",
			cat: "Sites & Blog",
			catLabel: "Site + Blog",
			desc: "Presença profissional com blog próprio para artigos, CMS simples de editar e formulário de agendamento.",
			tags: ["Next.js", "CMS", "Blog"],
			hue: 230,
			image: "/projects/site-ana.png",
			link: 'https://www.draanaoliveira.com/'

		},
		{
			title: "Loja de Cosméticos",
			cat: "Landing Pages",
			catLabel: "Landing Page",
			desc: "Landing de lançamento de produto com seções animadas, prova social e figma",
			tags: ["React", "Animações", "Figma"],
			hue: 320,
			image: "/projects/lp-maxiline.png",
			link: "https://www.maxilinems.com.br/"
		},
		{
			title: "iTOP - Gestão de Eventos + Inscrições",
			cat: "Sistemas",
			catLabel: "Sistema · sócia",
			desc: "Plataforma completa de gerenciamento de eventos com venda de inscrições, painel admin e relatórios. Projeto como sócia-proprietária.",
			tags: ["TypeScript", "MongoDB", "Pagamentos"],
			hue: 200,
			image: '/projects/itop.png',
			link: "https://www.inscricoestop.com.br/"
		},
				{
			title: "OwnBlog - Plataforma para Blog",
			cat: "Sistemas",
			catLabel: "Sistema · proprietária",
			desc: "Plataforma completa para gerenciamento de blog, com painel admin, editor de posts, agendamento e postagem automática com integração com banco de dados. Projeto pessoal.",
			tags: ["TypeScript", "MongoDB", "Next.js", "SEO"],
			hue: 200,
			image: '/projects/ownblog.png',
			link: "https://ownblog-pro.vercel.app/"
		},
	],

	stack: [
		{
			group: "Front-end",
			items: [
				{ name: "React", abbr: "Re", color: "#61dafb", lvl: "Avançado" },
				{ name: "TypeScript", abbr: "TS", color: "#3178c6", lvl: "Avançado" },
				{ name: "Next.js", abbr: "N", color: "#94a3b8", lvl: "Avançado" },
				{ name: "Tailwind CSS", abbr: "Tw", color: "#38bdf8", lvl: "Avançado" },
			],
		},
		{
			group: "Back-end & Dados",
			items: [
				{ name: "Node.js", abbr: "No", color: "#3c873a", lvl: "Sólido" },
				{ name: "PostgreSQL", abbr: "Pg", color: "#4169e1", lvl: "Sólido" },
				{ name: "APIs & Integrações", abbr: "{}", color: "#a78bfa", lvl: "Sólido" },
			],
		},
		{
			group: "Design & Produto",
			items: [
				{ name: "Figma", abbr: "Fi", color: "#f24e1e", lvl: "Avançado" },
				{ name: "UI/UX Design", abbr: "Ux", color: "#ff7eb6", lvl: "Avançado" },
				{ name: "Prototipagem", abbr: "Pr", color: "#a78bfa", lvl: "Sólido" },
			],
		},
	],

	plans: [
		{
			id: "landing",
			name: "Landing Page",
			badge: "Para começar",
			featured: false,
			price: "R$120",
			note: "Contrato de 12 meses · página única",
			features: [
				"Página única com design 100% próprio (nada de template)",
				"Layout no Figma aprovado por você antes de codar",
				"Seções pensadas para converter: oferta, provas e chamada final",
				"Formulário de contato ou botão direto no WhatsApp",
				"Otimizada para Google (SEO) e celular",
				"Hospedagem, domínio e manutenção inclusos",
				"Suporte e pequenos ajustes durante todo o contrato",
			],
			cta: "Quero minha landing →",
		},
		{
			id: "site",
			name: "Site Completo",
			badge: "★ Mais completo",
			featured: true,
			price: "R$240",
			note: "Contrato de 12 meses · site institucional, blog ou e-commerce",
			inherits: "Tudo da Landing Page, e mais:",
			features: [
				"Várias páginas (institucional, serviços, sobre, contato)",
				"Blog próprio, fácil de atualizar sozinha(o)",
				"Loja virtual com catálogo e pagamento online",
				"Painel simples para editar textos e imagens sem depender de mim",
				"Integrações: WhatsApp, e-mail marketing e analytics",
			],
			cta: "Quero meu site →",
		},
	],

	socials: [
		{ k: "E-mail", v: "renatakarolinarko@gmail.com", href: "mailto:renatakarolinarko@gmail.com" },
		{
			k: "LinkedIn",
			v: "/in/renata-karolina",
			href: "https://www.linkedin.com/in/renata-karolina-de-oliveira-rko/",
		},
		{ k: "GitHub", v: "@renatarko", href: "https://github.com/renatarko" },
		{ k: "Instagram", v: "@renata_rko", href: "https://instagram.com/renata_rko" },
		{ k: "Twitter / X", v: "@renatarko_", href: "https://twitter.com/renatarko_" },
	],
};

export default SITE;
