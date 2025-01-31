import "./globals.css";

import { Red_Hat_Display } from "next/font/google";

const redHadDisplay = Red_Hat_Display({
  subsets:["latin"], 
  weight: ["400", "600", "700" , "800"], 
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={`${redHadDisplay.className} bg-background-primary text-content-body antialiased`}> 
        {children}
      </body>
    </html>
  );
}
