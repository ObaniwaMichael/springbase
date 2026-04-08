import PageLayout from "@/components/PageLayout";
import PlaceholderSection from "@/components/PlaceholderSection";
import Programs from "@/components/Programs";
import ImageGallery from "@/components/ImageGallery";
import Img0044 from "@/assets/IMG-20250811-WA0044.jpg";
import SEO from "@/components/SEO";

const ProgramsPage = () => {
  return (
    <>
      <SEO
        title="Academic Programs | Springbase Schools Lagos"
        description="Explore Springbase Schools Lagos academic programs across Nursery, Primary, and College levels, plus enrichment and special tracks."
        url="/programs"
      />
      <PageLayout title="Academic Programs" subtitle="Explore curricula across all grades and special tracks.">
        <div className="space-y-12">
          <Programs />
        
          {/* Early Years Gallery - Highlighted */}
          <div className="bg-gradient-to-br from-sage/5 to-lotus/5 py-8 rounded-3xl">
            <ImageGallery 
              title="Early Years Learning" 
              description="Montessori activities and foundational learning experiences"
              images={[Img0044]}
              columns={2}
              aspectRatio="square"
            />
          </div>
        
          {/* Other Program Galleries */}
          <div className="space-y-8">
            <ImageGallery 
              title="Primary Education" 
              description="Students engaged in core subjects and enrichment activities"
              images={[]}
              columns={3}
              aspectRatio="video"
            />
          
            <ImageGallery 
              title="Secondary Education" 
              description="Advanced learning environments and specialized programs"
              images={[]}
              columns={2}
              aspectRatio="square"
            />
          </div>
        
          {/* Additional Sections */}
          <div className="space-y-6">
            <PlaceholderSection heading="Early Years" description="Overview of foundational learning for early years." />
            <PlaceholderSection heading="Primary" description="Core subjects, assessment, and enrichment for primary levels." />
            <PlaceholderSection heading="Secondary" description="Subject pathways, electives, and exam preparation." />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ProgramsPage;


