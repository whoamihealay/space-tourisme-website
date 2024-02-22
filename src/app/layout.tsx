import { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Space Tourism",
  description:
    "Space Tourism Website challenge from frontendMentor.io - from APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen text-center">{children}</div>
      </body>
    </html>
  );
}
