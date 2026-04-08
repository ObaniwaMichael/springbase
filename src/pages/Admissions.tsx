import PageLayout from "@/components/PageLayout";
import PlaceholderSection from "@/components/PlaceholderSection";
import Admissions from "@/components/Admissions";
import SEO from "@/components/SEO";

const AdmissionsPage = () => {
  return (
    <>
      <SEO
        title="Admissions | Springbase Schools Lagos"
        description="Admissions at Springbase Schools Lagos. Learn how to apply, entry requirements, and start your child’s journey to academic excellence."
        url="/admissions"
      />
      <PageLayout title="Admissions" subtitle="Your journey to Springbase starts here.">
        <div className="space-y-6">
          <Admissions />
          <PlaceholderSection heading="Tuition & Fees" description="Tuition ranges from ₦80,000 to ₦120,000 per term." />
        </div>
      </PageLayout>
    </>
  );
};

export default AdmissionsPage;


