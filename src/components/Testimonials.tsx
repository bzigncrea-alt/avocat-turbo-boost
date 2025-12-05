import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Le cabinet Duval & Associés nous accompagne depuis 15 ans dans notre développement. Leur expertise en droit des sociétés a été déterminante dans notre dernière acquisition. Une équipe d'exception.",
      author: "Jean-Marc Lefebvre",
      role: "PDG, Groupe Lefebvre Industries",
      company: "Groupe industriel - 2500 collaborateurs",
    },
    {
      quote: "Face à un litige complexe avec un fournisseur international, Maître Martin a su trouver une solution stratégique brillante. Professionnalisme, réactivité et résultats : je recommande sans réserve.",
      author: "Sophie Beaumont",
      role: "Directrice Juridique, TechVision SA",
      company: "Scale-up technologique",
    },
    {
      quote: "Dans une situation personnelle délicate, le cabinet a fait preuve d'une discrétion et d'une humanité remarquables. Au-delà de leurs compétences juridiques, ce sont leurs qualités humaines qui font la différence.",
      author: "Pierre Moreau",
      role: "Entrepreneur",
      company: "Client particulier",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Témoignages
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            La confiance de
            <br />
            <span className="text-gradient-gold">nos clients</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-primary/20 mb-6" />

            {/* Quote */}
            <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-serif text-lg text-foreground">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-sm text-primary">
                  {testimonials[activeIndex].role}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {testimonials[activeIndex].company}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <p className="text-center text-xs text-muted-foreground tracking-wider uppercase mb-8">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {["BNP Paribas", "L'Oréal", "Carrefour", "Orange", "Total"].map((company) => (
              <span key={company} className="text-lg md:text-xl font-serif text-muted-foreground">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
