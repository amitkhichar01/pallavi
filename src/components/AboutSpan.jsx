// this is templary file
import { motion } from "framer-motion"

function AboutSpan ({ text}) {
    return (
        <motion.span
        initial={{
            opacity: 0,
            y: 50, // Moves down initially
            filter: "blur(0px)", // More blur at the start
            // translate3d: "0px, 0%, 0px",
            // rotate: "40deg"
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            // translate3d: "0px, 0%, 0px",
            // rotate: "0deg"

          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3}}
          viewport={{ once: true, amount: 0.2 }}
        >{text}</motion.span>
    )
}

export default AboutSpan;