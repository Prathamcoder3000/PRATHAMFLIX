import type { ProjectDetailData } from "@/types";

export const featuredProjects: ProjectDetailData[] = [
  {
    id: "featured-alpha",
    title: "Project Alpha",
    shortDescription: "High-performance distributed streaming engine and real-time media service.",
    category: "Featured",
    year: "2025",
    technologies: ["Next.js", "TypeScript", "Tailwind", "WebSockets"],
    accent: "#e50926",
    featured: true,
    href: "/projects/featured-alpha",
    overview:
      "A distributed real-time media pipeline engineered to demonstrate low-latency broadcast coordination, dynamic bitrate adaptation, and resilient WebSocket state synchronization across concurrent clients.",
    problem:
      "Traditional streaming architectures encounter latency degradation and state desynchronization when scaling across distributed edge nodes during peak broadcast concurrency.",
    solution:
      "Engineered an event-driven edge orchestrator that pairs lightweight WebSockets with decentralized state replication, ensuring sub-50ms synchronization across multi-region playback clients.",
    architecture: [
      { name: "Client Layer", role: "UI & Playback", tech: "Next.js & Web Audio", description: "Responsive client player with real-time stream state ingestion" },
      { name: "Edge Gateway", role: "Routing & Auth", tech: "WebSockets & TLS", description: "Sub-millisecond packet routing and connection validation" },
      { name: "Distribution Core", role: "Message Broker", tech: "Kafka & Redis PubSub", description: "High-throughput stream broadcast and distributed queueing" },
      { name: "Storage Engine", role: "Telemetry & Logs", tech: "PostgreSQL & S3", description: "Time-series stream metrics and media segment storage" },
    ],
    features: [
      { title: "Sub-50ms Synchronization", description: "Synchronized multi-peer playback state with clock drift compensation.", icon: "Zap" },
      { title: "Dynamic Bitrate Adaptation", description: "Real-time client telemetry analysis for seamless throughput scaling.", icon: "Gauge" },
      { title: "Resilient Edge Clustering", description: "Automatic failover and regional partition tolerance across clusters.", icon: "ShieldCheck" },
      { title: "End-to-End Metrics", description: "Live telemetry dashboard tracking drop-rates, latency, and socket health.", icon: "BarChart3" },
    ],
    engineeringHighlights: [
      "Designed an optimized binary WebSocket protocol reducing header overhead by 40% compared to standard JSON payloads.",
      "Implemented a custom buffer scheduler preventing playback stalls during transient network jitter.",
      "Structured zero-downtime rolling node migrations with persistent session handover.",
    ],
    techStackCategorized: [
      { category: "Frontend & Interface", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend & Streaming", technologies: ["Node.js", "WebSockets", "Go", "gRPC"] },
      { category: "Infrastructure & Data", technologies: ["Redis", "Kafka", "PostgreSQL", "Docker"] },
    ],
  },
  {
    id: "featured-beta",
    title: "Project Beta",
    shortDescription: "Cinematic design system and reusable component primitives architecture.",
    category: "Design System",
    year: "2025",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "#3b82f6",
    featured: true,
    href: "/projects/featured-beta",
    overview:
      "A modular, token-based design architecture built to power high-fidelity cinematic web applications with uncompromising accessibility, motion consistency, and strict design token governance.",
    problem:
      "Design fragmentation and ad-hoc CSS utilities in large-scale applications lead to inconsistent user interfaces, poor accessibility, and degraded rendering performance.",
    solution:
      "Created a centralized token engine and primitive component catalog strictly enforcing HSL-based palettes, accessible contrast standards, and unified motion curves.",
    architecture: [
      { name: "Token Core", role: "Design Tokens", tech: "CSS Variables & Themes", description: "Centralized color, spacing, radius, and timing definitions" },
      { name: "UI Primitives", role: "Component Base", tech: "React & TypeScript", description: "Accessible headless elements with strict ARIA semantics" },
      { name: "Compound Blocks", role: "Composed Layouts", tech: "Tailwind CSS v4", description: "Cinematic rows, navigation shells, and responsive panels" },
      { name: "Documentation", role: "Catalog & Guides", tech: "Storybook / Next.js", description: "Interactive playground with automated accessibility audits" },
    ],
    features: [
      { title: "Strict Token Governance", description: "Single-source variables preventing arbitrary one-off style deviations.", icon: "Layers" },
      { title: "WCAG AAA Compliance", description: "Built-in high contrast ratios, visible focus indicators, and screen reader labels.", icon: "Eye" },
      { title: "GPU-Accelerated Motion", description: "Framer motion presets respecting system reduced-motion preferences.", icon: "Sparkles" },
      { title: "Zero Layout Shift", description: "Deterministic container dimensions avoiding cumulative layout shifts.", icon: "Compass" },
    ],
    engineeringHighlights: [
      "Engineered full accessibility testing pipeline enforcing keyboard navigation on every compound primitive.",
      "Achieved sub-10KB tree-shakeable bundle footprint for the core design system package.",
      "Implemented seamless CSS custom property fallback chains for legacy browser environments.",
    ],
    techStackCategorized: [
      { category: "Core Framework", technologies: ["React", "Next.js", "TypeScript"] },
      { category: "Styling & Motion", technologies: ["Tailwind CSS v4", "CSS Custom Properties", "Framer Motion"] },
      { category: "Tooling & Testing", technologies: ["ESLint", "Turbopack", "Axe Core"] },
    ],
  },
  {
    id: "featured-gamma",
    title: "Project Gamma",
    shortDescription: "Event-driven microservice telemetry pipeline with sub-millisecond dispatching.",
    category: "Backend System",
    year: "2024",
    technologies: ["Go", "gRPC", "Kafka", "Docker"],
    accent: "#10b981",
    href: "/projects/featured-gamma",
    overview:
      "A distributed telemetry ingestion pipeline capable of processing high-volume system events with zero data loss, real-time anomaly detection, and sub-millisecond serialization.",
    problem:
      "High-throughput metric ingestion frequently bottlenecks traditional REST gateways, causing data dropping and delayed alerting during infrastructure spikes.",
    solution:
      "Architected a streaming ingestion gateway utilizing binary gRPC protocols and partitioned Kafka topics with concurrent worker pools.",
    architecture: [
      { name: "Ingestion Agents", role: "Data Collectors", tech: "Go & eBPF", description: "Lightweight kernel-level telemetry agents" },
      { name: "gRPC Gateway", role: "High-Speed Ingress", tech: "Protobuf & gRPC", description: "Binary transport layer with stream compression" },
      { name: "Event Stream", role: "Distributed Queue", tech: "Apache Kafka", description: "Partitioned event log with deterministic ordering" },
      { name: "Time-Series Store", role: "Long-term Storage", tech: "ClickHouse & VictoriaMetrics", description: "Columnar store optimized for analytical queries" },
    ],
    features: [
      { title: "Zero-Copy Ingestion", description: "Direct memory buffer transfers maximizing CPU cache locality.", icon: "Cpu" },
      { title: "Dead-Letter Auto-Retry", description: "Automated queue isolation and exponential backoff retry mechanisms.", icon: "RefreshCw" },
      { title: "Real-Time Anomaly Alerting", description: "Sliding window statistical checks detecting threshold anomalies instantly.", icon: "Bell" },
    ],
    engineeringHighlights: [
      "Benchmarked at over 250,000 events/second per core with negligible memory allocation overhead.",
      "Engineered partitioned consumer groups ensuring horizontal scaling across dynamic cluster sizes.",
    ],
    techStackCategorized: [
      { category: "Language & Runtime", technologies: ["Go 1.22", "Protobuf", "gRPC"] },
      { category: "Queueing & Ingestion", technologies: ["Apache Kafka", "Redis Cluster"] },
      { category: "Storage & Infra", technologies: ["ClickHouse", "Docker", "Prometheus"] },
    ],
  },
  {
    id: "featured-delta",
    title: "Project Delta",
    shortDescription: "Autonomous edge compute orchestrator for containerized IoT clusters.",
    category: "Edge & IoT",
    year: "2024",
    technologies: ["Rust", "WebAssembly", "MQTT", "Linux"],
    accent: "#f59e0b",
    href: "/projects/featured-delta",
    overview:
      "An embedded orchestration runtime that executes sandboxed WebAssembly micro-modules on resource-constrained edge hardware with autonomous mesh consensus.",
    problem:
      "Standard container runtimes (Docker/Kubernetes) exceed the memory and storage constraints of low-power embedded microcontrollers and remote gateways.",
    solution:
      "Developed a lightweight Rust-based WebAssembly runtime consuming under 8MB of memory with peer-to-peer MQTT configuration replication.",
    architecture: [
      { name: "Edge Sensors", role: "Hardware Node", tech: "ESP32 & ARM Cortex", description: "Physical sensor reading and telemetry emission" },
      { name: "Wasm Sandbox", role: "Edge Runtime", tech: "Rust & Wasmtime", description: "Isolated, memory-safe execution of compute jobs" },
      { name: "Mesh Protocol", role: "Local Consensus", tech: "MQTT & Gossip Protocol", description: "Peer discovery and decentralized state synchronization" },
      { name: "Cloud Sync", role: "Telemetry Uplink", tech: "TLS & Cloud Storage", description: "Periodic batch uplink to central telemetry cloud" },
    ],
    features: [
      { title: "Ultra-Lightweight Footprint", description: "Operates with sub-8MB RAM requirement on ARM64 and x86 edge boards.", icon: "Cpu" },
      { title: "Sandboxed Isolation", description: "Secure memory-isolated WebAssembly runtime protecting host hardware.", icon: "Shield" },
      { title: "Offline Resilience", description: "Autonomous local mesh operation during wide-area network disconnects.", icon: "WifiOff" },
    ],
    engineeringHighlights: [
      "Created a minimal zero-dependency Wasm runtime bridge in Rust.",
      "Implemented a robust local ring-buffer surviving abrupt hardware power-loss.",
    ],
    techStackCategorized: [
      { category: "Systems & Embedded", technologies: ["Rust", "WebAssembly", "C/C++"] },
      { category: "Protocols & Mesh", technologies: ["MQTT", "Gossip Protocol", "TLS 1.3"] },
      { category: "Target Platforms", technologies: ["Linux ARM64", "Raspberry Pi", "ESP32"] },
    ],
  },
  {
    id: "featured-epsilon",
    title: "Project Epsilon",
    shortDescription: "Neural inference optimization engine with low-latency GPU kernel acceleration.",
    category: "AI / ML",
    year: "2025",
    technologies: ["Python", "PyTorch", "CUDA", "TensorRT"],
    accent: "#8b5cf6",
    href: "/projects/featured-epsilon",
    overview:
      "An inference acceleration pipeline applying layer fusion, INT8 quantization, and custom CUDA tensor operations to maximize throughput for large transformer architectures.",
    problem:
      "Deploying high-parameter models on edge and cloud instances results in prohibitive latency and extreme VRAM utilization.",
    solution:
      "Built an automated model compilation pipeline converting PyTorch graphs into optimized TensorRT engines with custom memory pooling.",
    architecture: [
      { name: "Model Graph", role: "Definition", tech: "PyTorch & ONNX", description: "High-level neural network graph and weights" },
      { name: "Optimization Engine", role: "Compiler", tech: "TensorRT & CUDA", description: "Layer fusion, kernel auto-tuning, and quantization" },
      { name: "Serving Gateway", role: "Inference Server", tech: "C++ & Triton", description: "Dynamic batching and hardware-accelerated dispatch" },
      { name: "Client API", role: "Integration", tech: "gRPC & Python SDK", description: "Low-latency remote inference invocation" },
    ],
    features: [
      { title: "INT8 Quantization", description: "Post-training quantization maintaining accuracy within 0.5% of FP32 baseline.", icon: "Binary" },
      { title: "Dynamic Batching", description: "Intelligent request batching maximizing GPU SM utilization under variable load.", icon: "Boxes" },
      { title: "Memory Pooling", description: "Pre-allocated VRAM pools eliminating dynamic allocation overhead during inference.", icon: "Database" },
    ],
    engineeringHighlights: [
      "Achieved a 3.4x latency reduction on transformer attention layers using custom CUDA kernels.",
      "Reduced model memory footprint from 14GB to 3.8GB through mixed-precision optimization.",
    ],
    techStackCategorized: [
      { category: "AI & Acceleration", technologies: ["PyTorch", "CUDA", "TensorRT", "ONNX"] },
      { category: "Serving & Gateway", technologies: ["Triton Inference Server", "C++", "Python"] },
      { category: "Observability", technologies: ["NVIDIA Nsight", "Prometheus", "Grafana"] },
    ],
  },
  {
    id: "featured-zeta",
    title: "Project Zeta",
    shortDescription: "Cross-platform mobile workspace client with offline-first synchronization.",
    category: "Mobile",
    year: "2024",
    technologies: ["React Native", "Expo", "SQLite", "TypeScript"],
    accent: "#ec4899",
    href: "/projects/featured-zeta",
    overview:
      "A cross-platform mobile collaboration client engineered with an offline-first SQLite synchronization engine, bidirectional conflict resolution, and fluid gesture interactions.",
    problem:
      "Mobile network instability frequently causes lost state, failed saves, and frustrating layout locks in cloud-dependent productivity apps.",
    solution:
      "Implemented a local-first SQLite mutation log with deterministic CRDT conflict resolution that syncs seamlessly upon network reconnection.",
    architecture: [
      { name: "Mobile UI", role: "Interface", tech: "React Native & Expo", description: "60 FPS gesture-driven workspace with responsive layouts" },
      { name: "Local DB", role: "Offline Storage", tech: "SQLite & WatermelonDB", description: "Embedded local database storing state and mutation log" },
      { name: "Sync Engine", role: "Replication", tech: "WebSockets & CRDT", description: "Bidirectional sync protocol with conflict resolution" },
      { name: "Cloud Backend", role: "Authority", tech: "Node.js & PostgreSQL", description: "Central document authority and auth verification" },
    ],
    features: [
      { title: "100% Offline Capability", description: "Full read/write workspace functionality without active network connection.", icon: "Smartphone" },
      { title: "Zero Data Conflict", description: "Deterministic conflict-free replicated data types (CRDT) merging changes.", icon: "GitMerge" },
      { title: "Fluid 60 FPS Gestures", description: "Native thread animations for buttery smooth swipe and drag interactions.", icon: "Sliders" },
    ],
    engineeringHighlights: [
      "Engineered an efficient local query caching layer yielding sub-16ms render times on low-end devices.",
      "Implemented battery-aware background synchronization optimizing network polling.",
    ],
    techStackCategorized: [
      { category: "Mobile Framework", technologies: ["React Native", "Expo", "TypeScript"] },
      { category: "Local Storage & Sync", technologies: ["SQLite", "CRDT", "WebSockets"] },
      { category: "Backend Services", technologies: ["Node.js", "PostgreSQL", "Docker"] },
    ],
  },
];

export const systemsProjects: ProjectDetailData[] = [
  {
    id: "systems-iota",
    title: "Project Iota",
    shortDescription: "Full-stack cloud infrastructure manager and serverless cluster controller.",
    category: "Cloud Platform",
    year: "2025",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    accent: "#06b6d4",
    href: "/projects/systems-iota",
    overview:
      "A declarative cloud management platform allowing developers to provision, monitor, and scale serverless infrastructure across multiple cloud providers through a single unified control plane.",
    problem:
      "Managing heterogeneous cloud providers requires dealing with disparate APIs, complex IAM configurations, and inconsistent cost tracking.",
    solution:
      "Created a unified reconciliation engine translating high-level infrastructure manifests into provider-specific Terraform and AWS SDK calls.",
    architecture: [
      { name: "Web Dashboard", role: "Control Plane UI", tech: "Next.js & Tailwind", description: "Interactive topology visualizer and cluster manager" },
      { name: "Reconciliation API", role: "Core Controller", tech: "Node.js & TypeScript", description: "Desired-state engine with automated drift detection" },
      { name: "Provider Adapters", role: "Cloud Bridge", tech: "AWS SDK & Terraform", description: "Translates definitions into cloud infrastructure" },
      { name: "State Ledger", role: "Persistence", tech: "PostgreSQL & Prisma", description: "Encrypted state ledger and audit trails" },
    ],
    features: [
      { title: "Multi-Cloud Reconciliation", description: "Automated drift detection reconciling actual state against desired manifest.", icon: "Cloud" },
      { title: "Live Topology Graph", description: "Interactive visual diagram showing active clusters, routes, and security groups.", icon: "Network" },
      { title: "Cost Forecasting", description: "Real-time cost estimation prior to infrastructure provisioning.", icon: "TrendingUp" },
    ],
    engineeringHighlights: [
      "Engineered an idempotency engine guaranteeing zero duplicate resource allocations upon API retries.",
      "Constructed a granular role-based access control (RBAC) model with automated session expiry.",
    ],
    techStackCategorized: [
      { category: "Frontend & Visualization", technologies: ["Next.js", "React", "Tailwind CSS", "Lucide Icons"] },
      { category: "Backend Engine", technologies: ["Node.js", "TypeScript", "Fastify", "Prisma"] },
      { category: "Cloud & Storage", technologies: ["AWS", "Terraform", "PostgreSQL", "Redis"] },
    ],
  },
  {
    id: "systems-kappa",
    title: "Project Kappa",
    shortDescription: "High-throughput API gateway with automated rate-limiting and JWT authentication.",
    category: "API Gateway",
    year: "2024",
    technologies: ["Node.js", "Fastify", "Redis", "TypeScript"],
    accent: "#10b981",
    href: "/projects/systems-kappa",
    overview:
      "A high-throughput API gateway designed for low-latency request routing, token bucket rate limiting, cryptographic JWT validation, and real-time distributed tracing.",
    problem:
      "Monolithic API proxies introduce significant latency and fail under distributed denial-of-service or burst traffic conditions.",
    solution:
      "Engineered a lightweight proxy leveraging Fastify's schema compilation and Redis-backed sliding window rate limiters.",
    architecture: [
      { name: "Reverse Proxy", role: "Ingress", tech: "Fastify & HTTP/2", description: "Asynchronous connection handler with connection pooling" },
      { name: "Auth & Rate Limiter", role: "Security Layer", tech: "Redis & JWT", description: "Cryptographic signature validation and token bucket limiter" },
      { name: "Routing Core", role: "Service Router", tech: "TypeScript & DNS", description: "Dynamic health-aware upstream routing and load balancing" },
      { name: "Upstream Services", role: "Microservices", tech: "gRPC & REST", description: "Internal backend services and business logic" },
    ],
    features: [
      { title: "Sub-2ms Ingress Overhead", description: "Optimized non-blocking I/O delivering ultra-low routing latency.", icon: "Zap" },
      { title: "Sliding Window Rate Limiter", description: "Smooth traffic throttling backed by distributed Redis scripts.", icon: "ShieldAlert" },
      { title: "Distributed Tracing", description: "W3C Trace Context propagation across all upstream service calls.", icon: "GitCommit" },
    ],
    engineeringHighlights: [
      "Utilized JSON schema pre-compilation to eliminate runtime serialization bottlenecks.",
      "Maintained 99.99% uptime through graceful upstream circuit breaking.",
    ],
    techStackCategorized: [
      { category: "Gateway Core", technologies: ["Node.js", "Fastify", "TypeScript"] },
      { category: "Security & Caching", technologies: ["Redis", "JWT", "OAuth2"] },
      { category: "Telemetry", technologies: ["OpenTelemetry", "Prometheus"] },
    ],
  },
  {
    id: "systems-lambda",
    title: "Project Lambda",
    shortDescription: "Real-time collaborative document editing engine using operational transformation.",
    category: "Collaboration",
    year: "2024",
    technologies: ["React", "TypeScript", "WebSockets", "CRDT"],
    accent: "#3b82f6",
    href: "/projects/systems-lambda",
    overview:
      "A peer-to-peer and client-server hybrid collaborative document editor that guarantees concurrent consistency using Conflict-Free Replicated Data Types (Yjs).",
    problem:
      "Simultaneous edits by multiple distributed users easily lead to text interleaving, lost updates, and cursor displacement without robust concurrency control.",
    solution:
      "Implemented a state-vector CRDT engine coupled with WebSocket delta broadcasts, providing immediate local feedback and eventual consistency.",
    architecture: [
      { name: "Rich Text Editor", role: "Client Editor", tech: "React & TipTap", description: "Interactive document editor with presence cursor rendering" },
      { name: "CRDT Engine", role: "State Resolver", tech: "Yjs & TypeScript", description: "Operation merge and relative position tracking" },
      { name: "Sync Server", role: "WebSocket Hub", tech: "Node.js & WebSockets", description: "Room coordination, delta broadcast, and snapshot persistence" },
      { name: "Document Store", role: "Persistence", tech: "PostgreSQL & S3", description: "Binary document state history and revision snapshots" },
    ],
    features: [
      { title: "Zero-Conflict Merging", description: "Mathematical CRDT guarantees preventing lost updates or text collision.", icon: "GitMerge" },
      { title: "Live Presence Cursors", description: "Real-time visual cursor indicators displaying collaborator locations and selections.", icon: "Users" },
      { title: "Offline Replay Log", description: "Seamless state reconnection and reconciliation after temporary disconnects.", icon: "History" },
    ],
    engineeringHighlights: [
      "Engineered an efficient binary diff protocol reducing network bandwidth usage by 65%.",
      "Implemented snapshot compaction preventing unbounded growth of historical state vectors.",
    ],
    techStackCategorized: [
      { category: "Editor & Client", technologies: ["React", "TipTap", "Yjs", "TypeScript"] },
      { category: "Real-Time Sync", technologies: ["WebSockets", "Node.js", "Redis PubSub"] },
      { category: "Storage", technologies: ["PostgreSQL", "AWS S3"] },
    ],
  },
  {
    id: "systems-mu",
    title: "Project Mu",
    shortDescription: "Enterprise observability dashboard with interactive metric visualization.",
    category: "Observability",
    year: "2024",
    technologies: ["TypeScript", "D3.js", "Prometheus", "Tailwind"],
    accent: "#f59e0b",
    href: "/projects/systems-mu",
    overview:
      "A high-performance observability interface rendering hundreds of thousands of live telemetry data points with interactive zoom, filtering, and latency percentile curves.",
    problem:
      "Rendering large-scale continuous time-series data in the browser leads to severe DOM bloat, high memory usage, and UI lag.",
    solution:
      "Implemented a high-performance Canvas and D3-based rendering engine with data decimation algorithms for buttery smooth 60 FPS interactions.",
    architecture: [
      { name: "Metrics Visualizer", role: "Canvas UI", tech: "TypeScript & HTML5 Canvas", description: "Hardware-accelerated charting and heatmap visualizer" },
      { name: "Decimation Engine", role: "Data Processor", tech: "Web Workers & WebAssembly", description: "LTTB downsampling of high-frequency data streams" },
      { name: "Query Interface", role: "PromQL Bridge", tech: "Node.js & Prometheus", description: "PromQL query optimization and caching layer" },
      { name: "Telemetry Source", role: "Metrics Storage", tech: "Prometheus & VictoriaMetrics", description: "Distributed time-series storage backend" },
    ],
    features: [
      { title: "60 FPS Canvas Rendering", description: "Canvas-based chart rendering capable of displaying 500,000+ points without lag.", icon: "Activity" },
      { title: "LTTB Decimation", description: "Largest-Triangle-Three-Buckets algorithm preserving peak visual accuracy.", icon: "Filter" },
      { title: "P99 Latency Heatmaps", description: "Multi-dimensional latency distribution heatmaps for bottleneck discovery.", icon: "Flame" },
    ],
    engineeringHighlights: [
      "Offloaded data processing and downsampling to dedicated background Web Workers.",
      "Constructed a customizable dashboard layout engine with persistent user grid presets.",
    ],
    techStackCategorized: [
      { category: "Visualization", technologies: ["HTML5 Canvas", "D3.js", "TypeScript", "Tailwind CSS"] },
      { category: "Processing", technologies: ["Web Workers", "WebAssembly"] },
      { category: "Backend & Data", technologies: ["Node.js", "Prometheus", "VictoriaMetrics"] },
    ],
  },
  {
    id: "systems-nu",
    title: "Project Nu",
    shortDescription: "Distributed task scheduler with priority queues and failover fault tolerance.",
    category: "Distributed Core",
    year: "2023",
    technologies: ["Go", "Redis", "PostgreSQL", "Docker"],
    accent: "#ef4444",
    href: "/projects/systems-nu",
    overview:
      "A distributed job scheduling system designed for deterministic execution, delayed task processing, priority queues, and leader-elected coordinator nodes.",
    problem:
      "Coordinating asynchronous task execution across multiple servers without duplicate processing or leader election split-brain is notoriously error-prone.",
    solution:
      "Built a Raft-inspired distributed locking mechanism with Redis Redlock and persistent PostgreSQL job state guarantees.",
    architecture: [
      { name: "Producer API", role: "Job Ingress", tech: "Go & REST", description: "HTTP API for enqueueing priority and delayed jobs" },
      { name: "Leader Coordinator", role: "Orchestration", tech: "Go & Distributed Locks", description: "Heartbeat monitoring and task partition assignment" },
      { name: "Worker Pool", role: "Execution", tech: "Go Routines & Docker", description: "Concurrent sandboxed task execution workers" },
      { name: "State Ledger", role: "Job Store", tech: "PostgreSQL & Redis", description: "Persistent job history and retry execution logs" },
    ],
    features: [
      { title: "Leader Election & Failover", description: "Automatic leader reelection upon node crash preventing pipeline stall.", icon: "Shield" },
      { title: "Guaranteed Exactly-Once", description: "Idempotent task dispatching avoiding duplicate execution under network partitions.", icon: "CheckCircle" },
      { title: "Delayed & Cron Jobs", description: "High-precision timer wheels executing delayed tasks with sub-second accuracy.", icon: "Clock" },
    ],
    engineeringHighlights: [
      "Leveraged Go channels and atomic memory primitives to achieve zero contention under heavy enqueue volume.",
      "Implemented a comprehensive poison-pill message quarantine preventing cascading worker crashes.",
    ],
    techStackCategorized: [
      { category: "Core Engine", technologies: ["Go", "Go Concurrency", "gRPC"] },
      { category: "Storage & Queue", technologies: ["Redis", "PostgreSQL", "SQLC"] },
      { category: "DevOps", technologies: ["Docker", "Kubernetes", "Prometheus"] },
    ],
  },
  {
    id: "systems-xi",
    title: "Project Xi",
    shortDescription: "Unified identity access management system with OAuth 2.1 and Passkeys.",
    category: "Security",
    year: "2025",
    technologies: ["TypeScript", "OAuth2", "WebAuthn", "Prisma"],
    accent: "#8b5cf6",
    href: "/projects/systems-xi",
    overview:
      "A modern authentication and authorization platform supporting passwordless FIDO2 / WebAuthn passkeys, fine-grained RBAC permissions, and strict OAuth 2.1 compliance.",
    problem:
      "Legacy authentication schemes rely on vulnerable passwords and complex multi-factor friction, degrading user security and developer onboarding.",
    solution:
      "Architected a zero-trust authentication server implementing FIDO2 biometric authentication and short-lived cryptographically signed token pairs.",
    architecture: [
      { name: "Auth Client", role: "Biometric UI", tech: "WebAuthn & Next.js", description: "Passkey biometric prompt and session management" },
      { name: "OAuth 2.1 Server", role: "Security Gateway", tech: "Node.js & PKCE", description: "Token minting, revocation, and scope validation" },
      { name: "Credential Store", role: "Key Vault", tech: "Prisma & PostgreSQL", description: "Public key credential storage and device metadata" },
      { name: "Audit Stream", role: "Security Logging", tech: "Kafka & SIEM", description: "Immutable audit log of all authentication events" },
    ],
    features: [
      { title: "FIDO2 / WebAuthn Passkeys", description: "Passwordless biometric authentication immune to phishing and credential stuffing.", icon: "Fingerprint" },
      { title: "OAuth 2.1 with PKCE", description: "Strict modern authorization code flow with Proof Key for Code Exchange.", icon: "Key" },
      { title: "Granular RBAC Policies", description: "Declarative permission evaluation with instantaneous session revocation.", icon: "ShieldCheck" },
    ],
    engineeringHighlights: [
      "Engineered hardware-backed cryptographic challenge verification using native Node.js crypto modules.",
      "Implemented automated anomaly detection flagging concurrent logins across impossible geographic distances.",
    ],
    techStackCategorized: [
      { category: "Security & Protocols", technologies: ["WebAuthn", "OAuth 2.1", "PKCE", "JWT"] },
      { category: "Server & Database", technologies: ["TypeScript", "Node.js", "Prisma", "PostgreSQL"] },
      { category: "Infra & Telemetry", technologies: ["Redis", "Docker", "AWS KMS"] },
    ],
  },
];

export const experimentsProjects: ProjectDetailData[] = [
  {
    id: "exp-omicron",
    title: "Project Omicron",
    shortDescription: "Neural rendering and spatial 3D radiance field playground in WebGL.",
    category: "Computer Graphics",
    year: "2025",
    technologies: ["Three.js", "GLSL", "WebGL", "TypeScript"],
    accent: "#ec4899",
    href: "/projects/exp-omicron",
    overview:
      "An experimental browser-based rendering sandbox exploring 3D Gaussian splatting, custom GLSL volumetric shaders, and real-time spatial radiance field navigation.",
    problem:
      "Volumetric neural rendering typically requires heavy desktop GPUs and fails to achieve interactive frame rates in standard web browsers.",
    solution:
      "Created a custom WebGL fragment shader pipeline leveraging GPU instancing and compute-assisted tile sorting for real-time browser rendering.",
    architecture: [
      { name: "WebGL Canvas", role: "Rasterization", tech: "Three.js & WebGL 2.0", description: "Hardware-accelerated viewport with camera orbit controls" },
      { name: "GLSL Shader Pipeline", role: "Volumetric Shaders", tech: "Custom GLSL", description: "Real-time Gaussian sorting and alpha accumulation" },
      { name: "Spatial Data Loader", role: "Asset Pipeline", tech: "PLY & Binary Streams", description: "Progressive streaming of point cloud and radiance data" },
    ],
    features: [
      { title: "Real-Time 3D Splatting", description: "Smooth 60 FPS spatial radiance field exploration directly in WebGL.", icon: "Box" },
      { title: "Custom GLSL Shaders", description: "Optimized volumetric fragment shaders with depth sorting.", icon: "Sparkles" },
      { title: "Progressive Streaming", description: "Hierarchical level-of-detail loading enabling instant preview.", icon: "Download" },
    ],
    engineeringHighlights: [
      "Implemented a GPU-accelerated Radix sort algorithm inside WebGL shaders.",
      "Achieved sub-20ms first-frame rendering for large 3D scene point clouds.",
    ],
    techStackCategorized: [
      { category: "Graphics & Math", technologies: ["WebGL 2.0", "GLSL", "Three.js", "Linear Algebra"] },
      { category: "Application", technologies: ["TypeScript", "Next.js", "Tailwind CSS"] },
    ],
  },
  {
    id: "exp-pi",
    title: "Project Pi",
    shortDescription: "Multi-agent LLM workflow orchestrator with structured tool invocation.",
    category: "AI Agent",
    year: "2025",
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI"],
    accent: "#8b5cf6",
    href: "/projects/exp-pi",
    overview:
      "An autonomous agent orchestration framework coordinating specialized reasoning models to break down complex multi-step technical tasks, validate intermediate outputs, and execute verified tool calls.",
    problem:
      "Single-prompt LLM interactions frequently hallucinate, lack domain context, and fail when executing complex chained technical objectives.",
    solution:
      "Built a directed acyclic graph (DAG) agent workflow with strict schema validation, feedback loops, and human-in-the-loop verification gates.",
    architecture: [
      { name: "Orchestrator Core", role: "Graph Controller", tech: "Python & LangGraph", description: "DAG execution engine managing agent state and transitions" },
      { name: "Specialized Agents", role: "Reasoning Nodes", tech: "GPT-4o & Claude 3.5", description: "Dedicated planning, coding, and verification agents" },
      { name: "Tool Sandbox", role: "Execution", tech: "Docker & REST APIs", description: "Isolated environment for executing code and API calls" },
      { name: "State Memory", role: "Context Store", tech: "Redis & Vector DB", description: "Long-term episodic memory and conversation context" },
    ],
    features: [
      { title: "Multi-Agent DAG Execution", description: "Structured state machine coordinating specialized agents for complex goals.", icon: "GitFork" },
      { title: "Strict Schema Tool Calling", description: "Pydantic-enforced tool execution guaranteeing structured parameters.", icon: "CheckSquare" },
      { title: "Episodic Context Memory", description: "Vector similarity search retrieving relevant past execution learnings.", icon: "Brain" },
    ],
    engineeringHighlights: [
      "Engineered an automated self-reflection loop reducing code generation errors by 45%.",
      "Constructed a secure sandboxed runtime executing agent-generated scripts safely.",
    ],
    techStackCategorized: [
      { category: "AI & Orchestration", technologies: ["Python", "LangGraph", "LangChain", "OpenAI API"] },
      { category: "Backend & Gateway", technologies: ["FastAPI", "Pydantic", "Docker"] },
      { category: "Memory & Storage", technologies: ["ChromaDB", "Redis", "PostgreSQL"] },
    ],
  },
  {
    id: "exp-rho",
    title: "Project Rho",
    shortDescription: "Audio synthesis synthesizer with real-time Web Audio API signal processing.",
    category: "Creative Code",
    year: "2024",
    technologies: ["TypeScript", "Web Audio API", "Canvas", "Tailwind"],
    accent: "#e50926",
    href: "/projects/exp-rho",
    overview:
      "A modular polyphonic software synthesizer built in the browser featuring customizable oscillators, envelope generators, frequency modulation, and real-time spectrum analysis.",
    problem:
      "Browser audio engines often suffer from UI thread blocking, causing audio glitches, dropped notes, and unacceptable latency.",
    solution:
      "Implemented custom audio DSP processing inside dedicated AudioWorklet nodes running on a high-priority background audio thread.",
    architecture: [
      { name: "Synthesizer UI", role: "Control Surface", tech: "React & Canvas", description: "Virtual knobs, sliders, and real-time oscilloscope visualizer" },
      { name: "Audio Graph", role: "DSP Engine", tech: "Web Audio API", description: "Interconnected oscillator, filter, and amplifier nodes" },
      { name: "AudioWorklet", role: "Low-Latency DSP", tech: "JavaScript AudioWorklet", description: "Direct sample-level audio processing on audio thread" },
    ],
    features: [
      { title: "Glitch-Free AudioWorklets", description: "Background thread audio processing completely immune to main thread UI lag.", icon: "Volume2" },
      { title: "Real-Time Waveform Scope", description: "Smooth 60 FPS oscilloscope displaying output signal frequencies.", icon: "Activity" },
      { title: "Full MIDI Keyboard Support", description: "Direct Web MIDI API integration with polyphonic voice allocation.", icon: "Radio" },
    ],
    engineeringHighlights: [
      "Implemented band-limited oscillator algorithms eliminating high-frequency aliasing distortion.",
      "Achieved sub-10ms roundtrip latency between MIDI keypress and audio generation.",
    ],
    techStackCategorized: [
      { category: "Audio & DSP", technologies: ["Web Audio API", "AudioWorklets", "Web MIDI API", "DSP Math"] },
      { category: "Frontend & Canvas", technologies: ["TypeScript", "React", "HTML5 Canvas", "Tailwind CSS"] },
    ],
  },
  {
    id: "exp-sigma",
    title: "Project Sigma",
    shortDescription: "Visual algorithm sandbox and computational graph visualizer.",
    category: "Algorithms",
    year: "2024",
    technologies: ["TypeScript", "React", "SVG", "Framer Motion"],
    accent: "#06b6d4",
    href: "/projects/exp-sigma",
    overview:
      "An interactive educational platform visualizing complex computational graphs, pathfinding algorithms (A*, Dijkstra), and distributed consensus mechanisms step-by-step.",
    problem:
      "Understanding abstract algorithmic behavior from static text or pseudocode is difficult without dynamic visual step-throughs.",
    solution:
      "Created a state-machine playback engine that records algorithmic operations as discrete state frames with smooth SVG interpolation.",
    architecture: [
      { name: "Playback Controls", role: "Timeline UI", tech: "React & Framer Motion", description: "Step-forward, step-back, and speed adjustment controls" },
      { name: "Graph Visualizer", role: "SVG Canvas", tech: "SVG & D3 Force", description: "Interactive node/edge layout with dynamic physics simulation" },
      { name: "Algorithm Runner", role: "Execution Engine", tech: "TypeScript Generators", description: "Generator functions emitting discrete step-by-step state frames" },
    ],
    features: [
      { title: "Bidirectional Stepping", description: "Rewind or advance algorithm execution state frame-by-frame with full transparency.", icon: "PlayCircle" },
      { title: "Force-Directed Graphs", description: "Physics-based SVG graph layouts with smooth animated node transitions.", icon: "Share2" },
      { title: "Time Complexity Metrics", description: "Live tracking of comparisons, swaps, and memory overhead during execution.", icon: "Clock" },
    ],
    engineeringHighlights: [
      "Employed JavaScript generator functions (`function*`) to generate immutable execution snapshots cleanly.",
      "Optimized SVG element rendering ensuring fluid transitions with hundreds of graph vertices.",
    ],
    techStackCategorized: [
      { category: "Visualization", technologies: ["React", "TypeScript", "SVG", "Framer Motion"] },
      { category: "Algorithms", technologies: ["Graph Theory", "D3 Force", "A* Pathfinding"] },
    ],
  },
  {
    id: "exp-tau",
    title: "Project Tau",
    shortDescription: "Custom bytecode virtual machine interpreter and toy compiler in Rust.",
    category: "Compilers",
    year: "2024",
    technologies: ["Rust", "LLVM", "CLI", "WebAssembly"],
    accent: "#f59e0b",
    href: "/projects/exp-tau",
    overview:
      "A stack-based bytecode virtual machine and tree-walk compiler written in Rust, featuring a custom lexer, Pratt parser, mark-and-sweep garbage collector, and WebAssembly compilation target.",
    problem:
      "Interpreted languages often suffer from inefficient AST traversal and high memory allocation overhead during execution.",
    solution:
      "Constructed a compact bytecode instruction format with a register-cached evaluation loop and automatic memory management in Rust.",
    architecture: [
      { name: "Lexer & Parser", role: "Front-End", tech: "Rust & Pratt Parser", description: "Token generation and abstract syntax tree construction" },
      { name: "Bytecode Compiler", role: "Intermediate", tech: "Rust Bytecode Emitter", description: "Translates AST into compact serialized bytecode chunks" },
      { name: "Virtual Machine", role: "Runtime Engine", tech: "Rust Stack VM", description: "Instruction dispatch loop with stack frames and value tagging" },
      { name: "Garbage Collector", role: "Memory Manager", tech: "Mark-and-Sweep GC", description: "Automatic heap object tracing and memory reclamation" },
    ],
    features: [
      { title: "Bytecode Stack VM", description: "Fast opcode evaluation loop with NaN-tagging for compact 64-bit value representation.", icon: "Terminal" },
      { title: "Pratt Expression Parser", description: "Elegant operator precedence parsing supporting dynamic prefix and infix expressions.", icon: "Code2" },
      { title: "Compiles to WebAssembly", description: "Run custom scripts directly in the browser via compiled WebAssembly binaries.", icon: "Globe" },
    ],
    engineeringHighlights: [
      "Implemented NaN-tagging value representation reducing runtime value wrapper size to a single 64-bit float.",
      "Achieved zero runtime crashes through Rust's strict compile-time memory safety invariants.",
    ],
    techStackCategorized: [
      { category: "Language & Systems", technologies: ["Rust", "Compilers", "Bytecode VM", "WebAssembly"] },
      { category: "Algorithms", technologies: ["Pratt Parsing", "Mark-and-Sweep GC", "NaN Tagging"] },
    ],
  },
];

/**
 * Deterministic combined project list preserving stable ordering:
 * featuredProjects -> systemsProjects -> experimentsProjects
 */
export const allProjects: ProjectDetailData[] = [
  ...featuredProjects,
  ...systemsProjects,
  ...experimentsProjects,
];

/**
 * Retrieve all projects in deterministic order
 */
export function getAllProjects(): ProjectDetailData[] {
  return allProjects;
}

/**
 * Retrieve a project by its deterministic ID
 */
export function getProjectById(id: string): ProjectDetailData | undefined {
  return allProjects.find((p) => p.id === id);
}

/**
 * Retrieve adjacent projects in deterministic order
 */
export function getAdjacentProjects(id: string): {
  prev?: ProjectDetailData;
  next?: ProjectDetailData;
} {
  const index = allProjects.findIndex((p) => p.id === id);
  if (index === -1) return {};

  const prev = index > 0 ? allProjects[index - 1] : allProjects[allProjects.length - 1];
  const next = index < allProjects.length - 1 ? allProjects[index + 1] : allProjects[0];

  return { prev, next };
}
