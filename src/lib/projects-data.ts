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
    title: "Smart Asset Tracking System",
    tagline: "IoT tracking without dedicated hardware.",
    description: "A real-time asset tracking system that leverages standard smartphones as IoT nodes. By completely eliminating the dependency on expensive, dedicated GPS hardware, it provides an innovative, low-cost solution for multi-asset monitoring, geofencing, and real-time route visualization.",
    features: [
      {
        title: "React Native",
        description: "Developed a cross-platform mobile app with continuous, low-power background location tracking."
      },
      {
        title: "Firebase",
        description: "Architected a low-latency (< 500ms) event-driven data synchronization pipeline."
      },
      {
        title: "Machine Learning",
        description: "Applied Isolation and Random Forest models achieving >85% anomaly detection accuracy."
      }
    ]
  },
  {
    id: "data-wiping-tool",
    title: "Data Wiping and Secure Erasure",
    tagline: "NIST-compliant secure data sanitization.",
    description: "A high-performance secure data sanitization system designed to ensure the irreversible deletion of sensitive data from storage devices. It strictly complies with DoD 5220.22-M and Gutmann standards, providing cryptographic proof of destruction for enterprise environments.",
    features: [
      {
        title: "React Dashboard",
        description: "Built a real-time monitoring interface for comprehensive control of active wipe operations."
      },
      {
        title: "Multithreading",
        description: "Optimized concurrent I/O handling, improving overall operational efficiency by ~60%."
      },
      {
        title: "Audit & Compliance",
        description: "Integrated deep logging and audit mechanisms for absolute traceability and legal compliance."
      }
    ]
  },
  {
    id: "student-database-management-system",
    title: "Student Database Management",
    tagline: "Hybrid architecture for academic records.",
    description: "A comprehensive CRUD-based academic management system engineered to handle both structured and unstructured university data seamlessly. Built following strict modular design principles with a secure Java Swing interface.",
    features: [
      {
        title: "Hybrid Database",
        description: "Integrated MySQL and MongoDB for optimized querying of complex student hierarchies."
      },
      {
        title: "Access Control",
        description: "Developed robust authentication pipelines and strict role-based access control (RBAC)."
      },
      {
        title: "Advanced Search",
        description: "Implemented dynamic filtering, sorting, and indexed search for extremely massive datasets."
      }
    ]
  },
  {
    id: "naya-sawera-ngo",
    title: "NGO Website Development",
    tagline: "Digital transformation for non-profit outreach.",
    description: "A highly responsive web application built to significantly enhance Naya Sawera NGO's outreach and community engagement. The platform modernizes donation collection and heavily streamlines the volunteer onboarding process.",
    features: [
      {
        title: "Payment Workflows",
        description: "Implemented secure, frictionless donation pipelines to drastically increase funding conversion."
      },
      {
        title: "UI Engineering",
        description: "Built an extensive library of reusable UI components with strict validation and dark mode."
      },
      {
        title: "Accessibility",
        description: "Optimized the entire platform for strict web accessibility standards and maximum performance."
      }
    ]
  }
];
