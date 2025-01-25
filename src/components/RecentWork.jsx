import { motion } from "framer-motion";
import TextElement from "./TextElement";
import videoAnimation from "../videoAnimation";

const projects = [
  {
    img: "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/Wayamockup-4yhB-.png",
  },
  {
    img: "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/MoneyManagementMock-8zEh1.png",
  },
  {
    img: "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/SupremeMockup-RwE4P.png",
  },
  {
    img: "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/DessertSliderMock-jj9_h.png",
  },
  {
    img: "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/EventCornerMockup-SQaAS.png",
  },
  {
    img: "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/UserResearchTemplatecover-YHmys.png",
  },
  // Add other projects here
];

const RecentWork = () => (
  <section className="py-35 px-5">
    <h1 className="text-center text-5xl font-[Montserrat] mb-20">My Work</h1>

    <div className="flex justify-center flex-col items-center px-4">
      {projects.map(({ img }, index) => {
        const animation = videoAnimation(["0 1", "1.33 1"]);
        return (
          <motion.div
            key={index}
            ref={animation.ref}
            style={{ scale: animation.scale, opacity: animation.opacity }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img src={img} alt="#" />
            <TextElement text="Link" />
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default RecentWork;
