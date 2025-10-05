import PageLayout from "@/components/PageLayout";
import PlaceholderSection from "@/components/PlaceholderSection";
import StudentLife from "@/components/StudentLife";
import ImageGallery from "@/components/ImageGallery";
import Celebr from "@/assets/celebr.jpg";
import Celebration from "@/assets/celebration.jpg";
import Celebration2 from "@/assets/celebration-2.jpg";
import Celebration4 from "@/assets/celebration-4.jpg";
import Celebration6 from "@/assets/celebration6.jpg";
import Celebration7 from "@/assets/celebration7.jpg";

const StudentLifePage = () => {
  return (
    <PageLayout title="Student Life" subtitle="Clubs, activities, and a vibrant community.">
      <div className="space-y-12">

        <StudentLife />
        
        {/* Student Activities & Events - Main Gallery */}
        <div className="bg-gradient-to-br from-sage/5 to-lotus/5 py-8 rounded-3xl">
          <ImageGallery 
            title="Student Activities & Events" 
            description="Capturing memorable moments from school events and celebrations"
            images={[Celebr, Celebration, Celebration2, Celebration4, Celebration6, Celebration7]}
            columns={3}
            aspectRatio="square"
          />
        </div>

        {/* Other Galleries */}
        <div className="space-y-8">
          <ImageGallery 
            title="Clubs & Extracurricular Activities" 
            description="Students engaged in various clubs and special programs"
            images={[]}
            columns={2}
            aspectRatio="portrait"
          />
          
          <ImageGallery 
            title="Sports & Athletics" 
            description="Students participating in sports and physical activities"
            images={[]}
            columns={2}
            aspectRatio="video"
          />
        </div>

        {/* Additional Sections */}
        <div className="space-y-6">
          <PlaceholderSection heading="Clubs & Societies" description="Student-led organizations and interest groups." />
          <PlaceholderSection heading="Events" description="Annual events, competitions, and showcases." />
          <PlaceholderSection heading="Wellbeing" description="Support resources and pastoral care." />
        </div>
      </div>
    </PageLayout>
  );
};

export default StudentLifePage;


