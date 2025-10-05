import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 h-10 w-10 md:h-12 md:w-12 rounded-full bg-sage hover:bg-sage/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-4 w-4 md:h-6 md:w-6 text-white" />
    </Button>
  );
};

export default ScrollToTop;
