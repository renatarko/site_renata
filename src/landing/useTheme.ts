import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

export function useTheme() {
	const [theme, setTheme] = useState<Theme>("dark");

	// Read the persisted preference on the client only (avoids SSR mismatch).
	useEffect(() => {
		try {
			const saved = localStorage.getItem("rk-theme") as Theme | null;
			if (saved === "dark" || saved === "light") setTheme(saved);
		} catch (e) {}
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		try {
			localStorage.setItem("rk-theme", theme);
		} catch (e) {}
	}, [theme]);

	const toggleTheme = useCallback(
		() => setTheme((t) => (t === "dark" ? "light" : "dark")),
		[]
	);

	return { theme, toggleTheme };
}
