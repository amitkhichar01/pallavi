import { motion } from "framer-motion";
import ArrowIcon from "./ArrowIcon";
import AnimatedUnderline from "./AnimatedUnderline";

const MotionLink = ({ href, custom, text }) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <motion.a
      className="animated-underline-box relative text-center"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      custom={custom}
    >
      {text}
      <ArrowIcon />
      <AnimatedUnderline />
    </motion.a>
  );
};

export default MotionLink;
