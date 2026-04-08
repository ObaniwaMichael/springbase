import { useEffect, useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";


type Manifest = {
  albums: Record<string, { base: string; files: string[] }[]>;
};

const albumLabels: Record<string, string> = {
  "community-outreach": "Community Outreach",
  parade: "Independence Day Parade",
  assemblies: "Assemblies & Welcome",
  staff: "Staff & Leadership",
  "science-lab": "Science & Computer Labs",
  celebrations: "Celebrations & Events",
  classrooms: "Classroom Activities",
  "campus-tour": "Campus Tour & Facilities",
  sports: "Sports & Athletics",
};

const GalleryPage = () => {
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [active, setActive] = useState<string>("community-outreach");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const album = params.get("album");
    if (album) setActive(album);
  }, []);

  useEffect(() => {
    fetch("/images/manifest.json")
      .then((r) => r.json())
      .then((data: Manifest) => setManifest(data))
      .catch(() => setManifest({ albums: {} }));
  }, []);

  const albums = useMemo(() => Object.keys(manifest?.albums || {}), [manifest]);

  return (
    <>
      <SEO
        title="Gallery | Springbase Schools Lagos"
        description="Explore photos from Springbase Schools Lagos—campus life, events, celebrations, labs, and student activities."
        url="/gallery"
      />
      <PageLayout title="Gallery" subtitle="Photos from our vibrant community and events.">
        <div className="space-y-8 pb-8">
        <Tabs value={active} onValueChange={setActive} className="w-full">
          {/* Mobile: dropdown selector */}
          <div className="md:hidden">
            <Select value={active} onValueChange={setActive}>
              <SelectTrigger className="w-full mb-3">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                {albums.map((a) => (
                  <SelectItem key={a} value={a}>
                    {albumLabels[a] || a.replace(/-/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop/Tablet: tab list */}
          <TabsList className="hidden md:flex flex-wrap gap-2 mb-4 md:mb-6">
            {albums.map((a) => (
              <TabsTrigger key={a} value={a} className="capitalize">
                {albumLabels[a] || a.replace(/-/g, " ")}
              </TabsTrigger>
            ))}
          </TabsList>

          {albums.map((a) => (
            <TabsContent key={a} value={a} className="mt-6 md:mt-8 pt-2 md:pt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {(manifest?.albums[a] || []).map((item, idx) => {
                  const srcWebp = item.files.find((f) => f.endsWith("-960.webp"))
                    || item.files.find((f) => f.endsWith(".webp"))
                    || item.files[0];
                  const srcJpg = srcWebp
                    ? srcWebp.replace(/\.webp$/, ".jpg")
                    : (item.files.find((f) => f.endsWith("-960.jpg")) || item.files.find((f) => f.endsWith(".jpg")) || "");
                  const full = item.files.find((f) => f.endsWith(".webp")) || srcWebp;
                  if (!srcWebp && !srcJpg) return null;
                  return (
                    <Card key={idx} className="group bg-card border-2 border-gray-200 hover:border-sage/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-0 relative">
                        <a href={`/images/${full}`} target="_blank" rel="noreferrer" className="block">
                          <div className="relative overflow-hidden">
                            <picture>
                              {srcWebp && (
                                <source srcSet={`/images/${srcWebp}`} type="image/webp" />
                              )}
                              {srcJpg && (
                                <source srcSet={`/images/${srcJpg}`} type="image/jpeg" />
                              )}
                              <img
                                src={`/images/${srcJpg || srcWebp}`}
                                alt="School activity photo"
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                              />
                            </picture>
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/90 rounded-full p-3 shadow-lg">
                                  <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        {/* Image info footer */}
                        <div className="p-3 bg-gradient-to-r from-sage/5 to-lotus/5">
                          <div className="text-xs text-muted-foreground font-medium">
                            {item.base.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        </div>
      </PageLayout>
    </>
  );
};

export default GalleryPage;


