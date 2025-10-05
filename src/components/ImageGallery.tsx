import { Camera, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type GalleryImage = {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
};

type ImageGalleryProps = {
  title: string;
  description?: string;
  // Backwards compatible: accept either URLs or rich objects
  images: Array<string | GalleryImage>;
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "video" | "portrait";
};

const ImageGallery = ({ 
  title, 
  description, 
  images, 
  columns = 3, 
  aspectRatio = "square" 
}: ImageGalleryProps) => {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]"
  };

  if (images.length === 0) {
    return (
      <Card className="card-elegant bg-card border-0">
        <CardContent className="p-8">
          <div className="text-center">
            <Camera className="h-16 w-16 text-sage/30 mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">{title}</h3>
            {description && (
              <p className="text-muted-foreground mb-4">{description}</p>
            )}
            <p className="text-sm text-muted-foreground">
              No images available yet. Check back soon for updates!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toReadableAlt = (src: string) => {
    try {
      const file = src.split("/").pop() || src;
      const base = file.replace(/\.[^.]+$/, "");
      return base
        .replace(/[-_]+/g, " ")
        .replace(/\b(IMG|WA|JPEG|JPG|PNG)\b/gi, "")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (m) => m.toUpperCase());
    } catch {
      return title;
    }
  };

  const normalized: GalleryImage[] = images.map((item) =>
    typeof item === "string"
      ? { src: item, alt: `${title} — ${toReadableAlt(item)}` }
      : { ...item, alt: item.alt || `${title} — ${toReadableAlt(item.src)}` }
  );

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Card className="card-elegant bg-card border-0 shadow-lg">
      <CardContent className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sage/10 rounded-full mb-4">
            <Camera className="h-8 w-8 text-sage" />
          </div>
          <h3 className="text-3xl font-heading font-bold text-charcoal mb-3">{title}</h3>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Image Grid */}
        <div className={`grid ${gridCols[columns]} gap-6`}>
          {normalized.map((img, index) => (
            <div key={index} className="group cursor-zoom-in" onClick={() => openLightbox(index)}>
              <div className={`${aspectClasses[aspectRatio]} relative overflow-hidden rounded-xl bg-gray-100 shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]`}>
                <img 
                  src={img.src} 
                  alt={img.alt || `${title} image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Eye className="h-6 w-6 text-sage" />
                  </div>
                </div>

                {/* Image Number Badge */}
                <div className="absolute top-3 right-3 bg-sage text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                  {index + 1}
                </div>

                {/* Optional caption for SEO/accessibility */}
                {img.caption && (
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                    {img.caption}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium">
            <Camera className="h-4 w-4" />
            {normalized.length} {normalized.length === 1 ? 'Image' : 'Images'} • {aspectRatio} format
          </div>
        </div>
      </CardContent>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl bg-black/90 border-0 p-0">
          <DialogTitle className="sr-only">
            {title} - Image {activeIndex !== null ? activeIndex + 1 : ''}
          </DialogTitle>
          {activeIndex !== null && (
            <div className="relative w-full h-full p-2 sm:p-4">
              <img
                src={normalized[activeIndex].src}
                alt={normalized[activeIndex].alt || `${title} image ${activeIndex + 1}`}
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ImageGallery;
