import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Свобода от долгов - Банкротство физических лиц",
  description:
    "Законно спишем долги или выплатим их за Вас. Банкротство физических лиц с гарантией результата. Опыт 10+ лет, более 2000 успешных дел.",
  keywords:
    "банкротство физических лиц, списание долгов, банкротство граждан, долги по кредитам, финансовая свобода",
  openGraph: {
    title: "Свобода от долгов - Банкротство физических лиц",
    description:
      "Законно спишем долги или выплатим их за Вас. Банкротство физических лиц с гарантией результата.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
