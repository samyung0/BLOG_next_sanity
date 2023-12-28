import { Metadata } from "next/types";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
