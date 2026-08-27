"use client";

import { ThemeProvider as NextThemes } from "next-themes";

/**
 * `storageKey` mantém "rk-theme", a mesma chave que o useTheme antigo usava,
 * para quem já visitou o site não perder a preferência salva.
 * O próprio next-themes injeta um script bloqueante que aplica a classe antes
 * da primeira pintura, o que elimina o flash escuro que existia no tema claro.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemes
			attribute="class"
			defaultTheme="dark"
			enableSystem={false}
			storageKey="rk-theme"
			disableTransitionOnChange
		>
			{children}
		</NextThemes>
	);
}
