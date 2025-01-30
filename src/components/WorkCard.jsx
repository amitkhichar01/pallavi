import { motion } from "framer-motion";

function WorkCard({ figmaUrl, imgUrl, imgAlt }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -10, opacity: 0.7 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="rounded-tl-[20px] rounded-br-[20px] object-cover w-[32.8rem] h-80"
      style={{ boxShadow: "30px 30px rgba(254, 229, 181, 0.05)" }}
    >
      <a href={`${figmaUrl}`} target="_blank">
        <img
          className="object-cover w-[32.8rem] h-80 rounded-tl-[20px] rounded-br-[20px]"
          src={imgUrl}
          alt={imgAlt}
        />
      </a>
    </motion.div>
  );
}

export default WorkCard;
