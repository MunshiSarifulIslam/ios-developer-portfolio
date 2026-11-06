export interface Project {
  id: string;
  title: string;
  subtitle: string;
  clientOrType: string;
  role: string;
  timeline?: string;
  technologies: string[];
  image: string;
  summary: string;
  offlineArchitecture?: string;
  keyHighlights: string[];
  metrics?: { label: string; value: string }[];
  impactStatement: string;
  category: 'enterprise' | 'personal' | 'ai';
  statusBadge?: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  note?: string;
  isLearning?: boolean;
}

export interface SkillCategoryGroup {
  category: string;
  type: 'production' | 'learning';
  description: string;
  skills: SkillItem[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Munshi Sariful Islam',
    title: 'iOS Application Developer',
    headline: 'Building scalable iOS experiences and exploring intelligent AI-powered solutions.',
    experienceYears: '4+',
    currentCompany: 'Accenture',
    currentLocation: 'Pune, India',
    previousCompany: 'Tata Consultancy Services',
    previousLocation: 'Kolkata, India',
    email: 'munshsarif176@gmail.com',
    phone: '+91-9091699176',
    linkedin: 'https://www.linkedin.com/in/munshisarifulislam/',
    github: 'https://github.com/MunshiSarifulIslam',
    portraitImage: '/assets/aistudio/MImage_f798d3a7.png',
    resumePdfUrl: '/assets/aistudio/MunshiSarifulIslam_a0e81f08.pdf',
    bio: 'Results-driven iOS Developer with 4+ years of experience across Tata Consultancy Services and Accenture, specializing in building scalable and user-centric iOS and iPad applications using Swift, SwiftUI, UIKit, and Combine. Experienced in REST API integration, offline data handling with Core Data, and implementing secure features. Proficient in MVVM architecture, XCTest, and CI/CD pipelines, with a strong focus on writing clean, maintainable code and optimizing app performance.',
  },

  experiences: [
    {
      company: 'Accenture',
      location: 'Pune, India',
      role: 'iOS Application Developer',
      period: 'August 2026 – Present',
      current: true,
      summary: 'Working as an iOS developer, building native iOS applications using Swift, SwiftUI, and UIKit.',
      highlights: [
        'Working as an iOS developer, building native iOS applications using Swift, SwiftUI, and UIKit.',
      ],
      technologies: ['Swift', 'SwiftUI', 'UIKit'],
    },
    {
      company: 'Tata Consultancy Services',
      location: 'Kolkata, India',
      role: 'iOS Application Developer',
      period: 'January 2022 – August 2026',
      current: false,
      summary: 'Engineered scalable iOS and iPad applications in Swift, SwiftUI, and UIKit actively used by 1,000+ operational users across Air India and PG&E enterprise initiatives.',
      highlights: [
        'Engineered scalable iOS and iPad applications in Swift, SwiftUI, and UIKit — now actively used by 1000+ operational users across Air India and PG&E.',
        'Built robust RESTful API integrations using URLSession with structured JSON parsing and multi-layer error handling, ensuring reliable data flow across high-stakes enterprise environments.',
        'Boosted network efficiency by ~15% by redesigning API consumption patterns and introducing caching strategies — directly reducing server load and improving perceived app speed.',
        'Crafted fully responsive, accessible UIs with Auto Layout and Dynamic Type, delivering a consistent experience across all iPhone and iPad form factors used in field and in-flight environments.',
        'Architected MVVM-based application structures across multiple projects, enabling clean separation of concerns, easier onboarding for team members, and maintainable codebases at scale.',
        'Shipped production features including push notifications, image upload pipelines, user feedback modules, and offline data persistence via Core Data — all deployed to 1000+ users in live enterprise apps.',
        'Contributed consistently across 2-week Agile sprints within a 9–12 person iOS team, coordinating with designers, backend engineers, and product owners to ship features on schedule.',
        'Participated actively in peer code reviews, applying best practices in memory management, multithreading safety, and Instruments-based profiling to improve overall app stability and runtime performance.',
        'Owned end-to-end release cycles via App Store Connect — managing TestFlight beta distribution, semantic versioning, crash monitoring, and user feedback triage across multiple production apps.',
      ],
      technologies: [
        'Swift',
        'SwiftUI',
        'UIKit',
        'Combine',
        'Core Data',
        'URLSession',
        'MVVM',
        'XCTest',
        'Bitrise',
        'TestFlight',
        'App Store Connect',
      ],
    },
  ] as Experience[],

  enterpriseProjects: [
    {
      id: 'air-india-cabin-crew',
      title: 'Air India – Cabin Crew Voyage Report Application',
      subtitle: 'Digital Cabin Crew Reporting for Flight Attendants & Pursers',
      clientOrType: 'Air India / Enterprise Aviation',
      role: 'iOS Application Developer',
      timeline: 'Production Deployment',
      technologies: ['Swift', 'UIKit', 'Combine', 'Core Data', 'RESTful APIs', 'XCTest'],
      image: '/assets/images/project_cabin_crew_voyage.jpg',
      summary: 'Built a mission-critical iOS application enabling Air India cabin crew to digitally log in-flight voyage reports — covering seating, meals, and onboard service issues. Replaced a previously paper-based reporting process, enabling faster issue visibility and improved coordination with ground teams across live flight operations.',
      offlineArchitecture: 'Personally owned offline-first data sync using Core Data with structured background context queues. Crew members can complete voyage reports during flights with zero connectivity; reports sync automatically upon touchdown and network restoration.',
      keyHighlights: [
        'Personally owned offline-first data sync using Core Data and RESTful API integration via Combine.',
        'Engineered end-to-end UI screens and intuitive navigation flows tailored for cabin crew in flight.',
        'Implemented push notification delivery and coordinated ongoing stability improvements and bug fixes.',
        'Replaced paper-based voyage reporting, streamlining flight operations and turnaround visibility.',
      ],
      metrics: [
        { label: 'Reporting Workflow', value: '100% Digital' },
        { label: 'Operational Adoption', value: '1,000+ Users' },
        { label: 'Data Architecture', value: 'Offline-First' },
      ],
      impactStatement: 'Replaced a previously paper-based reporting process, enabling faster issue visibility and improved coordination with ground teams across live flight operations.',
      category: 'enterprise',
    },
    {
      id: 'air-india-pilot-plus',
      title: 'Air India – Pilot Plus Enterprise App (iPad)',
      subtitle: 'Electronic Flight Bag & Operational Mission Control',
      clientOrType: 'Air India / Flight Operations',
      role: 'iOS Application Developer',
      timeline: 'Production Deployment',
      technologies: ['SwiftUI', 'Combine', 'RESTful APIs', 'Core Data', 'Push Notifications'],
      image: '/assets/images/project_pilot_plus_ipad.jpg',
      summary: 'Engineered a full-featured iPad enterprise application for Air India flight operations — covering real-time crew detail management, arrival and departure monitoring, and automated fuel efficiency calculation.',
      offlineArchitecture: 'Architected an offline-first Core Data layer ensuring uninterrupted access across crew details, arrival/departure, and fuel metrics during flights, with seamless background sync upon reconnection.',
      keyHighlights: [
        'Engineered responsive SwiftUI interfaces optimized for cockpit tablet mounts and high-glare environments.',
        'Delivered automated fuel efficiency calculation modules with real-time planned vs. actual burn indicators.',
        'Delivered a unified workflow that replaced multiple fragmented tools, improving operational visibility.',
        'Integrated push notifications and Combine-driven publishers for flight schedule updates.',
      ],
      metrics: [
        { label: 'Network Efficiency', value: '~15% Boost' },
        { label: 'Platform Design', value: 'iPadOS Native' },
        { label: 'Architecture', value: 'SwiftUI + Core Data' },
      ],
      impactStatement: 'Delivered a unified workflow that replaced multiple fragmented tools, improving operational visibility and onboard service coordination for crew across daily flights.',
      category: 'enterprise',
    },
    {
      id: 'pge-inspect-sustain',
      title: 'PG&E – Inspect & Sustain Enterprise Applications',
      subtitle: 'Field Infrastructure Inspection & Asset Management',
      clientOrType: 'Pacific Gas and Electric / Energy Utility',
      role: 'iOS Application Developer',
      timeline: 'Production Deployment',
      technologies: ['SwiftUI', 'UIKit', 'Combine', 'RESTful APIs', 'Core Data'],
      image: '/assets/images/project_pge_inspection.jpg',
      summary: "Developed and shipped new features on PG&E's field inspection platform using a SwiftUI + UIKit hybrid architecture via UIHostingController — extending an existing production codebase without disrupting live functionality.",
      offlineArchitecture: 'Relational data caching and validation queue in Core Data, enabling utility inspectors to capture asset records and photos in remote utility corridors with reliable sync upon return.',
      keyHighlights: [
        'Introduced automated vehicle data pre-filling via RESTful API integration, eliminating repetitive manual entry for field engineers.',
        'Built modern SwiftUI components embedded into UIKit view hierarchies via UIHostingController.',
        'Improved data accuracy at the point of capture and streamlined field inspection workflows.',
        'Applied payload optimization and caching strategies to reduce mobile network overhead by ~15%.',
      ],
      metrics: [
        { label: 'Data Pre-filling', value: 'Automated' },
        { label: 'Integration', value: 'UIHostingController' },
        { label: 'Reliability', value: 'Field-Proven' },
      ],
      impactStatement: 'Eliminated repetitive manual entry for field engineers, improving data accuracy at the point of capture and streamlining daily operations.',
      category: 'enterprise',
    },
  ] as Project[],

  personalProjects: [
    {
      id: 'dwater',
      title: 'dWater – Hydration Tracker',
      subtitle: 'Minimalist iOS Hydration Tracking with Intelligent Reminders',
      clientOrType: 'Personal iOS Project',
      role: 'Creator & Lead Developer',
      technologies: ['SwiftUI', 'Core Data', 'UserNotifications', 'Combine'],
      image: '',
      summary: 'A refined native iOS application engineered to help users effortlessly track daily water consumption with fluid progress rings, customizable drink sizes, and intelligent background hydration reminders.',
      keyHighlights: [
        'Designed a clean, native SwiftUI interface with animated fluid fill visualizations.',
        'Implemented local persistence with Core Data to record historical hydration trends over weeks and months.',
        'Configured contextual UserNotifications with custom actions allowing quick log additions from notification banners.',
        'Engineered an offline-first architecture built strictly following Apple Human Interface Guidelines.',
      ],
      impactStatement: 'Crafted with Apple Human Interface Guidelines to provide an unobtrusive, zero-friction daily health companion.',
      category: 'personal',
    },
    {
      id: 'lets-calculate',
      title: "Let's Calculate – Expense Management",
      subtitle: 'Fast, Frictionless Daily Ledger & Budget Management',
      clientOrType: 'Personal iOS Project',
      role: 'Creator & Lead Developer',
      technologies: ['Swift', 'SwiftUI', 'Core Data', 'MVVM'],
      image: '',
      summary: 'A lightweight personal finance and expense ledger application designed to replace clunky budgeting spreadsheets with immediate calculator-integrated entry and categorical spend breakdowns.',
      keyHighlights: [
        'Built an integrated calculator keypad allowing mathematical sum entries directly inside expense receipts.',
        'Categorized spending with clean visual hierarchies and monthly comparison metrics.',
        'Structured with MVVM pattern and strict protocol-oriented service decoupling.',
        'Optimized Core Data fetch requests with reactive SwiftUI state bindings.',
      ],
      impactStatement: 'Delivers a rapid, sub-second transaction recording flow that makes personal expense tracking genuinely effortless.',
      category: 'personal',
    },
  ] as Project[],

  aiProjects: {
    poleInspection: {
      id: 'pole-inspection',
      title: 'PoleInspection',
      subtitle: 'Image-Based Infrastructure Computer Vision on iOS',
      status: 'Ongoing Development Work',
      technologies: ['Python', 'TensorFlow', 'Core ML', 'Swift', 'SwiftUI', 'Vision Framework'],
      image: '/assets/images/project_pole_inspection_ai.jpg',
      overview: 'An applied machine learning development project aimed at exploring automated utility pole condition inspection using computer vision. The core development objective focuses on training custom convolutional classification models in Python with TensorFlow, converting them to Core ML formats (.mlpackage), and integrating with Apple Vision framework in Swift for offline on-device inference.',
      developmentObjective: 'Investigating end-to-end model pipeline: dataset curation, model training in Python/TensorFlow, Core ML model quantization, and native iOS integration targeting offline, zero-network utility field conditions.',
      categories: [
        { name: 'Normal Pole', description: 'Upright structural alignment and intact hardware.', sampleConfidence: '98.4%' },
        { name: 'Broken Pole', description: 'Structural fractures, crossarm breakage, or snapped poles.', sampleConfidence: '95.1%' },
        { name: 'Leaning Pole', description: 'Visible angular deviation beyond standard vertical tolerance.', sampleConfidence: '92.5%' },
        { name: 'Tree Interruption', description: 'Vegetation encroachment or tree limbs near conductors.', sampleConfidence: '96.8%' },
      ],
      technicalGoals: [
        'Train image classification models in Python using TensorFlow on curated infrastructure imagery.',
        'Convert trained models into lightweight Core ML format using coremltools with FP16/INT8 quantization.',
        'Integrate into native Swift/SwiftUI iOS application via Apple Vision framework (VNCoreMLRequest).',
        'Architect for 100% offline field capability to support inspectors in remote geographic areas.',
      ],
      disclaimer: 'DEMONSTRATION DATA: The values, confidence scores, and diagnostic labels shown in the interactive simulator below are simulated demonstration examples illustrating the target workflow. They do not represent measured production model benchmarks.',
    },
    socialSentiment: {
      id: 'social-sentiment',
      title: 'Social Media Sentiment Intelligence',
      subtitle: 'Enterprise Customer Insight & Trend Synthesis Pipeline',
      status: 'AI Project Concept',
      technologies: ['Python', 'NLP', 'LLMs', 'RAG', 'Vector Databases', 'REST APIs'],
      overview: 'An architectural AI project concept designed to explore how customer feedback gathered via authorized, compliant platform APIs could be processed using Natural Language Processing (NLP), Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG) to generate operational summaries.',
      features: [
        {
          title: 'Authorized Ingestion Concept',
          description: 'Collect public customer feedback through verified, authorized platform APIs in strict compliance with platform developer terms and privacy limits.',
        },
        {
          title: 'Multi-Spectrum Sentiment Analysis',
          description: 'Explore multi-class sentiment categorization across Positive, Negative, Neutral, and Mixed categories.',
        },
        {
          title: 'Topic & Recurring Complaint Extraction',
          description: 'Cluster recurring complaints (e.g., flight schedule adjustments, baggage wait times, service alerts) into structured themes.',
        },
        {
          title: 'Customer Satisfaction Trends',
          description: 'Analyze volume velocity and shifting satisfaction patterns over time.',
        },
        {
          title: 'AI-Powered Summary Generation',
          description: 'Synthesize high-volume unstructured comments into structured operational briefing summaries.',
        },
        {
          title: 'Improvement Recommendations',
          description: 'Formulate potential system or workflow improvements based on synthesized customer pain points.',
        },
      ],
      conceptNote: 'AI PROJECT CONCEPT: This is an architectural proposal and learning exploration. It is not an active commercial production system and does not claim production integration with external social media platforms.',
    },
  },

  // Reorganized according to Requirement 5:
  // 1. Core iOS Development
  // 2. Architecture & Design Patterns
  // 3. Networking & Persistence
  // 4. Testing & CI/CD
  // 5. AI/ML & Generative AI Learning
  skillCategories: [
    {
      category: 'Core iOS Development',
      type: 'production',
      description: 'Native Apple platform technologies and languages actively used across production applications.',
      skills: [
        { name: 'Swift', note: 'Primary programming language for enterprise & personal projects' },
        { name: 'SwiftUI', note: 'Primary declarative UI framework for modern iOS/iPadOS apps' },
        { name: 'UIKit', note: 'Enterprise view lifecycle, Auto Layout, custom view architectures' },
        { name: 'Combine', note: 'Reactive asynchronous publishers, subscribers, event streams' },
        { name: 'Swift Concurrency', note: 'async/await, Tasks, modern thread safety' },
        { name: 'Auto Layout & Dynamic Type', note: 'Responsive, accessible UIs across iPhone & iPad form factors' },
        { name: 'UserNotifications', note: 'Local & remote push notifications with contextual actions' },
        { name: 'Core Location & MapKit', note: 'Location-aware field mapping & asset inspection tracking' },
        { name: 'Cocoa Touch', note: 'Foundational iOS framework APIs and device capabilities' },
      ],
    },
    {
      category: 'Architecture & Design Patterns',
      type: 'production',
      description: 'Structured software design principles ensuring modularity, scalability, and testability.',
      skills: [
        { name: 'MVVM', note: 'Model-View-ViewModel architecture for clean separation of concerns' },
        { name: 'MVC', note: 'Model-View-Controller pattern in Apple Cocoa Touch environments' },
        { name: 'Protocol-Oriented Programming', note: 'Composable, decoupled Swift interfaces and protocol extensions' },
        { name: 'Dependency Injection', note: 'Loose coupling enabling isolated testing and mock services' },
        { name: 'Delegation & Singleton', note: 'Standard Cocoa design patterns applied with strict lifecycle discipline' },
        { name: 'Offline-First Architecture', note: 'Resilient local-first storage with background network synchronization' },
        { name: 'Clean Code & Agile/Scrum', note: 'Iterative sprint delivery, peer code reviews, maintainable codebases' },
      ],
    },
    {
      category: 'Networking & Persistence',
      type: 'production',
      description: 'Data communication, multi-tier caching, and durable local device persistence.',
      skills: [
        { name: 'URLSession', note: 'Native HTTP/REST networking, background downloads, task coordination' },
        { name: 'RESTful APIs & JSON Parsing', note: 'Codable mapping, optimized payloads, robust multi-layer error handling' },
        { name: 'Alamofire', note: 'Third-party HTTP client integration and request routing' },
        { name: 'Core Data', note: 'Enterprise offline-first persistence, multi-context background sync queues' },
        { name: 'UserDefaults & Keychain', note: 'Lightweight preferences and secure credential/token storage' },
        { name: 'Firebase', note: 'Authentication, Firestore real-time data, and analytics integration' },
      ],
    },
    {
      category: 'Testing & CI/CD',
      type: 'production',
      description: 'Automated test verification, performance profiling, and continuous deployment.',
      skills: [
        { name: 'XCTest', note: 'Unit testing business logic, view models, and data synchronization' },
        { name: 'XCUITest', note: 'Automated UI testing for critical enterprise user journeys' },
        { name: 'Instruments', note: 'Memory leaks, Time Profiler, allocations, and CPU runtime optimization' },
        { name: 'GitHub Actions', note: 'Automated linting, building, and test pipeline workflows' },
        { name: 'Bitrise', note: 'Automated mobile continuous integration and build artifact generation' },
        { name: 'TestFlight', note: 'Beta build distribution and operational tester feedback triage' },
        { name: 'App Store Connect', note: 'Release management, code signing, provisioning profiles, versioning' },
        { name: 'Swift Package Manager', note: 'Modular dependency management and package modularization' },
      ],
    },
    {
      category: 'AI/ML & Generative AI Learning',
      type: 'learning',
      description: 'Actively exploring emerging artificial intelligence and on-device machine learning paradigms. Clearly distinguished from established professional skills.',
      skills: [
        { name: 'Core ML & On-Device ML', note: 'Learning target: model conversion via coremltools & Apple Vision integration', isLearning: true },
        { name: 'Python for AI/ML', note: 'Learning target: data handling, preprocessing, and training scripts', isLearning: true },
        { name: 'TensorFlow', note: 'Learning target: training baseline image classifiers for infrastructure detection', isLearning: true },
        { name: 'Large Language Models (LLMs)', note: 'Learning target: model architectures, context windows, and tokenization', isLearning: true },
        { name: 'Prompt Engineering', note: 'Learning target: structured JSON schemas, few-shot prompts, chain-of-thought', isLearning: true },
        { name: 'Retrieval-Augmented Generation (RAG)', note: 'Learning target: document chunking, dense embeddings, vector retrieval', isLearning: true },
        { name: 'AI Agents & Tool Use', note: 'Learning target: agent loops, function calling, autonomous orchestration', isLearning: true },
        { name: 'Vector Databases', note: 'Learning target: similarity indexing, ChromaDB, vector embeddings', isLearning: true },
      ],
    },
  ] as SkillCategoryGroup[],

  education: {
    degree: 'Bachelor of Science (H) in Computer Science',
    institution: 'University of Calcutta',
    timeline: '2017 – 2020',
    grade: 'First Class — 74.75%',
    location: 'Kolkata, West Bengal, India',
    coursework: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Computer Networks', 'Operating Systems', 'Discrete Mathematics'],
  },

  achievements: [
    {
      title: 'Corporate Cricket Representation',
      organization: 'Tata Consultancy Services (TCS), Kolkata',
      description: 'Represented Tata Consultancy Services (TCS), Kolkata in corporate-level cricket tournaments, showcasing strong teamwork and discipline.',
    },
    {
      title: 'Inter-Company Cricket Competitions',
      organization: 'Tata Consultancy Services, Kolkata',
      description: 'Actively participated in inter-company cricket competitions, contributing to team performance and collaboration.',
    },
  ],
};
