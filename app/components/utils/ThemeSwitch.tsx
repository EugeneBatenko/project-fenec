import { useThemeContext } from "@/app/context/theme.context";

export const ThemeSwitch = () => {
  // @ts-ignore
    const [theme, setTheme] = useThemeContext();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "dark" : "light")}>
      Toggle theme
    </button>
  );
};
