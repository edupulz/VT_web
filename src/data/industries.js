import financeImg from '../assets/images/industry-finance.jpg';
import educationImg from '../assets/images/industry-education.jpg';
import retailImg from '../assets/images/industry-retail.jpg';
import manufacturingImg from '../assets/images/industry-manufacturing.jpg';
import logisticsImg from '../assets/images/industry-logistics.jpg';

export const INDUSTRIES = [
  {
    id: 'education',
    name: 'Education',
    tagline: 'Unified school ERP platforms and digital campus experiences for modern institutions.',
    description:
      'We build unified school ERP platforms, digital campus portals, and learning management systems that connect students, educators, parents, and administrators in one place. From admissions, attendance, and examination workflows to fee collection and mobile communication, our solutions simplify institutional administration while elevating everyday learning experiences.',
    image: educationImg,
  },
  {
    id: 'finance-banking',
    name: 'Finance & Banking',
    tagline: 'High-trust financial modernization, automated billing, and compliance precision.',
    description:
      'Built for zero-compromise security and regulatory precision, our financial software systems modernize core billing, digital payment workflows, and institutional compliance. From automated invoicing and ledger reconciliation to real-time transaction visibility and audit-ready reporting, we help financial teams operate with speed, accuracy, and trust.',
    image: financeImg,
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & eCommerce',
    tagline: 'Unified omnichannel commerce and intelligent inventory orchestration.',
    description:
      'From custom digital storefronts and mobile shopping experiences to unified inventory, order, and billing orchestration, we empower retail brands to sell seamlessly across every channel. Our platforms combine fast, conversion-focused customer journeys with real-time stock visibility, automated invoicing, and scalable cloud performance.',
    image: retailImg,
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Connected industrial operations, production visibility, and integrated ERP workflows.',
    description:
      'We bridge shop-floor operations and enterprise intelligence with custom software, production tracking, and integrated ERP systems tailored for industrial teams. By turning operational workflows, inventory movement, and quality records into real-time digital visibility, we help manufacturers reduce downtime, streamline coordination, and scale output reliably.',
    image: manufacturingImg,
  },
  {
    id: 'logistics',
    name: 'Logistics',
    tagline: 'Real-time fleet visibility, load tracking, and coordinated supply chains.',
    description:
      'Our logistics and load-tracking platforms synchronize dispatchers, drivers, vehicles, and warehouses with real-time operational visibility from pickup to final delivery. By automating load assignments, route coordination, digital proof of delivery, and performance reporting, we help transport and supply-chain businesses keep every shipment on schedule.',
    image: logisticsImg,
  },
];
