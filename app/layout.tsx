import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "The Great Minds Project 5.0",
    template: "%s | The Great Minds Project 5.0",
  },
  description:
    "Transforming thought, dismantling harmful narratives, and advancing criminal and social justice reform through education, narrative authorship, and community rebuilding.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
