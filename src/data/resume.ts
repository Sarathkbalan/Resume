import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  personal: {
    name: 'SARATH K BALAN',
    title: 'MERN Stack Developer',
    phone: '+91 7907711851',
    email: 'sarathkbalan30@gmail.com',
    location: 'Kerala, India',
    linkedin: 'https://linkedin.com/in/sarath-k-balan',
    github: 'https://github.com/Sarathkbalan',
    status: 'AVAILABLE FOR OPPORTUNITIES',
    shortBio: 'Full-Stack MERN Developer specializing in production web apps, REST APIs, AI-assisted workflows, and modern web architectures.',
    summary:
      'Full-Stack MERN Developer with professional experience building production web applications using MongoDB, Express.js, React.js, and Node.js at TrackGenesis. Skilled in REST API design, authentication/authorization, reusable UI components, and AI-assisted feature integration. Comfortable working across the stack, from database schema and backend services to responsive React interfaces. Also experienced with React Native, NestJS, and blockchain (Solidity/Ethereum), with a growing background in the Microsoft stack (C#, ASP.NET Core, SQL Server).',
  },

  skills: [
    {
      title: 'Frontend Development',
      key: 'frontend',
      icon: 'Layout',
      description: 'Crafting responsive, high-performance interfaces with state management and reusable component architecture.',
      skills: [
        'React.js',
        'React Native',
        'Redux/Context patterns',
        'Responsive UI Design',
        'HTML5',
        'CSS3',
      ],
    },
    {
      title: 'Backend & APIs',
      key: 'backend',
      icon: 'Server',
      description: 'Architecting scalable server-side systems, secure authentication pipelines, and robust REST APIs.',
      skills: [
        'Node.js',
        'Express.js',
        'NestJS',
        'REST API Design',
        'Authentication & Authorization (JWT)',
      ],
    },
    {
      title: 'Database Management',
      key: 'database',
      icon: 'Database',
      description: 'Designing data schemas, document storage, and relational database queries.',
      skills: ['MongoDB', 'SQL Server'],
    },
    {
      title: 'Programming Languages',
      key: 'languages',
      icon: 'Code',
      description: 'Multi-paradigm programming across modern web, enterprise, and decentralized stacks.',
      skills: ['JavaScript', 'C#', 'Python', 'Solidity'],
    },
    {
      title: 'AI & LLM Integration',
      key: 'ai',
      icon: 'Sparkles',
      description: 'Augmenting software workflows with AI APIs, prompt engineering, and intelligent automation.',
      skills: [
        'LLM Integration',
        'AI APIs',
        'Prompt Engineering',
        'AI-Assisted Feature Development',
        'Automation',
      ],
    },
    {
      title: 'Tools & Engineering Practices',
      key: 'tools',
      icon: 'Wrench',
      description: 'Professional engineering standards, version control, containerization, and agile execution.',
      skills: [
        'Git',
        'GitHub',
        'Docker',
        'Postman',
        'Swagger',
        'VS Code',
        'OOP',
        'Clean Architecture',
        'Agile',
      ],
    },
    {
      title: 'Blockchain Engineering',
      key: 'blockchain',
      icon: 'Boxes',
      description: 'Decentralized application engineering, smart contracts, Web3 wallet integration, and distributed storage.',
      skills: [
        'Ethereum',
        'Solidity',
        'Hardhat',
        'Ethers.js',
        'IPFS',
        'Hyperledger Fabric',
      ],
    },
  ],

  experience: [
    {
      id: 'trackgenesis',
      role: 'MERN Software Developer',
      company: 'TrackGenesis',
      period: '2025 – Present',
      current: true,
      description: [
        'Developed full-stack web applications using React.js, Node.js, Express.js, MongoDB, and REST APIs, covering both client-side interfaces and server-side services.',
        'Built reusable, component-based UI features in React.js and implemented backend APIs, authentication, authorization, and database-driven functionality.',
        'Worked with NestJS and React Native to extend features across web and mobile, and integrated AI-assisted functionality into dashboards, automation, and scheduling workflows.',
        'Collaborated across the stack on feature design, debugging, and performance improvements in an Agile team environment.',
      ],
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'NestJS',
        'React Native',
        'REST APIs',
        'AI Integration',
        'Agile',
      ],
      highlights: [
        'Production Full-Stack Deployment',
        'Cross-Platform Web & Mobile (NestJS & React Native)',
        'AI-Assisted Dashboards & Scheduling Workflows',
        'Agile Collaboration & Performance Optimization',
      ],
    },
  ],

  projects: [
    {
      id: 'energy-trading-platform',
      title: 'Energy Trading Platform',
      category: 'Full-Stack & AI',
      subtitle: 'Marketplace with automated scheduling and AI-generated insights',
      tags: ['React', 'Node.js', 'MongoDB', 'AI Integration', 'REST APIs', 'Role-Based Dashboards'],
      domain: 'ai',
      overview:
        'A comprehensive decentralized energy marketplace platform catering to distinct ecosystem participants: consumer, prosumer, and generator roles.',
      features: [
        'Built an energy marketplace with consumer, prosumer, and generator roles using React, Node.js, and MongoDB.',
        'Developed role-based dashboards tailored for energy usage tracking and generator monitoring.',
        'Engineered marketplace and rate-management features enabling transparent energy trading.',
        'Integrated automated scheduling and AI-generated insights for usage patterns and pricing optimization.',
      ],
      architecture: [
        'Frontend: React.js role-based dashboard system with real-time rate visualization',
        'Backend: Node.js & Express RESTful services with automated scheduling engines',
        'Database: MongoDB schema modeling for multi-tenant accounts, transactions, and meter telemetry',
        'AI Services: Intelligent pattern analysis and rate recommendation algorithms',
      ],
      githubUrl: 'https://github.com/Sarathkbalan',
    },
    {
      id: 'certificate-application-system',
      title: 'Certificate Application System',
      category: 'Web3 & Decentralized App',
      subtitle: 'Decentralized verification dApp with Ethereum, IPFS, and MetaMask',
      tags: ['React', 'Solidity', 'Ethereum', 'Hardhat', 'Ethers.js', 'IPFS', 'MetaMask', 'Sepolia'],
      domain: 'blockchain',
      overview:
        'A decentralized certificate verification and issuance decentralized application (dApp) preventing credential fraud through cryptographic immutability.',
      features: [
        'Built a decentralized certificate verification dApp with a responsive React front end.',
        'Engineered tamper-proof smart contracts using Solidity and tested via Hardhat framework.',
        'Integrated Ethers.js and MetaMask for secure client-side Web3 wallet signatures and transactions.',
        'Implemented IPFS for decentralized immutable document storage and metadata persistence.',
        'Successfully deployed and verified on the Ethereum Sepolia testnet.',
      ],
      architecture: [
        'Frontend: React.js with Web3 provider state management and MetaMask transaction listeners',
        'Smart Contracts: Solidity contracts for decentralized hashing and credential verification',
        'Development Stack: Hardhat compile, test, and Sepolia deployment scripts',
        'Storage: IPFS distributed content-addressable file storage',
      ],
      githubUrl: 'https://github.com/Sarathkbalan',
    },
    {
      id: 'plant-selling-inventory-platform',
      title: 'Plant Selling & Inventory Management Platform',
      category: 'Enterprise Full-Stack',
      subtitle: 'E-commerce platform with customer, seller, and admin RBAC',
      tags: ['React', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'JWT Auth', 'RBAC'],
      domain: 'web',
      overview:
        'A full-stack enterprise e-commerce and multi-role inventory management system with robust security and relational data integrity.',
      features: [
        'Developed the responsive React front end for a full-stack e-commerce and supply inventory platform.',
        'Engineered role-based views and actions for customer, seller, and admin tiers.',
        'Consumed and integrated REST APIs for plant listings, cart processing, orders, and stock inventory.',
        'Implemented secure JWT-based authentication and role-based authorization (RBAC) across the entire application.',
      ],
      architecture: [
        'Frontend: React.js component architecture with modular shopping cart and inventory management panels',
        'Backend Services: ASP.NET Core REST API endpoints handling transactional business logic',
        'Database: Microsoft SQL Server with relational schemas, foreign key constraints, and inventory tracking',
        'Security: JSON Web Token (JWT) stateless auth with role-based claim verification',
      ],
      githubUrl: 'https://github.com/Sarathkbalan',
    },
  ],

  education: [
    {
      id: 'kba-diploma',
      degree: 'Diploma in Blockchain',
      institution: 'Kerala Blockchain Academy',
      period: '2024 – 2025',
      details:
        'Specialized curriculum in distributed ledger technologies, Ethereum smart contracts, decentralized architectures, and enterprise blockchain frameworks.',
    },
    {
      id: 'cet-btech',
      degree: 'B.Tech in Industrial Engineering',
      institution: 'College of Engineering, Trivandrum',
      period: '2017 – 2021',
      cgpa: '7.09',
      details:
        'Comprehensive engineering foundation covering system optimization, workflow automation, quantitative modeling, and analytical problem-solving.',
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      name: 'Developer Essentials for Blockchain',
      issuer: 'Kerala Blockchain Academy',
      domain: 'Blockchain & Smart Contracts',
    },
    {
      id: 'cert-2',
      name: 'AI Fundamentals and the Cloud',
      issuer: 'AWS',
      domain: 'Cloud & AI Foundations',
    },
    {
      id: 'cert-3',
      name: 'Generative AI: Elevate Your Software Development Career',
      issuer: 'IBM',
      domain: 'Generative AI & Software Engineering',
    },
    {
      id: 'cert-4',
      name: 'Machine Learning with Python',
      issuer: 'IBM',
      domain: 'Machine Learning & Python',
    },
    {
      id: 'cert-5',
      name: 'AI for Research and Insights',
      issuer: 'Google',
      domain: 'AI Research & Data Insights',
    },
    {
      id: 'cert-6',
      name: 'AI for Brainstorming and Planning',
      issuer: 'Google',
      domain: 'AI Planning & System Strategy',
    },
  ],
};
