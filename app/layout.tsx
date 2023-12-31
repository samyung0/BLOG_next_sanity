import "./globals.css";

export const revalidate = 60 * 60;
export const dynamicParams = false;
export const runtime = 'edge';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
