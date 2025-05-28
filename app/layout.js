import { Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Courier Dashboard",
  description: "The dashboard interface",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${poppins.variable} "scroll-smooth"`}>
      <body cz-shortcut-listen="true">
        <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
        </body>
    </html>
  );
}
