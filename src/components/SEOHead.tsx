import React, { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | The Catalyst Room`;
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title, description]);

  return null;
};
