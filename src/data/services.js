import mobileImg from '../assets/images/service-mobile.jpg';
import customSoftwareImg from '../assets/images/service-custom-software.jpg';
import ecommerceImg from '../assets/images/service-ecommerce.jpg';
import aiImg from '../assets/images/service-ai.jpg';
import webImg from '../assets/images/service-web.jpg';
import cloudImg from '../assets/images/service-cloud.jpg';
import marketingImg from '../assets/images/service-marketing.jpg';

export const SERVICES = [
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc:
      'Native and cross-platform mobile experiences built with precision, fluidity, and enterprise security.',
    iconName: 'Smartphone',
    heroImage: mobileImg,
    overview:
      'From consumer-grade flagship apps to secure field-operations tools, we craft mobile software that feels effortless in hand while integrating seamlessly with your core enterprise systems.',
    capabilities: [
      'iOS (Swift) and Android (Kotlin) native engineering',
      'Cross-platform React Native & Flutter architecture',
      'Offline-first synchronization and biometric security',
      'Real-time telemetry, push orchestration, and store release pipelines',
    ],
    deliverables: [
      'Interactive Mobile Prototypes',
      'iOS & Android Production Binaries',
      'API Gateway & Sync Layer',
      'Crash Analytics & Release Automation',
    ],
    techStack: ['Swift', 'Kotlin', 'React Native', 'GraphQL', 'OAuth 2.0', 'Fastlane'],
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDesc:
      'Bespoke enterprise platforms and core operational systems tailored to complex business workflows.',
    iconName: 'Code2',
    heroImage: customSoftwareImg,
    overview:
      'When off-the-shelf software limits your competitive edge, we engineer purpose-built platforms from the ground up—combining domain-driven design, clean APIs, and long-term maintainability.',
    capabilities: [
      'Domain-driven microservices and event-driven architecture',
      'Legacy system modernization and API-first integration',
      'High-throughput data pipelines and real-time processing',
      'Automated testing suites and rigorous security audits',
    ],
    deliverables: [
      'System Architecture & Domain Model',
      'Core Application & API Suite',
      'Automated Test & QA Coverage',
      'Technical Documentation & Handover',
    ],
    techStack: ['TypeScript', 'Go', 'Python', 'PostgreSQL', 'Kafka', 'Docker'],
  },
  {
    slug: 'ecommerce-solutions',
    title: 'eCommerce Solutions',
    shortDesc:
      'Composable digital commerce ecosystems engineered for high-volume conversion and omnichannel scale.',
    iconName: 'ShoppingBag',
    heroImage: ecommerceImg,
    overview:
      'We build headless and composable commerce platforms that unify global storefronts, inventory intelligence, and frictionless checkout flows—handling peak traffic without compromise.',
    capabilities: [
      'Headless storefronts with sub-second page transitions',
      'ERP, PIM, OMS, and payment gateway integrations',
      'Multi-currency, multi-region localization and tax compliance',
      'Personalized search, merchandising, and conversion analytics',
    ],
    deliverables: [
      'Composable Storefront Architecture',
      'Payment & Fulfillment Integrations',
      'Catalog & Inventory Sync Engine',
      'Conversion & Funnel Telemetry',
    ],
    techStack: ['Shopify Plus', 'Commercetools', 'Stripe', 'Algolia', 'Node.js', 'Redis'],
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    shortDesc:
      'Applied artificial intelligence, enterprise LLM workflows, and predictive systems built for real-world reliability.',
    iconName: 'Cpu',
    heroImage: aiImg,
    overview:
      'We move AI beyond prototypes into governed, production-grade systems—deploying retrieval-augmented generation, intelligent automation, and predictive models with strict data privacy.',
    capabilities: [
      'Enterprise RAG pipelines and private knowledge assistants',
      'Workflow automation and multi-agent orchestration',
      'Predictive analytics and computer vision systems',
      'Model evaluation, guardrails, and MLOps governance',
    ],
    deliverables: [
      'AI Readiness & Use-Case Architecture',
      'Production LLM / ML Pipeline',
      'Evaluation & Guardrail Framework',
      'Model Monitoring & Drift Telemetry',
    ],
    techStack: ['Python', 'PyTorch', 'Vertex AI', 'Vector DBs', 'LangGraph', 'Kubernetes'],
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    shortDesc:
      'High-performance enterprise web platforms engineered for speed, accessibility, and global scale.',
    iconName: 'Globe',
    heroImage: webImg,
    overview:
      'We architect and build mission-critical web applications and digital flagships that combine sub-second performance with refined editorial design. Every platform is engineered with clean component systems, semantic markup, and resilient infrastructure.',
    capabilities: [
      'Enterprise React, Next.js, and modern frontend architecture',
      'Headless CMS and composable content ecosystems',
      'Core Web Vitals optimization and WCAG AA accessibility',
      'Multi-region CDN delivery and edge caching strategies',
    ],
    deliverables: [
      'Design System & Component Library',
      'Production Web Application',
      'Automated CI/CD & Performance Telemetry',
      'SEO & Structured Schema Foundation',
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Edge CDN'],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDesc:
      'Resilient cloud-native architectures, zero-downtime migrations, and automated DevSecOps infrastructure.',
    iconName: 'Cloud',
    heroImage: cloudImg,
    overview:
      'We modernize legacy workloads into self-healing, cost-optimized cloud environments across AWS, Azure, and Google Cloud—embedding security, observability, and compliance into every layer.',
    capabilities: [
      'Multi-cloud and hybrid-cloud architecture design',
      'Kubernetes orchestration and serverless microservices',
      'Infrastructure as Code (Terraform) and GitOps pipelines',
      'FinOps cost governance and 24/7 observability',
    ],
    deliverables: [
      'Cloud Readiness & Migration Blueprint',
      'Terraform IaC Modules',
      'Hardened Kubernetes & CI/CD Pipelines',
      'Unified Observability & SLO Dashboards',
    ],
    techStack: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Terraform', 'Datadog'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDesc:
      'Data-driven growth engineering, technical SEO, and precision performance strategy for global brands.',
    iconName: 'TrendingUp',
    heroImage: marketingImg,
    overview:
      'We bridge engineering and growth—combining technical SEO, conversion rate optimization, and full-funnel attribution to turn digital touchpoints into measurable enterprise pipeline.',
    capabilities: [
      'Technical SEO architecture and organic search authority',
      'Conversion rate optimization (CRO) and experimentation',
      'Multi-touch attribution and analytics engineering',
      'B2B demand generation and enterprise content systems',
    ],
    deliverables: [
      'Technical SEO & Schema Audit',
      'Analytics & Attribution Setup',
      'Experimentation & CRO Roadmap',
      'Executive Growth Reporting',
    ],
    techStack: ['GA4', 'Search Console', 'Segment', 'HubSpot', 'Looker Studio', 'A/B Testing'],
  },
];
