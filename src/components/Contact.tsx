import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "42, Avenue Montaigne\n75008 Paris, France",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 1 42 56 78 90",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@duval-avocats.fr",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven : 9h - 19h\nSamedi sur rendez-vous",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Contact
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 line-decoration">
              Parlons de
              <br />
              <span className="text-gradient-gold">votre situation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Première consultation offerte. Prenez rendez-vous pour exposer
              votre situation en toute confidentialité. Notre équipe vous
              répondra sous 24 heures.
            </p>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                    <p className="text-foreground whitespace-pre-line text-sm">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl mb-6">Demande de consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="jean@exemple.fr"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Domaine juridique *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="societes">Droit des Sociétés</option>
                    <option value="contentieux">Contentieux Commercial</option>
                    <option value="travail">Droit du Travail</option>
                    <option value="pi">Propriété Intellectuelle</option>
                    <option value="famille">Droit de la Famille</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Votre message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez brièvement votre situation..."
                />
              </div>

              <Button variant="gold" size="xl" className="w-full group">
                Envoyer ma demande
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Vos données sont traitées en toute confidentialité conformément au RGPD.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
