import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import Nav from "@/components/Nav";
import DisplayAI from "@/components/DisplayAI";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { logo } from "@/constants/images";

const metadata = {
  title: "NearSwipe - Multifunctional ID Cards Including Payments",
  description: "Access. Pay. Thrive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NearSwipe",
              url: "https://nearswipe.com",
              logo: logo,
              description:
                "NearSwipe provides NFC-enabled smart ID cards, integrating payments and access control.",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+2348063642312",
                  contactType: "customer service",
                  availableLanguage: "English",
                },
              ],
              sameAs: [
                "https://twitter.com/NearSwipe",
                "https://www.linkedin.com/company/nearswipe",
                "https://www.instagram.com/NearSwipe",
              ],
            }),
          }}
        />

        <link rel="canonical" href="URL" />
      </Head>

      <body className="bg-black">
        <GlobalProvider>
          <Nav />
          <WaitlistModal />
          {children}
          <DisplayAI />
          <Footer />
          <ToastContainer />
        </GlobalProvider>
      </body>
    </html>
  );
}
