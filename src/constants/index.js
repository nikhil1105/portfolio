import {
  imgsearchweb,
  port,
  musicweb,
  marblerace,
  mobile,
  backend,
  creator,
  web,
  cypress,
  typescript,
  rhf,
  jest,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  framermotion,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "jest",
    icon: jest,
  },
  {
    name: "react form hook",
    icon: rhf,
  },
  {
    name: "cypress",
    icon: cypress,
  },


];

const experiences = [
  {
    title: "React.js",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",

    points: [
      'Proficient in building dynamic and responsive user interfaces using React.js.',
      'Experience with state management, component lifecycle, and hooks.',
      'Developed scalable and maintainable React applications for My Portfolio And Academic projects.',

    ],
  },
  {
    title: "Redux",
    company_name: "",
    icon: redux,
    iconBg: "#383E56",

    points: [
      'Proficient in using Redux for state management in complex React applications.',
      'Developing proficiency in integrating Redux with React components to manage application state.',
      'Enthusiastically learning and exploring Redux best practices to enhance state management skills.',


    ],
  },
  {
    title: "React Three Fiber / Three js",
    company_name: "",
    icon: threejs,
    iconBg: "#E6DEDD",
    points: [
      'Expertise in utilizing React Three Fiber to create declarative and interactive 3D graphics within React applications.',
      'Demonstrated ability to translate design concepts into immersive 3D web experiences.',
      'Implemented advanced features such as shaders, lighting, and animations using React Three Fiber.',
    ],
  },
  {
    title: "Framer Motion",
    company_name: "",
    icon: framermotion,
    iconBg: "#383E56",
    points: [
      'Proficient in leveraging Framer Motion to create smooth and engaging animations within React applications.',
      'Experience with implementing complex animations, transitions, and gesture-based interactions.',
      'Utilized Framer Motion to enhance user experience through dynamic and visually appealing UI elements.',
    ],
  },
  {
    title: "Tailwind CSS",
    company_name: "",
    icon: tailwind,
    iconBg: "#E6DEDD",
    points: [
      'Proficient in using Tailwind CSS to streamline and accelerate the styling process in web development projects.',
      'Experience with the utility-first approach for building responsive and scalable user interfaces.',
      'Demonstrated ability to customize and extend Tailwind CSS to match specific design requirements.',
    ],
  },
  {
    title: "Node js",
    company_name: "",
    icon: nodejs,
    iconBg: "#E6DEDD",
    points: [
      'Proficient in server-side development with Node.js, utilizing its event-driven architecture for scalable applications.',
      'Experience in building RESTful APIs and integrating them seamlessly with frontend applications.',
      'Familiarity with Express.js for creating robust and modular server-side applications.',
    ],
  }
  ,
  {
    title: "MongoDB",
    company_name: "",
    icon: mongodb,
    iconBg: "#E6DEDD",
    points: [
      ' Proficient in MongoDB for efficient and scalable NoSQL database management.',
      'Experience designing and implementing data models to meet application requirements.',
      'Competent in performing CRUD operations and aggregations to retrieve and manipulate data.',
      'Familiarity with indexing, sharding, and other MongoDB optimization techniques.',
    ],


  },
  {
    title: "React Form Hook",
    company_name: "",
    icon: rhf,
    iconBg: "#E6DEDD",
    points: [
      'Proficient in using React Hook Form for building efficient and scalable forms in React applications.',
      'Experienced in managing form state, validation, and handling complex form interactions with minimal re-renders.',
      'Regularly leverage React Hook Form’s features like custom validation, field arrays, and integration with UI libraries.'

    ],
  },

  {
    title: "Jest",
    company_name: "",
    icon: jest,
    iconBg: "#E6DEDD",
    points: [
      'Proficient in writing and executing unit, integration, and end-to-end tests using Jest.',
      'Expertise in using Jest’s features like mocks, spies, snapshot testing, and code coverage.',
      'Regularly update testing practices to leverage new Jest features for optimal performance.'

    ],
  },
  {
    title: "Cypress",
    company_name: "",
    icon: cypress,
    iconBg: "#E6DEDD",
    points: [
      'Proficient in using Cypress for end-to-end testing and automation of web applications.',
      'Experienced in writing and running tests for UI, API interactions, and handling various test scenarios.',
      'Regularly leverage Cypress features like time travel, network stubbing, and parallel test execution for faster test cycles.'

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Designed a dynamic portfolio website, seamlessly blending creativity and technology with React,React Three Fiber, Framer Motion, and Tailwind CSS for a visually striking and responsive user showcase.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "ReactThreeFiber",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    source_code_link: "https://github.com/nikhil1105/portfolio.git",
    project_link: 'https://portfolio-nikhil-gupta.netlify.app/'
  },
  {
    name: "PriceTrack",
    description:
      "A custom web scraping tool that tracks and compares product prices across major e-commerce sites like Amazon.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Web Scraping",
        color: "pink-text-gradient",
      },
      {
        name: "Redux.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: imgsearchweb,
    source_code_link: "https://github.com/nikhil1105/PriceTrack.git",
    project_link: 'https://price-trackr.vercel.app/'
  },
  {
    name: "TheGlitchCity",
    description:
      "Designed and developed a cutting-edge event and club management website using the MERN stack, enriched with immersive Three.js visual effects for unparalleled user experiences.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "Redux.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: musicweb,
    source_code_link: "https://github.com/nikhil1105/GlitchCityFull.git",
    project_link: 'https://theglitchcity.netlify.app/'
  },
 {
    name: "Marble Race",
    description:
      "3D interactive game using React, React Three Fiber, and Zustand for efficient state management Integrated localStorage for persistent data management across page refreshes.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
     
      {
        name: " React Three Fiber",
        color: "green-text-gradient",
      },
     {
        name: "Zustand",
        color: "pink-text-gradient",
      },
    ],
    image: marblerace,
    source_code_link: "https://github.com/nikhil1105/Marble_Race.git",
    project_link: 'https://marble-race-nikhil.vercel.app/'
  },

];

export { services, technologies, experiences, testimonials, projects };
