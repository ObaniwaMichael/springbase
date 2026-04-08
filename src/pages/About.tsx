import PageLayout from "@/components/PageLayout";
import PlaceholderSection from "@/components/PlaceholderSection";
import About from "@/components/About";
import ImageGallery from "@/components/ImageGallery";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Springbase Schools Lagos"
        description="Learn about Springbase Schools Lagos—our mission, vision, values, and the people behind our commitment to academic excellence."
        url="/about"
      />
      <PageLayout title="About Springbase" subtitle="Learn more about our mission, vision, and values.">
        <div className="space-y-12">
          <About />
        
          {/* School History Gallery - Highlighted */}
          <div className="bg-gradient-to-br from-sage/5 to-lotus/5 py-8 rounded-3xl">
            <ImageGallery 
              title="School History & Milestones" 
              description="Historical photos and important moments in Springbase's journey"
              images={[]}
              columns={2}
              aspectRatio="square"
            />
          </div>
        
          {/* Other Galleries */}
          <div className="space-y-8">
            <ImageGallery 
              title="Leadership & Staff" 
              description="Meet our dedicated team of educators and administrators"
              images={[]}
              columns={3}
              aspectRatio="portrait"
            />
          
            <ImageGallery 
              title="Campus Overview" 
              description="Aerial and ground-level views of our beautiful campus"
              images={[]}
              columns={2}
              aspectRatio="video"
            />
          </div>
        
          {/* Additional Sections */}
          <div className="space-y-6">
            <PlaceholderSection heading="Leadership" description="Profiles of school leadership and governance." />
            <PlaceholderSection heading="History" description="A brief history and milestones of Springbase." />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default AboutPage;


