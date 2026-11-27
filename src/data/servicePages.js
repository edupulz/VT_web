import { MOBILE_APPS, PORTFOLIO_PROJECTS } from './portfolio';

import serviceEcommerceImg from '../assets/images/service-ecommerce.jpg';
import ecommerceWhyImg from '../assets/images/ecommerce-why.jpg';

import serviceWebImg from '../assets/images/service-web.jpg';
import webWhyImg from '../assets/images/web-why.jpg';

import serviceCloudImg from '../assets/images/service-cloud.jpg';
import cloudWhyImg from '../assets/images/cloud-why.jpg';

import serviceCustomImg from '../assets/images/service-custom-software.jpg';
import customWhyImg from '../assets/images/custom-why.jpg';

import serviceMarketingImg from '../assets/images/service-marketing.jpg';
import marketingWhyImg from '../assets/images/marketing-why.jpg';

import serviceAiImg from '../assets/images/service-ai.jpg';
import aiWhyImg from '../assets/images/ai-why.jpg';

const portfolioById = Object.fromEntries(PORTFOLIO_PROJECTS.map((item) => [item.id, item]));
const mobileAppByName = Object.fromEntries(MOBILE_APPS.map((item) => [item.name, item]));

export const SERVICE_PAGES = {
  'ecommerce-solutions': {
    eyebrow: 'ECOMMERCE DEVELOPMENT',
    metaTitle: 'eCommerce Solutions | Vijayan Tech',
    metaDescription:
      'Create an online store that makes selling simple and shopping effortless. We develop secure, scalable eCommerce platforms with seamless product discovery, checkout, and management experiences.',
    hero: {
      headline: 'Build Your Online Store. Grow Your Business.',
      description:
        'Create an online store that makes selling simple and shopping effortless. We develop secure, scalable eCommerce platforms with seamless product discovery, checkout, and management experiences.',
      primaryCta: 'Launch Your Online Store',
      secondaryCta: 'Explore Solutions',
      image: serviceEcommerceImg,
      imageAlt: 'Modern eCommerce storefront and online shopping platform',
    },
    overview: {
      heading: 'Complete eCommerce Solutions for Your Business.',
      description:
        'From launching a new online store to improving an existing platform, we build eCommerce solutions that support your products, customers, and business operations.',
      items: [
        {
          iconName: 'ShoppingBag',
          title: 'Custom eCommerce Development',
          description: 'Build tailored online stores around your products and business model.',
        },
        {
          iconName: 'Building2',
          title: 'B2B & B2C eCommerce',
          description: 'Create digital marketplaces for business and consumer transactions.',
        },
        {
          iconName: 'ShoppingCart',
          title: 'Shopping Cart Development',
          description: 'Deliver intuitive cart and checkout experiences.',
        },
        {
          iconName: 'CreditCard',
          title: 'Payment Gateway Integration',
          description: 'Enable secure payment processing through suitable payment providers.',
        },
        {
          iconName: 'Package',
          title: 'Inventory & Order Integration',
          description: 'Connect stock, orders, and fulfilment workflows.',
        },
        {
          iconName: 'RefreshCw',
          title: 'eCommerce Redesign',
          description: 'Modernise your store with improved usability and functionality.',
        },
      ],
    },
    expertise: {
      heading: 'Every Detail of Your Store, Connected.',
      description:
        'We bring together the essential technologies and functionalities required to create a complete online shopping experience.',
      items: [
        { iconName: 'Store', label: 'Custom Storefront Architecture' },
        { iconName: 'Layers', label: 'Product Catalogue & Variant Management' },
        { iconName: 'ShoppingCart', label: 'Cart & Checkout Workflows' },
        { iconName: 'CreditCard', label: 'Payment API Integration' },
        { iconName: 'Package', label: 'Order & Inventory Synchronisation' },
        { iconName: 'Truck', label: 'Shipping & Delivery API Integration' },
        { iconName: 'Users', label: 'Customer Accounts & Authentication' },
        { iconName: 'BarChart3', label: 'Sales Reporting & Analytics Integration' },
      ],
    },
    whyChoose: {
      heading: 'Built to Sell. Ready to Scale.',
      image: ecommerceWhyImg,
      imageAlt: 'Online retail checkout and digital commerce experience',
      items: [
        {
          title: 'Shopping Experience',
          description: 'Make product discovery and purchasing simple.',
        },
        {
          title: 'Reliable Checkout',
          description: 'Create convenient and dependable payment journeys.',
        },
        {
          title: 'Operational Control',
          description: 'Manage products, stock, and orders efficiently.',
        },
        {
          title: 'Mobile Commerce',
          description: 'Deliver consistent experiences across devices.',
        },
        {
          title: 'Business Flexibility',
          description: 'Adapt your store as products and requirements evolve.',
        },
        {
          title: 'Connected Operations',
          description: 'Integrate the tools and platforms your business needs.',
        },
      ],
    },
    projects: {
      heading: 'Online Stores Built for Business Growth.',
      description:
        'Explore eCommerce experiences designed to simplify online shopping and improve digital retail operations.',
      ctaLabel: 'View Project',
      items: [
        {
          name: portfolioById['minkavi-books'].title,
          category: portfolioById['minkavi-books'].category,
          badges: ['B2C Storefront'],
          image: portfolioById['minkavi-books'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Key Functionalities',
              text: portfolioById['minkavi-books'].description,
            },
          ],
          technologies: ['React', 'Node.js', 'Razorpay', 'PostgreSQL'],
        },
        {
          name: portfolioById['jineto-accessories'].title,
          category: portfolioById['jineto-accessories'].category,
          badges: ['Retail Storefront'],
          image: portfolioById['jineto-accessories'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Key Functionalities',
              text: portfolioById['jineto-accessories'].description,
            },
          ],
          technologies: ['React', 'Tailwind CSS', 'REST APIs', 'SEO'],
        },
        {
          name: portfolioById['pacxim-packaging'].title,
          category: portfolioById['pacxim-packaging'].category,
          badges: ['B2B Portal'],
          image: portfolioById['pacxim-packaging'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Key Functionalities',
              text: portfolioById['pacxim-packaging'].description,
            },
          ],
          technologies: ['TypeScript', 'CMS', 'Enquiry Flow', 'Cloudflare'],
        },
      ],
    },
    faqs: [
      {
        question: 'Can you build a custom eCommerce website?',
        answer:
          'Yes. We develop customised online stores based on your products, business model, and functional requirements.',
      },
      {
        question: 'Can you integrate online payment gateways?',
        answer:
          'Yes. We can integrate suitable payment gateways to support secure and convenient online transactions.',
      },
      {
        question: 'Can I manage products and orders myself?',
        answer:
          'Yes. We can develop an administration dashboard to manage products, inventory, orders, and customer information.',
      },
      {
        question: 'Will my online store be mobile-friendly?',
        answer:
          'Yes. We build responsive eCommerce platforms for smartphones, tablets, and desktops.',
      },
      {
        question: 'Can you redesign my existing online store?',
        answer:
          "Yes. We can improve your existing store's design, functionality, performance, and user experience.",
      },
    ],
  },

  'website-development': {
    eyebrow: 'WEBSITE DEVELOPMENT',
    metaTitle: 'Website Development | Vijayan Tech',
    metaDescription:
      'Create a powerful online presence with a website designed around your brand and business goals. We combine thoughtful design, modern development, and reliable performance to turn visitors into customers.',
    hero: {
      headline: 'Websites That Make Your Brand Stand Out.',
      description:
        'Create a powerful online presence with a website designed around your brand and business goals. We combine thoughtful design, modern development, and reliable performance to turn visitors into customers.',
      primaryCta: 'Start Your Website Project',
      secondaryCta: 'Explore Our Work',
      image: serviceWebImg,
      imageAlt: 'Modern responsive website design and development',
    },
    overview: {
      heading: 'Complete Website Solutions for Every Business.',
      description:
        'Whether you need a professional business website or a custom digital platform, we create websites that communicate your brand and support your business objectives.',
      items: [
        {
          iconName: 'Globe',
          title: 'Business Website Development',
          description: 'Establish your online presence with a professional, engaging website.',
        },
        {
          iconName: 'Building2',
          title: 'Corporate Website Development',
          description: 'Build structured digital platforms for organisations and enterprises.',
        },
        {
          iconName: 'Code2',
          title: 'Custom Web Application Development',
          description: 'Develop interactive applications tailored to your business workflows.',
        },
        {
          iconName: 'MonitorSmartphone',
          title: 'Responsive Web Design',
          description: 'Create seamless experiences across desktops, tablets, and mobile devices.',
        },
        {
          iconName: 'ShoppingBag',
          title: 'eCommerce Website Development',
          description: 'Launch user-friendly online stores for digital selling.',
        },
        {
          iconName: 'Wrench',
          title: 'Website Redesign & Maintenance',
          description: 'Refresh existing websites and keep them performing reliably.',
        },
      ],
    },
    expertise: {
      heading: 'Everything Behind a High-Performing Website.',
      description:
        'From the first interface to the underlying architecture, we build the essential components of a modern website.',
      items: [
        { iconName: 'Palette', label: 'UI/UX Design & Prototyping' },
        { iconName: 'Code2', label: 'Frontend Development' },
        { iconName: 'Server', label: 'Backend Development' },
        { iconName: 'MonitorSmartphone', label: 'Responsive & Mobile-First Layouts' },
        { iconName: 'FileText', label: 'CMS Integration & Management' },
        { iconName: 'Database', label: 'Database Design & Integration' },
        { iconName: 'Search', label: 'SEO-Friendly Website Architecture' },
        { iconName: 'Zap', label: 'Website Speed & Performance Optimisation' },
      ],
    },
    whyChoose: {
      heading: 'Designed for People. Built for Performance.',
      image: webWhyImg,
      imageAlt: 'High-speed responsive web engineering',
      items: [
        {
          title: 'Brand-Led Design',
          description: 'Reflect your identity through a consistent digital experience.',
        },
        {
          title: 'Intuitive Navigation',
          description: 'Help visitors find information effortlessly.',
        },
        {
          title: 'Performance Optimisation',
          description: 'Reduce unnecessary loading delays and improve usability.',
        },
        {
          title: 'Search Visibility',
          description: 'Follow SEO-friendly development practices.',
        },
        {
          title: 'Future-Ready Architecture',
          description: 'Make room for new features and functionality.',
        },
        {
          title: 'Ongoing Assistance',
          description: 'Access maintenance and technical support options.',
        },
      ],
    },
    projects: {
      heading: "Digital Experiences We've Built.",
      description:
        'Explore website solutions and digital experiences created to solve business challenges and strengthen online presence.',
      ctaLabel: 'View Project',
      items: [
        {
          name: portfolioById['green-synergy'].title,
          category: portfolioById['green-synergy'].category,
          badges: ['Corporate Web'],
          image: portfolioById['green-synergy'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Overview',
              text: portfolioById['green-synergy'].description,
            },
          ],
          technologies: ['React', 'Tailwind CSS', 'Vite', 'Node.js'],
        },
        {
          name: portfolioById['nobel-power'].title,
          category: portfolioById['nobel-power'].category,
          badges: ['Engineering Web'],
          image: portfolioById['nobel-power'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Overview',
              text: portfolioById['nobel-power'].description,
            },
          ],
          technologies: ['React', 'TypeScript', 'CMS', 'SEO'],
        },
        {
          name: portfolioById['anugraha-school'].title,
          category: portfolioById['anugraha-school'].category,
          badges: ['Institutional'],
          image: portfolioById['anugraha-school'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Overview',
              text: portfolioById['anugraha-school'].description,
            },
          ],
          technologies: ['React', 'PostgreSQL', 'REST API', 'Cloudflare'],
        },
      ],
    },
    faqs: [
      {
        question: 'How long does it take to develop a website?',
        answer:
          'The timeline depends on the complexity, features, and requirements. A standard business website generally takes a few weeks, while larger custom platforms may require more time.',
      },
      {
        question: 'Will my website work on mobile devices?',
        answer:
          'Yes. We follow responsive and mobile-first design principles to ensure your website works across different screen sizes.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer:
          "Yes. We can modernise your website's design, improve its functionality, and optimise its overall performance.",
      },
      {
        question: 'Will my website be SEO-friendly?',
        answer:
          'We implement SEO-friendly structures, metadata, responsive layouts, and performance optimisations to support search engine visibility.',
      },
      {
        question: 'Do you provide website maintenance?',
        answer:
          'Yes. Maintenance and support options can be discussed based on your website requirements.',
      },
    ],
    customCta: {
      headline: 'Ready to Build a Website That Works for Your Business?',
      description:
        "Let's transform your ideas into a powerful digital experience. Partner with VIJAYANTECH to create a website that makes a lasting impression.",
      primaryLabel: "Let's Build Your Website",
      secondaryLabel: 'Talk to Our Team',
    },
  },

  'cloud-solutions': {
    eyebrow: 'CLOUD SOLUTIONS',
    metaTitle: 'Cloud Solutions | Vijayan Tech',
    metaDescription:
      'Modernise your IT infrastructure with flexible cloud technology. We help businesses migrate workloads, connect applications, and manage cloud environments designed around their operational needs.',
    hero: {
      headline: 'Power Your Business with Smarter Cloud Solutions.',
      description:
        'Modernise your IT infrastructure with flexible cloud technology. We help businesses migrate workloads, connect applications, and manage cloud environments designed around their operational needs.',
      primaryCta: 'Explore Cloud Solutions',
      secondaryCta: 'Talk to Our Experts',
      image: serviceCloudImg,
      imageAlt: 'Cloud computing infrastructure and server architecture',
    },
    overview: {
      heading: 'Cloud Infrastructure Built Around Your Needs.',
      description:
        'From cloud migration to ongoing infrastructure management, we help businesses adopt and maintain cloud environments that support their operations.',
      items: [
        {
          iconName: 'CloudUpload',
          title: 'Cloud Migration',
          description: 'Move applications, data, and workloads to suitable cloud environments.',
        },
        {
          iconName: 'Server',
          title: 'Cloud Infrastructure Development',
          description: 'Design and configure infrastructure for changing business demands.',
        },
        {
          iconName: 'Cloud',
          title: 'Cloud-Native Application Development',
          description: 'Build applications designed to operate in cloud environments.',
        },
        {
          iconName: 'Database',
          title: 'Cloud Storage & Backup',
          description: 'Implement data storage, backup, and recovery solutions.',
        },
        {
          iconName: 'Plug',
          title: 'Cloud Integration',
          description: 'Connect cloud applications with existing business systems.',
        },
        {
          iconName: 'Activity',
          title: 'Cloud Management & Support',
          description: 'Monitor, maintain, and optimise cloud environments.',
        },
      ],
    },
    expertise: {
      heading: 'Engineering Reliable Cloud Environments.',
      description:
        'Our cloud capabilities cover the architecture, deployment, and operational components required to manage modern infrastructure.',
      items: [
        { iconName: 'Layers', label: 'Cloud Architecture & Infrastructure Planning' },
        { iconName: 'Cloud', label: 'AWS & Microsoft Azure Implementation' },
        { iconName: 'CloudUpload', label: 'Cloud Migration & Workload Deployment' },
        { iconName: 'Database', label: 'Database & Storage Configuration' },
        { iconName: 'Settings', label: 'Infrastructure as Code & Automation' },
        { iconName: 'Server', label: 'Application Containerisation' },
        { iconName: 'ShieldCheck', label: 'Identity & Access Management' },
        { iconName: 'Activity', label: 'Cloud Monitoring & Cost Optimisation' },
      ],
    },
    whyChoose: {
      heading: 'Flexible Infrastructure. Greater Business Control.',
      image: cloudWhyImg,
      imageAlt: 'Scalable cloud servers and infrastructure operations',
      items: [
        {
          title: 'Adaptable Resources',
          description: 'Adjust infrastructure according to workload requirements.',
        },
        {
          title: 'Anywhere Accessibility',
          description: 'Enable access to supported applications and resources from different locations.',
        },
        {
          title: 'Resource Efficiency',
          description: 'Align infrastructure choices with actual usage.',
        },
        {
          title: 'Operational Continuity',
          description: 'Plan for backup, recovery, and service availability.',
        },
        {
          title: 'Security Management',
          description: 'Apply suitable access controls and security configurations.',
        },
        {
          title: 'Ongoing Optimisation',
          description: 'Improve cloud environments as business requirements change.',
        },
      ],
    },
    projects: {
      heading: 'Cloud Solutions That Enable Growth.',
      description:
        'Discover cloud infrastructure and application solutions designed to improve accessibility, scalability, and operational efficiency.',
      ctaLabel: 'View Project',
      items: [
        {
          name: mobileAppByName['Smart School ERP'].name,
          category: mobileAppByName['Smart School ERP'].category,
          badges: ['Cloud ERP'],
          image: mobileAppByName['Smart School ERP'].image,
          to: '/products/school-erp',
          details: [
            {
              label: 'Challenge',
              text: 'Schools needed multi-campus cloud access for admissions, attendance, and fee records.',
            },
            {
              label: 'Solution',
              text: 'Scalable cloud-hosted ERP uniting web dashboards and mobile apps in real time.',
            },
          ],
          technologies: ['AWS ECS', 'PostgreSQL', 'Node.js', 'CloudFront'],
        },
        {
          name: mobileAppByName['Parent App for Smart School ERP'].name,
          category: mobileAppByName['Parent App for Smart School ERP'].category,
          badges: ['Real-Time Sync'],
          image: mobileAppByName['Parent App for Smart School ERP'].image,
          to: '/portfolio',
          details: [
            {
              label: 'Challenge',
              text: 'Instant delivery of student attendance, homework, and fee alerts to thousands of parents.',
            },
            {
              label: 'Solution',
              text: 'Cloud messaging pipelines and role-based APIs synced with school ERP records.',
            },
          ],
          technologies: ['Firebase', 'REST APIs', 'Docker', 'CI/CD'],
        },
        {
          name: mobileAppByName['Load Tracker'].name,
          category: mobileAppByName['Load Tracker'].category,
          badges: ['Cloud Fleet'],
          image: mobileAppByName['Load Tracker'].image,
          to: '/products/load-tracker',
          details: [
            {
              label: 'Challenge',
              text: 'Dispatch teams lacked centralized visibility across active vehicles and deliveries.',
            },
            {
              label: 'Solution',
              text: 'Always-on cloud tracking backend synchronizing drivers, loads, and delivery status.',
            },
          ],
          technologies: ['AWS', 'Go', 'PostgreSQL', 'Cloud Monitoring'],
        },
      ],
    },
    faqs: [
      {
        question: 'What are cloud solutions?',
        answer:
          'Cloud solutions allow businesses to access computing resources, storage, applications, and infrastructure through cloud platforms.',
      },
      {
        question: 'Can you migrate our existing systems to the cloud?',
        answer:
          'Yes. We can assess your existing infrastructure and plan a suitable cloud migration strategy.',
      },
      {
        question: 'Which cloud platforms do you support?',
        answer:
          'We can work with platforms such as AWS and Microsoft Azure, depending on project requirements.',
      },
      {
        question: 'Are cloud solutions suitable for small businesses?',
        answer:
          'Yes. Cloud infrastructure can be designed to suit businesses of different sizes and operational requirements.',
      },
      {
        question: 'Do you provide cloud maintenance and support?',
        answer:
          'Yes. We can assist with cloud monitoring, maintenance, optimisation, and technical support.',
      },
    ],
    ctaSecondaryLabel: 'Consult Our Team',
  },

  'custom-software-development': {
    eyebrow: 'CUSTOM SOFTWARE DEVELOPMENT',
    metaTitle: 'Custom Software Development | Vijayan Tech',
    metaDescription:
      'Simplify complex operations with software built for the way your business works. We develop tailored applications that connect processes, automate workflows, and address your specific operational challenges.',
    hero: {
      headline: 'Software Solutions Designed Around Your Business.',
      description:
        'Simplify complex operations with software built for the way your business works. We develop tailored applications that connect processes, automate workflows, and address your specific operational challenges.',
      primaryCta: 'Build Your Custom Solution',
      secondaryCta: 'Discuss Your Requirements',
      image: serviceCustomImg,
      imageAlt: 'Custom software engineering and enterprise code architecture',
    },
    overview: {
      heading: 'Software Built Around the Way You Work.',
      description:
        'Every organisation has different operational needs. We develop custom software that brings your processes, people, and business systems together.',
      items: [
        {
          iconName: 'Building2',
          title: 'Enterprise Software Development',
          description: 'Build business applications for complex organisational operations.',
        },
        {
          iconName: 'Workflow',
          title: 'Business Process Automation',
          description: 'Streamline repetitive tasks and manual workflows.',
        },
        {
          iconName: 'Users',
          title: 'CRM Development',
          description: 'Manage customer relationships, interactions, and sales processes.',
        },
        {
          iconName: 'Layers',
          title: 'ERP Solutions',
          description: 'Connect business functions through integrated management systems.',
        },
        {
          iconName: 'Plug',
          title: 'API Development & Integration',
          description: 'Enable communication between applications and services.',
        },
        {
          iconName: 'RefreshCw',
          title: 'Software Modernisation',
          description: 'Upgrade legacy applications to meet evolving business requirements.',
        },
      ],
    },
    expertise: {
      heading: 'From Business Logic to Working Software.',
      description:
        'We combine software engineering and system architecture to create applications that support your day-to-day business operations.',
      items: [
        { iconName: 'Layers', label: 'Custom Application Architecture' },
        { iconName: 'Code2', label: 'Enterprise Application Development' },
        { iconName: 'Building2', label: 'ERP & CRM Customisation' },
        { iconName: 'Workflow', label: 'Workflow & Process Automation' },
        { iconName: 'Database', label: 'Database Architecture & Management' },
        { iconName: 'Plug', label: 'REST API Development & Integration' },
        { iconName: 'RefreshCw', label: 'Legacy Application Modernisation' },
        { iconName: 'ShieldCheck', label: 'Software Testing & Quality Assurance' },
      ],
    },
    whyChoose: {
      heading: 'Technology That Solves Real Business Challenges.',
      image: customWhyImg,
      imageAlt: 'Software engineering team collaborating on custom architecture',
      items: [
        {
          title: 'Purpose-Built Development',
          description: 'Align software functionality with your actual business processes.',
        },
        {
          title: 'Operational Efficiency',
          description: 'Reduce unnecessary manual work through automation.',
        },
        {
          title: 'Connected Systems',
          description: 'Integrate applications and existing business tools.',
        },
        {
          title: 'Flexible Architecture',
          description: 'Adapt applications as requirements evolve.',
        },
        {
          title: 'Reliable Engineering',
          description: 'Follow structured development and testing practices.',
        },
        {
          title: 'Continuous Improvement',
          description: 'Support future enhancements and technical upgrades.',
        },
      ],
    },
    projects: {
      heading: 'Custom Solutions. Real Business Impact.',
      description:
        'Explore software solutions designed to improve workflows, connect business operations, and solve industry-specific challenges.',
      ctaLabel: 'View Project',
      items: [
        {
          name: mobileAppByName['Smart School ERP'].name,
          category: mobileAppByName['Smart School ERP'].category,
          badges: ['Custom ERP'],
          image: mobileAppByName['Smart School ERP'].image,
          to: '/products/school-erp',
          details: [
            {
              label: 'Problem',
              text: 'Fragmented spreadsheets for admissions, fees, attendance, and exam reporting.',
            },
            {
              label: 'Custom Features',
              text: 'Role-based admin, automated fee receipts, and instant parent alerts.',
            },
          ],
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Flutter'],
        },
        {
          name: mobileAppByName['Load Tracker'].name,
          category: mobileAppByName['Load Tracker'].category,
          badges: ['Logistics System'],
          image: mobileAppByName['Load Tracker'].image,
          to: '/products/load-tracker',
          details: [
            {
              label: 'Problem',
              text: 'Manual dispatch logs delayed shipment updates and vehicle coordination.',
            },
            {
              label: 'Custom Features',
              text: 'End-to-end load assignment, driver tracking, and delivery confirmation reports.',
            },
          ],
          technologies: ['TypeScript', 'React', 'REST APIs', 'AWS'],
        },
        {
          name: mobileAppByName['ePooja Booking'].name,
          category: mobileAppByName['ePooja Booking'].category,
          badges: ['Booking Platform'],
          image: mobileAppByName['ePooja Booking'].image,
          to: '/products/epooja-booking',
          details: [
            {
              label: 'Problem',
              text: 'Manual temple pooja reservations and scattered devotee scheduling records.',
            },
            {
              label: 'Custom Features',
              text: 'Online seva booking, slot scheduling, digital payments, and admin reporting.',
            },
          ],
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Payment API'],
        },
      ],
    },
    faqs: [
      {
        question: 'What is custom software development?',
        answer:
          "Custom software development involves creating applications specifically designed around an organisation's processes, requirements, and business objectives.",
      },
      {
        question: 'Can you develop software based on my business idea?',
        answer:
          'Yes. We can understand your idea, define the requirements, and develop a suitable software solution.',
      },
      {
        question: 'Can custom software integrate with existing systems?',
        answer:
          'Yes. We can develop APIs and integrations to connect compatible applications and databases.',
      },
      {
        question: 'How long does custom software development take?',
        answer:
          "The timeline depends on the software's complexity, features, integrations, and project scope.",
      },
      {
        question: 'Do you provide ongoing software support?',
        answer:
          'Yes. We offer support options for maintenance, bug fixes, updates, and future enhancements.',
      },
    ],
    ctaSecondaryLabel: 'Get a Consultation',
  },

  'digital-marketing': {
    eyebrow: 'DIGITAL MARKETING',
    metaTitle: 'Digital Marketing | Vijayan Tech',
    metaDescription:
      'Build a stronger digital presence with marketing strategies designed around your business goals. We combine search visibility, creative content, targeted campaigns, and performance insights.',
    hero: {
      headline: 'Grow Your Brand. Reach the Right Audience.',
      description:
        'Build a stronger digital presence with marketing strategies designed around your business goals. We combine search visibility, creative content, targeted campaigns, and performance insights to help your brand attract and engage potential customers.',
      primaryCta: 'Grow Your Business',
      secondaryCta: 'Explore Our Strategies',
      image: serviceMarketingImg,
      imageAlt: 'Digital marketing analytics and growth strategy',
    },
    overview: {
      heading: 'Strategic Digital Marketing for Business Growth.',
      description:
        'We help businesses reach relevant audiences, strengthen their online presence, and generate meaningful customer enquiries through integrated digital marketing.',
      items: [
        {
          iconName: 'Search',
          title: 'Search Engine Optimisation (SEO)',
          description: 'Improve organic visibility and attract relevant search traffic.',
        },
        {
          iconName: 'Share2',
          title: 'Social Media Marketing',
          description: 'Build brand awareness and meaningful audience engagement.',
        },
        {
          iconName: 'MousePointerClick',
          title: 'Pay-Per-Click Advertising',
          description: 'Reach targeted audiences through paid search and advertising campaigns.',
        },
        {
          iconName: 'FileText',
          title: 'Content Marketing',
          description: 'Create valuable content that informs, attracts, and engages customers.',
        },
        {
          iconName: 'Mail',
          title: 'Email Marketing',
          description: 'Communicate with customers through targeted email campaigns.',
        },
        {
          iconName: 'TrendingUp',
          title: 'Performance Marketing',
          description: 'Track campaign outcomes and optimise marketing investments.',
        },
      ],
    },
    expertise: {
      heading: 'Every Channel. One Clear Marketing Direction.',
      description:
        'We combine marketing strategy, creative execution, and performance measurement across essential digital channels.',
      items: [
        { iconName: 'Search', label: 'Technical & On-Page SEO' },
        { iconName: 'Target', label: 'Keyword Research & Search Strategy' },
        { iconName: 'MapPin', label: 'Local SEO & Business Listings' },
        { iconName: 'Share2', label: 'Social Media Strategy & Management' },
        { iconName: 'Megaphone', label: 'Google Ads & Meta Advertising' },
        { iconName: 'FileText', label: 'Content Planning & Creation' },
        { iconName: 'Users', label: 'Landing Page & Lead Generation Optimisation' },
        { iconName: 'BarChart3', label: 'Marketing Analytics & Reporting' },
      ],
    },
    whyChoose: {
      heading: 'Marketing with Purpose. Growth with Strategy.',
      image: marketingWhyImg,
      imageAlt: 'Creative digital marketing and campaign planning',
      items: [
        {
          title: 'Audience Relevance',
          description: 'Focus campaigns on the people most likely to need your services.',
        },
        {
          title: 'Insight-Led Planning',
          description: 'Use available data to guide marketing decisions.',
        },
        {
          title: 'Consistent Brand Communication',
          description: 'Maintain a recognisable voice across digital channels.',
        },
        {
          title: 'Measurable Campaigns',
          description: 'Track relevant marketing activities and outcomes.',
        },
        {
          title: 'Ongoing Refinement',
          description: 'Adjust strategies based on campaign performance.',
        },
        {
          title: 'Business Alignment',
          description: 'Connect marketing activities with your business objectives.',
        },
      ],
    },
    projects: {
      heading: 'Marketing That Makes Your Brand Visible.',
      description:
        'Explore selected marketing campaigns and digital growth initiatives that demonstrate our approach to online visibility, audience engagement, and lead generation.',
      ctaLabel: 'View Project',
      items: [
        {
          name: portfolioById['kuppanna-rice'].title,
          category: portfolioById['kuppanna-rice'].category,
          badges: ['Local SEO', 'Meta Ads'],
          image: portfolioById['kuppanna-rice'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Objective',
              text: portfolioById['kuppanna-rice'].description,
            },
            {
              label: 'Strategy & Metrics',
              text: 'Local SEO optimization and regional social campaigns driving stronger retail discovery.',
            },
          ],
          technologies: ['Google Business', 'Meta Ads', 'GA4', 'Local SEO'],
        },
        {
          name: portfolioById['akm-academy'].title,
          category: portfolioById['akm-academy'].category,
          badges: ['Google Ads', 'SEO'],
          image: portfolioById['akm-academy'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Objective',
              text: portfolioById['akm-academy'].description,
            },
            {
              label: 'Strategy & Metrics',
              text: 'High-intent search campaigns and landing page optimization for student enquiries.',
            },
          ],
          technologies: ['Google Ads', 'Search Console', 'Landing CRO', 'Analytics'],
        },
        {
          name: portfolioById['a2-sports-academy'].title,
          category: portfolioById['a2-sports-academy'].category,
          badges: ['Performance'],
          image: portfolioById['a2-sports-academy'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Objective',
              text: portfolioById['a2-sports-academy'].description,
            },
            {
              label: 'Strategy & Metrics',
              text: 'Visual social storytelling and targeted local campaigns boosting academy registrations.',
            },
          ],
          technologies: ['Meta Pixel', 'Content Strategy', 'Local SEO', 'Analytics'],
        },
      ],
    },
    faqs: [
      {
        question: 'What digital marketing services do you provide?',
        answer:
          'We provide SEO, social media marketing, paid advertising, content marketing, email marketing, and performance marketing services.',
      },
      {
        question: 'How long does SEO take to show results?',
        answer:
          'SEO is a long-term strategy. Results depend on competition, website condition, industry, and the effectiveness of the strategy.',
      },
      {
        question: 'Can you generate leads through digital marketing?',
        answer:
          'Yes. We can create targeted campaigns designed to attract potential customers and generate relevant enquiries.',
      },
      {
        question: 'Do you manage social media accounts?',
        answer:
          'Yes. We can help with social media strategy, content planning, publishing, and performance analysis.',
      },
      {
        question: 'Will I receive campaign performance reports?',
        answer:
          'Yes. Reporting can include relevant metrics such as reach, engagement, website traffic, leads, and campaign performance.',
      },
    ],
  },

  'ai-solutions': {
    eyebrow: 'ARTIFICIAL INTELLIGENCE',
    metaTitle: 'AI Solutions | Vijayan Tech',
    metaDescription:
      'Bring intelligence into your business with practical AI applications. We develop and integrate AI-powered technologies that automate tasks, simplify information processing, and help teams make more informed decisions.',
    hero: {
      headline: 'Turn Business Challenges into Intelligent Solutions.',
      description:
        'Bring intelligence into your business with practical AI applications. We develop and integrate AI-powered technologies that automate tasks, simplify information processing, and help teams make more informed decisions.',
      primaryCta: 'Explore AI Solutions',
      secondaryCta: 'Discuss Your AI Idea',
      image: serviceAiImg,
      imageAlt: 'Artificial intelligence and intelligent automation systems',
    },
    overview: {
      heading: 'Practical AI Solutions for Modern Businesses.',
      description:
        'From intelligent applications to workflow automation, we help businesses identify and implement AI capabilities that address real operational needs.',
      items: [
        {
          iconName: 'Cpu',
          title: 'AI Application Development',
          description: 'Build intelligent applications around specific business requirements.',
        },
        {
          iconName: 'MessageSquare',
          title: 'AI Chatbot Development',
          description: 'Create conversational assistants for customer and internal support.',
        },
        {
          iconName: 'Sparkles',
          title: 'Generative AI Integration',
          description: 'Incorporate generative AI capabilities into existing applications and workflows.',
        },
        {
          iconName: 'BrainCircuit',
          title: 'Machine Learning Solutions',
          description: 'Develop data-driven models for suitable prediction and classification tasks.',
        },
        {
          iconName: 'Workflow',
          title: 'AI Workflow Automation',
          description: 'Streamline repetitive processes using appropriate AI technologies.',
        },
        {
          iconName: 'Lightbulb',
          title: 'AI Consulting & Integration',
          description: 'Identify relevant AI opportunities and plan practical implementations.',
        },
      ],
    },
    expertise: {
      heading: 'Connecting Data, Intelligence, and Automation.',
      description:
        'We work with AI technologies to develop applications that process information, support interactions, and improve business workflows.',
      items: [
        { iconName: 'Cpu', label: 'Large Language Model (LLM) Integration' },
        { iconName: 'Sparkles', label: 'Generative AI Application Development' },
        { iconName: 'Database', label: 'Retrieval-Augmented Generation (RAG)' },
        { iconName: 'MessageSquare', label: 'AI Chatbot & Virtual Assistant Development' },
        { iconName: 'BrainCircuit', label: 'Machine Learning Model Integration' },
        { iconName: 'FileText', label: 'Natural Language Processing' },
        { iconName: 'Workflow', label: 'Intelligent Document Processing' },
        { iconName: 'Plug', label: 'AI APIs & Third-Party Integration' },
      ],
    },
    whyChoose: {
      heading: 'AI That Creates Meaningful Business Value.',
      image: aiWhyImg,
      imageAlt: 'Applied artificial intelligence and automation engineering',
      items: [
        {
          title: 'Problem-First Approach',
          description: 'Identify where AI can genuinely improve business operations.',
        },
        {
          title: 'Purposeful Automation',
          description: 'Apply intelligence to suitable repetitive tasks.',
        },
        {
          title: 'Context-Aware Solutions',
          description: 'Connect AI applications with relevant business information.',
        },
        {
          title: 'System Integration',
          description: 'Integrate AI capabilities into compatible existing platforms.',
        },
        {
          title: 'Responsible Implementation',
          description: 'Consider privacy, security, accuracy, and human oversight.',
        },
        {
          title: 'Adaptable Solutions',
          description: 'Design applications that can evolve with changing requirements.',
        },
      ],
    },
    projects: {
      heading: 'Intelligent Solutions. New Possibilities.',
      description:
        'Explore AI-powered applications and automation concepts designed to improve business operations and create smarter digital experiences.',
      ctaLabel: 'View Project',
      items: [
        {
          name: mobileAppByName['Smart School ERP'].name,
          category: mobileAppByName['Smart School ERP'].category,
          badges: ['Smart Analytics'],
          image: mobileAppByName['Smart School ERP'].image,
          to: '/products/school-erp',
          details: [
            {
              label: 'Challenge',
              text: 'Administrators needed faster insights from attendance, exam results, and fee data.',
            },
            {
              label: 'AI Capabilities',
              text: 'Automated student performance summaries and smart parent communication workflows.',
            },
          ],
          technologies: ['Python', 'Node.js', 'PostgreSQL', 'React'],
        },
        {
          name: mobileAppByName['Load Tracker'].name,
          category: mobileAppByName['Load Tracker'].category,
          badges: ['Route Intelligence'],
          image: mobileAppByName['Load Tracker'].image,
          to: '/products/load-tracker',
          details: [
            {
              label: 'Challenge',
              text: 'Dispatch teams needed smarter load allocation and delivery ETA visibility.',
            },
            {
              label: 'AI Capabilities',
              text: 'Predictive delivery timelines, anomaly alerts, and automated fleet reporting.',
            },
          ],
          technologies: ['Python', 'FastAPI', 'REST APIs', 'PostgreSQL'],
        },
        {
          name: portfolioById['minkavi-books'].title,
          category: portfolioById['minkavi-books'].category,
          badges: ['Smart Search'],
          image: portfolioById['minkavi-books'].image,
          imagePosition: 'object-top',
          to: '/portfolio',
          details: [
            {
              label: 'Challenge',
              text: 'Large catalog discovery across thousands of book titles and academic categories.',
            },
            {
              label: 'AI Capabilities',
              text: 'Intelligent search ranking, category tagging, and personalized book recommendations.',
            },
          ],
          technologies: ['React', 'Search Indexing', 'Recommendation Engine', 'REST API'],
        },
      ],
    },
    faqs: [
      {
        question: 'What types of AI solutions do you develop?',
        answer:
          'We develop AI-powered applications, chatbots, generative AI integrations, machine learning solutions, and workflow automation systems.',
      },
      {
        question: 'Can AI be integrated into my existing business software?',
        answer:
          'Yes. Where technically suitable, we can integrate AI capabilities into existing applications through APIs and compatible services.',
      },
      {
        question: 'Can you develop a custom AI chatbot?',
        answer:
          'Yes. We can build chatbots designed around your business information, customer interactions, and support requirements.',
      },
      {
        question: 'Does implementing AI require a large amount of data?',
        answer:
          'Not always. Data requirements depend on the AI approach. Some solutions can use existing AI models with your business information, while custom machine learning projects may require suitable datasets.',
      },
      {
        question: 'Can AI automate my business processes?',
        answer:
          'AI can assist with tasks such as document processing, information retrieval, customer support, and workflow automation, depending on your business requirements.',
      },
    ],
  },
};
