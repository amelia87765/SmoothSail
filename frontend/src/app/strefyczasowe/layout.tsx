import "../globals.css";
import Script from "next/script";

export const metadata = {
  title: "Strefy Czasowe 2025 (-1)",
  openGraph: {
    title: "Strefy Czasowe 2025 (-1)",
    description:
      "Indoorowy festiwal w Trójmieście na koniec października — w noc zmiany czasu na zimowy. Przyjdź i przepadnij!",
    url: "https://smoothsail.pl/strefyczasowe",
    siteName: "Strefy Czasowe 2025 (-1)",
    images: [
      {
        url: "https://smoothsail.pl/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strefy Czasowe 2025 (-1)",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strefy Czasowe 2025 (-1)",
    description:
      "Indoorowy festiwal w Trójmieście na koniec października — w noc zmiany czasu na zimowy. Przyjdź i przepadnij!",
    images: ["https://smoothsail.pl/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <meta property="og:title" content="Strefy Czasowe 2025 (-1)" />
        <meta
          property="og:description"
          content="Indoorowy festiwal w Trójmieście na koniec października — w noc zmiany czasu na zimowy. Przyjdź i przepadnij!"
        />
        <meta
          property="og:image"
          content="https://smoothsail.pl/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://smoothsail.pl/strefyczasowe" />
        <meta property="og:type" content="website" />
        <Script
          defer
          data-domain="smoothsail.pl/strefyczasowe"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
