import { useEffect, useCallback, useRef } from "react";

export const usePerformance = () => {
  const performanceRef = useRef({
    themeSwitch: [],
    renderTimes: [],
    memoryUsage: [],
  });

  // Monitor theme switch performance
  const measureThemeSwitch = useCallback((startTime) => {
    const endTime = performance.now();
    const duration = endTime - startTime;

    performanceRef.current.themeSwitch.push({
      duration,
      timestamp: Date.now(),
    });

    // Keep only last 10 measurements
    if (performanceRef.current.themeSwitch.length > 10) {
      performanceRef.current.themeSwitch.shift();
    }

    // Log slow theme switches in development
    if (import.meta.env.DEV && duration > 100) {
      console.warn(`Slow theme switch detected: ${duration.toFixed(2)}ms`);
    }

    return duration;
  }, []);

  // Monitor component render performance
  const measureRender = useCallback((componentName, renderTime) => {
    performanceRef.current.renderTimes.push({
      component: componentName,
      duration: renderTime,
      timestamp: Date.now(),
    });

    // Keep only last 20 measurements
    if (performanceRef.current.renderTimes.length > 20) {
      performanceRef.current.renderTimes.shift();
    }
  }, []);

  // Monitor memory usage (if available)
  const measureMemory = useCallback(() => {
    if ("memory" in performance) {
      const memInfo = {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
        timestamp: Date.now(),
      };

      performanceRef.current.memoryUsage.push(memInfo);

      // Keep only last 5 measurements
      if (performanceRef.current.memoryUsage.length > 5) {
        performanceRef.current.memoryUsage.shift();
      }

      return memInfo;
    }
    return null;
  }, []);

  // Get performance stats
  const getStats = useCallback(() => {
    const themeStats = performanceRef.current.themeSwitch;
    const renderStats = performanceRef.current.renderTimes;

    return {
      themeSwitch: {
        average:
          themeStats.length > 0
            ? themeStats.reduce((sum, stat) => sum + stat.duration, 0) /
              themeStats.length
            : 0,
        count: themeStats.length,
        latest: themeStats[themeStats.length - 1]?.duration || 0,
      },
      renders: {
        count: renderStats.length,
        slowest:
          renderStats.length > 0
            ? Math.max(...renderStats.map((stat) => stat.duration))
            : 0,
        average:
          renderStats.length > 0
            ? renderStats.reduce((sum, stat) => sum + stat.duration, 0) /
              renderStats.length
            : 0,
      },
      memory:
        performanceRef.current.memoryUsage[
          performanceRef.current.memoryUsage.length - 1
        ] || null,
    };
  }, []);

  // Performance optimization utilities
  const optimizeForTheme = useCallback(() => {
    // Force garbage collection if available (development only)
    if (import.meta.env.DEV && window.gc) {
      window.gc();
    }

    // Optimize CSS custom properties for better performance
    requestAnimationFrame(() => {
      document.documentElement.style.willChange = "color-scheme";

      setTimeout(() => {
        document.documentElement.style.willChange = "auto";
      }, 500);
    });
  }, []);

  // Debounced performance measurement
  const debounceRef = useRef();
  const debouncedMeasure = useCallback((callback, delay = 100) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(callback, delay);
  }, []);

  // Monitor long tasks
  useEffect(() => {
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ["longtask"] });
      } catch {
        // PerformanceObserver not supported in this environment
      }

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return {
    measureThemeSwitch,
    measureRender,
    measureMemory,
    getStats,
    optimizeForTheme,
    debouncedMeasure,
  };
};

export default usePerformance;
