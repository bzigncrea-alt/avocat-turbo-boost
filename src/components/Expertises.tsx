import { Building2, Users, Scale, Briefcase, Shield, Globe } from "lucide-react";

const Expertises = () => {
  const expertises = [
    {
      icon: Building2,
      title: "Droit des Sociétés",
      description: "Création, fusion, cession, restructuration. Nous accompagnons les entreprises à chaque étape de leur développement.",
    },
    {
      icon: Scale,
      title: "Contentieux Commercial",
      description: "Résolution des litiges commerciaux, recouvrement de créances, rupture abusive de relations commerciales.",
    },
    {
      icon: Briefcase,
      title: "Droit du Travail",
      description: "Conseil et contentieux en droit social, licenciements, négociations collectives, harcèlement.",
    },
    {
      icon: Shield,
      title: "Propriété Intellectuelle",
      description: "Protection des marques, brevets, droits d'auteur. Défense contre la contrefaçon et la concurrence déloyale.",
    },
    {
      icon: Users,
      title: "Droit de la Famille",
      description: "Divorces, successions, liquidations de régimes matrimoniaux. Discrétion et accompagnement personnalisé.",
    },
    {
      icon: Globe,
      title: "Droit International",
      description: "Contrats internationaux, arbitrage, implantation à l'étranger. Un réseau de partenaires dans 30 pays.",
    },
  ];

  return (
    <section id="expertises" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Nos domaines
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Des expertises
            <br />
            <span className="text-gradient-gold">à votre service</span>
          </h2>
          <p className="text-muted-foreground">
            Notre cabinet couvre l'ensemble des domaines du droit des affaires
            avec une expertise reconnue et une approche pragmatique.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises.map((expertise, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border rounded-lg hover-lift hover-gold-glow overflow-hidden"
            >
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <expertise.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                {expertise.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {expertise.description}
              </p>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary">
                <span className="text-primary text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertises;
