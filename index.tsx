import React from "react";
import Script from "next/script";

interface AnalyticsProps {
  gid: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ gid }) => {
  const gidPattern = /^G-[A-Z0-9]+$/;

  if (!gidPattern.test(gid)) {
    console.warn(`Invalid Google Analytics Tracking ID: ${gid}`);
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gid}`}
      />

      <Script id="Nlytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gid}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default Analytics;
