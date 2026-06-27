/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Centralized Site Data
   All content and configuration in one place.
   ══════════════════════════════════════════════════════ */

import {
  Brain,
  Radar,
  Navigation,
  Lightbulb,
  Network,
  Shield,
  Flame,
  Wheat,
  Factory,
  HardHat,
  Map,
  Wifi,
  Timer,
  Radio,
  Video,
  Eye,
  Sun,
  Users,
  HeartPulse,
  Mountain,
  Zap,
  Rocket,
  Globe,
} from 'lucide-react';

/* ── Navigation Links ── */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'RAIC Technology', href: '#raic' },
  { label: 'Drone System', href: '#drone-system' },
  { label: 'Applications', href: '#applications' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Business Impact', href: '#business-impact' },
  { label: 'Contact', href: '#contact' },
];

/* ── RAIC Technology Cards ── */
export const raicLayers = [
  {
    icon: Eye,
    title: 'Environmental Perception Layer',
    description:
      'Advanced computer vision and multi-spectral sensor array for real-time environmental understanding. Processes RGB, thermal, depth, and LiDAR data simultaneously to construct a comprehensive world model.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Radar,
    title: 'Sensor Fusion Engine',
    description:
      'Proprietary multi-sensor data fusion combining GPS/GNSS, IMU, barometric, ultrasonic, and LiDAR inputs. Kalman filter-based algorithms provide centimetre-accurate positioning in all conditions.',
    color: 'from-cyan-400 to-teal-400',
  },
  {
    icon: Navigation,
    title: 'Autonomous Navigation Engine',
    description:
      'AI-driven path planning and real-time obstacle avoidance using deep reinforcement learning. Supports fully autonomous waypoint missions, terrain following, and dynamic re-routing.',
    color: 'from-teal-400 to-emerald-400',
  },
  {
    icon: Lightbulb,
    title: 'Intelligent Decision-Making Engine',
    description:
      'Neural network-powered situational assessment for mission-critical decisions. Edge AI inference on NVIDIA Jetson enables sub-millisecond response times without cloud dependency.',
    color: 'from-amber-400 to-orange-400',
  },
  {
    icon: Network,
    title: 'Swarm Intelligence Layer',
    description:
      'Distributed multi-agent coordination enabling autonomous swarm operations. Inter-drone mesh networking supports collaborative mapping, search patterns, and synchronized missions.',
    color: 'from-purple-400 to-pink-400',
  },
];

/* ── Drone System Specs ── */
export const droneSpecs = [
  {
    category: 'Platform',
    items: [
      'Autonomous UAV with advanced flight dynamics',
      'Multi-agent swarm drone capability',
      'Hexacopter & quadcopter configurations',
      'CrossFlight V1.1 flight controller',
    ],
  },
  {
    category: 'Sensors & Cameras',
    items: [
      'Thermal imaging camera (FLIR)',
      'Night vision module',
      'High-resolution RGB camera (4K)',
      'Depth perception stereo camera',
      'LiDAR range finder',
    ],
  },
  {
    category: 'Navigation',
    items: [
      'GPS/GNSS multi-constellation receiver',
      'IMU (Inertial Measurement Unit)',
      'Barometric altimeter',
      'Ultrasonic proximity sensors',
      'Magnetometer compass',
    ],
  },
  {
    category: 'AI Processing',
    items: [
      'NVIDIA Jetson Nano / Orin module',
      'Edge AI inference engine',
      'Real-time object detection & tracking',
      'On-board deep learning pipeline',
      'TensorRT optimized models',
    ],
  },
];

/* ── Applications ── */
export const applications = [
  {
    icon: Shield,
    title: 'Defence & Border Surveillance',
    description:
      'Autonomous patrol and real-time threat detection across border zones with thermal and night-vision capabilities. Multi-drone swarms provide 360° coverage with zero blind spots.',
    image: 'defence',
  },
  {
    icon: Flame,
    title: 'Disaster Response & Search and Rescue',
    description:
      'Rapid deployment in disaster zones for survivor location, damage assessment, and supply delivery. Thermal imaging cuts through smoke, debris, and darkness.',
    image: 'disaster',
  },
  {
    icon: Wheat,
    title: 'Precision Agriculture',
    description:
      'NDVI crop health analysis, automated spraying, and yield prediction using multi-spectral imaging. Covers 100+ acres per hour with centimetre-level accuracy.',
    image: 'agriculture',
  },
  {
    icon: Factory,
    title: 'Industrial Inspection',
    description:
      'Autonomous inspection of power lines, wind turbines, pipelines, and industrial assets. AI detects corrosion, cracks, and anomalies without human risk.',
    image: 'industrial',
  },
  {
    icon: HardHat,
    title: 'Construction Monitoring',
    description:
      'Real-time site progress tracking, volumetric analysis, and 3D model generation. Automated reporting compares as-built vs. design with millimetre precision.',
    image: 'construction',
  },
  {
    icon: Map,
    title: 'Mapping & Surveying',
    description:
      'High-resolution aerial photogrammetry and LiDAR scanning for topographic mapping. Generates orthomosaics, DSMs, and point clouds for GIS applications.',
    image: 'mapping',
  },
];

/* ── Performance Stats ── */
export const performanceStats = [
  { value: 15, suffix: ' km', label: 'Communication Range', icon: Wifi },
  { value: 35, suffix: '+ min', label: 'Flight Endurance', icon: Timer },
  { value: 100, suffix: '%', label: 'Real-Time Telemetry', icon: Radio },
  { value: 4, suffix: 'K', label: 'Live Video Streaming', icon: Video },
  { value: 360, suffix: '°', label: 'Obstacle Avoidance', icon: Eye },
  { value: 24, suffix: '×7', label: 'Thermal & Night Vision', icon: Sun },
];

/* ── Business Impact Items ── */
export const businessImpact = [
  {
    icon: Users,
    title: 'Reduces Manual Labour',
    description:
      'Automate repetitive aerial tasks that previously required teams of field workers, reducing operational costs by up to 70%.',
  },
  {
    icon: HeartPulse,
    title: 'Improves Safety',
    description:
      'Remove human operators from hazardous environments — high-voltage lines, toxic zones, disaster sites, and conflict areas.',
  },
  {
    icon: Mountain,
    title: 'Accesses Hard-to-Reach Areas',
    description:
      'Deploy drones in terrain inaccessible to ground vehicles — mountains, dense forests, offshore platforms, and collapsed structures.',
  },
  {
    icon: Zap,
    title: 'Enables Faster Decisions',
    description:
      'Real-time data streaming and AI-powered analytics deliver actionable intelligence in seconds, not days.',
  },
  {
    icon: Rocket,
    title: 'Scalable Autonomous Missions',
    description:
      'Swarm technology enables simultaneous multi-drone operations that scale from a single UAV to a fleet of 50+.',
  },
  {
    icon: Globe,
    title: 'Indigenous Aerospace Innovation',
    description:
      'Proudly developing cutting-edge autonomous systems with homegrown technology, advancing national aerospace capability.',
  },
];

/* ── Swarm Architecture Nodes ── */
export const swarmNodes = [
  {
    id: 'gcs',
    label: 'Ground Control Station',
    sublabel: 'Mission Planning & Monitoring',
    x: 50,
    y: 15,
  },
  {
    id: 'hex1',
    label: 'Hexacopter Alpha',
    sublabel: 'Swarm Leader',
    x: 25,
    y: 45,
  },
  {
    id: 'hex2',
    label: 'Hexacopter Bravo',
    sublabel: 'Recon Lead',
    x: 75,
    y: 45,
  },
  {
    id: 'quad1',
    label: 'Quadcopter C1',
    sublabel: 'Scout Unit',
    x: 10,
    y: 75,
  },
  {
    id: 'quad2',
    label: 'Quadcopter C2',
    sublabel: 'Scout Unit',
    x: 38,
    y: 75,
  },
  {
    id: 'quad3',
    label: 'Quadcopter C3',
    sublabel: 'Scout Unit',
    x: 62,
    y: 75,
  },
  {
    id: 'quad4',
    label: 'Quadcopter C4',
    sublabel: 'Scout Unit',
    x: 90,
    y: 75,
  },
];

/* ── Swarm connections (from → to) ── */
export const swarmConnections = [
  { from: 'gcs', to: 'hex1' },
  { from: 'gcs', to: 'hex2' },
  { from: 'hex1', to: 'quad1' },
  { from: 'hex1', to: 'quad2' },
  { from: 'hex2', to: 'quad3' },
  { from: 'hex2', to: 'quad4' },
  { from: 'hex1', to: 'hex2' },  // Inter-drone mesh
  { from: 'quad1', to: 'quad2' },
  { from: 'quad3', to: 'quad4' },
];
