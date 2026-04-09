import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "@/lib/seo-schema";

/**
 * React component that injects the canonical URL meta tag into the document head
 * Updates dynamically based on the current route
 * 
 * Usage: Add <CanonicalURL /> to your root App component
 */
export function CanonicalURL() {
  const location = useLocation();

  useEffect(() => {
    // Construct the full canonical URL
    const canonicalUrl = `${BASE_URL}${location.pathname}`;

    // Find or create the canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }

    // Update the href attribute
    canonicalLink.href = canonicalUrl;

    return () => {
      // Optional: Clean up on unmount (not necessary but good practice)
    };
  }, [location.pathname]);

  return null;
}

export default CanonicalURL;
