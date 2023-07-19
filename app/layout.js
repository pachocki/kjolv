import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Kjølv As",
  description: "Innovativ kommunikasjon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${montserrat.className} bg-white relative   text-white `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
