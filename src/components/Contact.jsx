import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const serviceOptions = [
  "Residential Design",
  "Commercial Spaces",
  "Vastu-Compliant Design",
  "Modular Kitchens",
  "Luxury Furniture Curation",
  "Project Management",
  "Free Vastu Consultation",
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-ivory relative overflow-hidden"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
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
              Get In Touch
            </span>
            <div className="w-10 h-[1px] bg-gold" />
          </div>
          <h2
            className="section-heading text-charcoal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let's Create Something{" "}
            <span className="text-burgundy">Beautiful</span>
          </h2>
          <p className="section-subheading text-charcoal/50">
            Book a free consultation and let's discuss how we can transform your
            space
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-charcoal/70 text-sm mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rajesh Sharma"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-charcoal/70 text-sm mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rajesh@email.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-charcoal/70 text-sm mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-charcoal/70 text-sm mb-2 font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Mumbai, Delhi, Bangalore..."
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-charcoal/70 text-sm mb-2 font-medium">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input cursor-pointer"
                  style={{
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-charcoal/70 text-sm mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, budget range, and timeline..."
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full text-center text-base"
                disabled={submitted}
              >
                {submitted ? "✓ Enquiry Sent Successfully!" : "Send Enquiry"}
              </button>

              <p className="text-charcoal/40 text-xs text-center mt-3">
                Or call us directly at{" "}
                <a
                  href="tel:+919876543210"
                  className="text-gold hover:underline"
                >
                  +91 98765 43210
                </a>
              </p>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B1E2E"
                    strokeWidth="1.5"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-charcoal font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                    }}
                  >
                    Phone
                  </h4>
                  <p className="text-charcoal/60 text-sm">+91 98765 43210</p>
                  <p className="text-charcoal/60 text-sm">+91 11 4567 8900</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B1E2E"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-charcoal font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                    }}
                  >
                    Email
                  </h4>
                  <p className="text-charcoal/60 text-sm">
                    hello@aanganinteriors.in
                  </p>
                  <p className="text-charcoal/60 text-sm">
                    projects@aanganinteriors.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B1E2E"
                    strokeWidth="1.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-charcoal font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                    }}
                  >
                    Studio Address
                  </h4>
                  <p className="text-charcoal/60 text-sm">
                    A-12, Hauz Khas Village,
                    <br />
                    New Delhi — 110016, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-charcoal font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                    }}
                  >
                    WhatsApp
                  </h4>
                  <p className="text-charcoal/60 text-sm">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-64 bg-charcoal/5 border border-charcoal/10 overflow-hidden relative">
              <iframe
                title="Aangan Interiors Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9951535564453!2d77.19368627549818!3d28.54958057571094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce20867eaaaab%3A0xa0ecc9b94b81c17e!2sHauz%20Khas%20Village!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
