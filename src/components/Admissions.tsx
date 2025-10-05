import { CheckCircle, Calendar, FileText, Users, ArrowRight, ShoppingCart, Upload, ClipboardCheck, FileCheck, CreditCard, Receipt, Package, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ImageModal";

const Admissions = () => {
  const steps = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Purchase of Form",
      description: "Obtain the admission form from our school office or download online."
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Submit Application",
      description: "Submit completed application with passport photographs, photocopy of birth certificate, and last term's result."
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Placement Test",
      description: "Conduct placement test/entrance examination to assess academic readiness."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Collect Admission File",
      description: "Collect admission file for the class being admitted into."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment & Medical Form",
      description: "Submit teller for payment of school fees and complete medical form."
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Collect Receipt",
      description: "Collect school fees receipt as proof of payment."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Collect Materials",
      description: "Receive issuance of other relevant materials and school supplies."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "School Begins",
      description: "Welcome to Springbase! Your educational journey starts here."
    }
  ];

  const requirements = [
    "Completed application form",
    "Passport photographs",
    "Photocopy of birth certificate",
    "Last term's result",
    "School fees payment teller",
    "Completed medical form"
  ];

  return (
    <section id="admissions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Join Our <span className="text-sage">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Begin your child's journey toward knowledge and greatness. 
            Our streamlined admission process ensures a smooth transition into our educational community.
          </p>
        </div>

        {/* Promotional Flyer */}
        <div className="mb-16 fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold text-charcoal mb-4">
              <span className="text-sage">Admission Ongoing</span> - Join Us Today!
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive educational programs and state-of-the-art facilities
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ImageModal
              src="/images/WhatsApp Image 2025-09-05 at 15.11.21.jpeg"
              alt="Springbase Schools Admission Flyer - Admission Ongoing"
              title="Admission Ongoing - Springbase Schools"
              description="Join our comprehensive educational programs including Nursery, Primary, and College levels. Programs include CHECKPOINT, CAMBRIDGE IGCSE, BECE, SSCE, and NECO."
              className="overflow-hidden rounded-2xl shadow-2xl"
            >
              <img 
                src="/images/WhatsApp Image 2025-09-05 at 15.11.21.jpeg" 
                alt="Springbase Schools Admission Flyer - Admission Ongoing" 
                className="w-full h-auto object-cover transition-transform group-hover:scale-105"
              />
            </ImageModal>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">
            Admission Process
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="card-elegant bg-card border-0 text-center relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-sage text-white text-sm flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg text-charcoal">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                
                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="slide-up">
            <Card className="card-elegant bg-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal">
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-sage flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-muted/50">
                  <h5 className="font-semibold text-charcoal mb-2">Important Dates</h5>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Early Decision: January 15</div>
                    <div>Regular Decision: March 15</div>
                    <div>Rolling Admissions: Available</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-muted/50">
                  <h5 className="font-semibold text-charcoal mb-2">Admissions Contact</h5>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Ask me about admissions: <span className="font-medium">Mrs OBANIWA</span>, Administrator</div>
                    <div>Phone: <span className="font-medium">0802 328 1221</span></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in">
            <Card className="card-elegant bg-gradient-accent text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-3xl font-heading font-bold mb-4">
                  Ready to Begin?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Begin your child's educational journey with Springbase. 
                  Our admissions team will guide you through each step of our streamlined process.
                </p>
                
                <div className="space-y-4">
                  <Button variant="secondary" size="lg" className="w-full" onClick={() => (window.location.href = '/admissions')}>
                    Get Admission Form
                  </Button>
                  <Button variant="outline" size="lg" className="w-full bg-gray-500 hover:bg-gray-600 text-white border-gray-500 hover:border-gray-600" onClick={() => (window.location.href = '/schedule-tour')}>
                    Schedule Campus Tour
                  </Button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm opacity-75">
                    Questions? Call us at <a href="tel:+2348023281221" className="font-semibold underline">0802 328 1221</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;