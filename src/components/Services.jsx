import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Residential Design",
    description:
      "Bespoke home interiors that reflect your personality — from palatial villas in Goa to elegant apartments in Mumbai. Every room designed to perfection.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Commercial Spaces",
    description:
      "Offices, retail showrooms, and co-working spaces that inspire productivity and leave lasting impressions on clients and employees alike.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Vastu-Compliant Design",
    description:
      "Harmonizing ancient Vastu Shastra principles with modern aesthetics. Spaces that bring positive energy, prosperity, and balance to your life.",
    featured: true,
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 22h16" />
        <path d="M4 9h16" />
        <path d="M4 9v13" />
        <path d="M20 9v13" />
        <rect x="8" y="13" width="8" height="5" rx="1" />
        <path d="M8 2l4 7 4-7" />
      </svg>
    ),
    title: "Modular Kitchens",
    description:
      "State-of-the-art modular kitchens designed for the Indian cooking style — accommodating masala boxes, tandoors, and modern appliances seamlessly.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <rect x="4" y="3" width="16" height="8" rx="2" />
        <path d="M9 11v4" />
        <path d="M15 11v4" />
      </svg>
    ),
    title: "Luxury Furniture Curation",
    description:
      "Hand-picked furniture from India's finest artisans and global luxury brands. Custom-made pieces that become the centrepiece of your home.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5z" />
        <path d="M6 9.01V9" />
        <path d="M15 5l6.3 6.3a2.4 2.4 0 010 3.4L17 19" />
      </svg>
    ),
    title: "Project Management",
    description:
      "End-to-end project execution with dedicated site managers. On-time delivery, transparent budgeting, and zero hassle — from blueprint to handover.",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-charcoal relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-burgundy/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[3px] uppercase font-medium">
              What We Do
            </span>
            <div className="w-10 h-[1px] bg-gold" />
          </div>
          <h2
            className="section-heading text-ivory"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our <span className="gold-text">Expertise</span>
          </h2>
          <p className="section-subheading text-ivory/50">
            Six pillars of excellence that define every Aangan Interiors project
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 border transition-all duration-500 hover:-translate-y-2 ${
                service.featured
                  ? "border-gold/40 bg-gradient-to-br from-burgundy-dark/30 to-charcoal-light"
                  : "border-white/10 bg-charcoal-light/50 hover:border-gold/40"
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-gold text-charcoal text-xs font-bold px-3 py-1 tracking-wider uppercase">
                  Uniquely Indian
                </div>
              )}

              {/* Gold glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-5 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3
                  className="text-xl text-ivory mb-3 font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-ivory/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
