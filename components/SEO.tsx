import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEO({
  title = "Phoenix Security - Advanced Cybersecurity Solutions",
  description = "Phoenix Security provides cutting-edge cybersecurity solutions, penetration testing, and security consulting services. Protect your digital assets with industry-leading expertise.",
  keywords = "cybersecurity, penetration testing, security consulting, network security, Phoenix Security, cyber defense",
  ogImage = "/favicon.png",
  canonical
}: SEOProps) {
  const siteUrl = "https://phoenix-sec.org";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={siteUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Phoenix Security" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.png" />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Phoenix Security",
          "url": siteUrl,
          "logo": `${siteUrl}/images/logo.png`,
          "description": description,
          "sameAs": [
            "https://www.linkedin.com/company/phoenix-sec",
          ]
        })}
      </script>
    </Head>
  );
}