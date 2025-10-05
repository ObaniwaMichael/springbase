import { useState, useRef, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes = '100vw',
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-muted text-muted-foreground ${className}`}
        style={{ width, height }}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">📷</div>
          <div className="text-sm">Image unavailable</div>
        </div>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-muted"
          style={{ width, height }}
        >
          <LoadingSpinner size="md" text="Loading image..." />
        </div>
      )}
      
      {placeholder === 'blur' && blurDataURL && isLoading && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            width,
            height
          }}
        />
      )}

      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : 'auto'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
