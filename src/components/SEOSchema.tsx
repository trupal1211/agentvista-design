import { useEffect } from "react";
import { generateSEOSchema, type SEOSchemaGraph } from "@/lib/seo-schema";

interface SEOSchemaProps {
  /**
   * Optional page-specific schema overrides
   */
  overrides?: {
    pageUrl?: string;
    pageName?: string;
    pageDescription?: string;
    datePublished?: string;
    dateModified?: string;
    breadcrumbs?: Array<{ name: string; item?: string }>;
  };
}

/**
 * React component to inject SEO JSON-LD schema into document head
 *
 * Usage:
 * - In App.tsx (global): <SEOSchema />
 * - In specific pages: <SEOSchema overrides={{ pageName: "Features", ... }} />
 */
export function SEOSchema({ overrides }: SEOSchemaProps) {
  useEffect(() => {
    const schema = generateSEOSchema(overrides);
    const scriptElement = document.createElement("script");
    scriptElement.type = "application/ld+json";
    scriptElement.className = "agentsvista-seo-schema";
    scriptElement.textContent = JSON.stringify(schema);

    document.head.appendChild(scriptElement);

    // Cleanup on unmount
    return () => {
      if (scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [overrides]);

  return null;
}

export default SEOSchema;
