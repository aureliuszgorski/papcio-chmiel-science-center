export type Room = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  type: "museum" | "science" | "education" | "partner" | "ai";
  audience: string[];
  aiFeatures: string[];
  userActions: string[];
  ctaLabel: string;
  accentColor: string;
  mission: string;
  learningOutcomes: string[];
  creationOutcome: string;
  heroRole: string;
  aiRole: string;
};

export const rooms: Room[] = [
  {
    slug: "kosmiczna-brama",
    title: "Space Launch Gate",
    subtitle: "Space, rockets, gravity and planets",
    description:
      "Children explore rockets, planets, gravity and space missions through comic-based challenges.",
    image: "/images/space-gate.jpg",
    type: "ai",
    audience: ["Everyone", "Schools", "Families"],
    aiFeatures: [
      "AI selects custom routes and tasks based on your explorer profile"
    ],
    userActions: [
      "Select profile (Student, Teacher, Parent, Sponsor)",
      "Initiate the space mission on the interactive terminal",
      "Configure your rocket's starting parameters"
    ],
    ctaLabel: "Launch Space Gate",
    accentColor: "#FFD21E",
    mission: "Choose your explorer profile, initiate the space mission, and launch your first learning route.",
    learningOutcomes: ["Space", "physics", "observation and experimentation"],
    creationOutcome: "Personalized Explorer Card",
    heroRole: "A'Tomek (plans the mission), Tytus (initiates system)",
    aiRole: "Adapts the program and difficulty level of tasks to the explorer's age"
  },
  {
    slug: "studio-komiksu",
    title: "Papcio’s Comic Studio",
    subtitle: "Drawing, storytelling, humor and creative thinking",
    description:
      "Explore drawing table, virtual drafting nibs, and panels to discover comic styling rules.",
    image: "/images/comic-studio.jpg",
    type: "museum",
    audience: ["Comic fans", "Creators", "Schools"],
    aiFeatures: [
      "AI Curator analyzes layouts of classic comic panels by Papcio"
    ],
    userActions: [
      "Examine historical drawing tools on the digital table",
      "Learn character design stages: from draft sketching to final ink",
      "Pass the frame composition and timing quiz challenge"
    ],
    ctaLabel: "Enter Comic Studio",
    accentColor: "#E63223",
    mission: "Explore the artist's workshop and understand how comic frames structure story time.",
    learningOutcomes: ["Drawing", "storytelling", "humor and creative thinking"],
    creationOutcome: "Comic frame composition blueprint",
    heroRole: "Papcio Chmiel (as virtual host and patron)",
    aiRole: "Analyzes drawing inputs and provides curatorial and drafting guidelines"
  },
  {
    slug: "instytut-pojazdow",
    title: "Professor T. Alent’s Invention Lab",
    subtitle: "Machines, vehicles, engineering and physics",
    description:
      "A vehicle laboratory for machines known from Papcio's books. Build and test aerodynamic features.",
    image: "/images/invention-lab.jpg",
    type: "science",
    audience: ["Kids", "Schools", "Families"],
    aiFeatures: [
      "AI evaluates pressure distribution, lift force, and aerostatics of designs"
    ],
    userActions: [
      "Construct a custom vehicle from modular parts",
      "Select engine type (rocket booster, sail, propeller)",
      "Initiate flight simulation tests to read the Professor's review"
    ],
    ctaLabel: "Test Vehicle in the Lab",
    accentColor: "#FFD21E",
    mission: "Construct a machine that successfully flies using absurd yet functional propulsion systems.",
    learningOutcomes: ["Machines", "vehicles", "engineering and physics"],
    creationOutcome: "Junior Engineer Vehicle Certificate",
    heroRole: "Professor T. Alent (verifies science metrics), Tytus (tests the craft)",
    aiRole: "Simulates flight behavior in real-time according to physical algorithms"
  },
  {
    slug: "misja-romka",
    title: "Romek’s World Discovery Map",
    subtitle: "Geography, Poland, world cultures and nature",
    description:
      "Explore Polish landmarks and cultural maps with Romek to solve quizzes.",
    image: "/images/world-map.jpg",
    type: "science",
    audience: ["Schools", "Families"],
    aiFeatures: [
      "AI updates geographical quests, river maps, and regional histories dynamically"
    ],
    userActions: [
      "Select a destination node on the map of Poland",
      "Resolve geological or regional topography puzzles",
      "Download custom regional learning sheets"
    ],
    ctaLabel: "Open Romek's Map",
    accentColor: "#1267B1",
    mission: "Uncover Polish landmarks and geological highlights on the map and solve Romek's quizzes.",
    learningOutcomes: ["Geography", "Poland", "world cultures and nature"],
    creationOutcome: "Explorer Regional Mission Badge",
    heroRole: "Romek (leads the expedition across regions)",
    aiRole: "Generates custom map quests and questions in real-time"
  },
  {
    slug: "misja-tytus",
    title: "Tytus Humanization Mission",
    subtitle: "Emotions, empathy, digital responsibility and AI collaboration",
    description:
      "Tytus learns digital etiquette, empathy, and cybersecurity, helping kids understand how to collaborate responsibly with AI.",
    image: "/images/humanization.jpg",
    type: "ai",
    audience: ["Youth", "Schools", "Teachers"],
    aiFeatures: [
      "AI models ethical dilemmas, copyright discussions, and technology impact"
    ],
    userActions: [
      "Resolve ethical and safety scenarios with complex choices",
      "Explore data security and phishing prevention rules",
      "Observe how the AI Guide handles Tytus's unexpected inputs"
    ],
    ctaLabel: "Begin Humanization Mission",
    accentColor: "#139447",
    mission: "Guide Tytus to act in accordance with empathy and digital netiquette safety standards.",
    learningOutcomes: ["Emotions", "empathy", "digital responsibility and AI collaboration"],
    creationOutcome: "Virtual Digital Citizen Charter",
    heroRole: "Tytus (makes the behavioral mistakes), A'Tomek (explains the rules)",
    aiRole: "Performs comparative analyses between computer logic and human values"
  },
  {
    slug: "archiwum-swiata",
    title: "Papcio Archive & Memory Room",
    subtitle: "History of Papcio Chmiel, Polish comics and creative heritage",
    description:
      "Explore the evolution of Polish comics, the legacy of Henryk Jerzy Chmielewski, and classic prints.",
    image: "/images/archive.jpg",
    type: "museum",
    audience: ["Comic fans", "Researchers"],
    aiFeatures: [
      "AI curator builds chronological pathways of print history"
    ],
    userActions: [
      "Browse the historical timeline of Polish graphic art",
      "Inspect vintage cover layouts and print methods",
      "Explore the biography of Henryk Jerzy Chmielewski"
    ],
    ctaLabel: "Enter the Archive",
    accentColor: "#7B3FA1",
    mission: "Analyze the impact of youth magazines on public education and media history in Poland.",
    learningOutcomes: ["History of Papcio Chmiel", "Polish comics and creative heritage"],
    creationOutcome: "History of Comics Knowledge Certificate",
    heroRole: "Papcio Chmiel (as active creator and historical witness)",
    aiRole: "Provides curatorial notes and semantic search indices"
  }
];
