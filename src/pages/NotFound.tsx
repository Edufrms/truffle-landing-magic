
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-truffle-50 py-20">
        <div className="truffle-container text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-truffle-800 mb-4">404</h1>
          <p className="text-xl text-truffle-600 mb-8">Lo sentimos, no hemos podido encontrar la página que busca.</p>
          <a 
            href="/" 
            className="inline-flex items-center bg-cream-600 hover:bg-cream-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al inicio
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
