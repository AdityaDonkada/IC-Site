import { AnalyticsWrapper } from "../components/analytics";
import { Russo_One } from "@next/font/google";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";

const russo_one = Russo_One({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body className={russo_one.className}>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>

          <Footer />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
