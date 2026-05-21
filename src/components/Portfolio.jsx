import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    name: "Villa Retreat",
    city: "Goa",
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 2,
    name: "Penthouse Suite",
    city: "Mumbai",
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    id: 3,
    name: "Artisan Boutique Hotel",
    city: "Udaipur",
    category: "hospitality",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
  },
  {
    id: 4,
    name: "Tech Park Lounge",
    city: "Bangalore",
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: 5,
    name: "Heritage Haveli Restoration",
    city: "Jaipur",
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
  },
  {
    id: 6,
    name: "Luxury Spa & Wellness Centre",
    city: "Hyderabad",
    category: "hospitality",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
];

const filters = ["All", "Residential", "Commercial", "Hospitality"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter.toLowerCase());

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-ivory relative overflow-hidden"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[3px] uppercase font-medium">
              Portfolio
            </span>
            <div className="w-10 h-[1px] bg-gold" />
          </div>
          <h2
            className="section-heading text-charcoal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Finest <span className="text-burgundy">Work</span>
          </h2>
          <p className="section-subheading text-charcoal/50">
            A curated collection of our most distinguished projects across India
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ height: "380px" }}
              >
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.city}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Gold tint on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/90 via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-gold text-xs tracking-[3px] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.category}
                    </p>
                    <h3
                      className="text-ivory text-xl font-semibold mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-ivory/70 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.city}
                    </p>
                  </div>
                </div>

                {/* Corner decoration on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
