
import { useEffect, useRef } from "react";

const Products = () => {
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
  
  const products = [
    {
      id: 1,
      name: "Trufa Fresca",
      description: "Trufas frescas de temporada recolectadas en nuestros bosques seleccionados por expertos truficultores.",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1500"
    },
    {
      id: 2,
      name: "Aceite de Trufa",
      description: "Aceite de oliva virgen extra infusionado con trufa negra para realzar cualquier plato con su aroma inconfundible.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1500"
    },
    {
      id: 3,
      name: "Salsa Trufada",
      description: "Nuestra exclusiva salsa trufada elaborada artesanalmente con ingredientes naturales y trozos de trufa.",
      image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1500"
    }
  ];

  return (
    <section id="products" className="section-padding bg-truffle-50" ref={sectionRef}>
      <div className="truffle-container">
        <div className="text-center mb-16">
          <span className="text-truffle-500 font-medium uppercase tracking-wider text-sm reveal">
            Nuestros productos
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-truffle-800 mt-2 reveal">
            Excelencia en cada trufa
          </h2>
          <div className="w-24 h-1 bg-cream-400 mx-auto mt-4 reveal"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md reveal"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-truffle-800 font-bold mb-2">
                  {product.name}
                </h3>
                <p className="text-truffle-600">
                  {product.description}
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-cream-700 hover:text-cream-900 font-medium transition-colors"
                  >
                    Más información
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
