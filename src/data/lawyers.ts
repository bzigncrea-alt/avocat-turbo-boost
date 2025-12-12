import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";

export interface Lawyer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  description: string;
  fullBio: string;
  education: string[];
  experience: string[];
  publications: string[];
  languages: string[];
  email: string;
  linkedin: string;
}

export const lawyers: Lawyer[] = [
  {
    id: "philippe-duval",
    name: "Philippe Duval",
    role: "Associé Fondateur",
    specialty: "Droit des Sociétés & M&A",
    image: lawyer1,
    description: "30 ans d'expérience. Ancien avocat chez Clifford Chance. Membre du Barreau de Paris depuis 1994.",
    fullBio: "Maître Philippe Duval est le fondateur du cabinet Duval & Associés. Fort de 30 années d'expérience en droit des affaires, il a conseillé plus de 200 opérations de fusions-acquisitions pour un montant cumulé dépassant 15 milliards d'euros. Reconnu comme l'un des meilleurs avocats d'affaires de sa génération, il a été distingué à plusieurs reprises par les classements juridiques internationaux.",
    education: [
      "Doctorat en Droit des Affaires - Université Paris II Panthéon-Assas (1992)",
      "Master en Droit Européen - Université de Cambridge (1990)",
      "Licence en Droit - Université Paris I Panthéon-Sorbonne (1988)"
    ],
    experience: [
      "Fondateur et Associé Gérant - Duval & Associés (2005 - présent)",
      "Counsel - Clifford Chance Paris (1998 - 2005)",
      "Avocat Collaborateur - Gide Loyrette Nouel (1994 - 1998)"
    ],
    publications: [
      "\"Les nouvelles frontières du M&A en Europe\" - Revue de Droit des Sociétés (2023)",
      "\"Protection des actionnaires minoritaires\" - Bulletin Joly Sociétés (2022)",
      "\"Guide pratique des LBO\" - Éditions Dalloz (2020)"
    ],
    languages: ["Français", "Anglais", "Allemand"],
    email: "p.duval@duval-associes.fr",
    linkedin: "https://linkedin.com/in/philippe-duval"
  },
  {
    id: "elisabeth-martin",
    name: "Élisabeth Martin",
    role: "Associée",
    specialty: "Contentieux Commercial",
    image: lawyer2,
    description: "20 ans d'expérience. Spécialiste reconnue des litiges complexes. Arbitre CMAP.",
    fullBio: "Maître Élisabeth Martin est une figure incontournable du contentieux commercial français. Spécialisée dans les litiges complexes à enjeux élevés, elle a plaidé devant les plus hautes juridictions françaises et européennes. Arbitre agréée CMAP et membre de la Cour Internationale d'Arbitrage, elle apporte une expertise unique dans la résolution des conflits commerciaux internationaux.",
    education: [
      "DEA de Droit Privé - Université Paris II Panthéon-Assas (2002)",
      "Certificat d'Arbitrage International - CCI Paris (2008)",
      "Maîtrise en Droit des Affaires - Université Lyon III (2000)"
    ],
    experience: [
      "Associée - Duval & Associés (2012 - présent)",
      "Avocate Senior - Bredin Prat (2006 - 2012)",
      "Avocate - Herbert Smith Freehills Paris (2003 - 2006)"
    ],
    publications: [
      "\"L'arbitrage commercial international : enjeux et perspectives\" - Cahiers de l'Arbitrage (2023)",
      "\"Exécution des sentences arbitrales\" - Revue de l'Arbitrage (2021)",
      "\"Contentieux des contrats commerciaux\" - LexisNexis (2019)"
    ],
    languages: ["Français", "Anglais", "Espagnol", "Italien"],
    email: "e.martin@duval-associes.fr",
    linkedin: "https://linkedin.com/in/elisabeth-martin"
  },
  {
    id: "alexandre-petit",
    name: "Alexandre Petit",
    role: "Counsel",
    specialty: "Propriété Intellectuelle",
    image: lawyer3,
    description: "12 ans d'expérience. Expert en droit du numérique et protection des données. CIL certifié.",
    fullBio: "Maître Alexandre Petit est un expert reconnu en propriété intellectuelle et droit du numérique. Certifié CIL (Correspondant Informatique et Libertés) puis DPO, il accompagne les entreprises dans leur transformation digitale et la protection de leurs actifs immatériels. Il intervient régulièrement comme conférencier sur les enjeux juridiques de l'intelligence artificielle.",
    education: [
      "Master 2 Droit du Numérique - Université Paris-Saclay (2011)",
      "Certification DPO - CNIL (2018)",
      "Master 1 Propriété Intellectuelle - Université Paris II (2010)"
    ],
    experience: [
      "Counsel - Duval & Associés (2018 - présent)",
      "Avocat Senior - Bird & Bird Paris (2014 - 2018)",
      "Avocat - August Debouzy (2011 - 2014)"
    ],
    publications: [
      "\"IA et responsabilité juridique\" - Dalloz IP/IT (2024)",
      "\"RGPD : 5 ans de pratique\" - Lamy Droit du Numérique (2023)",
      "\"Blockchain et propriété intellectuelle\" - Propriétés Intellectuelles (2022)"
    ],
    languages: ["Français", "Anglais", "Mandarin"],
    email: "a.petit@duval-associes.fr",
    linkedin: "https://linkedin.com/in/alexandre-petit"
  }
];

export const getLawyerById = (id: string): Lawyer | undefined => {
  return lawyers.find(lawyer => lawyer.id === id);
};
