import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, categories } from "@/data/articles";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredArticles = selectedCategory === "Tous" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

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
        <title>Actualités Juridiques | Duval & Associés - Cabinet d'Avocats Paris</title>
        <meta name="description" content="Suivez les dernières actualités juridiques, analyses de jurisprudences et conseils pratiques de nos avocats spécialisés en droit des affaires à Paris." />
        <meta name="keywords" content="actualités juridiques, jurisprudence, droit des affaires, avocats Paris, blog juridique" />
        <link rel="canonical" href="https://duval-associes.fr/actualites" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container-custom relative">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in">
                Blog Juridique
              </span>
              <h1 className="font-serif text-4xl md:text-6xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Nos <span className="text-gradient-gold">Actualités</span>
              </h1>
              <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Analyses, jurisprudences et conseils pratiques par nos experts
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-y border-border/50">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "gold" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <article 
                  key={article.id} 
                  className="group bg-card border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/50 text-xs text-muted-foreground rounded"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <Link 
                        to={`/equipe/${article.authorId}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Par {article.author}
                      </Link>
                      <Link 
                        to={`/actualites/${article.id}`}
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                      >
                        Lire
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Aucun article dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Restez informé
              </h2>
              <p className="text-muted-foreground mb-6">
                Recevez nos analyses juridiques directement dans votre boîte mail.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <Button variant="gold" type="submit">
                  S'abonner
                </Button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
