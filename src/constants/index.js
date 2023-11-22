import {
  imgsearchweb,
  port,
  musicweb,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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

];

const experiences = [
  {
    title: "React.js",
    company_name: "Intermediate",
    icon: reactjs,
    iconBg: "#383E56",

    points: [
      'Proficient in building dynamic and responsive user interfaces using React.js.',
      'Experience with state management, component lifecycle, and hooks.',
      'Developed scalable and maintainable React applications for My Portfolio And Academic projects.',
      'Familiar with integrating third- party libraries and APIs into React applications.',
      'Continuously staying updated on the latest React developments and best practices.',

    ],
  },
  {
    title: "Redux",
    company_name: "Intermediate",
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
    company_name: "Intermediate",
    icon: threejs,
    iconBg: "#E6DEDD",
    points: [
      'Expertise in utilizing React Three Fiber to create declarative and interactive 3D graphics within React applications.',
      'Demonstrated ability to translate design concepts into immersive 3D web experiences.',
      'Implemented advanced features such as shaders, lighting, and animations using React Three Fiber.',
      'Collaborated with design teams to seamlessly integrate 3D elements into the overall user interface.',
      'Stay abreast of updates and advancements in React Three Fiber to ensure optimal utilization in projects.',
    ],
  },
  {
    title: "Framer Motion",
    company_name: "Intermediate",
    icon: framermotion,
    iconBg: "#383E56",
    points: [
      'Proficient in leveraging Framer Motion to create smooth and engaging animations within React applications.',
      'Experience with implementing complex animations, transitions, and gesture-based interactions.',
      'Utilized Framer Motion to enhance user experience through dynamic and visually appealing UI elements.',
      'Collaborated with design teams to integrate Framer Motion seamlessly into the overall application design.',
      'Stay current with Framer Motion updates and enhancements to incorporate the latest features into projects.',
    ],
  },
  {
    title: "Tailwind CSS",
    company_name: "Intermediate",
    icon: tailwind,
    iconBg: "#E6DEDD",
    points: [
      'Proficient in using Tailwind CSS to streamline and accelerate the styling process in web development projects.',
      'Experience with the utility-first approach for building responsive and scalable user interfaces.',
      'Demonstrated ability to customize and extend Tailwind CSS to match specific design requirements.',
      'Utilized Tailwind CSS to maintain a consistent and efficient design system across applications.',
      'Stay informed about updates and new features in Tailwind CSS to leverage the latest capabilities in projects.',
    ],
  },
  {
    title: "Node js",
    company_name: "Intermediate",
    icon: nodejs,
    iconBg: "#E6DEDD",
    points: [
      'Proficient in server-side development with Node.js, utilizing its event-driven architecture for scalable applications.',
      'Experience in building RESTful APIs and integrating them seamlessly with frontend applications.',
      'Competent in utilizing npm packages and managing dependencies to enhance development efficiency.',
      'Familiarity with Express.js for creating robust and modular server-side applications.',
      'Stay abreast of Node.js updates and best practices to ensure optimal performance and security in projects.'
    ],}
    ,
    {
    title: "MongoDB",
    company_name: "Intermediate",
    icon: mongodb,
    iconBg: "#E6DEDD",
    points: [
      ' Proficient in MongoDB for efficient and scalable NoSQL database management.',
      'Experience designing and implementing data models to meet application requirements.',
      'Competent in performing CRUD operations and aggregations to retrieve and manipulate data.',
      'Familiarity with indexing, sharding, and other MongoDB optimization techniques.',
      'Stay informed about MongoDB updates and features to leverage the latest capabilities in database design and management.'
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
    name: "Image Search Web",
    description:
      "Developed a dynamic and responsive image search engine using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: imgsearchweb,
    source_code_link: "https://github.com/nikhil1105/ImageSearchWebsite.git",
    project_link:'https://imagesearchweb-app.netlify.app/'
  },
  {
    name: "Music Player",
    description:
      "music player website utilizing HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: musicweb,
    source_code_link: "https://github.com/nikhil1105/spotify.git",
    project_link:'https://music-play-web.netlify.app/'
  },
  {
    name: "Portfolio Website",
    description:
      "Designed a dynamic portfolio website, seamlessly blending creativity and technology with React,React Three Fiber, Framer Motion, and Tailwind CSS for a visually striking and responsive user showcase.",
    tags: [
      {
        name: "react",
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
    project_link:'https://portfolio-nikhil-gupta.netlify.app/'
  },
];

export { services, technologies, experiences, testimonials, projects };