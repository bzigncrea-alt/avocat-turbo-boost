import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { lawyers } from "@/data/lawyers";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Notre Équipe d'Avocats | Duval & Associés - Cabinet Paris</title>
        <meta name="description" content="Découvrez l'équipe d'avocats expérimentés de Duval & Associés. Spécialistes en droit des affaires, contentieux commercial et propriété intellectuelle à Paris." />
        <meta name="keywords" content="avocats Paris, équipe juridique, droit des affaires, contentieux, propriété intellectuelle" />
        <link rel="canonical" href="https://duval-associes.fr/equipe" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container-custom relative">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in">
                Notre équipe
              </span>
              <h1 className="font-serif text-4xl md:text-6xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Des avocats <span className="text-gradient-gold">d'exception</span>
              </h1>
              <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Notre équipe réunit les meilleurs talents du droit des affaires, 
                unis par une même passion de l'excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lawyers.map((lawyer, index) => (
                <article 
                  key={lawyer.id} 
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Image */}
                  <Link to={`/equipe/${lawyer.id}`} className="block relative aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                    <img
                      src={lawyer.image}
                      alt={`${lawyer.name} - ${lawyer.specialty}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* View Profile Button */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded">
                        Voir le profil
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Gold accent */}
                    <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-primary to-transparent group-hover:h-full transition-all duration-700" />
                  </Link>

                  {/* Info */}
                  <div>
                    <p className="text-xs text-primary tracking-wider uppercase mb-2">
                      {lawyer.specialty}
                    </p>
                    <Link to={`/equipe/${lawyer.id}`}>
                      <h2 className="font-serif text-2xl mb-1 group-hover:text-primary transition-colors">
                        {lawyer.name}
                      </h2>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-3">{lawyer.role}</p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
                      {lawyer.description}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a
                        href={lawyer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label={`LinkedIn de ${lawyer.name}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${lawyer.email}`}
                        className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label={`Email ${lawyer.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Rejoignez notre équipe
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nous recherchons des talents passionnés par le droit des affaires. 
              Découvrez nos opportunités de carrière.
            </p>
            <Link 
              to="/#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors gold-underline"
            >
              Nous rejoindre
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TeamPage;
