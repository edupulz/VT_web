import healthcareImg from '../assets/images/industry-healthcare.jpg';
import financeImg from '../assets/images/industry-finance.jpg';
import educationImg from '../assets/images/industry-education.jpg';
import retailImg from '../assets/images/industry-retail.jpg';
import manufacturingImg from '../assets/images/industry-manufacturing.jpg';
import logisticsImg from '../assets/images/industry-logistics.jpg';

export const INDUSTRIES = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    tagline: 'Interoperable digital health platforms and HIPAA-aligned clinical workflows.',
    description:
      'We engineer patient portals, telehealth ecosystems, and AI-assisted diagnostic pipelines that connect care teams and safeguard sensitive health data.',
    image: healthcareImg,
    highlights: ['HL7 / FHIR Interoperability', 'Telehealth & Patient Portals', 'Clinical Data Analytics'],
  },
  {
    id: 'finance-banking',
    name: 'Finance & Banking',
    tagline: 'High-trust core banking modernization, real-time payments, and risk intelligence.',
    description:
      'Built for zero-compromise security and regulatory precision, our financial systems power digital banking, fraud detection, and automated compliance.',
    image: financeImg,
    highlights: ['Core Ledger Modernization', 'Real-Time Fraud Detection', 'Open Banking APIs'],
  },
  {
    id: 'education',
    name: 'Education',
    tagline: 'Scalable learning platforms and adaptive digital campuses for global institutions.',
    description:
      'We create accessible, high-concurrency learning management systems, virtual classrooms, and student analytics that elevate modern education.',
    image: educationImg,
    highlights: ['Adaptive Learning Engines', 'Global LMS Infrastructure', 'Accessible Student Portals'],
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & eCommerce',
    tagline: 'Unified omnichannel commerce and intelligent inventory orchestration.',
    description:
      'From headless storefronts to real-time demand forecasting, we help global retailers deliver fast, personalized buying experiences at peak scale.',
    image: retailImg,
    highlights: ['Headless Global Storefronts', 'Omnichannel Order Sync', 'AI Merchandising'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Connected factory telemetry, predictive maintenance, and digital twins.',
    description:
      'We bridge industrial operations and cloud intelligence—turning sensor streams into actionable quality control, uptime, and supply visibility.',
    image: manufacturingImg,
    highlights: ['Industrial IoT Telemetry', 'Predictive Maintenance', 'MES & ERP Integration'],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    tagline: 'Real-time fleet visibility, route optimization, and autonomous supply chains.',
    description:
      'Our logistics platforms synchronize warehouses, carriers, and last-mile delivery networks with sub-second tracking and predictive routing.',
    image: logisticsImg,
    highlights: ['Fleet & Asset Telemetry', 'Dynamic Route Optimization', 'Warehouse Automation'],
  },
];
