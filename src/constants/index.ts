import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  angular,
  vue,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  InTTrust,
  athens_technology_center_logo,
  Illumine_IT_Consulting,
  initiative_crm_france_logo,
  memorialkepper,
  petpals,
  weenfr,
  huzatech,
  littlespoon,
  mercari,
  bigglo_logo,
  bluesoft_logo,
  symfa_logo,
  dibruno,
  homely,
  jurat,
  dextoro,
  elevator_trips,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full stack Developer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Frontend Developer',
    companyName: 'Bigglo',
    icon: bigglo_logo,
    iconBg: '#383E56',
    date: 'Feb 2015 - Dec 2016',
    points: [
      'Maintained high-level experience in React, Angular and state management strategies, including Redux and NgRx.',
      'Incorporated chat libraries like Chart.js and D3.js to visualize investment data and analytics.',
      'Design developed and tested HTML5, CSS3, Bootstrap, jQuery and React.js that meet accessibility and web browser standards for websites',
      'Optimized the frontend using caching, code splitting and lazy loading.',
    ],
  },
  {
    title: 'FullStack Developer',
    companyName: 'BLueSoft',
    icon: bluesoft_logo,
    iconBg: '#E6DEDD',
    date: 'Jan 2017 - Dec 2021',
    points: [
      'Designed dynamic and multi-browser compatible pages using HTML5, CSS3, SASS, React.js, and Angular.',
      'Collaborated with cross-functional teams including designers, backend developers, and product managers to define project requirements and deliverables.',
      'Collaborated with UX/UI designers to translate design mockups into interactive and accessible web pages.',
      'Wrote test code using Jest, React Testing Library and Jasmine.',
    ],
  },
  {
    title: 'Senior Full Stack Developer',
    companyName: 'Symfa',
    icon: symfa_logo,
    iconBg: '#383E56',
    date: 'Feb 2022 - Apr 2023',
    points: [
      'Led collaborative efforts in designing, developing, and deploying fullstack web applications using React, Angular, Vue.js for the frontend, and Node.js, .Net for the backend.',
      'Implemented secure authentication and authorization with ASP.NET Identity while optimizing SQL Server databases using Entity Framework Core for performance and data integrity.',
      'Conducted performance optimization techniques including code splitting, lazy loading, and image optimization to enhance website speed and user experience.',
      'leveraged Three.js to create immersive 3D web experiences, skillfully manipulating models, implementing shaders, and optimizing performance for seamless rendering across platforms.',
    ],
  },

  // {
  //   title: 'Senior Software Engineer',
  //   companyName: 'Athens Technology Center',
  //   icon: athens_technology_center_logo,
  //   iconBg: '#383E56',
  //   date: 'May 2023 - Jan 2024',
  //   points: [
  //     'Led collaborative efforts in designing, developing, and deploying fullstack web applications using React, Angular, Vue.js for the frontend, and Node.js, .Net for the backend.',
  //     'Implemented secure authentication and authorization with ASP.NET Identity while optimizing SQL Server databases using Entity Framework Core for performance and data integrity.',
  //     'Conducted performance optimization techniques including code splitting, lazy loading, and image optimization to enhance website speed and user experience.',
  //     'leveraged Three.js to create immersive 3D web experiences, skillfully manipulating models, implementing shaders, and optimizing performance for seamless rendering across platforms.',
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Di Bruno Bros',
    description:
      "website is a comprehensive resource for purchasing gourmet foods, learning about the company's history and values, and accessing various services they offer.",
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'E-commerce',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: dibruno,
    sourceCodeLink: 'https://dibruno.com/',
  },
  {
    name: 'Elevate Trips',
    description:
      'Elevate Trips offers luxury travel planning services, including high-end accommodations, exclusive experiences, and personalized itineraries. The platform caters to travelers seeking customized, premium travel experiences, providing access to luxury hotels, private tours, and concierge services.',
      tags: [
      {
        name: 'Next',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'Django',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: elevator_trips,
    sourceCodeLink: 'https://www.elevatetrips.com/',
  },
  {
    name: 'Dextoro',
    description:
      'DexToro is an on-chain derivatives exchange built on Ethereum. It offers decentralized, self-custodial trading of various derivatives, including perpetual futures and options. The platform emphasizes user control, transparency, and performance without compromising security.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Next',
        color: 'orange-text-gradient',
      },
      {
        name: 'Trading',
        color: 'green-text-gradient',
      },
      {
        name: 'web3',
        color: 'pink-text-gradient',
      },
    ],
    image: dextoro,
    sourceCodeLink: 'https://www.dextoro.com/',
  },
  {
    name: 'Homely',
    description: 'Homely is a distinctive real estate platform in Australia that goes beyond just listing properties. It offers a holistic view of what it’s like to live in different suburbs, thanks to its community-driven content and comprehensive neighborhood reviews. By combining traditional property search features with rich, localized insights, Homely helps users find not only the right property but also the right community. Its user-friendly design and extensive resources make it a valuable tool for anyone looking to buy, sell, or rent a home in Australia.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'orange-text-gradient',
      },
    ],
    image: homely,
    sourceCodeLink: 'https://www.homely.com.au/'
  },
  {
    name: 'Jurat',
    description:
      'Contributed to building a layer-one blockchain network focused on legal activities on-chain. Developed innovative features for a crypto wallet on the chain.',
    tags: [
      {
        name: 'blockchain',
        color: 'blue-text-gradient',
      },
      {
        name: 'web3',
        color: 'orange-text-gradient',
      },
      {
        name: 'React',
        color: 'pink-text-gradient',
      },
      {
        name: 'Node',
        color: 'green-text-gradient',
      },
    ],
    image: jurat,
    sourceCodeLink: 'https://jurat.io',
  },
  {
    name: 'Ween.fr',
    description: `Ween is the first thermostat to save on energy cost while acting for the planet. 
    It heats your home how you like it - only when you need it whilst limiting your carbon footprint.`,
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'Nuxt',
        color: 'orange-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
      {
        name: 'Node',
        color: 'white-text-gradient',
      },
    ],
    image: weenfr,
    sourceCodeLink: 'https://www.ween.fr/en/',
  },
];

export { services, technologies, experiences, testimonials, projects };
