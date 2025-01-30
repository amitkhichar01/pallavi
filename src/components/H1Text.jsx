import { motion } from "framer-motion";

function H1Text({ size, text }) {
  const letters = text.split("");

  return (
    <div className="my-10 overflow-hidden">
      <motion.h1 className="text-[50px] font-[Playfair] font-bold overflow-visible flex">
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 30, rotate: "10deg" }}
            whileInView={{ opacity: 1, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, }}
            className={char === " " ? "w" : ""} // Add spacing for the space character
          >
            {char === " " ? "\u00A0" : char} {/* Non-breaking space */}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default H1Text;
