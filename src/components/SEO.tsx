import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const SEO = ({
  title = "Springbase Schools Lagos - Excellence in Education",
  description = "Springbase Schools Lagos offers comprehensive education from Nursery to College levels. Join our vibrant community with state-of-the-art facilities, experienced teachers, and proven academic excellence. Admission ongoing!",
  keywords = "Springbase Schools, Lagos schools, private school Lagos, nursery school, primary school, college Lagos, Cambridge IGCSE, BECE, SSCE, NECO, education Nigeria, best schools Lagos, Okota schools, Ago Palace Way, admission ongoing, quality education, academic excellence, student life, facilities, admissions process, school tour, parent portal, student portal",
  image = "/images/WhatsApp Image 2025-09-05 at 15.11.21.jpeg",
  url = "https://www.springbase.com.ng",
  type = "website",
  author = "Springbase Schools Lagos",
  publishedTime,
  modifiedTime,
  section,
  tags = ["education", "school", "Lagos", "Nigeria", "academic excellence"],
  noindex = false,
  nofollow = false,
  canonical
}: SEOProps) => {
  const fullTitle = title.includes("Springbase Schools") ? title : `${title} | Springbase Schools Lagos`;
  const fullUrl = url.startsWith('http') ? url : `https://www.springbase.com.ng${url}`;
  const fullImage = image.startsWith('http') ? image : `https://www.springbase.com.ng${image}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Springbase Schools Lagos" />
      <meta property="og:locale" content="en_NG" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@springbaseschools" />
      <meta name="twitter:creator" content="@springbaseschools" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#10B981" />
      <meta name="msapplication-TileColor" content="#10B981" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Springbase Schools" />
      
      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && section && (
        <meta property="article:section" content={section} />
      )}
      {type === "article" && tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Springbase Schools Lagos",
          "alternateName": "Springbase Schools",
          "url": "https://www.springbase.com.ng",
          "logo": "https://www.springbase.com.ng/images/springbase-logo.png",
          "image": fullImage,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "9 & 21, Canal View Drive, Off Ago Palace Way, By Community Road",
            "addressLocality": "Openua, Ago, Okota",
            "addressRegion": "Lagos",
            "addressCountry": "NG"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+234-802-328-1221",
              "contactType": "Admissions",
              "availableLanguage": "English"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+234-802-072-5415",
              "contactType": "General Inquiry",
              "availableLanguage": "English"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+234-916-261-5797",
              "contactType": "General Inquiry",
              "availableLanguage": "English"
            }
          ],
          "email": ["springbasecollege@gmail.com", "info@springbase.com"],
          "foundingDate": "2010",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Educational Programs",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Nursery Education",
                  "description": "Early childhood development with play-based learning for ages 2-5"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Primary Education",
                  "description": "Foundation education with core subjects for ages 6-11"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "College Education",
                  "description": "Advanced education preparing students for university for ages 12-18"
                }
              }
            ]
          },
          "sameAs": [
            "https://www.facebook.com/springbaseschools",
            "https://www.instagram.com/springbaseschools",
            "https://www.twitter.com/springbaseschools"
          ]
        })}
      </script>
      
      {/* Structured Data - Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.springbase.com.ng"
            }
          ]
        })}
      </script>
      
      {/* Google Analytics Page Tracking */}
      <script>
        {typeof window !== 'undefined' && (window as any).gtag && `
          gtag('config', 'G-TXJ86GPW1L', {
            page_title: '${fullTitle}',
            page_location: '${fullUrl}'
          });
        `}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#10B981" />
      <meta name="msapplication-TileColor" content="#10B981" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Springbase Schools" />
    </Helmet>
  );
};

export default SEO;
