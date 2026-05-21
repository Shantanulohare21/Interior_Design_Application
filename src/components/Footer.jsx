import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Residential Design",
  "Commercial Spaces",
  "Vastu-Compliant Design",
  "Modular Kitchens",
  "Luxury Furniture",
  "Project Management",
];

function SocialIcon({ children, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 border border-ivory/15 flex items-center justify-center text-[#FAF6EE] opacity-50 hover:opacity-100 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 100 100">
                <g fill="#C9A84C">
                  <ellipse cx="50" cy="50" rx="7" ry="22" opacity="0.9" />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="7"
                    ry="22"
                    opacity="0.7"
                    transform="rotate(-30 50 50)"
                  />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="7"
                    ry="22"
                    opacity="0.7"
                    transform="rotate(30 50 50)"
                  />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="7"
                    ry="22"
                    opacity="0.5"
                    transform="rotate(-60 50 50)"
                  />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="7"
                    ry="22"
                    opacity="0.5"
                    transform="rotate(60 50 50)"
                  />
                  <circle cx="50" cy="50" r="5" fill="#C9A84C" />
                </g>
              </svg>
              <span
                className="text-xl text-gold font-semibold tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Aangan Interiors
              </span>
            </div>
            <p
              className="text-ivory/40 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Where Heritage Meets Elegance. Crafting luxurious living spaces
              that honour Indian artistry and embrace contemporary design.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://pinterest.com" label="Pinterest">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0a12 12 0 00-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.43-6.07s-.37-.73-.37-1.81c0-1.7.98-2.96 2.21-2.96 1.04 0 1.54.78 1.54 1.72 0 1.05-.67 2.61-1.01 4.06-.29 1.21.61 2.2 1.8 2.2 2.16 0 3.82-2.28 3.82-5.57 0-2.91-2.09-4.95-5.08-4.95-3.46 0-5.49 2.6-5.49 5.28 0 1.05.4 2.17.91 2.78.1.12.11.22.08.34l-.34 1.36c-.05.22-.18.27-.41.16-1.53-.71-2.48-2.95-2.48-4.74 0-3.87 2.81-7.42 8.1-7.42 4.25 0 7.56 3.03 7.56 7.08 0 4.22-2.66 7.63-6.36 7.63-1.24 0-2.41-.65-2.81-1.41l-.76 2.92c-.28 1.06-1.03 2.4-1.53 3.21A12 12 0 1012 0z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://houzz.com" label="Houzz">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.5 2.1L5 6v4.7l2.5 1.3V7.3L12.5 4v8.3L10 10.7v4.7l2.5 1.3 7.5-3.8V8.2L12.5 2.1zm0 10.6l5-2.5V7.5l-5 2.5v2.7zM10 19.9l2.5 1.3 7.5-3.8v-4.7L12.5 16 10 14.7v5.2z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-ivory text-sm font-semibold tracking-[2px] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-ivory/40 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="w-1.5 h-1.5 bg-gold/30 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-ivory text-sm font-semibold tracking-[2px] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleClick(e, "#services")}
                    className="text-ivory/40 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="w-1.5 h-1.5 bg-gold/30 rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-ivory text-sm font-semibold tracking-[2px] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact Us
            </h4>
            <div
              className="space-y-4 text-ivory/40 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p className="flex items-start gap-3">
                <svg
                  className="flex-shrink-0 mt-0.5"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                A-12, Hauz Khas Village,
                <br />
                New Delhi — 110016
              </p>
              <p className="flex items-center gap-3">
                <svg
                  className="flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <svg
                  className="flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@aanganinteriors.in
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="btn-gold inline-block mt-6 text-sm px-6 py-2.5"
            >
              Book Free Vastu Consultation
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-ivory/30 text-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © 2025 Aangan Interiors. All Rights Reserved.
            </p>
            <p
              className="text-ivory/20 text-xs text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Serving clients across Mumbai · Delhi · Bangalore · Hyderabad ·
              Pune · Chennai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
