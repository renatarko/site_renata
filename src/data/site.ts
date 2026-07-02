// src/data/site.ts — conteúdo do site (mock; trocar por dados reais depois)

export type Stat = { num: string; lbl: string };

export type Project = {
	title: string;
	cat: string;
	catLabel: string;
	desc: string;
	tags: string[];
	hue: number;
};

export type Tech = { name: string; abbr: string; color: string; lvl: string };
export type StackGroup = { group: string; items: Tech[] };

export type SiteData = {
	name: string;
	brand: string;
	role: string;
	email: string;
	whatsapp: string;
	stats: Stat[];
	about: string[];
	aboutTags: string[];
	filters: string[];
	projects: Project[];
	stack: StackGroup[];
	planFeatures: string[];
};

export const SITE: SiteData = {
	name: "Renata Karolina",
	brand: "renata",
	role: "Desenvolvedora Web",
	email: "ola@renata.dev",
	whatsapp: "+55 11 99999-0000",

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
		},
		{
			title: "Psicóloga · Institucional + Blog",
			cat: "Sites & Blog",
			catLabel: "Site + Blog",
			desc: "Presença profissional com blog próprio para artigos, CMS simples de editar e formulário de agendamento.",
			tags: ["Next.js", "CMS", "Blog"],
			hue: 230,
		},
		{
			title: "Loja de Cosméticos",
			cat: "Landing Pages",
			catLabel: "Landing Page",
			desc: "Landing de lançamento de produto com seções animadas, prova social e checkout integrado.",
			tags: ["React", "Animações", "Checkout"],
			hue: 320,
		},
		{
			title: "Gestão de Eventos + Inscrições",
			cat: "Sistemas",
			catLabel: "Sistema · sócia",
			desc: "Plataforma completa de gerenciamento de eventos com venda de inscrições, painel admin e relatórios. Projeto como sócia-proprietária.",
			tags: ["TypeScript", "PostgreSQL", "Pagamentos"],
			hue: 200,
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

	planFeatures: [
		"Site ou landing page com design 100% próprio (nada de template)",
		"Layout no Figma aprovado por você antes de codar",
		"Blog opcional, fácil de atualizar sozinha(o)",
		"Otimizado para Google (SEO) e celular",
		"Hospedagem, domínio e manutenção inclusos",
		"Suporte e pequenos ajustes durante todo o contrato",
	],
};
