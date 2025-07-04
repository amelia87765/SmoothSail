export const metadata = {
  title: "Strefy czasowe",
  description: "Animacja czasu i przestrzeni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
import "./globals.css";
