import PageLayout from "@/components/PageLayout";
import PlaceholderSection from "@/components/PlaceholderSection";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Springbase Schools Lagos"
        description="Contact Springbase Schools Lagos for admissions, enquiries, and school information. We’d love to hear from you."
        url="/contact"
      />
      <PageLayout title="Contact Us" subtitle="We’d love to hear from you.">
        <div className="space-y-6">
          <Contact />
          <Map />
          <PlaceholderSection heading="Directory" description="Key contacts for departments and services." />
        </div>
      </PageLayout>
    </>
  );
};

export default ContactPage;


