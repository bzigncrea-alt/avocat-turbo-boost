import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Philippe Duval",
      role: "Associé Fondateur",
      specialty: "Droit des Sociétés & M&A",
      image: lawyer1,
      description: "30 ans d'expérience. Ancien avocat chez Clifford Chance. Membre du Barreau de Paris depuis 1994.",
    },
    {
      name: "Élisabeth Martin",
      role: "Associée",
      specialty: "Contentieux Commercial",
      image: lawyer2,
      description: "20 ans d'expérience. Spécialiste reconnue des litiges complexes. Arbitre CMAP.",
    },
    {
      name: "Alexandre Petit",
      role: "Counsel",
      specialty: "Propriété Intellectuelle",
      image: lawyer3,
      description: "12 ans d'expérience. Expert en droit du numérique et protection des données. CIL certifié.",
    },
  ];

  return (
    <section id="equipe" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Notre équipe
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Des avocats
            <br />
            <span className="text-gradient-gold">d'exception</span>
          </h2>
          <p className="text-muted-foreground">
            Notre équipe réunit les meilleurs talents du droit des affaires,
            unis par une même passion de l'excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Icons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                {/* Gold accent */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-primary to-transparent group-hover:h-full transition-all duration-700" />
              </div>

              {/* Info */}
              <div>
                <p className="text-xs text-primary tracking-wider uppercase mb-2">
                  {member.specialty}
                </p>
                <h3 className="font-serif text-2xl mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Notre équipe compte 15 avocats spécialisés à votre service.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors gold-underline"
          >
            Voir toute l'équipe
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
