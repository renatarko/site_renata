import React from "react";

export const useDarkTheme = () => {
  const [theme, setTheme] = React.useState("");

  React.useEffect(() => {
    const _theme = localStorage.getItem("@renata/theme");
    if (_theme) {
      localStorage.setItem("@renata/theme", _theme);
      setTheme(_theme);
      return;
    }

    localStorage.setItem("@renata/theme", "light");
    setTheme("light");
  }, []);

  const toggleTheme = () => {
    const _theme = localStorage.getItem("@renata/theme");

    if (_theme) {
      const newTheme = _theme === "dark" ? "light" : "dark";
      localStorage.setItem("@renata/theme", newTheme);
      setTheme(newTheme);
    }
  };

  return { theme, toggleTheme };
};
