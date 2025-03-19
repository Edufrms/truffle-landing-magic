
import { useEffect, useRef } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-white" ref={sectionRef}>
      <div className="truffle-container">
        <div className="text-center mb-16">
          <span className="text-truffle-500 font-medium uppercase tracking-wider text-sm reveal">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-truffle-800 mt-2 reveal">
            ¿Interesado en nuestros productos?
          </h2>
          <div className="w-24 h-1 bg-cream-400 mx-auto mt-4 reveal"></div>
          <p className="mt-6 text-truffle-600 max-w-2xl mx-auto reveal">
            Estamos especializados en la exportación de productos trufados a México. Contáctenos para discutir cómo podemos satisfacer sus necesidades culinarias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 reveal">
            <div className="bg-truffle-50 p-8 rounded-xl h-full">
              <h3 className="text-xl font-serif font-bold text-truffle-800 mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-cream-700 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-truffle-700 font-medium mb-1">Dirección</h4>
                    <p className="text-truffle-600">Calle Principal 123, 12345<br/>Teruel, España</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-cream-700 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-truffle-700 font-medium mb-1">Email</h4>
                    <p className="text-truffle-600">info@honza.es</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-cream-700 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-truffle-700 font-medium mb-1">Teléfono</h4>
                    <p className="text-truffle-600">+34 123 456 789</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-serif font-bold text-truffle-800 mb-4">
                  Exportación a México
                </h3>
                <p className="text-truffle-600 mb-4">
                  Contamos con años de experiencia en la exportación de productos trufados a México, garantizando la máxima calidad y frescura.
                </p>
                <div className="flex space-x-3 mt-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-truffle-200 hover:border-cream-500 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-truffle-700">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-truffle-200 hover:border-cream-500 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-truffle-700">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-truffle-200 hover:border-cream-500 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-truffle-700">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 reveal">
            <form className="bg-white p-8 rounded-xl shadow-sm border border-truffle-100">
              <h3 className="text-xl font-serif font-bold text-truffle-800 mb-6">
                Envíenos un mensaje
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-truffle-700 mb-1 text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-truffle-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cream-500 focus:border-transparent"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-truffle-700 mb-1 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-truffle-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cream-500 focus:border-transparent"
                    placeholder="Su email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-truffle-700 mb-1 text-sm font-medium">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-truffle-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cream-500 focus:border-transparent"
                  placeholder="Asunto de su mensaje"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-truffle-700 mb-1 text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-truffle-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cream-500 focus:border-transparent"
                  placeholder="Escriba su mensaje aquí..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center bg-cream-600 hover:bg-cream-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Enviar mensaje
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
