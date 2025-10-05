import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";
import PerformanceMonitor from "./components/PerformanceMonitor";
import { lazy, Suspense } from "react";
const AboutPage = lazy(() => import("./pages/About"));
const ProgramsPage = lazy(() => import("./pages/Programs"));
const FacilitiesPage = lazy(() => import("./pages/Facilities"));
const AdmissionsPage = lazy(() => import("./pages/Admissions"));
const StudentLifePage = lazy(() => import("./pages/StudentLife"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ScheduleTourPage = lazy(() => import("./pages/ScheduleTour"));
const GalleryPage = lazy(() => import("./pages/Gallery"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <LoadingSpinner size="lg" text="Loading Springbase Schools..." />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/student-life" element={<StudentLifePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/schedule-tour" element={<ScheduleTourPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollToTop />
            <PerformanceMonitor />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
