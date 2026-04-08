import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AdvancedCarousel from "@/components/AdvancedCarousel";
import AdmissionGraphics from "@/components/AdmissionGraphics";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import Admissions from "@/components/Admissions";
import StudentLife from "@/components/StudentLife";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  // Carousel data
  const carouselItems = [
    {
      id: "science-lab-1",
      image: "/images/WhatsApp Image 2025-09-04 at 11.43.01 (2).jpeg",
      title: "State-of-the-Art Science Labs",
      description: "Fully equipped laboratories where students conduct hands-on experiments and discover the wonders of science.",
      category: "Facilities"
    },
    {
      id: "science-lab-2",
      image: "/images/WhatsApp Image 2025-09-04 at 11.43.00.jpeg",
      title: "Hands-on Laboratory Learning",
      description: "Students actively engaged in practical laboratory experiments, developing critical thinking and scientific skills.",
      category: "Science"
    },
    {
      id: "collaborative-learning",
      image: "/images/WhatsApp Image 2025-09-04 at 08.58.31.jpeg",
      title: "Collaborative Learning",
      description: "Students working together in study groups, fostering peer-to-peer learning and teamwork skills.",
      category: "Academics"
    },
    {
      id: "microscopy-studies",
      image: "/images/WhatsApp Image 2025-09-04 at 11.42.59 (1).jpeg",
      title: "Advanced Microscopy Studies",
      description: "Professional-grade equipment enabling students to explore the microscopic world and develop scientific inquiry skills.",
      category: "Science"
    },
    {
      id: "student-groups",
      image: "/images/WhatsApp Image 2025-09-04 at 11.02.55.jpeg",
      title: "Study Groups & Teamwork",
      description: "Organized study groups that promote collaborative learning and help students develop essential teamwork skills.",
      category: "Academics"
    },
    {
      id: "admission-ongoing",
      image: "/images/WhatsApp Image 2025-09-05 at 15.11.21.jpeg",
      title: "Admission Ongoing",
      description: "Join our comprehensive educational programs including Nursery, Primary, and College levels with world-class facilities.",
      category: "Admissions"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Springbase Schools Lagos - Excellence in Education"
        description="Springbase Schools Lagos offers comprehensive education from Nursery to College levels. Join our vibrant community with state-of-the-art facilities, experienced teachers, and proven academic excellence. Admission ongoing!"
        keywords="Springbase Schools, Lagos schools, private school Lagos, nursery school, primary school, college Lagos, Cambridge IGCSE, BECE, SSCE, NECO, education Nigeria, best schools Lagos, admission ongoing"
        url="/"
        image="/images/WhatsApp Image 2025-09-05 at 15.11.21.jpeg"
        googleSiteVerification={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION}
        bingSiteVerification={import.meta.env.VITE_BING_SITE_VERIFICATION}
      />
      <Navigation />
      <Hero />
      <About />
      
      {/* Advanced Carousel Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
              Discover <span className="text-sage">Springbase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our vibrant campus life, world-class facilities, and the amazing experiences that make Springbase Schools the perfect choice for your child's education.
            </p>
          </div>
          
          <AdvancedCarousel 
            items={carouselItems}
            autoPlay={true}
            autoPlayInterval={6000}
            showControls={true}
            showIndicators={true}
            showThumbnails={true}
          />
        </div>
      </section>
      
      <AdmissionGraphics />
      <Programs />
      <Facilities />
      <Admissions />
      <StudentLife />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
