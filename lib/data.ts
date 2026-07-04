import { Project, Experience, Skill, Education, Achievement, Service } from "./types";

export const personalInfo = {
  name: "Ujjwal Dwivedi",
  title: "AI Engineer & Enterprise Solution Developer",
  email: "contact@ujjwaldwivedi.com",
  location: "India",
  github: "https://github.com/Ujl529",
  linkedin: "https://linkedin.com/in/ujl529",
  resume: "/assets/resume.pdf",
  tagline: "Building AI Solutions for Modern Enterprises",
  bio: [
    "I don't just build models; I build solutions that drive industrial efficiency and business ROI. My journey into AI began with a realization: the manufacturing sector is sitting on a goldmine of data, yet lacks the intelligent systems to convert that data into foresight.",
    "As an AI Engineer and aspiring Startup Founder, my focus is on bridging the gap between cutting-edge research and enterprise-grade deployment. I specialize in Predictive Maintenance, Industrial IoT, and Scalable AI Architectures.",
  ],
  vision:
    "To democratize industrial intelligence through autonomous agents and predictive analytics, making enterprise-grade AI accessible to manufacturing businesses of all sizes.",
  mission:
    "Building the AI infrastructure that powers the next industrial revolution — where unplanned downtime becomes a thing of the past and every machine operates at peak efficiency.",
};

export const projects: Project[] = [
  {
    id: "predictive-maintenance",
    title: "AI Predictive Maintenance Platform",
    description:
      "Enterprise-grade predictive maintenance system for manufacturing using LSTM, XGBoost, and Isolation Forest models with real-time IoT data pipelines.",
    category: "Enterprise AI",
    techStack: [
      "Python",
      "FastAPI",
      "LSTM",
      "XGBoost",
      "Isolation Forest",
      "PostgreSQL",
      "InfluxDB",
      "Docker",
      "React",
      "TensorFlow",
    ],
    image: "/projects/predictive-maintenance.jpg",
    github: "https://github.com/Ujl529",
    live: "#",
    featured: true,
    highlights: [
      "94% failure prediction accuracy",
      "30% unplanned downtime reduction",
      "Real-time sensor data processing",
      "Executive dashboard with live metrics",
    ],
    problem:
      "Traditional reactive maintenance costs the manufacturing industry billions annually in unplanned downtime and lost productivity. Most facilities lack the data infrastructure to predict equipment failures before they occur.",
    solution:
      "A multi-layered AI pipeline integrating IoT sensor data with deep learning models to predict Failure Probability and Remaining Useful Life (RUL). The system processes real-time telemetry from industrial sensors and provides actionable insights through an executive dashboard.",
    architecture:
      "Sensor data → InfluxDB time-series storage → Feature engineering pipeline → Ensemble model (LSTM + XGBoost + Isolation Forest) → Alerting engine → Executive Dashboard",
    businessImpact:
      "30% reduction in unplanned downtime, $2.4M estimated annual savings for mid-size manufacturing facilities, ROI achieved within 12 months of deployment.",
    challenges: [
      "Handling noisy and incomplete sensor data",
      "Real-time inference latency optimization",
      "Model drift detection and retraining pipeline",
    ],
    futureScope: [
      "Multi-plant federated learning",
      "Digital twin integration",
      "Autonomous maintenance scheduling",
    ],
  },
  {
    id: "bloodbridge",
    title: "BloodBridge",
    description:
      "A platform connecting blood donors with recipients in real-time, featuring AI-powered demand prediction and smart matching algorithms.",
    category: "Full Stack",
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "NLP"],
    image: "/projects/bloodbridge.jpg",
    github: "https://github.com/Ujl529/bloodbridge",
    featured: false,
    highlights: [
      "Real-time donor-recipient matching",
      "AI-powered demand forecasting",
      "Location-based smart search",
    ],
  },
  {
    id: "raahi",
    title: "Raahi - Travel Companion",
    description:
      "An intelligent travel planning platform leveraging ML for personalized itinerary generation and budget optimization.",
    category: "Full Stack",
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "Machine Learning"],
    image: "/projects/raahi.jpg",
    github: "https://github.com/Ujl529/raahi",
    featured: false,
    highlights: [
      "ML-based itinerary generation",
      "Budget optimization engine",
      "Real-time price tracking",
    ],
  },
  {
    id: "deepfake-detection",
    title: "DeepFake Detection System",
    description:
      "Advanced deep learning model for detecting AI-generated synthetic media using ensemble CNN architectures.",
    category: "AI/ML",
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "CNN"],
    image: "/projects/deepfake.jpg",
    github: "https://github.com/Ujl529",
    featured: false,
    highlights: [
      "96% detection accuracy",
      "Real-time video analysis",
      "Multi-model ensemble approach",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Gautam Buddha University",
    role: "Placement Cell Coordinator",
    period: "2023 - 2027",
    details:
      "Orchestrating industrial relations and coordinating recruitment drives for enterprise-tier placements. Managing communication between Fortune 500 companies and the university's talent pipeline.",
    type: "leadership",
  },
  {
    company: "Enterprise AI Internships",
    role: "AI/ML Intern",
    period: "2024 - Present",
    details:
      "Developing and optimizing deep learning models for industrial use cases. Building real-time data pipelines and deploying ML models to production environments using Docker and FastAPI.",
    type: "work",
  },
];

export const skills: Skill[] = [
  { name: "Python", category: "Programming", level: 95 },
  { name: "SQL", category: "Programming", level: 85 },
  { name: "JavaScript", category: "Programming", level: 80 },
  { name: "Java", category: "Programming", level: 70 },
  { name: "TypeScript", category: "Programming", level: 75 },
  { name: "Scikit-Learn", category: "Machine Learning", level: 90 },
  { name: "TensorFlow", category: "Machine Learning", level: 88 },
  { name: "PyTorch", category: "Machine Learning", level: 85 },
  { name: "Pandas", category: "Machine Learning", level: 92 },
  { name: "NumPy", category: "Machine Learning", level: 92 },
  { name: "NLP", category: "Machine Learning", level: 80 },
  { name: "Deep Learning", category: "Machine Learning", level: 85 },
  { name: "LSTM", category: "Deep Learning", level: 85 },
  { name: "XGBoost", category: "Machine Learning", level: 82 },
  { name: "Data Analytics", category: "Data", level: 88 },
  { name: "Git", category: "DevOps", level: 90 },
  { name: "GitHub", category: "DevOps", level: 90 },
  { name: "Docker", category: "DevOps", level: 82 },
  { name: "FastAPI", category: "Backend", level: 85 },
  { name: "REST APIs", category: "Backend", level: 90 },
  { name: "PostgreSQL", category: "Database", level: 85 },
  { name: "InfluxDB", category: "Database", level: 75 },
  { name: "React", category: "Frontend", level: 78 },
  { name: "Next.js", category: "Frontend", level: 75 },
  { name: "Three.js", category: "Frontend", level: 60 },
  { name: "TailwindCSS", category: "Frontend", level: 80 },
  { name: "ServiceNow", category: "Enterprise", level: 70 },
];

export const education: Education[] = [
  {
    school: "Gautam Buddha University",
    degree: "B.Tech",
    field: "Computer Science & Engineering (ML)",
    year: "2023 - 2027",
    score: "7.52 CGPA",
    location: "Greater Noida, India",
  },
  {
    school: "Lions School",
    degree: "Class XII",
    field: "Science",
    year: "2022",
    score: "90.2%",
    location: "Mirzapur, India",
  },
  {
    school: "Vindhyavasini Public School",
    degree: "Class X",
    year: "2020",
    score: "93.6%",
    location: "Mirzapur, India",
  },
];

export const achievements: Achievement[] = [
  {
    title: "ServiceNow Certified System Administrator (CSA)",
    description:
      "Professional certification validating expertise in ServiceNow platform administration, configuration, and workflow automation.",
    icon: "certificate",
    year: "2024",
  },
  {
    title: "ServiceNow Certified Application Developer (CAD)",
    description:
      "Advanced certification demonstrating capability in building custom applications and scoped apps on the ServiceNow platform.",
    icon: "certificate",
    year: "2024",
  },
  {
    title: "AI/ML Internship",
    description:
      "Hands-on industry experience developing and deploying machine learning models for real-world enterprise use cases.",
    icon: "briefcase",
    year: "2024",
  },
  {
    title: "Placement Cell Coordinator",
    description:
      "Elected leadership role managing campus recruitment drives and corporate relations for Gautam Buddha University.",
    icon: "users",
    year: "2023 - 2027",
  },
  {
    title: "Hackathon Participant",
    description:
      "Active participation in multiple hackathons, building AI-powered solutions under time constraints.",
    icon: "trophy",
  },
  {
    title: "Enterprise AI Projects",
    description:
      "Architected and deployed production-grade AI systems including predictive maintenance, deepfake detection, and intelligent platforms.",
    icon: "code",
  },
];

export const services: Service[] = [
  {
    title: "Enterprise AI Solutions",
    description:
      "End-to-end design and deployment of production-grade machine learning systems for industrial environments. From data pipelines to model serving.",
    icon: "cpu",
    features: [
      "Custom ML model development",
      "Production deployment & MLOps",
      "Scalable data pipelines",
      "Model monitoring & retraining",
    ],
  },
  {
    title: "Predictive Analytics",
    description:
      "Advanced time-series forecasting and anomaly detection systems that transform reactive maintenance into predictive strategy.",
    icon: "bar-chart",
    features: [
      "LSTM/GRU time-series models",
      "Anomaly detection systems",
      "Remaining Useful Life estimation",
      "Real-time alerting engines",
    ],
  },
  {
    title: "Industrial AI & IoT",
    description:
      "Intelligent systems connecting industrial IoT sensor data with AI models for real-time monitoring and predictive insights.",
    icon: "zap",
    features: [
      "IoT data ingestion pipelines",
      "Real-time telemetry processing",
      "Digital twin integration",
      "Edge AI deployment",
    ],
  },
  {
    title: "AI Dashboards & Visualization",
    description:
      "Executive-grade dashboards delivering real-time AI insights with intuitive visualizations and drill-down analytics.",
    icon: "activity",
    features: [
      "Executive KPI dashboards",
      "Real-time monitoring interfaces",
      "Custom visualization components",
      "Drill-down analytics",
    ],
  },
  {
    title: "AI Consultation & Strategy",
    description:
      "Strategic technical roadmapping for startups and enterprises looking to leverage AI, LLMs, and computer vision for competitive advantage.",
    icon: "message-square",
    features: [
      "AI strategy & roadmapping",
      "Technology stack selection",
      "Proof-of-concept development",
      "Team augmentation & training",
    ],
  },
  {
    title: "SaaS MVP Development",
    description:
      "Rapid development of AI-powered SaaS MVPs from concept to launch, with focus on scalability and product-market fit.",
    icon: "rocket",
    features: [
      "Full-stack MVP development",
      "AI feature integration",
      "Cloud-native architecture",
      "CI/CD pipeline setup",
    ],
  },
];
