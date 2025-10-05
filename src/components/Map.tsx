import { MapPin, Navigation, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Map = () => {
  // School coordinates (approximate location in Okota, Lagos)
  const schoolLat = 6.5244;
  const schoolLng = 3.3792;
  
  // OpenStreetMap embed (no API key required)
  const delta = 0.01; // bounding box padding
  const bbox = [
    schoolLng - delta,
    schoolLat - delta,
    schoolLng + delta,
    schoolLat + delta
  ].join(',');
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${schoolLat},${schoolLng}`;

  return (
    <Card className="card-elegant bg-card border-0">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-charcoal">
          <MapPin className="h-5 w-5 text-sage" />
          Our Location
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-4">
          {/* Interactive Map */}
          <div className="aspect-video rounded-lg overflow-hidden border border-border/50">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Springbase School Location Map"
              className="w-full h-full"
            />
          </div>
          
          {/* Location Details */}
          <div className="grid md:grid-cols-2 gap-4 p-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-charcoal">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    9/21 Canal View Off Community Road Ago,<br />
                    Okota Lagos, Lagos State
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Navigation className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-charcoal">Directions</h4>
                  <p className="text-sm text-muted-foreground">
                    Off New Community Road before the bridge going to Isheri
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-charcoal">Visiting Hours</h4>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
              
              <div className="bg-sage/10 p-3 rounded-lg">
                <p className="text-sm text-sage font-medium">
                  💡 Tip: Schedule a campus tour in advance for the best experience
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 p-4 pt-0">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${schoolLat},${schoolLng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-sage hover:bg-sage/90 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors"
            >
              Get Directions
            </a>
            <a
              href="tel:+2348023281221"
              className="flex-1 bg-charcoal hover:bg-charcoal/90 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors"
            >
              Call for Directions
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Map;
