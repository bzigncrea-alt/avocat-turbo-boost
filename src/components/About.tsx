import { Check } from "lucide-react";

const About = () => {
  const values = [
    "Excellence et rigueur juridique",
    "Confidentialité absolue",
    "Accompagnement personnalisé",
    "Réactivité et disponibilité",
    "Transparence des honoraires",
    "Réseau international",
  ];

  return (
    <section id="cabinet" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Notre histoire
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 line-decoration">
              Un cabinet d'excellence
              <br />
              <span className="text-gradient-gold">depuis 30 ans</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fondé en 1994 par Maître Philippe Duval, notre cabinet s'est imposé comme
              une référence incontournable du droit des affaires à Paris. Notre équipe
              de 15 avocats experts conjugue savoir-faire juridique et approche stratégique
              pour défendre vos intérêts avec la plus grande détermination.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Notre philosophie : chaque client mérite une attention particulière et
              une stratégie sur-mesure. Nous nous engageons à vos côtés, de la première
              consultation jusqu'à la résolution définitive de votre dossier.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] bg-card rounded-lg overflow-hidden">
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-primary/30 rounded" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-center">
                <span className="text-8xl md:text-9xl font-serif text-gradient-gold mb-4">30</span>
                <span className="text-xl md:text-2xl text-foreground/80 tracking-wide">années</span>
                <span className="text-muted-foreground mt-2">d'excellence juridique</span>
                
                <div className="mt-8 pt-8 border-t border-border/50 w-full">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-serif text-primary">15</p>
                      <p className="text-xs text-muted-foreground">Avocats experts</p>
                    </div>
                    <div>
                      <p className="text-3xl font-serif text-primary">98%</p>
                      <p className="text-xs text-muted-foreground">Clients satisfaits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
