import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Lotus Icon */}
      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <g fill="#C9A84C">
          <ellipse cx="50" cy="55" rx="8" ry="25" opacity="0.9" />
          <ellipse
            cx="50"
            cy="55"
            rx="8"
            ry="25"
            opacity="0.7"
            transform="rotate(-30 50 55)"
          />
          <ellipse
            cx="50"
            cy="55"
            rx="8"
            ry="25"
            opacity="0.7"
            transform="rotate(30 50 55)"
          />
          <ellipse
            cx="50"
            cy="55"
            rx="8"
            ry="25"
            opacity="0.5"
            transform="rotate(-60 50 55)"
          />
          <ellipse
            cx="50"
            cy="55"
            rx="8"
            ry="25"
            opacity="0.5"
            transform="rotate(60 50 55)"
          />
          <circle cx="50" cy="55" r="6" fill="#C9A84C" />
        </g>
      </motion.svg>

      <motion.div
        className="loading-logo gold-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Aangan Interiors
      </motion.div>

      <motion.p
        className="text-gold/60 text-sm tracking-[4px] uppercase"
        style={{ fontFamily: "var(--font-body)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Where Heritage Meets Elegance
      </motion.p>

      <motion.div
        className="loading-bar-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="loading-bar" />
      </motion.div>
    </motion.div>
  );
}
