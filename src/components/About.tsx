import { Flower, Target, Heart, Star, Clock, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-lotus" />,
      title: "GODLINESS",
      description: "We cultivate godly character and moral values in all our students, fostering spiritual growth and ethical behavior."
    },
    {
      icon: <Heart className="h-8 w-8 text-sage" />,
      title: "RESPECT/CARE",
      description: "We model mutual respect and genuine care for others, creating a nurturing environment where everyone feels valued."
    },
    {
      icon: <Star className="h-8 w-8 text-lotus" />,
      title: "EXCELLENCE",
      description: "We strive for the highest standards in academics, character, and service, encouraging students to reach their full potential."
    },
    {
      icon: <Clock className="h-8 w-8 text-sage" />,
      title: "PUNCTUALITY",
      description: "We value time management and punctuality as essential life skills that build discipline and reliability."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-lotus" />,
      title: "CREATIVITY",
      description: "We inspire innovative thinking and creative expression through hands-on learning and artistic exploration."
    },
    {
      icon: <Users className="h-8 w-8 text-sage" />,
      title: "TEAM SPIRIT",
      description: "We foster collaboration and teamwork, teaching students to work together towards common goals and shared success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            About <span className="text-sage">Springbase</span> Schools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the principle that every child deserves the opportunity to flourish, 
            Springbase Schools has been nurturing young minds for over two decades.
          </p>
        </div>

        {/* Why Springbase */}
        <div className="mb-16 slide-up">
          <Card className="card-elegant bg-card border-0">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal mb-4">
                Why Springbase School, Okota Lagos?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Springbase School is a life‑training center and a citadel of academic excellence. We inculcate life‑long values of godliness, care, respect, creativity, excellence, and taking responsibility for leadership. We ensure an effective and smooth transition of children from home to school as they grow to become confident, compassionate achievers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision Statement */}
        <div className="mb-16 slide-up">
          <Card className="card-elegant bg-card border-0">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full sage-gradient flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To nurture a total child with sound morals, capacity to lead and function globally.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 slide-up">
          <Card className="card-elegant bg-card border-0">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full lotus-gradient flex items-center justify-center">
                <Flower className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide a life long qualitative education in a friendly and conducive environment for effective leadership.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="card-elegant bg-card border-0 text-center h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-charcoal mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center fade-in">
          <blockquote className="text-2xl lg:text-3xl font-heading font-medium text-charcoal italic max-w-4xl mx-auto">
            "Just as the lotus rises from muddy waters to bloom in pure beauty, 
            we help our students overcome challenges and reach their highest potential."
          </blockquote>
          <cite className="block mt-4 text-sage font-semibold">
            — Springbase Schools Philosophy
          </cite>
        </div>
      </div>
    </section>
  );
};

export default About;