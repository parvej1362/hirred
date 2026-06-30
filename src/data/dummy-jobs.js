const dummyJobs = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: {
      name: "Google",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    location: "Bangalore",
    description:
      "Design and implement rich, interactive web applications that support Google-scale infrastructure and billions of users.",
    requirements: [
      "Expertise in JavaScript, HTML5, CSS3, and frontend frameworks (React preferred)",
      "Deep knowledge of cross-browser compatibility and performance optimization",
      "Experience building scalable, accessible UIs",
      "Understanding of frontend architecture and design patterns",
      "Familiarity with testing tools like Jasmine or Jest",
    ],
    saved: [],
  },
  {
    id: 2,
    title: "UI Engineer",
    company: {
      name: "Microsoft",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    location: "Hyderabad",
    description:
      "Create user-centric web interfaces for Microsoft 365 and Azure products with accessibility and performance at the core.",
    requirements: [
      "Strong experience in TypeScript and React or Angular",
      "Experience with Microsoft Fluent UI and accessibility standards",
      "Proficient with REST APIs and web security principles",
      "Experience in CI/CD pipelines (Azure DevOps preferred)",
      "Passion for design systems and modular UI components",
    ],
    saved: [],
  },
  {
    id: 3,
    title: "Product Analyst",
    company: {
      name: "Atlassian",
      logo_url: "/Atlassian-logo.png",
    },
    location: "Bangalore",
    description:
      "Leverage data to understand user interactions in Jira and Confluence and improve product intelligence.",
    requirements: [
      "Skilled in SQL, Python, and Looker or Tableau",
      "Experience with event tracking and product analytics",
      "Solid knowledge of experimentation frameworks",
      "Understanding of SaaS metrics (retention, churn, engagement)",
      "Experience with machine learning a plus",
    ],
    saved: [],
  },
  {
    id: 4,
    title: "Data Scientist",
    company: {
      name: "Amazon",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    location: "Chennai",
    description:
      "Model customer behavior and optimize supply chain logistics using cutting-edge ML and optimization algorithms.",
    requirements: [
      "Strong experience with PySpark, AWS SageMaker",
      "Expertise in forecasting, optimization, and causal inference",
      "Ability to handle petabyte-scale data",
      "Experience building recommender systems or personalization engines",
      "Strong publication or patent history preferred",
    ],
    saved: [],
  },
  {
    id: 5,
    title: "Backend Engineer",
    company: {
      name: "Google",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    location: "Hyderabad",
    description:
      "Engineer backend systems that power Google Search, Gmail, and YouTube with a focus on scale, reliability, and security.",
    requirements: [
      "Proficient in Go, Java, or Python",
      "Solid experience with distributed systems and Bigtable/Spanner",
      "Knowledge of gRPC and microservice architecture",
      "Familiarity with Kubernetes and Borg",
      "Advanced debugging and performance profiling",
    ],
    saved: [],
  },
  {
    id: 6,
    title: "Backend Developer",
    company: {
      name: "Microsoft",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    location: "Bangalore",
    description:
      "Build scalable services and APIs that power Azure cloud infrastructure and enterprise tools.",
    requirements: [
      "Strong skills in C#, .NET Core, or Java",
      "Proficiency in RESTful APIs, Azure Functions, and Cosmos DB",
      "Experience in event-driven systems and message queues",
      "Knowledge of cloud security and compliance",
      "Familiarity with Azure DevOps and CI/CD pipelines",
    ],
    saved: [],
  },
  {
    id: 7,
    title: "Backend Engineer",
    company: {
      name: "IBM",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    location: "Pune",
    description:
      "Develop robust backend solutions for hybrid cloud and AI workloads using modern infrastructure tools.",
    requirements: [
      "Experience with Java Spring Boot, Node.js, or Python",
      "Familiar with OpenShift and Kubernetes",
      "Strong knowledge of enterprise-grade data security",
      "Understanding of API gateways and service meshes",
      "Exposure to DevSecOps workflows",
    ],
    saved: [],
  },
  {
    id: 8,
    title: "Backend Developer",
    company: {
      name: "Atlassian",
      logo_url: "/Atlassian-logo.png",
    },
    location: "Remote",
    description:
      "Create reliable, scalable backend services for developer tools and collaboration platforms.",
    requirements: [
      "Deep understanding of JVM languages (Java/Kotlin)",
      "Experience building RESTful services and microservices",
      "Familiar with cloud-native architecture (AWS preferred)",
      "Good grasp of domain-driven design (DDD)",
      "Experience with observability (Prometheus, Grafana)",
    ],
    saved: [],
  },
  {
    id: 9,
    title: "Software Engineer",
    company: {
      name: "Amazon",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    location: "Delhi",
    description:
      "Power Amazon’s backend logistics, recommendations, and payments infrastructure with scalable and resilient systems.",
    requirements: [
      "Strong Java, Scala, or Python skills",
      "Experience in DynamoDB, S3, and internal AWS stacks",
      "Proficient in designing fault-tolerant distributed systems",
      "Knowledge of service throttling and load balancing",
      "Proven experience building APIs at massive scale",
    ],
    saved: [],
  },
  {
    id: 10,
    title: "Systems Engineer",
    company: {
      name: "Uber",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    },
    location: "Gurgaon",
    description:
      "Architect low-latency backend systems that handle millions of ride and delivery requests per day.",
    requirements: [
      "Proficiency in Go or Java",
      "Experience with Apache Kafka, Redis, and Cassandra",
      "Familiarity with real-time data processing and location-based services",
      "Strong microservices design and observability skills",
      "Experience with CI/CD and canary deployments",
    ],
    saved: [],
  },
  {
    id: 11,
    title: "ML Engineer",
    company: {
      name: "Google",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    location: "Bangalore",
    description:
      "Use advanced machine learning and statistical modeling to drive insights and innovation in Google Ads and Search.",
    requirements: [
      "Proficient in Python, R, and TensorFlow or JAX",
      "Strong knowledge of causal inference and A/B testing",
      "Experience with big data tools (BigQuery, Spark)",
      "Solid grasp of ML ops and deployment pipelines",
      "Published research or patents is a plus",
    ],
    saved: [],
  },
  {
    id: 12,
    title: "Data Scientist",
    company: {
      name: "Microsoft",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    location: "Hyderabad",
    description:
      "Analyze and optimize user behavior for Microsoft products through statistical analysis and predictive modeling.",
    requirements: [
      "Expert in Python, SQL, and Azure Machine Learning",
      "Experience with Power BI and Azure Synapse",
      "Knowledge of time-series forecasting and clustering",
      "Familiarity with responsible AI and interpretability tools",
      "Strong communication skills with business stakeholders",
    ],
    saved: [],
  },
  {
    id: 13,
    title: "AI Scientist",
    company: {
      name: "IBM",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    location: "Bangalore",
    description:
      "Build AI models that drive decision intelligence in enterprise and financial services using Watson and IBM Cloud.",
    requirements: [
      "Strong statistical foundations in Python or R",
      "Experience with IBM Watson, SPSS, and AutoAI",
      "Familiarity with model governance and fairness",
      "Experience in NLP and BERT models",
      "Background in regulated industries preferred",
    ],
    saved: [],
  },
  {
    id: 14,
    title: "Data Analyst",
    company: {
      name: "Uber",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    },
    location: "Remote",
    description:
      "Drive pricing, routing, and supply-demand modeling using ML and real-time analytics.",
    requirements: [
      "Proficiency in Python, SQL, and Spark",
      "Deep experience in predictive modeling, experimentation, and optimization",
      "Knowledge of spatial analysis and time-series data",
      "Familiarity with Airflow and MLFlow",
      "Experience working in high-stakes, real-time environments",
    ],
    saved: [],
  },
];

export default dummyJobs;
