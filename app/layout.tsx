import "./globals.css";

export const fetchCache = "force-no-store";
export const dynamicParams = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
