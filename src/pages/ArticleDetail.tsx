import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleById, getArticlesByAuthor, articles } from "@/data/articles";
import { getLawyerById } from "@/data/lawyers";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    return <Navigate to="/actualites" replace />;
  }

  const author = getLawyerById(article.authorId);
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Helmet>
        <title>{article.title} | Duval & Associés</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.tags.join(", ")} />
        <link rel="canonical" href={`https://duval-associes.fr/actualites/${article.id}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.image,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "datePublished": article.date,
            "publisher": {
              "@type": "Organization",
              "name": "Duval & Associés"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="pt-32 pb-8 md:pt-40">
          <div className="container-custom">
            <Link 
              to="/actualites" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux actualités
            </Link>

            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded mb-4">
                {article.category}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime} de lecture
                </span>
                {author && (
                  <Link 
                    to={`/equipe/${author.id}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <img 
                      src={author.image} 
                      alt={author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    {author.name}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="aspect-[21/9] rounded-lg overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-5xl">
              {/* Article Body */}
              <article className="prose prose-invert prose-lg max-w-none">
                <div 
                  className="text-foreground/90 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ 
                    __html: article.content
                      .replace(/## (.*)/g, '<h2 class="font-serif text-2xl text-foreground mt-8 mb-4">$1</h2>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                      .replace(/\n\n/g, '</p><p class="text-muted-foreground">')
                      .replace(/- (.*)/g, '<li class="text-muted-foreground ml-4">$1</li>')
                  }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                  {article.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-secondary/50 text-sm text-muted-foreground rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Share */}
                <div className="p-6 bg-card border border-border/50 rounded-lg">
                  <h3 className="font-serif text-lg mb-4 flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-primary" />
                    Partager
                  </h3>
                  <div className="flex gap-3">
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Author Card */}
                {author && (
                  <div className="p-6 bg-card border border-border/50 rounded-lg">
                    <h3 className="font-serif text-lg mb-4">L'auteur</h3>
                    <Link to={`/equipe/${author.id}`} className="group">
                      <div className="flex items-center gap-4">
                        <img 
                          src={author.image} 
                          alt={author.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-serif group-hover:text-primary transition-colors">{author.name}</p>
                          <p className="text-sm text-muted-foreground">{author.specialty}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {/* CTA */}
                <div className="p-6 bg-gradient-gold rounded-lg text-background">
                  <h3 className="font-serif text-lg mb-2">Une question ?</h3>
                  <p className="text-sm text-background/80 mb-4">
                    Nos avocats sont à votre disposition.
                  </p>
                  <Link to="/#contact">
                    <Button variant="elegant" className="w-full">
                      Nous contacter
                    </Button>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="container-custom">
              <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">
                Articles similaires
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedArticles.map((related) => (
                  <Link 
                    key={related.id} 
                    to={`/actualites/${related.id}`}
                    className="group bg-card border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-all"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default ArticleDetail;
