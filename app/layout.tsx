import { cookies } from "next/headers";
import Providers from "./providers";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";
  return (
    <html lang="en" className={theme}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
