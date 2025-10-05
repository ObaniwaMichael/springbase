import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to console for debugging (remove in production)
        console.log(`${entry.name}: ${entry.value}`);
        
        // Send to analytics (implement your analytics service)
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: entry.name,
            value: Math.round(entry.value),
            event_category: 'Performance',
            event_label: entry.name,
            non_interaction: true,
          });
        }
      }
    });

    // Observe all performance entries
    observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      if (window.gtag) {
        window.gtag('event', 'page_load_time', {
          value: Math.round(loadTime),
          event_category: 'Performance',
          event_label: 'Page Load Time',
          non_interaction: true,
        });
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
