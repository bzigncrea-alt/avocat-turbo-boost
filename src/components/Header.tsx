import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Le Cabinet", href: "#cabinet" },
    { name: "Expertises", href: "#expertises" },
    { name: "Équipe", href: "#equipe" },
    { name: "Témoignages", href: "#temoignages" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24 px-4 md:px-8">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-primary flex items-center justify-center">
              <span className="font-serif text-primary text-xl md:text-2xl font-bold">D</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg md:text-xl tracking-wide text-foreground">
                Duval & Associés
              </span>
              <p className="text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase">
                Avocats au Barreau de Paris
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="gold-underline text-sm text-foreground/80 hover:text-foreground tracking-wide transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="gold-outline" size="lg">
              Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary py-2 text-lg font-serif transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="gold" size="lg" className="mt-4">
            Consultation gratuite
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
