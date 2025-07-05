export const navItems = [
  { name: "Services", link: "#services" },
  { name: "Projets", link: "#projets" },
  { name: "Temoignages", link: "#temoignages" },
  { name: "Contacts", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Sites web e-commerce et vitrines ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Machine learning et Data viz",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Designs graphiques",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Chatbots et Agents IA",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Apps métier et solutions SaaS",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Envie de lancer un projet ensemble ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projets = [
  {
    id: 1,
    short: "Mojito",
    title: "Mojito - Site vitrine ",
    des: "Site Web vitrine, 100% responsive, contenant des animations pour donner vie au site.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
    link: "",
  },
  {
    id: 2,
    short: "SmartBudgetAI",
    title: "Smart Budget AI - App Web",
    des: "Application Web contenant un agent IA pouvant réaliser plusieurs taches complexes.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/py.png", "/lang.png"],
    link: "",
  },
  {
    id: 3,
    short: "Solenergy",
    title: "SOLENERGY - Site e-commerce",
    des: "Site Web e-commerce muni d'un front office client et un dashboard admin pour la gestion.",
    img: "/p3.png",
    iconLists: ["/html.png", "/css.png", "/js.png", "/boot.png", "/lar.png"],
    link: "",
  },
  {
    id: 4,
    short: "ClinicPro",
    title: "Clinic Pro - App Web",
    des: "SaaS pour une gestion efficace et centralisée pour les cliniques et les cabinets medicaux.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.youtube.com/watch?v=rtOvBOTyX00&list=RDEMsPjiovzEgfLLK2w1FvFTOg&index=5",
  },
];

export const temoignages = [
  
  {
    quote:
      "Collaborer avec l'équipe DigiCraft a été un réel plaisir. Leur professionnalisme, leur réactivité et leur engagement à livrer un résultat exceptionnel étaient visibles à chaque étape du projet. Leur enthousiasme pour chaque aspect du design est remarquable. Si vous cherchez à valoriser votre marque, DigiCraft est le partenaire idéal",
    name: "",
    title: "Fondateur de OG SHOP Sneakers",
  },
  {
    quote:
      "Travailler avec l’équipe DigiCraft a été une expérience aussi fluide qu’inspirante. Leur professionnalisme, leur réactivité et leur sens du détail ont fait toute la différence. Chaque étape du projet a été marquée par leur engagement et leur passion du travail bien fait. DigiCraft ne se contente pas de créer un site — ils façonnent une vraie identité digitale.",
    name: "Hawa Sangaré",
    title: "Fondatrice du Cabinet Medical Tata Sylla",
  },
  {
    quote:
      "Créer notre filtre Snapchat événementiel avec DigiCraft a été une expérience à la fois fluide et créative. Leur réactivité, leur compréhension de nos besoins et leur sens du détail ont parfaitement capté l’esprit de notre événement. DigiCraft ne livre pas juste un visuel — ils conçoivent une véritable expérience digitale.",
    name: "",
    title: "SG ASEM Casablanca",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
