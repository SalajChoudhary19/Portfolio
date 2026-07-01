export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectSection {
  id: string;
  label: string;
  heading: string;
  layout?: "hero" | "right-content" | string;
  content: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: ProjectFeature[];
  prevProject?: { id: string; title: string } | null;
  nextProject?: { id: string; title: string } | null;
  sections?: ProjectSection[];
  technologies?: string[];
}

export const projects: ProjectData[] = [
  {
    id: "asset-tracking-system",
    title: "SMART ASSET TRACKING SYSTEM",
    tagline: "IoT-powered asset monitoring without dedicated GPS hardware.",
    description: "Designed and developed a real-time asset tracking platform that transforms standard smartphones into IoT tracking nodes, eliminating the need for expensive dedicated GPS devices. The system enables continuous background location tracking, geofencing, route visualization, and centralized asset monitoring through a scalable cloud-based architecture. Leveraging Firebase Realtime Database and event-driven synchronization, the platform delivers location updates with latency below 500ms while maintaining low power consumption. Machine learning models were integrated to identify abnormal asset movement patterns and improve operational visibility through intelligent anomaly detection.",
    features: [
      {
        title: "REACT NATIVE",
        description: "Built a cross-platform mobile application capable of continuous background location tracking, optimized battery usage, and reliable geolocation updates. Implemented location services, permission management, and efficient tracking mechanisms to ensure consistent performance across Android and iOS devices."
      },
      {
        title: "FIREBASE",
        description: "Architected a low-latency event-driven synchronization pipeline using Firebase Realtime Database to enable real-time communication between mobile devices and the monitoring dashboard. Achieved sub-500ms update latency while supporting scalable multi-asset tracking and route visualization."
      },
      {
        title: "MACHINE LEARNING",
        description: "Integrated Isolation Forest and Random Forest algorithms to analyze tracking data and identify anomalous movement patterns. Developed an intelligent alerting system capable of detecting suspicious asset behavior with anomaly detection accuracy exceeding 85%."
      }
    ]
  },
  {
    id: "data-wiping-tool",
    title: "DATA WIPING & SECURE ERASURE TOOL",
    tagline: "Enterprise-grade secure data sanitization and compliance-driven erasure.",
    description: "Engineered a secure data wiping platform designed to permanently remove sensitive information from storage devices while maintaining compliance with industry-recognized data destruction standards. The system combines secure overwrite algorithms, audit logging, automated verification, and concurrent processing techniques to ensure reliable and irreversible data sanitization. Performance-focused optimizations were implemented to reduce execution time while preserving security guarantees, making the solution suitable for enterprise-scale environments handling large storage volumes.",
    features: [
      {
        title: "COMPLIANCE",
        description: "Implemented industry-standard data sanitization methods including DoD 5220.22-M and Gutmann multi-pass overwrite algorithms. Ensured complete data destruction and verification while adhering to established security and compliance requirements."
      },
      {
        title: "PERFORMANCE",
        description: "Optimized data wiping operations through multithreading and concurrent I/O processing, significantly reducing execution time for large storage devices. Improved overall system efficiency while maintaining the integrity and reliability of secure erase procedures."
      },
      {
        title: "AUDIT & MONITORING",
        description: "Developed a React-based monitoring dashboard featuring real-time progress tracking, detailed logging, audit trails, and operation reporting. Automated workflow management improved operational efficiency by approximately 60% while enhancing traceability and accountability."
      }
    ]
  },
  {
    id: "student-database-management-system",
    title: "STUDENT DATABASE MANAGEMENT SYSTEM",
    tagline: "Hybrid database architecture for secure and efficient academic management.",
    description: "Developed a comprehensive academic management platform designed to handle student records, administrative operations, and institutional data management through a hybrid database architecture. By integrating both relational and NoSQL databases, the system efficiently manages structured and unstructured information while maintaining scalability and performance. The platform incorporates authentication, role-based access control, advanced querying capabilities, and a modular architecture to support secure and efficient academic workflows.",
    features: [
      {
        title: "DATABASE DESIGN",
        description: "Integrated MySQL and MongoDB to create a hybrid database architecture capable of handling diverse data requirements. Designed efficient schemas and storage strategies to improve scalability, flexibility, and long-term maintainability."
      },
      {
        title: "SECURITY",
        description: "Implemented authentication mechanisms and role-based access control to ensure secure access to academic records and administrative functions. Enforced user-level permissions and protected sensitive institutional data."
      },
      {
        title: "QUERY OPTIMIZATION",
        description: "Developed indexed search functionality, advanced filtering, and sorting mechanisms to improve retrieval performance. Optimized query execution and data access patterns to provide a responsive user experience across large datasets."
      }
    ]
  },
  {
    id: "naya-sawera-ngo",
    title: "NAYA SAWERA NGO PLATFORM",
    tagline: "Modern web platform focused on outreach, engagement, and accessibility.",
    description: "Developed a responsive web application to strengthen community engagement, streamline volunteer onboarding, and simplify donation management processes for the organization. The platform emphasizes usability, accessibility, and performance while maintaining a scalable and maintainable frontend architecture. Reusable components, modern development practices, and optimized user flows were implemented to deliver a seamless experience across devices and browsers.",
    features: [
      {
        title: "USER EXPERIENCE",
        description: "Built reusable UI components with integrated validation, modal systems, responsive layouts, and dark mode support. Focused on creating a consistent and intuitive user experience while improving maintainability across the application."
      },
      {
        title: "DONATION WORKFLOWS",
        description: "Implemented secure donation and volunteer registration workflows with structured form handling, validation mechanisms, and reliable submission processes. Designed the system to support smooth user interactions and efficient data collection."
      },
      {
        title: "ACCESSIBILITY",
        description: "Optimized the platform for accessibility, responsiveness, and cross-browser compatibility. Applied modern frontend best practices to ensure consistent performance and usability across desktop, tablet, and mobile devices."
      }
    ]
  }
];
