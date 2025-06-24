import { memo, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import usePerformance from "@/hooks/usePerformance";

const ThemePerformanceOptimizer = memo(() => {
  const { theme, isDarkMode } = useTheme();
  const { measureThemeSwitch, optimizeForTheme, debouncedMeasure } =
    usePerformance();
  const themeStartTime = useRef(null);
  const isInitialMount = useRef(true);

  // Preload theme-specific resources
  useEffect(() => {
    const preloadThemeResources = () => {
      // Preload critical CSS for theme switching
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "style";
      link.href = "data:text/css,"; // Empty CSS to trigger browser optimization
      document.head.appendChild(link);

      // Optimize CSS custom properties
      const root = document.documentElement;
      root.style.setProperty(
        "--theme-transition",
        "color 0.3s ease, background-color 0.3s ease"
      );

      // Remove after initialization
      setTimeout(() => {
        document.head.removeChild(link);
      }, 1000);
    };

    if (isInitialMount.current) {
      preloadThemeResources();
      isInitialMount.current = false;
    }
  }, []);

  // Monitor theme switch performance
  useEffect(() => {
    if (themeStartTime.current) {
      const duration = measureThemeSwitch(themeStartTime.current);

      // Log performance in development
      if (import.meta.env.DEV) {
        console.log(
          `Theme switch to ${theme} completed in ${duration.toFixed(2)}ms`
        );
      }

      themeStartTime.current = null;
    }
  }, [theme, measureThemeSwitch]);

  // Optimize theme transitions
  useEffect(() => {
    themeStartTime.current = performance.now();

    debouncedMeasure(() => {
      optimizeForTheme();

      // Update meta tags for theme
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      const newColor = isDarkMode ? "#0f172a" : "#ffffff";

      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", newColor);
      }

      // Update meta description for better SEO
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription && !metaDescription.content.includes("gaming")) {
        metaDescription.content = `Midzilla Gaming E-commerce - ${
          isDarkMode ? "Dark" : "Light"
        } Mode | Premium Gaming Experience`;
      }

      // Optimize images for theme
      const images = document.querySelectorAll("img[data-theme-optimize]");
      images.forEach((img) => {
        if (img.dataset.themeOptimize === "true") {
          img.style.filter = isDarkMode
            ? "brightness(0.9) contrast(1.1)"
            : "brightness(1) contrast(1)";
        }
      });

      // Optimize video elements for theme
      const videos = document.querySelectorAll("video[data-theme-optimize]");
      videos.forEach((video) => {
        if (video.dataset.themeOptimize === "true") {
          video.style.filter = isDarkMode
            ? "brightness(0.8) contrast(1.2)"
            : "brightness(1) contrast(1)";
        }
      });

      // Update favicon based on theme
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        // You can add different favicons for light/dark themes
        const faviconPath = isDarkMode
          ? "/favicon-dark.ico"
          : "/favicon-light.ico";

        // Only update if the specific theme favicons exist
        const testImg = new Image();
        testImg.onload = () => {
          favicon.href = faviconPath;
        };
        testImg.onerror = () => {
          // Keep default favicon if theme-specific ones don't exist
        };
        testImg.src = faviconPath;
      }

      // Dispatch custom event for theme change
      window.dispatchEvent(
        new CustomEvent("themeChanged", {
          detail: { theme, isDarkMode },
        })
      );
    }, 50);
  }, [theme, isDarkMode, optimizeForTheme, debouncedMeasure]);

  // Optimize scroll performance for theme
  useEffect(() => {
    const optimizeScrolling = () => {
      const scrollElements = document.querySelectorAll(
        "[data-scroll-optimize]"
      );
      scrollElements.forEach((element) => {
        element.style.willChange = "transform";
        element.style.transform = "translateZ(0)"; // Force GPU acceleration
      });
    };

    optimizeScrolling();

    // Clean up after theme transition
    const cleanup = setTimeout(() => {
      const scrollElements = document.querySelectorAll(
        "[data-scroll-optimize]"
      );
      scrollElements.forEach((element) => {
        element.style.willChange = "auto";
      });
    }, 1000);

    return () => clearTimeout(cleanup);
  }, [theme]);

  // Memory optimization for theme assets
  useEffect(() => {
    const optimizeMemory = () => {
      // Clear unused CSS variables
      const root = document.documentElement;
      const unusedVars = [
        "--old-theme-color",
        "--deprecated-bg",
        "--legacy-text",
      ];

      unusedVars.forEach((varName) => {
        root.style.removeProperty(varName);
      });

      // Optimize CSS custom properties for current theme
      const themeVars = isDarkMode
        ? {
            "--current-bg": "var(--bg-primary)",
            "--current-text": "var(--text-primary)",
            "--current-surface": "var(--surface-primary)",
          }
        : {
            "--current-bg": "var(--bg-primary)",
            "--current-text": "var(--text-primary)",
            "--current-surface": "var(--surface-primary)",
          };

      Object.entries(themeVars).forEach(([prop, value]) => {
        root.style.setProperty(prop, value);
      });
    };

    const memoryOptimization = setTimeout(optimizeMemory, 100);
    return () => clearTimeout(memoryOptimization);
  }, [isDarkMode]);

  // Add performance monitoring in development
  useEffect(() => {
    if (import.meta.env.DEV) {
      const logPerformance = () => {
        const paintEntries = performance.getEntriesByType("paint");
        const navigationEntries = performance.getEntriesByType("navigation");

        console.group("🎨 Theme Performance Metrics");
        console.log(`Current theme: ${theme}`);
        console.log("Paint entries:", paintEntries);
        console.log("Navigation entries:", navigationEntries);
        console.groupEnd();
      };

      const performanceLog = setTimeout(logPerformance, 500);
      return () => clearTimeout(performanceLog);
    }
  }, [theme]);

  // This component doesn't render anything visible
  return null;
});

ThemePerformanceOptimizer.displayName = "ThemePerformanceOptimizer";

export default ThemePerformanceOptimizer;
