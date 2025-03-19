
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="truffle-container">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-serif font-bold text-truffle-800 transition-all hover:opacity-80"
          >
            Honza
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-truffle-700 hover:text-truffle-900 font-medium transition-all"
            >
              Productos
            </a>
            <a
              href="#about"
              className="text-truffle-700 hover:text-truffle-900 font-medium transition-all"
            >
              Nosotros
            </a>
            <a
              href="#blog"
              className="text-truffle-700 hover:text-truffle-900 font-medium transition-all"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-truffle-700 hover:text-truffle-900 font-medium transition-all"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-truffle-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="animate-fade-in" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg p-4 border-t border-truffle-100">
            <div className="flex flex-col space-y-4 py-2">
              <a
                href="#products"
                className="text-truffle-700 hover:text-truffle-900 font-medium transition-all px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Productos
              </a>
              <a
                href="#about"
                className="text-truffle-700 hover:text-truffle-900 font-medium transition-all px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#blog"
                className="text-truffle-700 hover:text-truffle-900 font-medium transition-all px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-truffle-700 hover:text-truffle-900 font-medium transition-all px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
