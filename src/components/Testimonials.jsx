import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote:
      "Aangan Interiors transformed our apartment into a palace. The way they blended traditional Rajasthani jharokha elements with our modern lifestyle was nothing short of magical. Every guest asks who designed our home!",
    name: "Priya Mehta",
    city: "Mumbai",
    rating: 5,
  },
  {
    quote:
      "We were skeptical about Vastu compliance affecting our design vision, but the team proved us wrong beautifully. Our farmhouse in Delhi now has both — perfect Vastu alignment and a stunning contemporary look. Worth every rupee.",
    name: "Arjun & Sunita Kapoor",
    city: "Delhi",
    rating: 5,
  },
  {
    quote:
      "As someone who has worked with international designers, I can confidently say Aangan delivers world-class quality with an unmistakable Indian soul. Our tech office in Whitefield is now our best recruitment tool!",
    name: "Rahul Nair",
    city: "Bangalore",
    rating: 5,
  },
  {
    quote:
      "From our initial consultation to the final handover, everything was seamless. They sourced the most exquisite Bidriware accessories and Pochampally textiles for our Jubilee Hills villa. It truly feels like home.",
    name: "Vandana Singhania",
    city: "Hyderabad",
    rating: 5,
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-ivory-dark relative overflow-hidden"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #6B1E2E 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

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
              Testimonials
            </span>
            <div className="w-10 h-[1px] bg-gold" />
          </div>
          <h2
            className="section-heading text-charcoal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Our <span className="text-burgundy">Clients</span> Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Large decorative quote */}
          <div
            className="absolute -top-6 left-4 lg:left-8 text-[120px] leading-none text-gold/10 select-none pointer-events-none z-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "
          </div>

          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm p-8 lg:p-12 shadow-xl relative z-10 border border-gold/10"
            >
              <StarRating count={testimonials[current].rating} />

              <p
                className="text-charcoal/80 text-lg lg:text-xl leading-relaxed mt-6 mb-8 italic"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                "{testimonials[current].quote}"
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center">
                  <span
                    className="text-ivory text-lg font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {testimonials[current].name[0]}
                  </span>
                </div>
                <div>
                  <p
                    className="text-charcoal font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {testimonials[current].name}
                  </p>
                  <p className="text-charcoal/50 text-sm flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {testimonials[current].city}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-gold" : "w-2 bg-gold/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
