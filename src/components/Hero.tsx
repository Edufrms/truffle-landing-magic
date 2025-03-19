
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const heroElement = heroRef.current;
      const translateY = scrollPosition * 0.3;
      heroElement.style.backgroundPositionY = `${translateY}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-truffle-800 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1582034986517-30d163aa1da9?q=80&w=2500')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-truffle-900/60 backdrop-blur-[2px]"></div>
      
      <div className="truffle-container relative z-10 text-center px-4">
        <span 
          className={`inline-block text-cream-300 uppercase tracking-wider mb-4 font-medium ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          Trufa premium española
        </span>
        
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight ${isVisible ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}
        >
          Delicadeza gastronómica<br /> 
          <span className="text-cream-200">de la tierra a su mesa</span>
        </h1>
        
        <p 
          className={`max-w-xl mx-auto text-lg text-cream-100/90 mb-8 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}
        >
          Cultivamos y seleccionamos la trufa más exquisita para elevar sus creaciones culinarias
        </p>
        
        <div className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 ${isVisible ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
          <a 
            href="#products" 
            className="bg-cream-500 hover:bg-cream-600 transition-all text-truffle-900 font-medium px-8 py-3 rounded-md"
          >
            Descubrir productos
          </a>
          <a 
            href="#contact" 
            className="bg-transparent hover:bg-white/10 transition-all text-white border border-white/30 font-medium px-8 py-3 rounded-md"
          >
            Contactar
          </a>
        </div>
      </div>

      <button 
        onClick={scrollToProducts}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all animate-bounce ${isVisible ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}
      >
        <ChevronDown size={28} />
      </button>
    </div>
  );
};

export default Hero;
