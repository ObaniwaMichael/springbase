import PageLayout from "@/components/PageLayout";
import { getApiUrl } from "@/lib/api";
import { config } from "@/lib/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Turnstile from "@/components/Turnstile";
import { useToast } from "@/components/ui/use-toast";
import ImageGallery from "@/components/ImageGallery";
import { useNavigate } from "react-router-dom";
import { Building, ArrowRight, School2 } from "lucide-react";
import Overview from "@/assets/overview.png";
import PrimarySchool1 from "@/assets/primary-school-1.png";
import PrimarySchool2 from "@/assets/primary-school-2.png";
import PrimaryTour from "@/assets/primary-tour.png";
import PriRecreation from "@/assets/pri-recreation.png";
import SchoolBus from "@/assets/school-view.png";

const ScheduleTourPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    // Map form fields to API expected fields
    const apiPayload = {
      parentName: payload.parentName,
      parentEmail: payload.email, // Map email to parentEmail
      parentPhone: payload.phone, // Map phone to parentPhone
      childName: payload.childName,
      childAge: payload.childAge,
      preferredDate: payload.preferredDate,
      preferredTime: payload.preferredTime,
      additionalInfo: payload.notes, // Map notes to additionalInfo
      // Keep original fields for backward compatibility
      email: payload.email,
      phone: payload.phone,
      notes: payload.notes
    };

    if (!apiPayload.parentName || !apiPayload.parentEmail || !apiPayload.preferredDate || !apiPayload.preferredTime) {
      toast({ title: "Missing information", description: "Please fill all required fields." });
      return;
    }

    setIsSubmitting(true);
    try {
      // For local development, call the Express server directly
      const apiUrl = import.meta.env.DEV 
        ? 'http://localhost:3001/schedule-tour'  // Local Express server
        : getApiUrl("/schedule-tour");           // Vercel API in production

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiPayload),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const msg = errorData.error || `HTTP ${res.status}: ${res.statusText}`;
        if (res.status === 400) throw new Error(msg);
        if (res.status === 403) throw new Error('Request blocked: origin not allowed.');
        if (res.status === 429) throw new Error('Too many requests. Please try again later.');
        throw new Error(msg);
      }
      
      const result = await res.json();
      toast({ title: "Request received", description: result.message || "We emailed you a calendar invite and will confirm shortly." });
      form.reset();
    } catch (err) {
      console.error('Tour submission error:', err);
      toast({ title: "Error", description: "Could not schedule the tour. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageLayout title="Schedule a Campus Tour" subtitle="Pick a preferred day and time. We'll confirm availability.">
      <div className="space-y-12">
        {/* Campus Tour Gallery */}
        <div className="bg-gradient-to-br from-sage/5 to-lotus/5 py-8 rounded-3xl">
          <ImageGallery 
            title="Campus Tour Preview" 
            description="Take a virtual tour of our beautiful campus and facilities"
            images={[
              { src: Overview, alt: "School building exterior overview", caption: "Main school complex" },
              { src: PrimarySchool1, alt: "Primary school block walkway and railings", caption: "Primary block" },
              { src: PrimarySchool2, alt: "Primary classroom windows and architecture", caption: "Campus architecture" },
              { src: PrimaryTour, alt: "Campus tour snapshots around the school", caption: "Campus tour" },
              { src: PriRecreation, alt: "Pupils recreation area inside classroom", caption: "Activity area" }
            ]}
            columns={3}
            aspectRatio="square"
          />
          
          {/* Virtual Tour Button */}
          <div className="text-center mt-8">
            <Button
              onClick={() => navigate('/gallery?album=campus-tour')}
              size="lg"
              className="bg-sage hover:bg-sage/90 text-white px-4 py-3 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <Building className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="text-sm md:text-base">Explore Full Campus Gallery</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              View all campus images and facilities in our comprehensive gallery
            </p>
          </div>
        </div>

        <Card className="bg-card border-0">
        <CardHeader>
          <CardTitle>Tour Request Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Parent/Guardian Name</label>
                <Input name="parentName" placeholder="Full name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                <Input type="email" name="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Phone</label>
                <Input name="phone" placeholder="Optional" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Child's Name</label>
                <Input name="childName" placeholder="Child's full name" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Child's Age</label>
                <Input name="childAge" type="number" placeholder="Age" min="1" max="18" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Preferred Date</label>
                <Input type="date" name="preferredDate" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Preferred Time</label>
                <Input type="time" name="preferredTime" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Notes</label>
              <Textarea name="notes" placeholder="Any specific interests or questions" rows={4} />
            </div>
            <div className="hidden" aria-hidden="true">
              <Input name="website" tabIndex={-1} autoComplete="off" />
            </div>
            {import.meta.env.VITE_TURNSTILE_SITEKEY && (
              <Turnstile className="mt-2" />
            )}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Tour Request"}
            </Button>
          </form>
        </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ScheduleTourPage;


