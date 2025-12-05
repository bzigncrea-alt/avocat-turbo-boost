import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Award, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const stats = [
    { icon: Scale, value: "30+", label: "Années d'expérience" },
    { icon: Award, value: "2500+", label: "Affaires gagnées" },
    { icon: Clock, value: "24h", label: "Réponse garantie" },
  ];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cabinet d'avocats"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 md:px-8 pt-32 md:pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm text-primary tracking-wider uppercase">
              Cabinet d'avocats d'affaires
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            <span className="text-foreground">Votre droit,</span>
            <br />
            <span className="text-gradient-gold">notre combat.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Depuis 1994, nous défendons vos intérêts avec excellence et détermination.
            Un accompagnement sur-mesure pour chaque situation juridique.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="gold" size="xl" className="group">
              Prendre rendez-vous
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="elegant" size="xl">
              Découvrir le cabinet
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-border/50">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2 mx-auto md:mx-0" />
                <p className="text-2xl md:text-4xl font-serif text-gradient-gold">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
