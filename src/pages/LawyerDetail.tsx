import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLawyerById, lawyers } from "@/data/lawyers";
import { getArticlesByAuthor } from "@/data/articles";
import { Mail, Linkedin, ArrowLeft, GraduationCap, Briefcase, BookOpen, Globe, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LawyerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const lawyer = id ? getLawyerById(id) : undefined;

  if (!lawyer) {
    return <Navigate to="/#equipe" replace />;
  }

  const authorArticles = getArticlesByAuthor(lawyer.id);
  const otherLawyers = lawyers.filter(l => l.id !== lawyer.id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  return (
    <>
      <Helmet>
        <title>{lawyer.name} - {lawyer.specialty} | Duval & Associés</title>
        <meta name="description" content={lawyer.fullBio.substring(0, 160)} />
        <meta name="keywords" content={`${lawyer.name}, ${lawyer.specialty}, avocat Paris, ${lawyer.role}`} />
        <link rel="canonical" href={`https://duval-associes.fr/equipe/${lawyer.id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": lawyer.name,
            "jobTitle": lawyer.role,
            "worksFor": {
              "@type": "LegalService",
              "name": "Duval & Associés"
            },
            "description": lawyer.fullBio,
            "email": lawyer.email,
            "sameAs": lawyer.linkedin
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom">
            <Link 
              to="/#equipe" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'équipe
            </Link>

            <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
              {/* Photo */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src={lawyer.image} 
                    alt={lawyer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gold accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                
                {/* Contact Card */}
                <div className="mt-6 p-6 bg-card border border-border/50 rounded-lg">
                  <h3 className="font-serif text-lg mb-4">Contact direct</h3>
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${lawyer.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      {lawyer.email}
                    </a>
                    <a 
                      href={lawyer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      Profil LinkedIn
                    </a>
                  </div>
                  <Link to="/#contact" className="block mt-6">
                    <Button variant="gold" className="w-full">
                      Prendre rendez-vous
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div>
                <span className="text-primary text-sm tracking-[0.2em] uppercase mb-2 block">
                  {lawyer.specialty}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl mb-2">
                  {lawyer.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">{lawyer.role}</p>

                {/* Bio */}
                <div className="prose prose-invert max-w-none mb-12">
                  <p className="text-foreground/90 leading-relaxed text-lg">
                    {lawyer.fullBio}
                  </p>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-3 mb-12">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">
                    {lawyer.languages.join(" • ")}
                  </span>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                  {/* Education */}
                  <div>
                    <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      Formation
                    </h2>
                    <ul className="space-y-4">
                      {lawyer.education.map((edu, index) => (
                        <li key={index} className="pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                          <p className="text-foreground/90">{edu}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div>
                    <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-primary" />
                      Expérience
                    </h2>
                    <ul className="space-y-4">
                      {lawyer.experience.map((exp, index) => (
                        <li key={index} className="pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                          <p className="text-foreground/90">{exp}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Publications */}
                  <div>
                    <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                      Publications
                    </h2>
                    <ul className="space-y-4">
                      {lawyer.publications.map((pub, index) => (
                        <li key={index} className="pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                          <p className="text-foreground/90 italic">{pub}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles by Author */}
        {authorArticles.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="container-custom">
              <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">
                Articles de {lawyer.name.split(" ")[0]}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {authorArticles.map((article) => (
                  <Link 
                    key={article.id} 
                    to={`/actualites/${article.id}`}
                    className="group bg-card border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-primary text-sm">
                        Lire l'article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Team Members */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">
              Découvrez notre équipe
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {otherLawyers.map((member) => (
                <Link 
                  key={member.id} 
                  to={`/equipe/${member.id}`}
                  className="group flex items-center gap-4 p-4 bg-card border border-border/50 rounded-lg hover:border-primary/30 transition-all"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-xs text-primary tracking-wider uppercase mb-1">
                      {member.specialty}
                    </p>
                    <h3 className="font-serif text-lg group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LawyerDetail;
