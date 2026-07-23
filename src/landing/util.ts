// Entrance guard: when the page is rendered in a hidden/background context
// (screenshot capture, print, PDF), requestAnimationFrame never fires, so a
// Framer-Motion `initial` hidden state would get stuck and show blank. In that
// case we skip the hidden initial and render the visible end-state directly.
// A real, focused tab returns the hidden value, so animations play normally.
export function entr<T>(hiddenState: T): T | false {
	return typeof document !== "undefined" && document.hidden ? false : hiddenState;
}
