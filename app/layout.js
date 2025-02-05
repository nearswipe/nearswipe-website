import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";

const metadata = {
  title: "NearSwipe",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <GlobalProvider>
          
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
