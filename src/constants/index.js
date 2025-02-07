export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "iPhone Website",
    desc: " An interactive landing page showcasing the iPhone 15 Pro with dynamic animations and 3D model rendering for an immersive user experience.",
    subdesc:
      "Built using React, Three.js, GSAP, and TailwindCSS, the page enables users to explore the iPhone in various colors and sizes with smooth transitions. The website features a custom video carousel for a detailed product preview and is fully responsive for seamless accessibility across devices.",
    href: "https://i-phone-project.vercel.app/#highlights",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
      {
        id: 5,
        name: "gsap",
        path: "/assets/gsap.png",
      },
      {
        id: 6,
        name: "Three.js",
        path: "/assets/threejs.png",
      },
    ],
  },
  {
    title: "TaskOrbit - Employee Management System",
    desc: "A task management platform designed to streamline employee workflows with role-based access control and real-time task updates.",
    subdesc:
      "The system features separate dashboards for employees and admins with authentication and role management. React and Context API handle centralized state management, ensuring smooth data flow. Employees can dynamically create, assign, and track tasks, with session persistence maintained through local storage for an uninterrupted workflow experience.",
    href: "https://employee-management-system-nine-xi.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
      {
        id: 4,
        name: "D3.js",
        path: "/assets/D3.png",
      },
    ],
  },
  {
    title: "Rejouice - Dynamic Web Experience ",
    desc: " A feature-rich, visually immersive web experience designed to enhance user engagement with smooth scrolling animations and interactive elements.",
    subdesc:
      "Using GSAP for advanced animations and LocomotiveJS for seamless scrolling, the project creates a highly interactive browsing experience. SwiperJS was integrated to provide an intuitive content carousel, ensuring dynamic content display. The fully responsive design ensures optimal performance across various screen sizes.",
    href: "https://rejoice-website.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Javascript",
        path: "/assets/javascript.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "3.js",
        path: "/assets/D3.png",
      },
    ],
  },
  {
    title: "Nike Landing Page",
    desc: " A modern and engaging landing page built to showcase Nike’s brand with sleek animations and interactive UI elements.",
    subdesc:
      "Developed using React, GSAP, and TailwindCSS, the page includes smooth page transitions and visually appealing animations for an enhanced user experience. The clean, minimalist design, along with responsive layout optimization, ensures fast performance and seamless accessibility across all devices.",
    href: "https://nike-inky-chi.vercel.app/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#808080",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Javascript",
        path: "/assets/javascript.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -5, 0] : [0.25, -6.5, 0],
  };
};
