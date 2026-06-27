/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Applications Section
   Six mission-critical deployment cards with hover
   reveal effects, staggered scroll animation, and detailed
   centered popup modals upon click.
   ══════════════════════════════════════════════════════ */

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { applications } from '../data/siteData';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

/* ── Detailed overlay content map ── */
const detailedContent = {
  'Defence & Border Surveillance': {
    description1: 'The RAIC-powered Autonomous Drone Ecosystem provides advanced intelligence, surveillance, and reconnaissance capabilities for defence and homeland security applications. Equipped with thermal imaging, night vision systems, AI-based object detection, and autonomous navigation, the platform enables continuous monitoring across large and remote border regions.',
    description2: 'The system can autonomously detect intrusions, identify suspicious activities, track moving targets, and provide real-time situational awareness to security personnel. Through swarm intelligence, multiple drones can coordinate missions, ensuring persistent coverage and rapid response in mission-critical environments.',
    capabilities: [
      'Autonomous border patrol and perimeter security',
      'Real-time intrusion detection and threat monitoring',
      'Thermal and night-time surveillance operations',
      'Multi-drone coordinated reconnaissance missions',
      'AI-enabled target identification and tracking'
    ]
  },
  'Disaster Response & Search and Rescue': {
    description1: 'During natural disasters or emergencies, RAIC-powered drones provide rapid deployment capabilities to assist first responders. They map affected areas in real-time, locate missing persons in difficult terrain using thermal vision, and assess structural damage without risking human lives.',
    description2: 'With autonomous pathfinding and adaptive communication relays, these drones can operate even in areas with destroyed infrastructure. This speed of response and capability is a vital tool for saving lives during critical response windows.',
    capabilities: [
      'Rapid mapping and visual damage assessment',
      'Thermal imaging search and rescue support',
      'Emergency supply delivery coordination',
      'Ad-hoc communications network relay',
      'Hazardous material detection and monitoring'
    ]
  },
  'Precision Agriculture': {
    description1: 'Modern agriculture relies on data-driven decisions. RAGAS drones equipped with multispectral sensors analyze crop health, soil moisture levels, and vegetation indices (NDVI) to help farmers optimize resources, detect diseases early, and improve yields.',
    description2: 'By automating crop spraying and field monitoring, the platform reduces chemical usage and labor costs. This precise approach enhances agricultural efficiency while promoting sustainable farming practices.',
    capabilities: [
      'Multispectral crop health and vigor analysis',
      'Early disease, weed, and pest detection',
      'Precision spraying and seed distribution',
      'Soil moisture and irrigation mapping',
      'Yield forecasting and crop counting'
    ]
  },
  'Industrial Inspection': {
    description1: 'RAIC technology automates complex industrial inspection tasks across power lines, wind turbines, pipelines, and manufacturing plants. Drones execute high-precision flight paths close to structures, gathering detailed visual and thermal data for predictive maintenance.',
    description2: 'AI models analyze the captured media in real-time to identify anomalies like cracks, corrosion, hot spots, or component wear, reducing operational downtime and eliminating human safety risks associated with high-altitude climbs.',
    capabilities: [
      'Automated close-proximity infrastructure inspection',
      'Real-time thermal hotspot and anomaly detection',
      'High-resolution crack and corrosion mapping',
      'Predictive maintenance database integration',
      'Confined space and high-altitude flight operations'
    ]
  },
  'Construction Monitoring': {
    description1: 'The RAIC drone platform transforms construction site management by providing real-time aerial monitoring, project analytics, and automated progress tracking. Autonomous flight missions enable frequent site inspections, reducing delays and improving project efficiency.',
    description2: 'High-resolution imagery, photogrammetry, and AI-powered analytics provide project stakeholders with accurate visual insights and measurable progress reports throughout the construction lifecycle.',
    capabilities: [
      'Real-time construction progress monitoring',
      'Volumetric analysis and stockpile measurement',
      'Enhanced safety and operational efficiency',
      'Automated site inspections and reporting',
      '3D site reconstruction and digital twins'
    ]
  },
  'Mapping & Surveying': {
    description1: 'High-resolution photogrammetry and LiDAR payloads on RAGAS drones enable rapid, accurate mapping of large-scale terrains. The system generates precise 3D digital elevation models, orthomosaics, and point clouds for geological, urban planning, and surveying uses.',
    description2: 'Autonomous survey patterns and post-processing integrations streamline workflow times, delivering GIS-grade geospatial accuracy across vast or inaccessible landscapes.',
    capabilities: [
      'High-resolution topographic mapping',
      'LiDAR point cloud generation and analysis',
      'Geospatial data integration for GIS applications',
      'Volumetric terrain mapping and contours',
      'Autonomous survey mission pathfinding'
    ]
  }
};

/* ── Accent gradient maps ── */
const gradientMap = [
  'from-orange-500 to-red-600',
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-indigo-600',
  'from-yellow-500 to-amber-600',
  'from-purple-500 to-pink-600',
];

/* ── Animation variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Applications() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedApp, setSelectedApp] = useState(null);

  const activeDetails = selectedApp ? detailedContent[selectedApp.title] : null;

  // Lock body scroll when modal is open to keep it fixed and centered
  useEffect(() => {
    if (selectedApp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedApp]);

  return (
    <section id="applications" ref={sectionRef} className="py-24 md:py-32 bg-mesh relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <SectionHeader
          title="Applications"
          subtitle="MISSION-CRITICAL DEPLOYMENTS"
          accent="gold"
        />

        {/* ── Application Cards Grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {applications.map((app, index) => {
            const Icon = app.icon;
            const gradient = gradientMap[index % gradientMap.length];

            return (
              <motion.div
                key={app.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 40px rgba(0,180,255,0.2)',
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedApp({ ...app, gradient })}
              >
                <GlassCard className="relative h-full p-6 group overflow-hidden cursor-pointer">
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient}
                                opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient}
                                flex items-center justify-center mb-4
                                shadow-lg group-hover:shadow-glow-sm transition-shadow duration-300`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg text-white mb-3 group-hover:text-glow transition-all duration-300">
                    {app.title}
                  </h3>

                  {/* Description — truncated */}
                  <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                    {app.description}
                  </p>

                  {/* Learn More CTA — slides in on hover */}
                  <div
                    className="flex items-center gap-1 mt-6 text-electric text-sm font-heading tracking-wider
                               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                               transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 rounded-xl border border-transparent
                               group-hover:border-electric/30 transition-all duration-300 pointer-events-none"
                  />
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ─── Centered Detailed Content Modal ─── */}
      <AnimatePresence>
        {selectedApp && activeDetails && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              className="fixed inset-0 z-[1000] bg-navy-950/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedApp(null)}
            />

            {/* Modal Box wrapper */}
            <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full max-w-2xl bg-navy-900/95 glass border border-electric/35 rounded-2xl shadow-glow-lg
                           p-6 md:p-8 relative max-h-[85vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedApp(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10
                             flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10
                             transition-colors duration-200"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedApp.gradient}
                                   flex items-center justify-center shadow-glow-sm`}>
                    <selectedApp.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-electric uppercase">
                      Application Profile
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl text-white font-bold leading-tight mt-1">
                      {selectedApp.title}
                    </h3>
                  </div>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                  <p>{activeDetails.description1}</p>
                  <p>{activeDetails.description2}</p>
                </div>

                {/* Capabilities list */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-heading text-xs md:text-sm text-gold tracking-widest uppercase mb-4">
                    Key Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeDetails.capabilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
