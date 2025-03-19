
import { useEffect, useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "Cinco formas de usar aceite de trufa en platos cotidianos",
      excerpt: "Descubre cómo transformar tus recetas diarias con unas gotas de nuestro aceite de trufa premium.",
      date: "12 Mayo, 2023",
      image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=700",
      category: "Recetas"
    },
    {
      id: 2,
      title: "La temporada de trufa negra: cuándo y cómo aprovecharla",
      excerpt: "Todo lo que necesitas saber sobre la temporada de Tuber Melanosporum y cómo sacar el máximo partido a este tesoro culinario.",
      date: "28 Enero, 2023",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=700",
      category: "Cultivo"
    },
    {
      id: 3,
      title: "Exportando sabor: la trufa española en la gastronomía mexicana",
      excerpt: "Cómo los chefs mexicanos están incorporando la trufa española en sus creaciones culinarias con resultados sorprendentes.",
      date: "3 Marzo, 2023",
      image: "https://images.unsplash.com/photo-1536489885071-87983c3e2859?q=80&w=700",
      category: "Exportación"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-truffle-50" ref={sectionRef}>
      <div className="truffle-container">
        <div className="text-center mb-16">
          <span className="text-truffle-500 font-medium uppercase tracking-wider text-sm reveal">
            Nuestro Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-truffle-800 mt-2 reveal">
            El mundo de la trufa
          </h2>
          <div className="w-24 h-1 bg-cream-400 mx-auto mt-4 reveal"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all reveal">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium text-truffle-50 bg-truffle-700 rounded-full px-3 py-1">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-3 text-truffle-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="font-serif text-xl text-truffle-800 font-bold mb-2 hover:text-cream-700 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-truffle-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-cream-700 hover:text-cream-900 font-medium transition-colors text-sm"
                >
                  Leer más
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="#"
            className="bg-transparent hover:bg-truffle-800 text-truffle-800 hover:text-white transition-all font-medium px-8 py-3 rounded-md border border-truffle-800"
          >
            Ver todos los artículos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
