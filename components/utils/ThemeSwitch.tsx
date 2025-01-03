import { useThemeContext } from "@/app/context/theme.context";

export const ThemeSwitch = () => {
  // @ts-expect-error temporary fix for eslint pass
    const [theme, setTheme] = useThemeContext();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "dark" : "light")}>
      Toggle theme
    </button>
  );
};
