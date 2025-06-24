import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme with system preference detection
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    // Detect system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  });

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      // Only update if user hasn't manually set a preference
      const storedTheme = localStorage.getItem("theme");
      if (!storedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  // Apply theme to document with performance optimization
  useEffect(() => {
    const applyTheme = () => {
      const root = document.documentElement;

      // Use requestAnimationFrame for smooth transitions
      requestAnimationFrame(() => {
        root.setAttribute("data-theme", theme);
        root.style.colorScheme = theme;

        // Update meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector(
          'meta[name="theme-color"]'
        );
        if (metaThemeColor) {
          metaThemeColor.setAttribute(
            "content",
            theme === "dark" ? "#121212" : "#ffffff"
          );
        } else {
          const meta = document.createElement("meta");
          meta.name = "theme-color";
          meta.content = theme === "dark" ? "#121212" : "#ffffff";
          document.head.appendChild(meta);
        }
      });

      // Store preference
      localStorage.setItem("theme", theme);
    };

    applyTheme();
  }, [theme]);

  // Memoized toggle function for performance
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  // Set specific theme
  const setSpecificTheme = useCallback((newTheme) => {
    if (newTheme === "light" || newTheme === "dark") {
      setTheme(newTheme);
    }
  }, []);

  // Reset to system preference
  const resetToSystemTheme = useCallback(() => {
    localStorage.removeItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  }, []);

  // Memoized computed values
  const themeValues = useMemo(
    () => ({
      theme,
      isDarkMode: theme === "dark",
      isLightMode: theme === "light",
      toggleTheme,
      setSpecificTheme,
      resetToSystemTheme,
      // Theme-specific values for components
      themeColors: {
        primary: theme === "dark" ? "#ffffff" : "#000000",
        secondary: theme === "dark" ? "#bbbbbb" : "#555555",
        background: theme === "dark" ? "#121212" : "#ffffff",
        surface: theme === "dark" ? "#1e293b" : "#ffffff",
        accent: "#62b52f",
        border: theme === "dark" ? "#334155" : "#e2e8f0",
        glass:
          theme === "dark"
            ? "rgba(42, 42, 42, 0.5)"
            : "rgba(255, 255, 255, 0.5)",
        glassBorder:
          theme === "dark"
            ? "rgba(68, 68, 68, 0.7)"
            : "rgba(255, 255, 255, 0.7)",
      },
    }),
    [theme, toggleTheme, setSpecificTheme, resetToSystemTheme]
  );

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
