import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function PaisleyDivider() {
  return (
    <div className="paisley-divider my-4">
      <svg
        width="60"
        height="40"
        viewBox="0 0 60 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 5 C35 5 45 10 45 20 C45 30 35 35 30 35 C25 35 15 30 15 20 C15 10 25 5 30 5Z"
          stroke="#C9A84C"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M30 10 C33 10 40 14 40 20 C40 26 33 30 30 30 C27 30 20 26 20 20 C20 14 27 10 30 10Z"
          stroke="#C9A84C"
          strokeWidth="0.5"
          fill="none"
          opacity="0.4"
        />
        <circle cx="30" cy="20" r="3" fill="#C9A84C" opacity="0.5" />
        <path
          d="M30 12 Q32 16 30 20 Q28 16 30 12Z"
          fill="#C9A84C"
          opacity="0.3"
        />
        <path
          d="M30 28 Q32 24 30 20 Q28 24 30 28Z"
          fill="#C9A84C"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

const stats = [
  { number: 500, suffix: "+", label: "Projects Completed" },
  { number: 15, suffix: "+", label: "Years Experience" },
  { number: 20, suffix: "+", label: "Cities Across India" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-ivory relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #C9A84C 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative gold frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 z-0" />
              <div className="relative z-10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80"
                  alt="Aangan Interiors workspace"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Gold corner accents */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-gold z-20" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 lg:right-8 bg-burgundy text-ivory w-32 h-32 rounded-full flex flex-col items-center justify-center z-30 shadow-xl"
            >
              <span
                className="text-3xl font-bold text-gold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                15+
              </span>
              <span className="text-xs tracking-wider uppercase opacity-80">
                Years
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-gold" />
              <span className="text-gold text-sm tracking-[3px] uppercase font-medium">
                About Us
              </span>
            </div>

            <h2
              className="section-heading text-charcoal mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              15 Years of Crafting
              <br />
              <span className="text-burgundy">Dream Spaces</span>
            </h2>

            <p
              className="text-charcoal/70 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              At Aangan Interiors, we believe that every space tells a story —
              one that weaves together the rich tapestry of Indian heritage with
              the clean lines of contemporary luxury. Our design philosophy
              draws inspiration from the intricate artistry of Rajasthani
              havelis, the serene elegance of Kerala courtyards, and the vibrant
              energy of modern Indian living.
            </p>

            <p
              className="text-charcoal/70 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From hand-selected Jaipur block-print textiles to custom brass
              fixtures crafted by master artisans in Moradabad, every element in
              our designs is curated with intention. We don't just design
              interiors — we create heirlooms of space that honour your roots
              while embracing the future.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-charcoal/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="text-center"
                >
                  <p
                    className="text-3xl lg:text-4xl font-bold text-burgundy mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="text-charcoal/50 text-xs tracking-wider uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Paisley Divider */}
        <div className="mt-24">
          <PaisleyDivider />
        </div>
      </div>
    </section>
  );
}
