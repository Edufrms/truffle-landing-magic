
import { useEffect, useRef } from "react";

const About = () => {
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
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="truffle-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-truffle-500 font-medium uppercase tracking-wider text-sm reveal">
              Nuestra historia
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-truffle-800 mt-2 mb-6 reveal">
              Tradición y pasión por la trufa española
            </h2>
            
            <div className="space-y-4">
              <p className="text-truffle-700 reveal">
                En Honza, nuestra pasión por la trufa comenzó hace generaciones en los bosques de encinas de España. Hoy, combinamos los métodos tradicionales de cultivo con las técnicas más avanzadas para ofrecer trufa de la máxima calidad.
              </p>
              
              <p className="text-truffle-700 reveal">
                Nos dedicamos a seleccionar cuidadosamente cada trufa, garantizando que solo las mejores lleguen a su mesa. Nuestro compromiso con la excelencia nos ha convertido en proveedores de confianza para chefs y gourmets de México y el mundo.
              </p>
              
              <div className="pt-4 reveal">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <span className="block text-3xl font-serif font-bold text-cream-700">15+</span>
                    <span className="text-sm text-truffle-600">Años de experiencia</span>
                  </div>
                  
                  <div className="w-px h-12 bg-truffle-200"></div>
                  
                  <div className="text-center">
                    <span className="block text-3xl font-serif font-bold text-cream-700">100%</span>
                    <span className="text-sm text-truffle-600">Producto español</span>
                  </div>
                  
                  <div className="w-px h-12 bg-truffle-200"></div>
                  
                  <div className="text-center">
                    <span className="block text-3xl font-serif font-bold text-cream-700">24h</span>
                    <span className="text-sm text-truffle-600">Envío internacional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative reveal">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=1500" 
                alt="Trufa española" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-xl overflow-hidden border-8 border-white shadow-lg z-20 reveal">
              <img 
                src="https://images.unsplash.com/photo-1558904869-9035f5a3ddb2?q=80&w=700" 
                alt="Recolección de trufa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cream-100 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
