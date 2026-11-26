import serviceEcommerceImg from '../assets/images/service-ecommerce.jpg';
import ecommerceWhyImg from '../assets/images/ecommerce-why.jpg';
import ecommerceP1Img from '../assets/images/ecommerce-p1.jpg';
import ecommerceP2Img from '../assets/images/ecommerce-p2.jpg';
import ecommerceP3Img from '../assets/images/ecommerce-p3.jpg';

import serviceWebImg from '../assets/images/service-web.jpg';
import webWhyImg from '../assets/images/web-why.jpg';
import webP1Img from '../assets/images/web-p1.jpg';
import webP2Img from '../assets/images/web-p2.jpg';
import webP3Img from '../assets/images/web-p3.jpg';

import serviceCloudImg from '../assets/images/service-cloud.jpg';
import cloudWhyImg from '../assets/images/cloud-why.jpg';
import cloudP1Img from '../assets/images/cloud-p1.jpg';
import cloudP2Img from '../assets/images/cloud-p2.jpg';
import cloudP3Img from '../assets/images/cloud-p3.jpg';

import serviceCustomImg from '../assets/images/service-custom-software.jpg';
import customWhyImg from '../assets/images/custom-why.jpg';
import customP1Img from '../assets/images/custom-p1.jpg';
import customP2Img from '../assets/images/custom-p2.jpg';
import customP3Img from '../assets/images/custom-p3.jpg';

import serviceMarketingImg from '../assets/images/service-marketing.jpg';
import marketingWhyImg from '../assets/images/marketing-why.jpg';
import marketingP1Img from '../assets/images/marketing-p1.jpg';
import marketingP2Img from '../assets/images/marketing-p2.jpg';
import marketingP3Img from '../assets/images/marketing-p3.jpg';

import serviceAiImg from '../assets/images/service-ai.jpg';
import aiWhyImg from '../assets/images/ai-why.jpg';
import aiP1Img from '../assets/images/ai-p1.jpg';
import aiP2Img from '../assets/images/ai-p2.jpg';
import aiP3Img from '../assets/images/ai-p3.jpg';

export const SERVICE_PAGES = {
  'ecommerce-solutions': {
    eyebrow: 'eCommerce Solutions',
    metaTitle: 'eCommerce Solutions | Vijayan Tech',
    metaDescription:
      'We create powerful eCommerce platforms that make online shopping simple, secure, and seamless.',
    hero: {
      headline: 'Build Your Online Store. Grow Your Business.',
      description:
        'We create powerful eCommerce platforms that make online shopping simple, secure, and seamless. From product discovery to checkout, we build digital shopping experiences designed to increase engagement and support business growth.',
      primaryCta: 'Launch Your Online Store',
      secondaryCta: 'Explore Solutions',
      image: serviceEcommerceImg,
      imageAlt: 'Modern eCommerce storefront and online shopping platform',
    },
    overview: {
      heading: 'Everything Your Business Needs to Sell Online.',
      description:
        'We provide end-to-end eCommerce development solutions that help businesses establish, manage, and grow their online stores.',
      items: [
        {
          iconName: 'ShoppingBag',
          title: 'Custom eCommerce Development',
          description: 'Tailored online stores built around your business.',
        },
        {
          iconName: 'Building2',
          title: 'B2B & B2C Platforms',
          description: 'Solutions for business and consumer-focused selling.',
        },
        {
          iconName: 'ShoppingCart',
          title: 'Shopping Cart Development',
          description: 'Smooth and convenient shopping experiences.',
        },
        {
          iconName: 'CreditCard',
          title: 'Payment Gateway Integration',
          description: 'Secure and convenient payment processing.',
        },
        {
          iconName: 'Package',
          title: 'Inventory Management Integration',
          description: 'Simplify product and stock management.',
        },
        {
          iconName: 'RefreshCw',
          title: 'eCommerce Website Redesign',
          description: "Improve your store's design and shopping experience.",
        },
      ],
    },
    expertise: {
      heading: 'Creating Seamless Online Shopping Experiences.',
      items: [
        { iconName: 'Store', label: 'Custom Storefront Development' },
        { iconName: 'Layers', label: 'Product Catalogue Management' },
        { iconName: 'ShoppingCart', label: 'Shopping Cart & Checkout' },
        { iconName: 'CreditCard', label: 'Payment Gateway Integration' },
        { iconName: 'Package', label: 'Inventory & Order Management' },
        { iconName: 'Truck', label: 'Shipping & Delivery Integration' },
        { iconName: 'Users', label: 'Customer Account Management' },
        { iconName: 'BarChart3', label: 'Sales & Analytics Integration' },
      ],
    },
    whyChoose: {
      heading: 'Designed to Sell. Built to Scale.',
      image: ecommerceWhyImg,
      imageAlt: 'Online retail checkout and digital commerce experience',
      items: [
        {
          title: 'Conversion-Focused Design',
          description: 'Make shopping easier for customers.',
        },
        {
          title: 'Secure Transactions',
          description: 'Integrate suitable payment solutions.',
        },
        {
          title: 'Easy Management',
          description: 'Simplify products, orders, and inventory.',
        },
        {
          title: 'Mobile Shopping',
          description: 'Responsive shopping experiences.',
        },
        {
          title: 'Scalable Architecture',
          description: 'Support business expansion.',
        },
        {
          title: 'Business Integration',
          description: 'Connect relevant third-party services.',
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
          name: 'AK Fresh Market',
          category: 'D2C Grocery & Fresh Produce',
          badges: ['B2C Storefront'],
          image: ecommerceP1Img,
          details: [
            {
              label: 'Key Functionalities',
              text: 'Slot-based local delivery, quick reorder cart, and live inventory sync.',
            },
          ],
          technologies: ['React', 'Node.js', 'Razorpay', 'PostgreSQL'],
        },
        {
          name: 'A2 Sports Hub',
          category: 'Apparel & Sporting Goods',
          badges: ['Omnichannel Retail'],
          image: ecommerceP2Img,
          details: [
            {
              label: 'Key Functionalities',
              text: 'Multi-variant sizing, instant search filtering, and automated GST invoicing.',
            },
          ],
          technologies: ['Next.js', 'Shopify Plus', 'Stripe', 'Tailwind CSS'],
        },
        {
          name: 'Pacxim Wholesale',
          category: 'B2B Industrial & Packaging',
          badges: ['B2B Portal'],
          image: ecommerceP3Img,
          details: [
            {
              label: 'Key Functionalities',
              text: 'Tiered bulk pricing, dealer account portals, and ERP order synchronization.',
            },
          ],
          technologies: ['TypeScript', 'WooCommerce', 'REST APIs', 'Redis'],
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
    eyebrow: 'Website Development',
    metaTitle: 'Website Development | Vijayan Tech',
    metaDescription:
      'We design and develop modern, responsive, and high-performing websites that turn visitors into customers.',
    hero: {
      headline: 'Websites That Make Your Brand Stand Out.',
      description:
        'We design and develop modern, responsive, and high-performing websites that turn visitors into customers. From business websites to complex web applications, we create digital experiences that strengthen your brand and accelerate business growth.',
      primaryCta: 'Start Your Website Project',
      secondaryCta: 'Explore Our Work',
      image: serviceWebImg,
      imageAlt: 'Modern responsive website design and development',
    },
    overview: {
      heading: 'Complete Website Solutions for Every Business.',
      description:
        "Your website is more than an online presence. It's your digital identity. We deliver tailored website development solutions that combine creativity, functionality, and performance.",
      items: [
        {
          iconName: 'Globe',
          title: 'Business Website Development',
          description: 'Professional websites that establish your brand online.',
        },
        {
          iconName: 'Building2',
          title: 'Corporate Website Development',
          description: 'Scalable digital platforms for growing organisations.',
        },
        {
          iconName: 'Code2',
          title: 'Custom Web Application Development',
          description: 'Powerful web applications designed around your business needs.',
        },
        {
          iconName: 'MonitorSmartphone',
          title: 'Responsive Web Design',
          description: 'Seamless experiences across desktops, tablets, and mobile devices.',
        },
        {
          iconName: 'ShoppingBag',
          title: 'E-commerce Website Development',
          description: 'User-friendly online stores built to drive sales.',
        },
        {
          iconName: 'Wrench',
          title: 'Website Redesign & Maintenance',
          description: 'Modernise, optimise, and maintain your existing website.',
        },
      ],
    },
    expertise: {
      heading: 'What Makes a Powerful Website?',
      items: [
        { iconName: 'Palette', label: 'Modern UI/UX Design' },
        { iconName: 'MonitorSmartphone', label: 'Responsive & Mobile-First Development' },
        { iconName: 'Search', label: 'SEO-Friendly Architecture' },
        { iconName: 'Zap', label: 'High-Speed Performance' },
        { iconName: 'ShieldCheck', label: 'Secure Development' },
        { iconName: 'Layers', label: 'Scalable Website Architecture' },
        { iconName: 'Plug', label: 'Third-Party API Integration' },
        { iconName: 'FileText', label: 'Content Management Solutions' },
      ],
    },
    whyChoose: {
      heading: 'Built for Performance. Designed for People.',
      image: webWhyImg,
      imageAlt: 'High-speed responsive web engineering',
      items: [
        {
          title: 'Custom Design',
          description: 'Every website reflects your brand identity.',
        },
        {
          title: 'User-Focused Experience',
          description: 'Simple navigation and intuitive interfaces.',
        },
        {
          title: 'Performance Driven',
          description: 'Optimised loading speed and functionality.',
        },
        {
          title: 'SEO Ready',
          description: 'Structured to support search engine visibility.',
        },
        {
          title: 'Scalable Solutions',
          description: 'Built to grow with your business.',
        },
        {
          title: 'Reliable Support',
          description: 'Assistance beyond website launch.',
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
          name: 'Nobel Power Systems',
          category: 'Industrial & Energy',
          badges: ['Corporate Web'],
          image: webP1Img,
          details: [
            {
              label: 'Overview',
              text: 'High-speed corporate flagship with product specification catalogues and dealer enquiry routing.',
            },
          ],
          technologies: ['React', 'Tailwind CSS', 'Vite', 'Node.js'],
        },
        {
          name: 'Bharathidasan Portal',
          category: 'Higher Education',
          badges: ['Institutional'],
          image: webP2Img,
          details: [
            {
              label: 'Overview',
              text: 'Accessible, mobile-first academic portal streamlining admissions, notices, and department directories.',
            },
          ],
          technologies: ['Next.js', 'TypeScript', 'Headless CMS', 'SEO'],
        },
        {
          name: 'JL Sprockets Global',
          category: 'Precision Manufacturing',
          badges: ['B2B Showcase'],
          image: webP3Img,
          details: [
            {
              label: 'Overview',
              text: 'Modernized international product showcase built for rapid page loads and export lead capture.',
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
    eyebrow: 'Cloud Solutions',
    metaTitle: 'Cloud Solutions | Vijayan Tech',
    metaDescription:
      'Move beyond traditional infrastructure with flexible, scalable, and reliable cloud solutions.',
    hero: {
      headline: 'Power Your Business with Smarter Cloud Solutions.',
      description:
        'Move beyond traditional infrastructure with flexible, scalable, and reliable cloud solutions. We help businesses modernise their IT environments, streamline operations, and access technology without boundaries.',
      primaryCta: 'Explore Cloud Solutions',
      secondaryCta: 'Talk to Our Experts',
      image: serviceCloudImg,
      imageAlt: 'Cloud computing infrastructure and server architecture',
    },
    overview: {
      heading: 'Cloud Technology That Moves Your Business Forward.',
      description:
        'We deliver cloud solutions that simplify infrastructure management, improve accessibility, and support business continuity.',
      items: [
        {
          iconName: 'CloudUpload',
          title: 'Cloud Migration',
          description: 'Move applications, data, and workloads to suitable cloud environments.',
        },
        {
          iconName: 'Server',
          title: 'Cloud Infrastructure',
          description: 'Build flexible and scalable cloud infrastructure.',
        },
        {
          iconName: 'Cloud',
          title: 'Cloud Application Development',
          description: 'Develop applications designed for cloud environments.',
        },
        {
          iconName: 'Database',
          title: 'Cloud Storage & Backup',
          description: 'Manage and protect business data.',
        },
        {
          iconName: 'Plug',
          title: 'Cloud Integration',
          description: 'Connect applications and systems through cloud technologies.',
        },
        {
          iconName: 'Activity',
          title: 'Cloud Management & Support',
          description: 'Monitor, maintain, and optimise cloud environments.',
        },
      ],
    },
    expertise: {
      heading: 'Building a Smarter Cloud Infrastructure.',
      items: [
        { iconName: 'Layers', label: 'Cloud Architecture & Planning' },
        { iconName: 'CloudUpload', label: 'Cloud Migration & Deployment' },
        { iconName: 'Cloud', label: 'AWS & Microsoft Azure' },
        { iconName: 'Database', label: 'Cloud Storage & Database Management' },
        { iconName: 'Settings', label: 'Infrastructure Automation' },
        { iconName: 'RefreshCw', label: 'Application Modernisation' },
        { iconName: 'ShieldCheck', label: 'Cloud Security Configuration' },
        { iconName: 'Activity', label: 'Monitoring & Performance Optimisation' },
      ],
    },
    whyChoose: {
      heading: 'Flexible Infrastructure. Limitless Possibilities.',
      image: cloudWhyImg,
      imageAlt: 'Scalable cloud servers and infrastructure operations',
      items: [
        {
          title: 'Scalable Infrastructure',
          description: 'Adapt resources as your business grows.',
        },
        {
          title: 'Improved Accessibility',
          description: 'Access applications and data from supported devices and locations.',
        },
        {
          title: 'Cost Optimisation',
          description: 'Choose infrastructure based on actual business requirements.',
        },
        {
          title: 'Reliable Operations',
          description: 'Design for availability and business continuity.',
        },
        {
          title: 'Secure Configuration',
          description: 'Apply appropriate security and access controls.',
        },
        {
          title: 'Expert Assistance',
          description: 'Get support throughout your cloud journey.',
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
          name: 'Multi-Branch ERP Cloud',
          category: 'AWS Cloud Platform',
          badges: ['AWS'],
          image: cloudP1Img,
          details: [
            {
              label: 'Challenge',
              text: 'On-premise servers struggled with remote branch access and peak billing loads.',
            },
            {
              label: 'Solution',
              text: 'Zero-downtime migration to auto-scaling containers with automated daily backups.',
            },
          ],
          technologies: ['AWS ECS', 'RDS PostgreSQL', 'Terraform', 'CloudFront'],
        },
        {
          name: 'SecureDocs Archive',
          category: 'Microsoft Azure',
          badges: ['Azure'],
          image: cloudP2Img,
          details: [
            {
              label: 'Challenge',
              text: 'Dispersed file storage lacked role-based access control and audit trails.',
            },
            {
              label: 'Solution',
              text: 'Centralized encrypted blob storage with identity-based access policies.',
            },
          ],
          technologies: ['Azure Blob', 'Azure AD', 'Docker', 'CI/CD'],
        },
        {
          name: 'TelemetryOps Pipeline',
          category: 'Hybrid Cloud',
          badges: ['AWS & Docker'],
          image: cloudP3Img,
          details: [
            {
              label: 'Challenge',
              text: 'Manual deployments caused downtime and slow incident visibility.',
            },
            {
              label: 'Solution',
              text: 'Automated GitOps pipelines and real-time health monitoring dashboards.',
            },
          ],
          technologies: ['Kubernetes', 'GitHub Actions', 'Prometheus', 'Node.js'],
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
    eyebrow: 'Custom Software Development',
    metaTitle: 'Custom Software Development | Vijayan Tech',
    metaDescription:
      'We develop custom software solutions that simplify complex workflows, automate operations, and help organisations achieve more with technology.',
    hero: {
      headline: 'Software Solutions Designed Around Your Business.',
      description:
        'Every business has unique challenges. We develop custom software solutions that simplify complex workflows, automate operations, and help organisations achieve more with technology.',
      primaryCta: 'Build Your Custom Solution',
      secondaryCta: 'Discuss Your Requirements',
      image: serviceCustomImg,
      imageAlt: 'Custom software engineering and enterprise code architecture',
    },
    overview: {
      heading: 'Software Built Around the Way You Work.',
      description:
        'From business automation to enterprise applications, we create customised software that aligns with your operational needs and long-term goals.',
      items: [
        {
          iconName: 'Building2',
          title: 'Enterprise Software Development',
          description: 'Build software to manage complex business operations.',
        },
        {
          iconName: 'Workflow',
          title: 'Business Process Automation',
          description: 'Reduce repetitive tasks and improve workflows.',
        },
        {
          iconName: 'Users',
          title: 'CRM Development',
          description: 'Organise customer relationships and business interactions.',
        },
        {
          iconName: 'Layers',
          title: 'ERP Solutions',
          description: 'Connect business processes through integrated management systems.',
        },
        {
          iconName: 'Plug',
          title: 'API Development & Integration',
          description: 'Connect applications and streamline data exchange.',
        },
        {
          iconName: 'RefreshCw',
          title: 'Software Modernisation',
          description: 'Upgrade existing systems with modern technologies.',
        },
      ],
    },
    expertise: {
      heading: 'Turning Complex Challenges into Simple Solutions.',
      items: [
        { iconName: 'Code2', label: 'Custom Application Development' },
        { iconName: 'Layers', label: 'Enterprise Software Architecture' },
        { iconName: 'Building2', label: 'ERP & CRM Development' },
        { iconName: 'Workflow', label: 'Workflow Automation' },
        { iconName: 'Database', label: 'Database Design & Management' },
        { iconName: 'Plug', label: 'API Development & Integration' },
        { iconName: 'RefreshCw', label: 'Legacy System Modernisation' },
        { iconName: 'ShieldCheck', label: 'Software Testing & Maintenance' },
      ],
    },
    whyChoose: {
      heading: 'Your Business Needs. Our Technology Expertise.',
      image: customWhyImg,
      imageAlt: 'Software engineering team collaborating on custom architecture',
      items: [
        {
          title: 'Tailored Solutions',
          description: 'Software designed for your specific workflows.',
        },
        {
          title: 'Business-Focused Development',
          description: 'Technology aligned with your objectives.',
        },
        {
          title: 'Process Automation',
          description: 'Reduce manual work and repetitive tasks.',
        },
        {
          title: 'Seamless Integration',
          description: 'Connect with your existing systems.',
        },
        {
          title: 'Scalable Architecture',
          description: 'Support changing business requirements.',
        },
        {
          title: 'Long-Term Partnership',
          description: 'Ongoing technical assistance and improvements.',
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
          name: 'School ERP Suite',
          category: 'Education Management',
          badges: ['Custom ERP'],
          image: customP1Img,
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
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        },
        {
          name: 'eInvoice Billing Engine',
          category: 'Finance & Compliance',
          badges: ['Automation'],
          image: customP2Img,
          details: [
            {
              label: 'Problem',
              text: 'Manual GST invoice preparation caused reconciliation delays.',
            },
            {
              label: 'Custom Features',
              text: 'One-click compliant e-invoicing, ledger sync, and automated tax summaries.',
            },
          ],
          technologies: ['TypeScript', 'Python', 'REST APIs', 'AWS'],
        },
        {
          name: 'Domain & Asset Tracker',
          category: 'IT Operations',
          badges: ['Internal Tool'],
          image: customP3Img,
          details: [
            {
              label: 'Problem',
              text: 'Missed SSL/domain renewals and scattered client hosting records.',
            },
            {
              label: 'Custom Features',
              text: 'Centralized renewal calendar, automated expiry alerts, and audit logs.',
            },
          ],
          technologies: ['Go', 'React', 'PostgreSQL', 'Cron Workers'],
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
    eyebrow: 'Digital Marketing',
    metaTitle: 'Digital Marketing | Vijayan Tech',
    metaDescription:
      'Creative strategies, data-driven insights, and performance-focused campaigns to strengthen your online presence.',
    hero: {
      headline: 'Grow Your Brand. Reach the Right Audience.',
      description:
        'Make your brand more visible and connect with the customers who matter. Our digital marketing solutions combine creative strategies, data-driven insights, and performance-focused campaigns to strengthen your online presence.',
      primaryCta: 'Grow Your Business',
      secondaryCta: 'Explore Our Strategies',
      image: serviceMarketingImg,
      imageAlt: 'Digital marketing analytics and growth strategy',
    },
    overview: {
      heading: 'Everything You Need to Grow Digitally.',
      description:
        'We help businesses attract, engage, and convert their target audiences through strategic digital marketing solutions.',
      items: [
        {
          iconName: 'Search',
          title: 'Search Engine Optimisation (SEO)',
          description: 'Improve website visibility and organic search performance.',
        },
        {
          iconName: 'Share2',
          title: 'Social Media Marketing',
          description: 'Build brand awareness and engage your audience.',
        },
        {
          iconName: 'MousePointerClick',
          title: 'Pay-Per-Click Advertising',
          description: 'Reach potential customers through targeted advertising.',
        },
        {
          iconName: 'FileText',
          title: 'Content Marketing',
          description: 'Create valuable content that attracts and informs customers.',
        },
        {
          iconName: 'Mail',
          title: 'Email Marketing',
          description: 'Build customer relationships through targeted email campaigns.',
        },
        {
          iconName: 'TrendingUp',
          title: 'Performance Marketing',
          description: 'Measure campaign results and optimise marketing performance.',
        },
      ],
    },
    expertise: {
      heading: 'Strategies That Turn Visibility into Growth.',
      items: [
        { iconName: 'Search', label: 'On-Page & Technical SEO' },
        { iconName: 'Target', label: 'Keyword Research & Strategy' },
        { iconName: 'MapPin', label: 'Local SEO' },
        { iconName: 'Share2', label: 'Social Media Management' },
        { iconName: 'Megaphone', label: 'Meta & Google Ads' },
        { iconName: 'FileText', label: 'Content Strategy & Creation' },
        { iconName: 'Users', label: 'Lead Generation Campaigns' },
        { iconName: 'BarChart3', label: 'Marketing Analytics & Reporting' },
      ],
    },
    whyChoose: {
      heading: 'Marketing with Purpose. Growth with Strategy.',
      image: marketingWhyImg,
      imageAlt: 'Creative digital marketing and campaign planning',
      items: [
        {
          title: 'Audience-Focused Campaigns',
          description: 'Reach relevant audiences.',
        },
        {
          title: 'Data-Driven Decisions',
          description: 'Use performance insights to guide improvements.',
        },
        {
          title: 'Creative Communication',
          description: 'Deliver engaging brand messages.',
        },
        {
          title: 'Transparent Reporting',
          description: 'Understand campaign performance.',
        },
        {
          title: 'Continuous Optimisation',
          description: 'Improve campaigns based on results.',
        },
        {
          title: 'Goal-Oriented Strategies',
          description: 'Align marketing with business objectives.',
        },
      ],
    },
    projects: {
      heading: 'Marketing That Makes Your Brand Visible.',
      description:
        'Explore selected marketing campaigns and digital growth initiatives that demonstrate our approach to online visibility, audience engagement, and lead generation.',
      ctaLabel: 'View Case Study',
      items: [
        {
          name: 'Kuppanna Brand Growth',
          category: 'Regional Search & Social',
          badges: ['Local SEO', 'Meta Ads'],
          image: marketingP1Img,
          details: [
            {
              label: 'Objective',
              text: 'Increase store footfall and online discovery across key regional markets.',
            },
            {
              label: 'Strategy & Metrics',
              text: 'Local SEO optimization + targeted social reels driving +140% organic map actions.',
            },
          ],
          technologies: ['Google Business', 'Meta Ads', 'GA4', 'Local SEO'],
        },
        {
          name: 'Kamadhenu Admissions',
          category: 'Lead Generation Campaign',
          badges: ['Google Ads', 'SEO'],
          image: marketingP2Img,
          details: [
            {
              label: 'Objective',
              text: 'Generate qualified parent enquiries during peak academic admission cycles.',
            },
            {
              label: 'Strategy & Metrics',
              text: 'High-intent search campaigns & landing page CRO achieving 3.2x enquiry volume.',
            },
          ],
          technologies: ['Google Ads', 'Search Console', 'Landing CRO', 'Analytics'],
        },
        {
          name: 'Minkavi D2C Launch',
          category: 'Performance & Content',
          badges: ['Performance'],
          image: marketingP3Img,
          details: [
            {
              label: 'Objective',
              text: 'Build brand awareness and scale direct-to-consumer online orders.',
            },
            {
              label: 'Strategy & Metrics',
              text: 'Full-funnel retargeting and email automation delivering 38% repeat buyer rate.',
            },
          ],
          technologies: ['Meta Pixel', 'Email Flows', 'Content Strategy', 'Looker Studio'],
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
    eyebrow: 'AI Solutions',
    metaTitle: 'AI Solutions | Vijayan Tech',
    metaDescription:
      'We develop AI-powered solutions that automate processes, simplify decision-making, and enhance customer experiences.',
    hero: {
      headline: 'Make Your Business Smarter with AI-Powered Solutions.',
      description:
        'Transform the way your business works with intelligent technology. We develop AI-powered solutions that automate processes, simplify decision-making, enhance customer experiences, and unlock new opportunities for innovation.',
      primaryCta: 'Explore AI Solutions',
      secondaryCta: 'Discuss Your AI Idea',
      image: serviceAiImg,
      imageAlt: 'Artificial intelligence and intelligent automation systems',
    },
    overview: {
      heading: 'Intelligent Solutions for a Smarter Future.',
      description:
        'We help businesses explore and implement artificial intelligence through practical, customised solutions that address real-world challenges.',
      items: [
        {
          iconName: 'Cpu',
          title: 'AI Application Development',
          description: 'Build intelligent applications tailored to business requirements.',
        },
        {
          iconName: 'MessageSquare',
          title: 'AI Chatbot Development',
          description: 'Create conversational assistants for customer interactions.',
        },
        {
          iconName: 'Sparkles',
          title: 'Generative AI Integration',
          description: 'Integrate generative AI capabilities into business applications.',
        },
        {
          iconName: 'BrainCircuit',
          title: 'Machine Learning Solutions',
          description: 'Develop models that learn from relevant data.',
        },
        {
          iconName: 'Workflow',
          title: 'Business Process Automation',
          description: 'Automate repetitive and time-consuming workflows.',
        },
        {
          iconName: 'Lightbulb',
          title: 'AI Integration & Consulting',
          description: 'Identify suitable AI opportunities and implementation strategies.',
        },
      ],
    },
    expertise: {
      heading: 'Bringing Intelligence into Everyday Business.',
      items: [
        { iconName: 'Cpu', label: 'Artificial Intelligence Integration' },
        { iconName: 'Sparkles', label: 'Generative AI Applications' },
        { iconName: 'MessageSquare', label: 'AI Chatbot Development' },
        { iconName: 'BrainCircuit', label: 'Machine Learning' },
        { iconName: 'FileText', label: 'Natural Language Processing' },
        { iconName: 'Workflow', label: 'Intelligent Workflow Automation' },
        { iconName: 'BarChart3', label: 'AI-Powered Data Analysis' },
        { iconName: 'Plug', label: 'API & Third-Party AI Integration' },
      ],
    },
    whyChoose: {
      heading: 'Innovation That Creates Real Business Value.',
      image: aiWhyImg,
      imageAlt: 'Applied artificial intelligence and automation engineering',
      items: [
        {
          title: 'Practical AI Applications',
          description: 'Focus on solving actual business challenges.',
        },
        {
          title: 'Custom AI Solutions',
          description: 'Build around your workflows and requirements.',
        },
        {
          title: 'Smarter Automation',
          description: 'Reduce repetitive manual activities.',
        },
        {
          title: 'Improved Productivity',
          description: 'Help teams work more efficiently.',
        },
        {
          title: 'Scalable Integration',
          description: 'Connect AI capabilities with suitable existing systems.',
        },
        {
          title: 'Responsible Implementation',
          description: 'Consider privacy, security, accuracy, and human oversight.',
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
          name: 'SupportDesk AI Assistant',
          category: 'Conversational AI',
          badges: ['AI Chatbot'],
          image: aiP1Img,
          details: [
            {
              label: 'Challenge',
              text: 'High volume of repetitive customer support queries delayed response times.',
            },
            {
              label: 'AI Capabilities',
              text: 'Context-aware knowledge retrieval with seamless human agent handoff.',
            },
          ],
          technologies: ['Python', 'LLM APIs', 'Vector DB', 'React'],
        },
        {
          name: 'DocuParse Automation',
          category: 'Document Intelligence',
          badges: ['Workflow AI'],
          image: aiP2Img,
          details: [
            {
              label: 'Challenge',
              text: 'Manual data entry from invoices and PDFs slowed down finance teams.',
            },
            {
              label: 'AI Capabilities',
              text: 'Automated field extraction, validation rules, and direct ERP export.',
            },
          ],
          technologies: ['Python', 'OCR', 'FastAPI', 'PostgreSQL'],
        },
        {
          name: 'DemandSense Forecaster',
          category: 'Predictive Analytics',
          badges: ['Machine Learning'],
          image: aiP3Img,
          details: [
            {
              label: 'Challenge',
              text: 'Seasonal stockouts and over-ordering impacted retail margins.',
            },
            {
              label: 'AI Capabilities',
              text: 'Historical sales trend modeling and automated reorder recommendations.',
            },
          ],
          technologies: ['PyTorch', 'Scikit-Learn', 'Vertex AI', 'REST API'],
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
