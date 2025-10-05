import { Building, FlaskConical, Computer, TreePine, Utensils, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ImageModal from "@/components/ImageModal";
import { useNavigate } from "react-router-dom";

const Facilities = () => {
  const navigate = useNavigate();

  // Mapping facility cards to gallery sections
  const facilityToGalleryMap: Record<string, string> = {
    "Modern Classrooms": "classrooms",
    "Standard ICT Centre": "science-lab",
    "Science Laboratories": "science-lab", 
    "Technology Center": "science-lab",
    "Outdoor Learning Spaces": "campus-tour",
    "Dining Hall": "campus-tour",
    "Sick Bay": "campus-tour",
    "School Bus Service": "campus-tour",
    "Lunch Programme": "campus-tour",
    "Wellness Center": "campus-tour"
  };

  const handleCardClick = (facilityTitle: string) => {
    const gallerySection = facilityToGalleryMap[facilityTitle];
    if (gallerySection) {
      navigate(`/gallery?album=${gallerySection}`);
    }
  };

  const facilities = [
    {
      icon: <Building className="h-8 w-8 text-sage" />,
      title: "Modern Classrooms",
      description: "State-of-the-art learning spaces equipped with interactive technology and comfortable furniture designed for collaborative learning."
    },
    {
      icon: <Computer className="h-8 w-8 text-lotus" />,
      title: "Standard ICT Centre",
      description: "Up-to-date ICT lab for digital literacy, coding basics, and safe technology exploration."
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-lotus" />,
      title: "Science Laboratories",
      description: "Fully equipped labs for chemistry, biology, and physics experiments, fostering hands-on scientific discovery."
    },
    {
      icon: <Computer className="h-8 w-8 text-sage" />,
      title: "Technology Center",
      description: "Advanced computer labs with latest software and hardware, preparing students for the digital future."
    },
    {
      icon: <TreePine className="h-8 w-8 text-lotus" />,
      title: "Outdoor Learning Spaces",
      description: "Beautiful gardens and outdoor classrooms that connect students with nature and provide fresh-air learning opportunities."
    },
    {
      icon: <Utensils className="h-8 w-8 text-sage" />,
      title: "Dining Hall",
      description: "Spacious cafeteria serving nutritious, freshly prepared meals with options for various dietary requirements."
    },
    {
      icon: <Heart className="h-8 w-8 text-sage" />,
      title: "Sick Bay",
      description: "On‑site basic health bay for first‑aid and student wellness support."
    },
    {
      icon: <Building className="h-8 w-8 text-lotus" />,
      title: "School Bus Service",
      description: "Reliable school transport service with safety‑first routing and supervision."
    },
    {
      icon: <Utensils className="h-8 w-8 text-sage" />,
      title: "Lunch Programme",
      description: "Balanced meal programme available for learners during the school day."
    },
    {
      icon: <Heart className="h-8 w-8 text-lotus" />,
      title: "Wellness Center",
      description: "Dedicated space for student health services, counseling, and wellness programs promoting mental and physical well-being."
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            World-Class <span className="text-sage">Facilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our campus provides an inspiring environment where students can learn, grow, 
            and thrive in comfort and safety.
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <Card 
              key={index} 
              className="card-elegant bg-card border-0 text-center h-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-sage/20"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(facility.title)}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
                <div className="mt-4 text-sm text-sage font-medium">
                  Click to view gallery →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See All Facilities Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center px-8 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Facilities in Gallery
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h3 className="text-3xl font-heading font-bold text-charcoal mb-6">
              A Campus Designed for <span className="text-sage">Excellence</span>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Every aspect of our campus has been thoughtfully designed to support 
                student learning and well-being. From natural lighting in every classroom 
                to eco-friendly building materials, we've created an environment that 
                reflects our commitment to sustainability and student success.
              </p>
              <p className="leading-relaxed">
                Our facilities are regularly updated with the latest educational technology 
                and learning tools, ensuring that our students have access to the resources 
                they need to excel in their studies and prepare for their future careers.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage mb-2">25,000</div>
                <div className="text-sm text-muted-foreground">Square Feet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lotus mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="space-y-6">
              {/* Science Laboratory Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ImageModal
                  src="/images/WhatsApp Image 2025-09-04 at 11.43.01 (2).jpeg"
                  alt="Students in state-of-the-art science laboratory"
                  title="State-of-the-Art Science Laboratory"
                  description="Students conducting advanced science experiments in our modern, fully equipped laboratory with professional-grade equipment"
                  className="overflow-hidden rounded-xl"
                >
                  <img 
                    src="/images/WhatsApp Image 2025-09-04 at 11.43.01 (2).jpeg" 
                    alt="Students in state-of-the-art science laboratory" 
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                </ImageModal>
                
                <ImageModal
                  src="/images/WhatsApp Image 2025-09-04 at 11.43.00.jpeg"
                  alt="Students engaged in hands-on laboratory work"
                  title="Hands-on Laboratory Learning"
                  description="Students actively engaged in practical laboratory experiments, developing critical thinking and scientific skills"
                  className="overflow-hidden rounded-xl"
                >
                  <img 
                    src="/images/WhatsApp Image 2025-09-04 at 11.43.00.jpeg" 
                    alt="Students engaged in hands-on laboratory work" 
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                </ImageModal>
              </div>
              
              {/* Virtual Tour Section */}
              <div className="relative">
                <div 
                  className="aspect-video rounded-2xl bg-gradient-to-br from-sage/20 to-lotus/20 p-6 card-elegant cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-sage/30 hover:to-lotus/30"
                  onClick={() => navigate('/gallery?album=campus-tour')}
                >
                  <div className="h-full rounded-xl bg-card flex items-center justify-center">
                    <div className="text-center">
                      <Building className="h-16 w-16 text-sage mx-auto mb-4" />
                      <h4 className="text-2xl font-heading font-bold text-charcoal mb-2">
                        Take a Virtual Tour
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        Explore our beautiful campus from anywhere
                      </p>
                      <div className="inline-flex items-center text-sage font-medium text-sm">
                        View Campus Images
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-lotus/20 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-sage/20 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;