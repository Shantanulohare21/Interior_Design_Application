import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function GoldParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = -Math.random() * 0.5 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.life = Math.random() * 200 + 100;
        this.maxLife = this.life;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.opacity = (this.life / this.maxLife) * 0.4;
        if (this.life <= 0) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-charcoal overflow-hidden"
    >
      <GoldParticles />

      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-burgundy-dark/30 z-[1]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-gold" />
              <span
                className="text-gold/80 text-sm tracking-[4px] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Where Heritage Meets Elegance
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 gold-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Spaces Crafted
              <br />
              With Soul
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-ivory/60 text-lg leading-relaxed mb-4 max-w-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Premium interior design for homes, offices & hospitality spaces
              across India. Blending timeless Indian craftsmanship with
              contemporary luxury.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gold/50 text-sm mb-8 max-w-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ✦ Festive Season Special — Complimentary Vastu consultation with
              every project this Diwali & Navratri
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a href="#portfolio" className="btn-gold">
                Explore Our Work
              </a>
              <a href="#contact" className="btn-outline">
                Book a Consultation
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 mt-10 pt-10 border-t border-white/10"
            >
              <div className="text-center">
                <p
                  className="text-gold text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  500+
                </p>
                <p className="text-ivory/40 text-xs tracking-wider uppercase">
                  Projects
                </p>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="text-center">
                <p
                  className="text-gold text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  15+
                </p>
                <p className="text-ivory/40 text-xs tracking-wider uppercase">
                  Years
                </p>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="text-center">
                <p
                  className="text-gold text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  20+
                </p>
                <p className="text-ivory/40 text-xs tracking-wider uppercase">
                  Cities
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:grid grid-cols-2 gap-4 relative"
          >
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40 z-20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40 z-20" />

            <div className="col-span-2">
              <div
                className="relative overflow-hidden group"
                style={{ height: "280px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                  alt="Luxury Indian living room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
            </div>
            <div
              className="relative overflow-hidden group"
              style={{ height: "200px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
                alt="Modern Indian interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            <div
              className="relative overflow-hidden group"
              style={{ height: "200px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
                alt="Elegant home decor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-ivory/30 text-xs tracking-[3px] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
