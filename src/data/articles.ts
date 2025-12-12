export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorId: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "reforme-droit-societes-2024",
    title: "Réforme du droit des sociétés 2024 : les points clés à retenir",
    excerpt: "La loi du 15 mars 2024 apporte des modifications substantielles au régime des sociétés commerciales. Analyse des principales innovations.",
    content: `
La réforme du droit des sociétés entrée en vigueur le 1er juillet 2024 constitue une évolution majeure du cadre juridique des entreprises françaises. Voici les points essentiels à retenir.

## Simplification des formalités de création

Le législateur a considérablement allégé les démarches administratives pour la création de sociétés. Le délai moyen d'immatriculation passe de 7 à 3 jours ouvrés, grâce à la dématérialisation complète des procédures.

## Nouvelles règles de gouvernance

Les sociétés de plus de 250 salariés doivent désormais intégrer un représentant des salariés au conseil d'administration avec voix délibérative. Cette mesure vise à renforcer le dialogue social au niveau stratégique.

## Allègement des obligations comptables

Pour les PME réalisant moins de 12 millions d'euros de chiffre d'affaires, la publication des comptes annuels devient optionnelle. Cette disposition répond aux demandes récurrentes des entrepreneurs.

## Transmission d'entreprise facilitée

Le nouveau régime fiscal des transmissions d'entreprises familiales offre un abattement de 75% sur les droits de mutation, contre 50% auparavant, sous condition de conservation des titres pendant 4 ans.

## Nos recommandations

Nous conseillons à nos clients d'auditer leurs statuts pour s'assurer de leur conformité avec les nouvelles dispositions. Notre équipe reste à votre disposition pour vous accompagner dans cette transition.
    `,
    category: "Droit des Sociétés",
    author: "Philippe Duval",
    authorId: "philippe-duval",
    date: "2024-11-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
    tags: ["Réforme", "Sociétés", "Gouvernance", "PME"]
  },
  {
    id: "arret-cour-cassation-prejudice-ecologique",
    title: "Arrêt historique : la Cour de cassation élargit le préjudice écologique",
    excerpt: "Par un arrêt du 22 octobre 2024, la Cour de cassation reconnaît pour la première fois le préjudice écologique subi par une association locale.",
    content: `
La troisième chambre civile de la Cour de cassation a rendu le 22 octobre 2024 un arrêt qui fera date dans l'histoire du droit de l'environnement français.

## Les faits

Une association de protection de la biodiversité locale a assigné une entreprise industrielle suite à un déversement accidentel de produits chimiques dans une rivière. Le tribunal puis la cour d'appel avaient rejeté la demande d'indemnisation du préjudice écologique.

## La décision de la Cour de cassation

Dans un attendu de principe remarqué, la Haute juridiction affirme que « toute personne morale ayant pour objet la protection de l'environnement peut demander réparation du préjudice écologique affectant le territoire sur lequel elle exerce son action ».

## Portée de l'arrêt

Cette décision élargit considérablement le cercle des demandeurs potentiels à l'action en réparation du préjudice écologique. Elle s'inscrit dans un mouvement jurisprudentiel favorable à une meilleure prise en compte des enjeux environnementaux.

## Implications pratiques

Les entreprises doivent désormais anticiper un risque contentieux accru en matière environnementale. Nous recommandons un audit des pratiques et la mise en place de procédures de prévention adaptées.
    `,
    category: "Contentieux",
    author: "Élisabeth Martin",
    authorId: "elisabeth-martin",
    date: "2024-10-28",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
    tags: ["Jurisprudence", "Environnement", "Contentieux", "Cour de cassation"]
  },
  {
    id: "ia-act-entreprises-francaises",
    title: "AI Act : quelles obligations pour les entreprises françaises ?",
    excerpt: "Le règlement européen sur l'intelligence artificielle entre progressivement en vigueur. Décryptage des nouvelles obligations.",
    content: `
L'AI Act (Règlement européen sur l'intelligence artificielle) adopté en mars 2024 impose de nouvelles contraintes aux entreprises utilisant ou développant des systèmes d'IA. Voici ce qu'il faut savoir.

## Calendrier d'application

- Février 2025 : interdiction des systèmes d'IA à risque inacceptable
- Août 2025 : obligations relatives aux modèles d'IA à usage général
- Août 2026 : application complète du règlement

## Classification des risques

Le règlement établit une approche graduée selon le niveau de risque :

**Risque inacceptable** : systèmes de notation sociale, manipulation subliminale
**Risque élevé** : recrutement automatisé, évaluation de crédit, diagnostic médical
**Risque limité** : chatbots, générateurs de contenu
**Risque minimal** : jeux vidéo, filtres anti-spam

## Obligations principales

Pour les systèmes à haut risque, les entreprises devront :
- Documenter les données d'entraînement
- Garantir la supervision humaine
- Assurer la transparence des décisions
- Réaliser des évaluations de conformité

## Sanctions

Les amendes peuvent atteindre 35 millions d'euros ou 7% du chiffre d'affaires mondial pour les infractions les plus graves.

## Notre accompagnement

Notre équipe spécialisée en droit du numérique vous accompagne dans la mise en conformité de vos systèmes d'IA.
    `,
    category: "Propriété Intellectuelle",
    author: "Alexandre Petit",
    authorId: "alexandre-petit",
    date: "2024-10-10",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["IA", "RGPD", "Numérique", "Europe", "Conformité"]
  },
  {
    id: "guide-clause-non-concurrence",
    title: "Guide pratique : rédiger une clause de non-concurrence valable",
    excerpt: "Les conditions de validité des clauses de non-concurrence font l'objet d'une jurisprudence abondante. Nos conseils pour sécuriser vos contrats.",
    content: `
La clause de non-concurrence reste un outil essentiel de protection des intérêts de l'entreprise, mais sa rédaction obéit à des règles strictes.

## Conditions cumulatives de validité

Pour être valable, une clause de non-concurrence doit réunir quatre conditions :

1. **Être indispensable à la protection des intérêts légitimes de l'entreprise**
2. **Être limitée dans le temps**
3. **Être limitée dans l'espace**
4. **Prévoir une contrepartie financière**

## Durée recommandée

La jurisprudence admet généralement des durées comprises entre 12 et 24 mois. Au-delà, le risque d'annulation augmente significativement.

## Étendue géographique

La zone géographique doit correspondre au périmètre réel d'activité du salarié. Une clause couvrant la France entière pour un commercial régional serait disproportionnée.

## Contrepartie financière

Le montant doit être « substantiel ». La jurisprudence invalide les contreparties inférieures à 20-25% du salaire mensuel.

## Renonciation par l'employeur

Il est crucial de prévoir les modalités de renonciation, notamment le délai dans lequel l'employeur peut lever la clause.

## Modèle de rédaction

Nous tenons à disposition de nos clients des modèles de clauses conformes à la jurisprudence la plus récente.
    `,
    category: "Droit des Sociétés",
    author: "Philippe Duval",
    authorId: "philippe-duval",
    date: "2024-09-20",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    tags: ["Contrats", "RH", "Non-concurrence", "Droit du travail"]
  },
  {
    id: "cybersecurite-obligations-dirigeants",
    title: "Cybersécurité : la responsabilité personnelle des dirigeants en question",
    excerpt: "Les cyberattaques se multiplient. Quels sont les risques juridiques pour les dirigeants en cas de défaillance de sécurité ?",
    content: `
Face à la recrudescence des cyberattaques, la question de la responsabilité des dirigeants en matière de sécurité informatique devient cruciale.

## Obligation de moyens renforcée

Les dirigeants ont l'obligation de mettre en place des mesures de sécurité « appropriées » au regard des risques. Cette obligation de moyens tend à se renforcer en obligation de résultat pour certains secteurs sensibles.

## Fondements juridiques

Plusieurs textes encadrent cette responsabilité :
- Le RGPD (articles 32 et suivants)
- La directive NIS 2 (applicable depuis octobre 2024)
- Le Code de commerce (article L.225-251)

## Cas de mise en cause

La responsabilité du dirigeant peut être engagée :
- En cas de négligence manifeste dans la mise en œuvre des mesures de sécurité
- En cas de non-respect des obligations de notification de violation
- En cas d'absence de plan de continuité d'activité

## Sanctions encourues

Les sanctions peuvent être :
- Civiles : dommages-intérêts aux victimes
- Administratives : amendes CNIL jusqu'à 4% du CA mondial
- Pénales : en cas de faute caractérisée

## Recommandations

Nous préconisons la réalisation d'audits réguliers et la souscription d'une assurance cyber adaptée.
    `,
    category: "Propriété Intellectuelle",
    author: "Alexandre Petit",
    authorId: "alexandre-petit",
    date: "2024-09-05",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    tags: ["Cybersécurité", "Dirigeants", "RGPD", "NIS2"]
  },
  {
    id: "mediation-commerciale-avantages",
    title: "Médiation commerciale : une alternative efficace au contentieux",
    excerpt: "La médiation s'impose comme un mode de résolution des litiges rapide et économique. Focus sur ses avantages et son déroulement.",
    content: `
Dans un contexte d'engorgement des tribunaux, la médiation commerciale offre une alternative attractive pour résoudre les différends entre entreprises.

## Qu'est-ce que la médiation ?

La médiation est un processus structuré par lequel les parties tentent de parvenir à un accord avec l'aide d'un tiers neutre : le médiateur. Contrairement à l'arbitrage, le médiateur ne tranche pas le litige.

## Avantages de la médiation

**Rapidité** : une médiation aboutit généralement en 2 à 3 mois, contre 18 à 24 mois pour une procédure judiciaire.

**Coût maîtrisé** : les frais sont prévisibles et partagés entre les parties.

**Confidentialité** : les échanges restent secrets, contrairement aux audiences publiques.

**Préservation des relations** : le processus collaboratif permet de maintenir les relations commerciales.

## Taux de succès

Les statistiques montrent un taux de réussite de 70 à 80% pour les médiations commerciales menées à terme.

## Déroulement

1. Accord sur le recours à la médiation
2. Choix du médiateur
3. Réunions préparatoires individuelles
4. Séances de médiation (1 à 3 jours)
5. Rédaction de l'accord transactionnel

## Notre pratique

Notre équipe contentieux intègre systématiquement la médiation dans sa stratégie de résolution des litiges.
    `,
    category: "Contentieux",
    author: "Élisabeth Martin",
    authorId: "elisabeth-martin",
    date: "2024-08-22",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
    tags: ["Médiation", "ADR", "Contentieux", "Négociation"]
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getArticlesByAuthor = (authorId: string): Article[] => {
  return articles.filter(article => article.authorId === authorId);
};

export const categories = ["Tous", "Droit des Sociétés", "Contentieux", "Propriété Intellectuelle"];
