import schoolErpImg from '../assets/images/product-school-erp.jpg';
import schoolErpWhyImg from '../assets/images/product-why-school-erp.jpg';
import epoojaImg from '../assets/images/product-epooja.jpg';
import einvoiceImg from '../assets/images/product-einvoice.jpg';
import einvoiceWhyImg from '../assets/images/product-why-einvoice.jpg';
import loadTrackerImg from '../assets/images/product-load-tracker.jpg';
import loadTrackerWhyImg from '../assets/images/product-why-load-tracker.jpg';
import jobPortalImg from '../assets/images/product-job-portal.jpg';
import jobPortalWhyImg from '../assets/images/product-why-job-portal.jpg';
import gymProImg from '../assets/images/product-gym-pro.jpg';
import gymProWhyImg from '../assets/images/product-why-gym-pro.jpg';
import domainTrackerImg from '../assets/images/product-domain-tracker.jpg';
import domainTrackerWhyImg from '../assets/images/product-why-domain-tracker.jpg';

import schoolErp01Img from '../assets/images/modules/school-erp-01-admissions.jpg';
import schoolErp02Img from '../assets/images/modules/school-erp-02-attendance.jpg';
import schoolErp03Img from '../assets/images/modules/school-erp-03-examination.jpg';
import schoolErp04Img from '../assets/images/modules/school-erp-04-fees.jpg';
import schoolErp05Img from '../assets/images/modules/school-erp-05-staff-hr.jpg';
import schoolErp06Img from '../assets/images/modules/school-erp-06-parent-comm.jpg';
import epooja01Img from '../assets/images/modules/epooja-01-seva.jpg';
import epooja02Img from '../assets/images/modules/epooja-02-online-booking.jpg';
import epooja03Img from '../assets/images/modules/epooja-03-devotee.jpg';
import epooja04Img from '../assets/images/modules/epooja-04-schedule.jpg';
import epooja05Img from '../assets/images/modules/epooja-05-payment.jpg';
import epooja06Img from '../assets/images/modules/epooja-06-admin.jpg';
import einvoice01Img from '../assets/images/modules/einvoice-01-creation.jpg';
import einvoice02Img from '../assets/images/modules/einvoice-02-customer.jpg';
import einvoice03Img from '../assets/images/modules/einvoice-03-products.jpg';
import einvoice04Img from '../assets/images/modules/einvoice-04-tax.jpg';
import einvoice05Img from '../assets/images/modules/einvoice-05-payment.jpg';
import einvoice06Img from '../assets/images/modules/einvoice-06-reports.jpg';
import loadTracker01Img from '../assets/images/modules/load-tracker-01-load.jpg';
import loadTracker02Img from '../assets/images/modules/load-tracker-02-tracking.jpg';
import loadTracker03Img from '../assets/images/modules/load-tracker-03-vehicle.jpg';
import loadTracker04Img from '../assets/images/modules/load-tracker-04-driver.jpg';
import loadTracker05Img from '../assets/images/modules/load-tracker-05-delivery.jpg';
import loadTracker06Img from '../assets/images/modules/load-tracker-06-reports.jpg';
import jobPortal01Img from '../assets/images/modules/job-portal-01-listing.jpg';
import jobPortal02Img from '../assets/images/modules/job-portal-02-candidate.jpg';
import jobPortal03Img from '../assets/images/modules/job-portal-03-search.jpg';
import jobPortal04Img from '../assets/images/modules/job-portal-04-application.jpg';
import jobPortal05Img from '../assets/images/modules/job-portal-05-employer.jpg';
import jobPortal06Img from '../assets/images/modules/job-portal-06-admin.jpg';
import gymPro01Img from '../assets/images/modules/gym-pro-01-member.jpg';
import gymPro02Img from '../assets/images/modules/gym-pro-02-membership.jpg';
import gymPro03Img from '../assets/images/modules/gym-pro-03-trainer.jpg';
import gymPro04Img from '../assets/images/modules/gym-pro-04-attendance.jpg';
import gymPro05Img from '../assets/images/modules/gym-pro-05-payment.jpg';
import gymPro06Img from '../assets/images/modules/gym-pro-06-reports.jpg';
import domainTracker01Img from '../assets/images/modules/domain-tracker-01-portfolio.jpg';
import domainTracker02Img from '../assets/images/modules/domain-tracker-02-expiry.jpg';
import domainTracker03Img from '../assets/images/modules/domain-tracker-03-renewal.jpg';
import domainTracker04Img from '../assets/images/modules/domain-tracker-04-registrar.jpg';
import domainTracker05Img from '../assets/images/modules/domain-tracker-05-status.jpg';
import domainTracker06Img from '../assets/images/modules/domain-tracker-06-reports.jpg';

export const PRODUCT_PAGES = {
  'school-erp': {
    eyebrow: 'School ERP',
    metaTitle: 'School ERP Software | Vijayan Tech',
    metaDescription:
      'Simplify school administration with School ERP software. Manage admissions, attendance, examinations, fees, staff, and parent communication in one integrated platform.',
    metaKeywords:
      'School ERP Software, School Management Software, School Management System, Student Management Software, Fee Management Software, Examination Management Software',
    hero: {
      headline: 'Smarter School Management. Better Learning Experiences.',
      description:
        'Manage your entire school from one intelligent platform. Simplify admissions, attendance, examinations, fee collection, staff administration, and parent communication with a unified School ERP solution.',
      primaryCta: 'Request a Free Demo',
      secondaryCta: 'Explore Features',
      image: schoolErpImg,
      imageAlt: 'Students arriving at a modern school campus',
    },
    overview: {
      heading: 'One Platform. Every School Operation.',
      paragraphs: [
        'Managing an educational institution involves coordinating students, teachers, parents, and administrative teams. School ERP brings these activities together in one organised digital environment.',
        'From maintaining student records to managing academic activities and financial operations, everything is designed to work together through a centralised management system.',
      ],
      highlights: [
        { iconName: 'Users', label: 'Centralised Student Information' },
        { iconName: 'Layers', label: 'Academic & Classroom Administration' },
        { iconName: 'CreditCard', label: 'Integrated Fee Management' },
        { iconName: 'Building2', label: 'Staff Information Management' },
        { iconName: 'MessageSquare', label: 'Parent Communication' },
        { iconName: 'BarChart3', label: 'Centralised School Reports' },
      ],
    },
    modules: {
      heading: 'Everything Your School Needs to Run Smoothly.',
      description:
        'Every department plays an important role in running a successful school. Explore the integrated modules that help your teams manage their responsibilities with greater clarity and control.',
      items: [
        {
          number: '01',
          iconName: 'Users',
          title: 'Student & Admission Management',
          image: schoolErp01Img,
          description:
            'Simplify student enrolment and maintain complete student profiles throughout their academic journey.',
          features: [
            'Online Student Registration',
            'Admission Management',
            'Student Profile Management',
            'Digital Student Records',
          ],
        },
        {
          number: '02',
          iconName: 'Layers',
          title: 'Attendance & Academic Management',
          image: schoolErp02Img,
          description:
            'Organise classroom activities and monitor student participation through structured academic management tools.',
          features: [
            'Daily Attendance Tracking',
            'Timetable Management',
            'Academic Records',
            'Attendance Reports',
          ],
        },
        {
          number: '03',
          iconName: 'FileText',
          title: 'Examination Management',
          image: schoolErp03Img,
          description:
            'Organise examination activities and simplify the process of recording, reviewing, and managing student performance.',
          features: [
            'Examination Scheduling',
            'Marks Entry',
            'Results Management',
            'Performance Reports',
          ],
        },
        {
          number: '04',
          iconName: 'CreditCard',
          title: 'Fee Management',
          image: schoolErp04Img,
          description:
            'Keep school financial administration organised with structured fee records and payment tracking.',
          features: [
            'Fee Structure Configuration',
            'Payment Tracking',
            'Fee Collection Records',
            'Financial Reports',
          ],
        },
        {
          number: '05',
          iconName: 'Building2',
          title: 'Staff & HR Management',
          image: schoolErp05Img,
          description:
            'Simplify employee administration and maintain organised staff information through one management system.',
          features: [
            'Employee Profile Management',
            'Staff Attendance',
            'Leave Management',
            'Employee Records',
          ],
        },
        {
          number: '06',
          iconName: 'MessageSquare',
          title: 'Parent Communication',
          image: schoolErp06Img,
          description:
            'Build stronger connections between schools and families through accessible student updates and communication tools.',
          features: [
            'Parent Notifications',
            'Student Progress Updates',
            'School Announcements',
            'Mobile App Access',
          ],
        },
      ],
    },
    benefits: {
      heading: 'Less Administration. More Focus on Education.',
      description:
        'Give your school team the tools to work more efficiently. School ERP helps reduce manual processes, organise institutional information, and create a more connected environment for everyone involved in education.',
      items: [
        {
          iconName: 'Zap',
          title: 'Simplified Daily Operations',
          description:
            'Reduce repetitive paperwork and administrative effort with organised digital workflows.',
        },
        {
          iconName: 'Users',
          title: 'Better Team Coordination',
          description:
            'Keep school departments aligned through shared information and connected management activities.',
        },
        {
          iconName: 'Search',
          title: 'Easy Information Access',
          description:
            'Retrieve relevant student, staff, and academic records whenever they are needed.',
        },
        {
          iconName: 'Database',
          title: 'Organised Data Management',
          description:
            'Maintain structured academic, financial, and institutional information in one place.',
        },
        {
          iconName: 'Smartphone',
          title: 'Connected Parent Experience',
          description:
            'Help parents stay informed about important school activities, announcements, and student updates.',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Choose Our Product',
      heading: 'Technology That Moves Your School Forward.',
      description:
        'Every school has its own way of working. School ERP provides a flexible digital environment that brings essential management functions together while supporting the different responsibilities of your institution.',
      image: schoolErpWhyImg,
      imageAlt: 'Teacher engaging with students in a classroom',
      items: [
        {
          title: 'Education-Focused Design',
          description:
            'Functionality designed around the operational requirements of educational institutions.',
        },
        {
          title: 'Unified Management Platform',
          description: 'Access multiple school management modules through one integrated system.',
        },
        {
          title: 'User-Friendly Experience',
          description:
            'Navigate essential features through a straightforward and organised interface.',
        },
        {
          title: 'Role-Based Access',
          description:
            'Provide administrators, teachers, parents, and other users with relevant access permissions.',
        },
        {
          title: 'Flexible Management Workflows',
          description:
            'Support different academic and administrative processes according to institutional requirements.',
        },
        {
          title: 'Centralised Reporting',
          description:
            'Access organised school information and reports to support administrative planning.',
        },
      ],
    },
    faqs: {
      heading: 'Everything You Need to Know About School ERP.',
      items: [
        {
          question: 'What is School ERP software?',
          answer:
            'School ERP is a digital platform that helps educational institutions manage student administration, academic activities, finances, staff records, and communication through one centralised system.',
        },
        {
          question: 'Who can use School ERP?',
          answer:
            'School administrators, principals, teachers, office staff, students, and parents can access relevant features according to their assigned permissions.',
        },
        {
          question: 'Can School ERP manage student admissions?',
          answer:
            'Yes. It helps schools maintain student registration details, admission records, and student profiles.',
        },
        {
          question: 'Can the software manage examinations and results?',
          answer:
            'Yes. The examination module supports exam scheduling, marks entry, and student result management.',
        },
        {
          question: 'Does School ERP support fee management?',
          answer:
            'Yes. Schools can organise fee structures, track payments, and maintain fee collection records.',
        },
        {
          question: 'Can parents access school updates?',
          answer:
            'Yes. Parent-facing functionality can provide relevant student information and school notifications through supported access channels.',
        },
        {
          question: 'How can we know whether School ERP is suitable for our school?',
          answer:
            "You can request a product demonstration to explore the available modules and understand how the platform can support your institution's requirements.",
        },
      ],
    },
    cta: {
      headline: 'Make Your School Ready for a Smarter Tomorrow.',
      description:
        'Simplify school management, empower educators, and connect your entire school community with one smart ERP solution.',
      primaryLabel: 'Book Your Free Demo',
      secondaryLabel: 'Talk to Our Team',
    },
  },

  'epooja-booking': {
    eyebrow: 'ePooja Booking',
    metaTitle: 'Online Pooja Booking Software | ePooja Booking | Vijayan Tech',
    metaDescription:
      'Make temple pooja bookings more accessible with ePooja Booking. Simplify pooja scheduling, devotee registrations, service management, and reservations in one platform.',
    metaKeywords:
      'Online Pooja Booking Software, Temple Booking Software, Pooja Management System, ePooja Booking',
    hero: {
      headline: 'Bring Devotees Closer to Divine Experiences.',
      description:
        'Make temple pooja bookings more accessible with a convenient digital platform. Simplify pooja scheduling, devotee registrations, service management, and booking administration through one organised system.',
      primaryCta: 'Request a Free Demo',
      secondaryCta: 'Explore Features',
      image: epoojaImg,
      imageAlt: 'Traditional brass temple oil lamps, marigold and jasmine garlands',
    },
    overview: {
      heading: 'A Smarter Way to Manage Temple Pooja Services.',
      paragraphs: [
        'Managing temple pooja services involves coordinating devotees, priests, schedules, and service requests. ePooja Booking brings these activities together through a digital booking platform designed to simplify temple administration and improve the devotee experience.',
        'From exploring available poojas to managing reservations and tracking booking details, the platform helps create a more organised connection between temples and devotees.',
      ],
      highlights: [
        { iconName: 'Globe', label: 'Online Pooja Booking' },
        { iconName: 'Sparkles', label: 'Pooja & Seva Management' },
        { iconName: 'Users', label: 'Devotee Registration' },
        { iconName: 'Layers', label: 'Booking Schedule Management' },
        { iconName: 'CreditCard', label: 'Digital Payment Management' },
        { iconName: 'BarChart3', label: 'Booking History & Reports' },
      ],
    },
    modules: {
      heading: 'Everything Needed for Seamless Pooja Management.',
      description:
        'Make temple service administration more convenient with dedicated tools for managing poojas, devotees, reservations, and daily activities.',
      items: [
        {
          number: '01',
          iconName: 'Sparkles',
          title: 'Pooja & Seva Management',
          image: epooja01Img,
          description:
            'Organise different temple rituals and religious services with structured service information.',
          features: [
            'Pooja Listing Management',
            'Seva Details & Descriptions',
            'Service Availability',
            'Pooja Pricing Configuration',
          ],
        },
        {
          number: '02',
          iconName: 'Globe',
          title: 'Online Booking Management',
          image: epooja02Img,
          description:
            'Allow devotees to explore available services and submit booking requests conveniently.',
          features: [
            'Online Pooja Reservations',
            'Booking Date Selection',
            'Booking Confirmation',
            'Reservation Tracking',
          ],
        },
        {
          number: '03',
          iconName: 'Users',
          title: 'Devotee Management',
          image: epooja03Img,
          description:
            'Maintain devotee information and access booking-related details through organised records.',
          features: [
            'Devotee Registration',
            'Profile Management',
            'Contact Information',
            'Booking History',
          ],
        },
        {
          number: '04',
          iconName: 'Layers',
          title: 'Schedule Management',
          image: epooja04Img,
          description:
            'Coordinate pooja schedules and manage service availability effectively.',
          features: [
            'Daily Pooja Schedules',
            'Time Slot Management',
            'Availability Updates',
            'Booking Calendar',
          ],
        },
        {
          number: '05',
          iconName: 'CreditCard',
          title: 'Payment Management',
          image: epooja05Img,
          description:
            'Organise booking-related financial transactions and maintain payment records.',
          features: [
            'Online Payment Support',
            'Payment Status Tracking',
            'Transaction Records',
            'Payment Reports',
          ],
        },
        {
          number: '06',
          iconName: 'BarChart3',
          title: 'Administration & Reporting',
          image: epooja06Img,
          description:
            'Manage platform activities and monitor booking information through an administrative dashboard.',
          features: [
            'Booking Dashboard',
            'Reservation Management',
            'Booking Reports',
            'Service Performance Overview',
          ],
        },
      ],
    },
    benefits: {
      heading: 'Simplify Temple Administration. Enrich Devotee Experiences.',
      description:
        'Create a convenient booking experience for devotees while making everyday temple administration more organised. ePooja Booking helps bring traditional religious services into an accessible digital environment.',
      items: [
        {
          iconName: 'Globe',
          title: 'Convenient Devotee Access',
          description:
            'Allow devotees to explore available pooja services and submit booking requests online.',
        },
        {
          iconName: 'Layers',
          title: 'Organised Reservations',
          description: 'Maintain booking information and schedules in a structured system.',
        },
        {
          iconName: 'Zap',
          title: 'Reduced Administrative Effort',
          description: 'Simplify repetitive booking and recordkeeping activities.',
        },
        {
          iconName: 'Activity',
          title: 'Better Service Coordination',
          description: 'Manage pooja availability and schedules with improved visibility.',
        },
        {
          iconName: 'Database',
          title: 'Accessible Booking Records',
          description: 'Retrieve devotee and reservation details whenever required.',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Choose Our Product',
      heading: 'Connecting Tradition with Digital Convenience.',
      description:
        'Religious services deserve a booking experience that is simple, accessible, and well organised. ePooja Booking combines essential reservation and administration tools to support the evolving needs of temples and devotees.',
      image: epoojaImg,
      imageAlt: 'Traditional temple pooja lamps and floral offerings',
      items: [
        {
          title: 'Devotee-Centred Experience',
          description:
            'A convenient platform designed around the needs of people booking temple services.',
        },
        {
          title: 'Centralised Service Management',
          description: 'Manage pooja information and reservations from one platform.',
        },
        {
          title: 'Simplified Administration',
          description:
            'Access essential booking and service management tools through an organised interface.',
        },
        {
          title: 'Flexible Scheduling',
          description: 'Configure service availability according to temple schedules and requirements.',
        },
        {
          title: 'Digital Accessibility',
          description: 'Make available temple services easier to discover and book online.',
        },
        {
          title: 'Organised Reporting',
          description:
            'Maintain booking and transaction information for administrative reference.',
        },
      ],
    },
    faqs: {
      heading: 'Common Questions About ePooja Booking.',
      items: [
        {
          question: 'What is ePooja Booking software?',
          answer:
            'ePooja Booking is a digital platform that helps temples manage pooja services, devotee registrations, online reservations, schedules, and booking records.',
        },
        {
          question: 'Can devotees book poojas online?',
          answer:
            'Yes. Devotees can explore available pooja services and submit reservations through the online booking interface.',
        },
        {
          question: 'Can temples manage different pooja services?',
          answer:
            'Yes. The platform supports organising different poojas and seva offerings with their respective details and availability.',
        },
        {
          question: 'Can we manage pooja booking schedules?',
          answer:
            'Yes. Available scheduling tools help manage dates, time slots, and reservation availability.',
        },
        {
          question: 'Can devotees make online payments?',
          answer:
            'Online payment functionality can support booking-related transactions, depending on the configured payment integration.',
        },
        {
          question: 'Can temple administrators view booking records?',
          answer:
            'Yes. Administrators can access reservation information and related booking records through the management dashboard.',
        },
        {
          question: 'Is ePooja Booking suitable for different temples?',
          answer:
            'The platform can support temples with different pooja booking and administrative requirements, depending on the available configuration.',
        },
      ],
    },
    cta: {
      headline: 'Bring Temple Services Closer to Every Devotee.',
      description:
        'Make pooja reservations more convenient and temple administration more organised with a digital booking solution built to connect tradition and technology.',
      primaryLabel: 'Request a Free Demo',
      secondaryLabel: 'Contact Our Team',
    },
  },

  einvoice: {
    eyebrow: 'eInvoice',
    metaTitle: 'Invoice Management Software | eInvoice | Vijayan Tech',
    metaDescription:
      'Simplify invoicing and streamline your business finances with eInvoice. Create professional invoices, manage customers, track payments, and organise billing records.',
    metaKeywords:
      'Invoice Management Software, Online Invoicing Software, Digital Invoice Management, eInvoice',
    hero: {
      headline: 'Simplify Invoicing. Streamline Your Business Finances.',
      description:
        'Take control of your billing process with an intelligent eInvoice solution. Create professional invoices, manage customer information, track payments, and organise transaction records through one convenient digital platform.',
      primaryCta: 'Request a Free Demo',
      secondaryCta: 'Explore Features',
      image: einvoiceImg,
      imageAlt: 'Digital invoicing and financial billing workflow',
    },
    overview: {
      heading: 'Smarter Invoicing for Everyday Business Operations.',
      paragraphs: [
        'Managing invoices, customer details, and payment records can become complicated as your business grows. eInvoice simplifies billing administration by bringing essential invoicing activities into one organised platform.',
        'From creating customer invoices to monitoring payment statuses and maintaining financial records, manage your billing workflow with greater clarity and convenience.',
      ],
      highlights: [
        { iconName: 'FileText', label: 'Digital Invoice Creation' },
        { iconName: 'Users', label: 'Customer Information Management' },
        { iconName: 'Package', label: 'Product & Service Management' },
        { iconName: 'CreditCard', label: 'Payment Tracking' },
        { iconName: 'Settings', label: 'Tax & Billing Details' },
        { iconName: 'BarChart3', label: 'Invoice History & Reports' },
      ],
    },
    modules: {
      heading: 'Everything You Need for Efficient Invoice Management.',
      description:
        'Simplify your billing workflow with practical tools designed to help businesses create, manage, and track invoices.',
      items: [
        {
          number: '01',
          iconName: 'FileText',
          title: 'Invoice Creation & Management',
          image: einvoice01Img,
          description:
            'Create professional invoices and maintain billing information in an organised format.',
          features: [
            'Invoice Generation',
            'Customisable Invoice Templates',
            'Invoice Number Management',
            'PDF Invoice Export',
          ],
        },
        {
          number: '02',
          iconName: 'Users',
          title: 'Customer Management',
          image: einvoice02Img,
          description:
            'Maintain customer details and access billing information through organised customer records.',
          features: [
            'Customer Registration',
            'Customer Profiles',
            'Billing Information',
            'Customer Invoice History',
          ],
        },
        {
          number: '03',
          iconName: 'Package',
          title: 'Product & Service Management',
          image: einvoice03Img,
          description: 'Organise the products and services used in your billing process.',
          features: [
            'Product Management',
            'Service Listings',
            'Pricing Configuration',
            'Item Descriptions',
          ],
        },
        {
          number: '04',
          iconName: 'Settings',
          title: 'Tax & Billing Management',
          image: einvoice04Img,
          description:
            'Manage applicable tax information and billing details according to business requirements.',
          features: [
            'Tax Configuration',
            'GST Details',
            'Tax Calculation',
            'Billing Summaries',
          ],
        },
        {
          number: '05',
          iconName: 'CreditCard',
          title: 'Payment Management',
          image: einvoice05Img,
          description: 'Monitor invoice payments and maintain transaction-related information.',
          features: [
            'Payment Status Tracking',
            'Paid & Pending Invoices',
            'Payment Records',
            'Outstanding Amount Tracking',
          ],
        },
        {
          number: '06',
          iconName: 'BarChart3',
          title: 'Reports & Analytics',
          image: einvoice06Img,
          description: 'Review billing activities and access organised financial information.',
          features: [
            'Sales Reports',
            'Invoice Reports',
            'Payment Summaries',
            'Outstanding Reports',
          ],
        },
      ],
    },
    benefits: {
      heading: 'Spend Less Time on Billing. Focus More on Business.',
      description:
        'An efficient invoicing process helps businesses maintain better control over everyday financial activities. eInvoice brings billing tasks into one digital workflow, reducing manual effort and improving record organisation.',
      items: [
        {
          iconName: 'Zap',
          title: 'Faster Invoice Processing',
          description: 'Create and manage invoices through a streamlined digital process.',
        },
        {
          iconName: 'ShieldCheck',
          title: 'Reduced Manual Errors',
          description:
            'Use structured invoice fields and configured calculations to improve billing consistency.',
        },
        {
          iconName: 'Activity',
          title: 'Better Payment Visibility',
          description: 'Identify paid, pending, and outstanding invoices more easily.',
        },
        {
          iconName: 'Database',
          title: 'Organised Customer Records',
          description: 'Maintain customer and transaction details in one accessible location.',
        },
        {
          iconName: 'TrendingUp',
          title: 'Improved Financial Tracking',
          description: 'Review billing activities through organised reports and summaries.',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Choose Our Product',
      heading: 'A Simpler Way to Manage Business Billing.',
      description:
        'Your business needs more than a basic invoice generator. eInvoice provides an organised billing environment that helps manage customer information, invoice records, and payment activities with ease.',
      image: einvoiceWhyImg,
      imageAlt: 'Business finance and digital invoice management',
      items: [
        {
          title: 'Easy Invoice Creation',
          description: 'Generate professional invoices through a straightforward interface.',
        },
        {
          title: 'Centralised Billing Records',
          description: 'Keep invoice and customer information organised in one platform.',
        },
        {
          title: 'Flexible Invoice Management',
          description:
            'Manage different billing requirements using configurable invoice details.',
        },
        {
          title: 'Payment Visibility',
          description: 'Monitor invoice statuses and outstanding payments conveniently.',
        },
        {
          title: 'Accessible Digital Documents',
          description: 'Generate and share invoice documents through supported formats.',
        },
        {
          title: 'Business-Friendly Reporting',
          description: 'Review billing information to support financial planning.',
        },
      ],
    },
    faqs: {
      heading: 'Everything You Need to Know About eInvoice.',
      items: [
        {
          question: 'What is eInvoice software?',
          answer:
            'eInvoice is a digital invoicing solution that helps businesses create invoices, manage customers, track payments, and maintain billing records.',
        },
        {
          question: 'Can I generate professional invoices?',
          answer:
            'Yes. The platform supports creating structured invoices with customer, product, pricing, and billing information.',
        },
        {
          question: 'Can I manage customer details?',
          answer:
            'Yes. You can maintain customer profiles and access related billing information.',
        },
        {
          question: 'Does eInvoice support GST details?',
          answer:
            'The platform can support applicable GST and tax-related billing fields based on its configured functionality.',
        },
        {
          question: 'Can I track pending payments?',
          answer:
            'Yes. Payment tracking functionality helps identify paid, pending, and outstanding invoices.',
        },
        {
          question: 'Can invoices be downloaded and shared?',
          answer:
            'Invoices can be generated in supported digital formats, such as PDF, for convenient sharing.',
        },
        {
          question: 'Who can use eInvoice?',
          answer:
            'Small businesses, service providers, retailers, freelancers, and other organisations can use invoicing software to organise their billing activities.',
        },
      ],
    },
    cta: {
      headline: 'Make Every Invoice Count.',
      description:
        'Simplify billing, organise customer records, and stay on top of payments with an intelligent invoicing solution designed for modern business operations.',
      primaryLabel: 'Request a Free Demo',
      secondaryLabel: 'Talk to Our Team',
    },
  },

  'load-tracker': {
    eyebrow: 'Load Tracker',
    metaTitle: 'Load Tracking Software | Load Tracker | Vijayan Tech',
    metaDescription:
      'Bring greater visibility to your transportation and logistics operations with Load Tracker. Manage load assignments, vehicles, drivers, and delivery tracking.',
    metaKeywords:
      'Load Tracking Software, Logistics Management Software, Shipment Tracking, Load Tracker',
    hero: {
      headline: 'Track Every Load. Stay in Control of Every Delivery.',
      description:
        'Bring greater visibility to your transportation and logistics operations with Load Tracker. Monitor load assignments, track delivery progress, manage vehicle information, and coordinate transportation activities through one centralised platform.',
      primaryCta: 'Request a Free Demo',
      secondaryCta: 'Explore Features',
      image: loadTrackerImg,
      imageAlt: 'Freight logistics and load tracking operations',
    },
    overview: {
      heading: 'Complete Visibility Across Your Logistics Operations.',
      paragraphs: [
        'Managing transportation activities requires constant coordination between loads, vehicles, drivers, and delivery schedules. Load Tracker brings these operational details together to help businesses organise transportation workflows and monitor shipment progress.',
        'From assigning loads to reviewing delivery status, access essential logistics information through a unified tracking environment.',
      ],
      highlights: [
        { iconName: 'Package', label: 'Load Assignment Management' },
        { iconName: 'MapPin', label: 'Shipment Status Tracking' },
        { iconName: 'Truck', label: 'Vehicle Information Management' },
        { iconName: 'Users', label: 'Driver Management' },
        { iconName: 'Activity', label: 'Delivery Monitoring' },
        { iconName: 'BarChart3', label: 'Logistics Reports' },
      ],
    },
    modules: {
      heading: 'Smarter Tools for More Efficient Load Management.',
      description:
        'Keep transportation activities organised with dedicated tools for managing loads, vehicles, drivers, and delivery information.',
      items: [
        {
          number: '01',
          iconName: 'Package',
          title: 'Load Management',
          image: loadTracker01Img,
          description:
            'Create and manage load assignments while maintaining essential shipment information.',
          features: [
            'Load Registration',
            'Load Assignment',
            'Shipment Details',
            'Load Status Management',
          ],
        },
        {
          number: '02',
          iconName: 'MapPin',
          title: 'Shipment Tracking',
          image: loadTracker02Img,
          description:
            'Monitor shipment progress and maintain visibility throughout the delivery process.',
          features: [
            'Shipment Status Updates',
            'Tracking Information',
            'Delivery Progress Monitoring',
            'Shipment History',
          ],
        },
        {
          number: '03',
          iconName: 'Truck',
          title: 'Vehicle Management',
          image: loadTracker03Img,
          description: 'Maintain vehicle information and organise transportation resources.',
          features: [
            'Vehicle Registration',
            'Vehicle Details',
            'Vehicle Assignment',
            'Vehicle Records',
          ],
        },
        {
          number: '04',
          iconName: 'Users',
          title: 'Driver Management',
          image: loadTracker04Img,
          description: 'Organise driver information and maintain load-related assignment details.',
          features: [
            'Driver Profiles',
            'Driver Assignments',
            'Contact Information',
            'Driver Records',
          ],
        },
        {
          number: '05',
          iconName: 'Activity',
          title: 'Delivery Management',
          image: loadTracker05Img,
          description:
            'Manage delivery information and monitor the progress of transportation activities.',
          features: [
            'Delivery Scheduling',
            'Delivery Status',
            'Delivery Confirmation',
            'Delivery Records',
          ],
        },
        {
          number: '06',
          iconName: 'BarChart3',
          title: 'Reports & Analytics',
          image: loadTracker06Img,
          description:
            'Review transportation activities and access operational information through organised reports.',
          features: [
            'Load Reports',
            'Shipment Reports',
            'Vehicle Reports',
            'Delivery Summaries',
          ],
        },
      ],
    },
    benefits: {
      heading: 'Better Tracking. Smarter Transportation Management.',
      description:
        'Transportation operations become easier to coordinate when important load and delivery information is available in one place. Load Tracker helps businesses organise logistics activities and improve operational visibility.',
      items: [
        {
          iconName: 'MapPin',
          title: 'Improved Load Visibility',
          description:
            'Monitor load assignments and shipment progress through organised tracking information.',
        },
        {
          iconName: 'Truck',
          title: 'Better Resource Coordination',
          description: 'Manage vehicle and driver information more efficiently.',
        },
        {
          iconName: 'Zap',
          title: 'Reduced Administrative Work',
          description: 'Simplify manual load records and repetitive transportation updates.',
        },
        {
          iconName: 'Activity',
          title: 'Improved Delivery Monitoring',
          description: 'Maintain visibility into delivery schedules and shipment status.',
        },
        {
          iconName: 'TrendingUp',
          title: 'Data-Driven Planning',
          description:
            'Use transportation reports to understand operational activities and identify areas for improvement.',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Choose Our Product',
      heading: 'Built for Greater Control Over Every Load.',
      description:
        'Every delivery matters. Load Tracker provides a structured management environment that helps transportation businesses coordinate their resources, maintain shipment information, and monitor daily logistics activities.',
      image: loadTrackerWhyImg,
      imageAlt: 'Logistics fleet coordination and shipment monitoring',
      items: [
        {
          title: 'Centralised Load Information',
          description: 'Manage essential shipment details from one platform.',
        },
        {
          title: 'Operational Visibility',
          description: 'Access load and delivery information through an organised dashboard.',
        },
        {
          title: 'Simplified Assignment Management',
          description: 'Coordinate available loads, vehicles, and drivers.',
        },
        {
          title: 'Structured Tracking Records',
          description: 'Maintain shipment history and status information.',
        },
        {
          title: 'User-Friendly Management',
          description:
            'Access essential transportation tools through a straightforward interface.',
        },
        {
          title: 'Reporting Capabilities',
          description: 'Review logistics activities using organised reports and summaries.',
        },
      ],
    },
    faqs: {
      heading: 'Common Questions About Load Tracker.',
      items: [
        {
          question: 'What is Load Tracker software?',
          answer:
            'Load Tracker is a logistics management solution that helps businesses organise load assignments, monitor shipments, manage vehicles, and maintain delivery information.',
        },
        {
          question: 'Can I manage multiple load assignments?',
          answer:
            'Yes. Load management functionality helps create, organise, and monitor multiple load records.',
        },
        {
          question: 'Can I track shipment progress?',
          answer:
            'Yes. The platform can maintain shipment status and tracking information based on available tracking functionality.',
        },
        {
          question: 'Can I manage vehicle and driver information?',
          answer:
            'Yes. Vehicle and driver management features help maintain transportation resource records and assignments.',
        },
        {
          question: 'Can I monitor delivery status?',
          answer:
            'Yes. Delivery management tools help maintain delivery schedules, progress, and confirmation records.',
        },
        {
          question: 'Does Load Tracker provide reports?',
          answer:
            'Yes. Available reports can help review load assignments, shipments, vehicles, and delivery activities.',
        },
        {
          question: 'Who can benefit from Load Tracker?',
          answer:
            'Transport companies, logistics operators, fleet managers, and businesses managing goods transportation can benefit from organised load tracking.',
        },
      ],
    },
    cta: {
      headline: 'Take Control of Every Load and Every Journey.',
      description:
        'Bring your transportation activities together with smarter tracking and organised logistics management. Make every load easier to manage with Load Tracker.',
      primaryLabel: 'Request a Free Demo',
      secondaryLabel: 'Contact Our Team',
    },
  },

  'job-portal': {
    eyebrow: 'Job Portal',
    metaTitle: 'Job Portal Software | Vijayan Tech',
    metaDescription:
      'Connect great talent with the right opportunities using Job Portal software. Publish job openings, manage candidates, track applications, and streamline hiring.',
    metaKeywords: 'Job Portal Software, Recruitment Portal, Online Job Portal, Job Portal',
    hero: {
      headline: 'Connect Great Talent with the Right Opportunities.',
      description:
        'Make recruitment simpler with a digital job portal designed to connect employers and job seekers. Publish job openings, discover suitable candidates, manage applications, and organise recruitment activities through one platform.',
      primaryCta: 'Get Started',
      secondaryCta: 'Explore Features',
      image: jobPortalImg,
      imageAlt: 'Recruitment team reviewing candidate applications',
    },
    overview: {
      heading: 'One Platform. Endless Career Possibilities.',
      paragraphs: [
        'Recruitment involves multiple activities, from publishing vacancies and attracting candidates to reviewing applications and managing hiring progress. Job Portal brings these processes together in one organised digital environment.',
        'Whether you are an employer looking for the right talent or a candidate searching for new opportunities, the platform provides a structured space for connecting professional skills with business requirements.',
      ],
      highlights: [
        { iconName: 'FileText', label: 'Job Listing Management' },
        { iconName: 'Users', label: 'Candidate Registration' },
        { iconName: 'Layers', label: 'Resume & Profile Management' },
        { iconName: 'Activity', label: 'Application Tracking' },
        { iconName: 'Building2', label: 'Employer Management' },
        { iconName: 'Settings', label: 'Recruitment Administration' },
      ],
    },
    modules: {
      heading: 'Everything You Need to Simplify Recruitment.',
      description:
        'Create a smoother hiring experience with dedicated tools for employers, job seekers, and recruitment administrators.',
      items: [
        {
          number: '01',
          iconName: 'FileText',
          title: 'Job Listing Management',
          image: jobPortal01Img,
          description:
            'Publish and organise job opportunities with clear descriptions and requirements.',
          features: [
            'Job Posting',
            'Job Category Management',
            'Job Description Management',
            'Job Listing Updates',
          ],
        },
        {
          number: '02',
          iconName: 'Users',
          title: 'Candidate Management',
          image: jobPortal02Img,
          description:
            'Help job seekers create professional profiles and maintain their career information.',
          features: [
            'Candidate Registration',
            'Profile Management',
            'Resume Upload',
            'Skills & Experience Details',
          ],
        },
        {
          number: '03',
          iconName: 'Search',
          title: 'Job Search & Discovery',
          image: jobPortal03Img,
          description:
            'Make it easier for candidates to discover relevant employment opportunities.',
          features: [
            'Job Search',
            'Category-Based Filtering',
            'Location-Based Search',
            'Job Detail Pages',
          ],
        },
        {
          number: '04',
          iconName: 'Activity',
          title: 'Application Management',
          image: jobPortal04Img,
          description:
            'Organise job applications and maintain visibility into candidate progress.',
          features: [
            'Online Job Applications',
            'Application Records',
            'Application Status Tracking',
            'Candidate Shortlisting',
          ],
        },
        {
          number: '05',
          iconName: 'Building2',
          title: 'Employer Management',
          image: jobPortal05Img,
          description:
            'Provide employers with tools to manage company information and recruitment activities.',
          features: [
            'Employer Registration',
            'Company Profiles',
            'Job Posting Dashboard',
            'Application Management',
          ],
        },
        {
          number: '06',
          iconName: 'BarChart3',
          title: 'Admin & Reporting',
          image: jobPortal06Img,
          description:
            'Manage platform activities and maintain visibility into recruitment operations.',
          features: [
            'User Management',
            'Job Approval Management',
            'Job Category Administration',
            'Recruitment Reports',
          ],
        },
      ],
    },
    benefits: {
      heading: 'Make Hiring Easier. Discover Better Opportunities.',
      description:
        'A well-organised recruitment platform creates value for both employers and candidates. Job Portal simplifies job discovery, application management, and hiring administration through a connected digital experience.',
      items: [
        {
          iconName: 'Globe',
          title: 'Wider Job Visibility',
          description: 'Make available job opportunities easier for candidates to discover.',
        },
        {
          iconName: 'Layers',
          title: 'Simplified Recruitment',
          description: 'Organise job listings and candidate applications through one platform.',
        },
        {
          iconName: 'Users',
          title: 'Better Candidate Management',
          description: 'Maintain professional profiles, resumes, and application details.',
        },
        {
          iconName: 'Zap',
          title: 'Faster Application Review',
          description:
            'Help employers review candidate information and monitor application progress.',
        },
        {
          iconName: 'Search',
          title: 'Convenient Job Discovery',
          description:
            'Allow candidates to explore employment opportunities based on relevant criteria.',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Choose Our Product',
      heading: 'A Smarter Way to Bring Employers and Talent Together.',
      description:
        'Successful recruitment starts with the right connection. Job Portal provides a structured digital environment that supports employers, candidates, and administrators throughout the recruitment journey.',
      image: jobPortalWhyImg,
      imageAlt: 'Professionals collaborating during hiring and recruitment',
      items: [
        {
          title: 'Employer & Candidate Ecosystem',
          description: 'Create a shared platform for businesses and professionals.',
        },
        {
          title: 'Easy Job Publishing',
          description: 'Organise and publish employment opportunities through a simple interface.',
        },
        {
          title: 'Convenient Candidate Profiles',
          description: 'Maintain professional information and resumes in one place.',
        },
        {
          title: 'Structured Application Workflow',
          description: 'Manage applications and hiring progress systematically.',
        },
        {
          title: 'Flexible Job Discovery',
          description: 'Support job searches using relevant categories and location information.',
        },
        {
          title: 'Centralised Administration',
          description:
            'Manage job listings, users, and recruitment activities through an organised dashboard.',
        },
      ],
    },
    faqs: {
      heading: 'Everything You Need to Know About Job Portal.',
      items: [
        {
          question: 'What is a Job Portal?',
          answer:
            'A Job Portal is an online platform that connects employers with job seekers by providing tools for publishing vacancies, discovering opportunities, and managing applications.',
        },
        {
          question: 'Who can use the Job Portal?',
          answer:
            'Employers, recruiters, job seekers, and platform administrators can use relevant features based on their assigned roles.',
        },
        {
          question: 'Can employers publish job openings?',
          answer:
            'Yes. Employers can create job listings with relevant descriptions, qualifications, experience requirements, and other details.',
        },
        {
          question: 'Can candidates upload their resumes?',
          answer:
            'Yes. Candidate profile functionality can support resume uploads and professional information management.',
        },
        {
          question: 'Can candidates search for jobs by location?',
          answer:
            'Yes. Job discovery functionality can support location-based searches and other available filtering options.',
        },
        {
          question: 'Can employers track applications?',
          answer:
            'Yes. Application management tools help employers review candidate applications and monitor their progress.',
        },
        {
          question: 'Can administrators manage job listings?',
          answer:
            'Yes. Administrative functionality can support user management, job listing oversight, and platform administration.',
        },
      ],
    },
    cta: {
      headline: 'The Right Opportunity Starts with the Right Connection.',
      description:
        'Create meaningful connections between talent and opportunity. Simplify recruitment, improve job discovery, and build a better hiring experience with Job Portal.',
      primaryLabel: 'Explore Job Portal',
      secondaryLabel: 'Contact Our Team',
    },
  },

  'gym-pro': {
    eyebrow: 'Gym Pro',
    metaTitle: 'Gym Management Software | Gym Pro | Vijayan Tech',
    metaDescription:
      'Manage your fitness business with Gym Pro. Organise memberships, trainers, member attendance, fee tracking, renewals, and gym operations in one integrated platform.',
    metaKeywords:
      'Gym Management Software, Fitness Management Software, Gym Membership Management, Gym Pro',
    hero: {
      headline: 'Manage Your Fitness Business. Inspire Better Results.',
      description:
        'Take your fitness centre management to the next level with Gym Pro. Organise memberships, manage trainers, track attendance, monitor payments, and streamline everyday gym operations through one integrated platform.',
      primaryCta: 'Request a Free Demo',
      secondaryCta: 'Explore Features',
      image: gymProImg,
      imageAlt: 'Modern fitness studio and gym training environment',
    },
    overview: {
      heading: 'Your Complete Fitness Business Management Platform.',
      paragraphs: [
        'Running a gym involves managing members, trainers, memberships, schedules, and payments. Gym Pro brings these activities together in one organised system, helping fitness businesses simplify daily administration and deliver a better member experience.',
        'From new member registrations to membership renewals and trainer coordination, manage your fitness operations with greater convenience and control.',
      ],
      highlights: [
        { iconName: 'Users', label: 'Member Registration & Profiles' },
        { iconName: 'Layers', label: 'Membership Plan Management' },
        { iconName: 'Building2', label: 'Trainer & Staff Management' },
        { iconName: 'Activity', label: 'Attendance Tracking' },
        { iconName: 'CreditCard', label: 'Payment & Renewal Management' },
        { iconName: 'BarChart3', label: 'Gym Reports & Analytics' },
      ],
    },
    modules: {
      heading: 'Everything Your Gym Needs to Stay in Shape.',
      description:
        'Manage every important part of your fitness business with practical tools designed for smooth gym administration.',
      items: [
        {
          number: '01',
          iconName: 'Users',
          title: 'Member Management',
          image: gymPro01Img,
          description:
            'Maintain member information and organise registrations through a centralised system.',
          features: [
            'Member Registration',
            'Member Profiles',
            'Personal Information',
            'Membership History',
          ],
        },
        {
          number: '02',
          iconName: 'Layers',
          title: 'Membership Management',
          image: gymPro02Img,
          description: "Create and manage membership plans based on your gym's offerings.",
          features: [
            'Membership Plans',
            'Membership Duration',
            'Membership Activation',
            'Renewal Management',
          ],
        },
        {
          number: '03',
          iconName: 'Building2',
          title: 'Trainer & Staff Management',
          image: gymPro03Img,
          description:
            'Organise trainer and employee information while managing their responsibilities.',
          features: [
            'Trainer Profiles',
            'Staff Information',
            'Trainer Assignments',
            'Staff Records',
          ],
        },
        {
          number: '04',
          iconName: 'Activity',
          title: 'Attendance Management',
          image: gymPro04Img,
          description: 'Monitor member visits and maintain organised attendance records.',
          features: [
            'Member Check-In',
            'Daily Attendance',
            'Attendance History',
            'Visit Reports',
          ],
        },
        {
          number: '05',
          iconName: 'CreditCard',
          title: 'Payment Management',
          image: gymPro05Img,
          description:
            'Manage membership payments and maintain financial transaction information.',
          features: [
            'Membership Fee Tracking',
            'Payment Records',
            'Renewal Reminders',
            'Outstanding Payment Tracking',
          ],
        },
        {
          number: '06',
          iconName: 'BarChart3',
          title: 'Reports & Dashboard',
          image: gymPro06Img,
          description:
            "Get an organised overview of your gym's daily activities and membership performance.",
          features: [
            'Member Reports',
            'Membership Reports',
            'Attendance Reports',
            'Revenue Summaries',
          ],
        },
      ],
    },
    benefits: {
      heading: 'Spend More Time Building Fitness. Less Time Managing It.',
      description:
        'Running a successful fitness business requires more than great equipment and training programmes. Gym Pro helps simplify the administrative side of your gym so you can focus on members, trainers, and business growth.',
      items: [
        {
          iconName: 'Users',
          title: 'Simplified Member Administration',
          description: 'Manage member information and registrations without scattered records.',
        },
        {
          iconName: 'Layers',
          title: 'Better Membership Control',
          description: 'Monitor active memberships, renewals, and membership history.',
        },
        {
          iconName: 'Activity',
          title: 'Improved Daily Coordination',
          description: 'Keep trainer, staff, and member information organised.',
        },
        {
          iconName: 'CreditCard',
          title: 'Easier Payment Tracking',
          description: 'Maintain clear payment records and monitor outstanding amounts.',
        },
        {
          iconName: 'TrendingUp',
          title: 'Better Business Visibility',
          description: 'Review attendance, memberships, and financial activities through reports.',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Choose Our Product',
      heading: 'Smart Management for Stronger Fitness Businesses.',
      description:
        'Your gym deserves a management solution that works as hard as your members do. Gym Pro combines essential fitness business management tools into one accessible platform designed to simplify operations and support business development.',
      image: gymProWhyImg,
      imageAlt: 'Fitness centre operations and member training',
      items: [
        {
          title: 'Fitness-Focused Functionality',
          description:
            'Tools designed around the everyday requirements of gyms and fitness centres.',
        },
        {
          title: 'Centralised Member Records',
          description: 'Access important member information through one organised platform.',
        },
        {
          title: 'Flexible Membership Plans',
          description:
            'Manage different membership options and durations according to business requirements.',
        },
        {
          title: 'Simple Administration',
          description: 'Handle everyday gym management activities through an easy-to-use interface.',
        },
        {
          title: 'Organised Payment Records',
          description: 'Maintain visibility into membership fees and renewal activities.',
        },
        {
          title: 'Business Performance Insights',
          description: 'Use available reports to understand memberships and gym operations.',
        },
      ],
    },
    faqs: {
      heading: 'Everything You Need to Know About Gym Pro.',
      items: [
        {
          question: 'What is Gym Pro software?',
          answer:
            'Gym Pro is a gym management solution that helps fitness centres manage memberships, member records, trainers, attendance, payments, and administrative activities.',
        },
        {
          question: 'Can I manage multiple membership plans?',
          answer:
            'Yes. Membership management functionality supports organising different plans, durations, and membership details.',
        },
        {
          question: 'Can I track member attendance?',
          answer:
            'Yes. Attendance functionality helps maintain daily member check-in and visit records.',
        },
        {
          question: 'Can I manage trainers and staff?',
          answer:
            'Yes. You can maintain trainer and staff information through dedicated management features.',
        },
        {
          question: 'Can Gym Pro track membership renewals?',
          answer:
            'Yes. Membership records and renewal management tools help monitor upcoming and completed renewals.',
        },
        {
          question: 'Can I manage gym payments?',
          answer:
            'Yes. The platform can help maintain membership payment records and monitor outstanding amounts.',
        },
        {
          question: 'Who can use Gym Pro?',
          answer:
            'Gym owners, fitness centre administrators, trainers, and authorised staff can use relevant features according to their assigned access permissions.',
        },
      ],
    },
    cta: {
      headline: 'Build a Better-Managed Fitness Business with Gym Pro.',
      description:
        'Simplify gym administration, stay connected with your members, and manage your fitness operations with greater confidence. Take the next step towards smarter gym management.',
      primaryLabel: 'Request a Free Demo',
      secondaryLabel: 'Talk to Our Team',
    },
  },

  'domain-tracker': {
    eyebrow: 'Domain Tracker',
    metaTitle: 'Domain Management Software | Domain Tracker | Vijayan Tech',
    metaDescription:
      'Take control of your domain portfolio with Domain Tracker. Organise domain records, monitor registration and expiry dates, and manage renewal schedules in one place.',
    metaKeywords:
      'Domain Management Software, Domain Expiry Tracker, Domain Portfolio Management, Domain Tracker',
    hero: {
      headline: 'Manage Every Domain. Protect Your Digital Presence.',
      description:
        'Take control of your domain portfolio with Domain Tracker. Organise domain information, monitor registration and expiry dates, manage renewal schedules, and maintain visibility across your digital assets through one centralised platform.',
      primaryCta: 'Request a Free Demo',
      secondaryCta: 'Explore Features',
      image: domainTrackerImg,
      imageAlt: 'Digital domain portfolio and asset monitoring',
    },
    overview: {
      heading: 'Complete Visibility for Your Domain Portfolio.',
      paragraphs: [
        'Managing multiple domain names can become challenging when registration details, renewal dates, and ownership information are spread across different platforms. Domain Tracker brings important domain information together in one organised environment.',
        'From maintaining domain records to monitoring expiry dates and tracking renewal activities, keep your digital assets organised and easier to manage.',
      ],
      highlights: [
        { iconName: 'Database', label: 'Centralised Domain Records' },
        { iconName: 'Activity', label: 'Domain Expiry Monitoring' },
        { iconName: 'RefreshCw', label: 'Renewal Schedule Management' },
        { iconName: 'Globe', label: 'Registrar Information Management' },
        { iconName: 'ShieldCheck', label: 'Domain Status Tracking' },
        { iconName: 'BarChart3', label: 'Domain Portfolio Reports' },
      ],
    },
    modules: {
      heading: 'Everything You Need to Stay on Top of Your Domains.',
      description:
        'Maintain better visibility over your domain portfolio with dedicated tools for managing domain information, monitoring expiry dates, and organising renewals.',
      items: [
        {
          number: '01',
          iconName: 'Database',
          title: 'Domain Portfolio Management',
          image: domainTracker01Img,
          description: 'Maintain a structured record of your registered domain names.',
          features: [
            'Domain Registration Records',
            'Domain Name Management',
            'Domain Categorisation',
            'Domain Information Storage',
          ],
        },
        {
          number: '02',
          iconName: 'Activity',
          title: 'Expiry Date Monitoring',
          image: domainTracker02Img,
          description:
            'Keep track of domain expiry dates and stay informed about upcoming renewals.',
          features: [
            'Expiry Date Tracking',
            'Upcoming Expiry Overview',
            'Expiry Notifications',
            'Domain Status Overview',
          ],
        },
        {
          number: '03',
          iconName: 'RefreshCw',
          title: 'Renewal Management',
          image: domainTracker03Img,
          description:
            'Organise renewal schedules and maintain visibility into domain renewal activities.',
          features: [
            'Renewal Date Management',
            'Renewal Status Tracking',
            'Renewal History',
            'Renewal Reminders',
          ],
        },
        {
          number: '04',
          iconName: 'Globe',
          title: 'Registrar Management',
          image: domainTracker04Img,
          description:
            'Maintain information about domain registrars and related registration details.',
          features: [
            'Registrar Information',
            'Account Details',
            'Registration Records',
            'Registrar Categorisation',
          ],
        },
        {
          number: '05',
          iconName: 'ShieldCheck',
          title: 'Domain Status Management',
          image: domainTracker05Img,
          description:
            'Monitor important domain information and maintain organised portfolio records.',
          features: [
            'Active Domain Records',
            'Expired Domain Records',
            'Status Updates',
            'Domain History',
          ],
        },
        {
          number: '06',
          iconName: 'BarChart3',
          title: 'Dashboard & Reports',
          image: domainTracker06Img,
          description: 'Review domain portfolio information through an organised dashboard.',
          features: [
            'Domain Portfolio Overview',
            'Expiry Reports',
            'Renewal Reports',
            'Domain Status Summaries',
          ],
        },
      ],
    },
    benefits: {
      heading: 'Stay Organised. Never Lose Sight of Your Domains.',
      description:
        'Your domain names are important digital assets. Domain Tracker helps you maintain better control over domain information, monitor renewal schedules, and organise your portfolio through one convenient management solution.',
      items: [
        {
          iconName: 'Database',
          title: 'Centralised Domain Information',
          description: 'Keep domain names and registration details organised in one place.',
        },
        {
          iconName: 'RefreshCw',
          title: 'Better Renewal Planning',
          description: 'Monitor upcoming expiry dates and plan renewals more effectively.',
        },
        {
          iconName: 'ShieldCheck',
          title: 'Reduced Oversight',
          description:
            'Use organised records and reminders to reduce the risk of missing renewal dates.',
        },
        {
          iconName: 'Activity',
          title: 'Improved Portfolio Visibility',
          description: 'Understand your domain portfolio through a consolidated dashboard.',
        },
        {
          iconName: 'Zap',
          title: 'Easier Domain Administration',
          description: 'Reduce the effort involved in maintaining multiple domain records.',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Choose Our Product',
      heading: 'Smarter Domain Management Starts Here.',
      description:
        'Whether you manage a few domains or a larger digital portfolio, keeping track of important registration details is essential. Domain Tracker offers a structured environment to help you organise, monitor, and manage your domain assets.',
      image: domainTrackerWhyImg,
      imageAlt: 'Domain portfolio management and monitoring dashboard',
      items: [
        {
          title: 'Portfolio-Centred Management',
          description: 'Manage multiple domain records through one centralised interface.',
        },
        {
          title: 'Expiry Awareness',
          description: 'Keep important renewal dates visible and easier to monitor.',
        },
        {
          title: 'Organised Domain Records',
          description: 'Maintain essential registration and registrar information.',
        },
        {
          title: 'Convenient Dashboard',
          description:
            'Access important domain information without searching through multiple records.',
        },
        {
          title: 'Structured Renewal Tracking',
          description: 'Monitor renewal schedules and related activities.',
        },
        {
          title: 'Scalable Portfolio Management',
          description: 'Organise domain information as your digital portfolio expands.',
        },
      ],
    },
    faqs: {
      heading: 'Everything You Need to Know About Domain Tracker.',
      items: [
        {
          question: 'What is Domain Tracker software?',
          answer:
            'Domain Tracker is a domain management solution that helps users organise domain information, monitor expiry dates, track renewals, and maintain domain portfolio records.',
        },
        {
          question: 'Can I manage multiple domain names?',
          answer:
            'Yes. The platform is designed to help organise multiple domain records through a centralised management interface.',
        },
        {
          question: 'Can Domain Tracker monitor domain expiry dates?',
          answer:
            'Yes. Expiry monitoring functionality helps users maintain visibility into upcoming domain expiration dates.',
        },
        {
          question: 'Does Domain Tracker support renewal reminders?',
          answer:
            'The platform can provide renewal reminder functionality based on the available notification configuration.',
        },
        {
          question: 'Can I store registrar information?',
          answer:
            'Yes. Domain records can include relevant registrar and registration information for easier reference.',
        },
        {
          question: 'Can I view all my domains in one dashboard?',
          answer:
            'Yes. The dashboard can provide an organised overview of your domain portfolio and related information.',
        },
        {
          question: 'Who can benefit from Domain Tracker?',
          answer:
            'Businesses, web developers, digital agencies, IT teams, and domain portfolio managers can use Domain Tracker to organise their domain assets.',
        },
      ],
    },
    cta: {
      headline: 'Keep Your Digital Assets Organised and Protected.',
      description:
        'Manage your domain portfolio with greater visibility and confidence. Stay ahead of expiry dates, organise renewal activities, and bring all your domain information together with Domain Tracker.',
      primaryLabel: 'Request a Free Demo',
      secondaryLabel: 'Contact Our Team',
    },
  },
};
