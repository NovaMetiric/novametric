import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "NovaMetric | High-Performance Digital Marketing & Branding Agency",
  description = "NovaMetric is an elite digital marketing agency specializing in high-performance web design, strategic SEO, and data-driven branding.",
  keywords = "NovaMetric, digital marketing agency, premium web design, SEO experts, brand strategy, growth marketing",
  image = "https://i.ibb.co/hRSgzXtM/Chat-GPT-Image-Dec-29-2025-01-30-19-AM.png",
  url = "https://novametric.net",
  type = "website"
}) => {
  const siteTitle = title.includes("NovaMetric") ? title : `${title} | NovaMetric`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
