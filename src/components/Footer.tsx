
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-truffle-800 text-white pt-16 pb-8">
      <div className="truffle-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-cream-200 mb-4">Honza</h3>
            <p className="text-truffle-300 mb-6">
              Cultivamos y seleccionamos la trufa más exquisita para elevar sus creaciones culinarias.
            </p>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-truffle-700 hover:bg-truffle-600 flex items-center justify-center transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          
          <div>
            <h4 className="text-cream-200 font-medium mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#about" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#blog" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cream-200 font-medium mb-4">Productos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  Trufa fresca
                </a>
              </li>
              <li>
                <a href="#" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  Aceite de trufa
                </a>
              </li>
              <li>
                <a href="#" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  Salsa trufada
                </a>
              </li>
              <li>
                <a href="#" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  Certificaciones
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cream-200 font-medium mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-truffle-300">
                Calle Principal 123, 12345<br/>Teruel, España
              </li>
              <li>
                <a href="mailto:info@honza.es" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  info@honza.es
                </a>
              </li>
              <li>
                <a href="tel:+34123456789" className="text-truffle-300 hover:text-cream-200 transition-colors">
                  +34 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-truffle-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-truffle-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Honza. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-truffle-400 hover:text-cream-200 transition-colors text-sm">
              Política de privacidad
            </a>
            <a href="#" className="text-truffle-400 hover:text-cream-200 transition-colors text-sm">
              Términos y condiciones
            </a>
            <a href="#" className="text-truffle-400 hover:text-cream-200 transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
