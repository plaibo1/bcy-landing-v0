import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Банкротство физических лиц | Списание долгов законно | ЮрПомощь",
  description:
    "Поможем списать долги через банкротство физических лиц за 6-12 месяцев. Гарантия результата или возврат денег. Более 1056 успешных дел. Консультация бесплатно!",
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
