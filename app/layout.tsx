import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Inter font will be applied throughout app since it's in body, Tailwind antialiased class
      smooths out the font rendering */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}