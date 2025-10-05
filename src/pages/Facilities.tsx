import PageLayout from "@/components/PageLayout";
import PlaceholderSection from "@/components/PlaceholderSection";
import Facilities from "@/components/Facilities";
import ImageGallery from "@/components/ImageGallery";
import Img0044 from "@/assets/IMG-20250811-WA0044.jpg";
import Img0046 from "@/assets/IMG-20250811-WA0046.jpg";
import Img0048 from "@/assets/IMG-20250811-WA0048.jpg";
import ComputerFacility from "@/assets/computer-facility.png";
import ComputerLab from "@/assets/computer-lab.png";
import FacilitiesImg from "@/assets/facilities.png";
import Hall from "@/assets/hall.png";
import Hall1 from "@/assets/hall-1.png";
import Lab from "@/assets/lab.jpeg";
import Lab2 from "@/assets/lab-2.jpeg";
import LabDay from "@/assets/lab-day.JPG";
import LabStudies from "@/assets/lab-studies.JPG";

const FacilitiesPage = () => {
  return (
    <PageLayout title="Campus Facilities" subtitle="World-class spaces designed for learning and growth.">
      <div className="space-y-12">
        <Facilities />
        
        {/* Campus Buildings Gallery */}
        <ImageGallery 
          title="Campus Buildings & Infrastructure" 
          description="Modern facilities designed for optimal learning and growth"
          images={[FacilitiesImg, Hall, Hall1]}
          columns={3}
          aspectRatio="square"
        />
        
        {/* Classrooms Gallery - Highlighted */}
        <div className="bg-gradient-to-br from-sage/5 to-lotus/5 py-8 rounded-3xl">
          <ImageGallery 
            title="Classrooms & Learning Spaces" 
            description="Interactive and well-equipped classrooms for every age group"
            images={[Img0044, Img0046, Img0048]}
            columns={2}
            aspectRatio="video"
          />
        </div>

        
        {/* Sports Facilities Gallery */}
        <ImageGallery 
          title="Sports & Recreation Facilities" 
          description="Fields, courts, and athletic spaces for physical development"
          images={[]}
          columns={2}
          aspectRatio="square"
        />
        
        {/* Labs Gallery - Highlighted */}
        <div className="bg-gradient-to-br from-sage/5 to-lotus/5 py-8 rounded-3xl">
          <ImageGallery 
            title="Science & Computer Labs" 
            description="State-of-the-art laboratories for hands-on learning and research"
            images={[ComputerFacility, ComputerLab, Lab, Lab2, LabDay, LabStudies]}
            columns={3}
            aspectRatio="square"
          />
        </div>
        
        {/* Additional Sections */}
        <div className="space-y-6">
          <PlaceholderSection heading="Library" description="Resources, catalog, and study spaces." />
        </div>
      </div>
    </PageLayout>
  );
};

export default FacilitiesPage;


