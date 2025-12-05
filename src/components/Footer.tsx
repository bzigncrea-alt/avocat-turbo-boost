import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const links = {
    cabinet: [
      { name: "Notre histoire", href: "#cabinet" },
      { name: "Nos valeurs", href: "#cabinet" },
      { name: "Notre équipe", href: "#equipe" },
      { name: "Recrutement", href: "#" },
    ],
    expertises: [
      { name: "Droit des Sociétés", href: "#expertises" },
      { name: "Contentieux Commercial", href: "#expertises" },
      { name: "Droit du Travail", href: "#expertises" },
      { name: "Propriété Intellectuelle", href: "#expertises" },
    ],
    ressources: [
      { name: "Publications", href: "#" },
      { name: "Actualités juridiques", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Prendre rendez-vous", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-primary flex items-center justify-center">
                <span className="font-serif text-primary text-2xl font-bold">D</span>
              </div>
              <div>
                <span className="font-serif text-xl tracking-wide text-foreground">
                  Duval & Associés
                </span>
                <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
                  Avocats au Barreau de Paris
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Depuis 1994, nous défendons vos intérêts avec excellence et détermination.
              Un accompagnement sur-mesure pour chaque situation juridique.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Le Cabinet</h4>
            <ul className="space-y-3">
              {links.cabinet.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Expertises</h4>
            <ul className="space-y-3">
              {links.expertises.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Ressources</h4>
            <ul className="space-y-3">
              {links.ressources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Cabinet Duval & Associés. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Honoraires
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
