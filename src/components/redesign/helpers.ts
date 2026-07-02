// helpers compartilhados do redesign

export type Theme = "dark" | "light";

// Entrance guard: quando a página é renderizada em contexto oculto/background
// (captura de screenshot, print, PDF), o requestAnimationFrame não dispara, então
// um estado `initial` oculto do Framer-Motion ficaria travado e mostraria em branco.
// Nesse caso pulamos o estado oculto e renderizamos direto o estado final visível.
export function entr<T>(hiddenState: T): T | false {
	return typeof document !== "undefined" && document.hidden ? false : hiddenState;
}
