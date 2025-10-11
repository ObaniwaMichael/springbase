import { useEffect } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

interface PortalRedirectProps {
  url: string;
}

const PortalRedirect = ({ url }: PortalRedirectProps) => {
  useEffect(() => {
    // Redirect to the external portal URL
    window.location.href = url;
  }, [url]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sage/10 to-charcoal/5">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        <div className="w-16 h-16 mx-auto">
          <LoadingSpinner size="lg" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-charcoal">
            Redirecting to Portal
          </h1>
          <p className="text-muted-foreground">
            You are being redirected to the portal. If you are not redirected automatically, 
            <a 
              href={url} 
              className="text-sage hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>.
          </p>
        </div>
        
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-sage/20">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> The portal will open in a new tab for your convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortalRedirect;
