import PageLayout from "@/components/PageLayout";
import PlaceholderSection from "@/components/PlaceholderSection";
import Admissions from "@/components/Admissions";

const AdmissionsPage = () => {
  return (
    <PageLayout title="Admissions" subtitle="Your journey to Springbase starts here.">
      <div className="space-y-6">
        <Admissions />
        <PlaceholderSection heading="Tuition & Fees" description="Tuition ranges from ₦80,000 to ₦120,000 per term." />
      </div>
    </PageLayout>
  );
};

export default AdmissionsPage;


