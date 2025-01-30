import { motion } from "framer-motion";

import "./App.css";
import H1Text from "./components/H1Text";
import HrLine from "./components/HrLine";
import ServiceCard from "./components/ServiceCard";
import WorkCard from "./components/WorkCard";
import SkillCard from "./components/SkillCard";
import ExperienceCard from "./components/ExperienceCard";
import TestimonialCard from "./components/TestimonialCard";
import AboutSpan from "./components/AboutSpan";

import { BsLinkedin } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

function App() {
  const footerHiding = "Get in Touch".split("");
  return (
    <>
      <header className="pb-52 px-20">
        <nav className="flex flex-row justify-between pt-5 pb-2 px-10">
          <a className="overflow-hidden" href="/">
            <motion.h2
              initial={{ opacity: 0, y: 50, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
              viewport={{ once: true }}
              className="tracking-wider"
            >
              Pallavi Salian
            </motion.h2>
          </a>
          <div className="overflow-hidden">
            <motion.a
              initial={{ opacity: 0, y: 50, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
              viewport={{ once: true }}
              className="text-[#FEE5B5] inline"
              href="mailto:pallavisalian18@gmail.com"
            >
              Hire Me
              <FaArrowRight className="inline ml-2" />
            </motion.a>
          </div>
        </nav>

        <div className="flex flex-row justify-around items-start ml-15 relative">
          <div className="flex-1 mt-16">
            <div className="overflow-hidden my-10">
              <motion.h2
                initial={{ opacity: 0, y: 50, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl text-[#FEE5B5] font-bold"
              >
                Hey I&#39;m Pallavi Salian, a
              </motion.h2>
            </div>
            <div className="wrapper overflow-hidden">
              <motion.ul
                initial={{ opacity: 0, y: 50, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="dynamic-texts"
              >
                <li>Designer</li>
                <li>Strategist</li>
                <li>Creative</li>
              </motion.ul>
            </div>
            <div className="overflow-hidden">
              <motion.a
                initial={{
                  opacity: 0,
                  y: 50,
                  filter: "blur(1px)",
                  translate3d: "0px, 100%, 0px",
                  rotateX: "0deg",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  translate3d: "0px, 0%, 0px",
                  rotateX: "0deg",
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
                className="w-8 block"
                href="https://www.linkedin.com/in/pallavi-salian-uiux-designer/"
                target="_blank"
              >
                <BsLinkedin size={30} color="#FEE5B5" className="mt-10" />
              </motion.a>
            </div>
          </div>
          <motion.div className="flex-1">
            <img
              className="h-[85vh] object-cover rounded-tl-[40px] rounded-br-[40px]"
              src="https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/IMG9455-GclwS.JPG"
              alt="Pallavi Salian Image"
            />
          </motion.div>
        </div>
      </header>

      <main>
        <section className="flex flex-row justify-around items-start pl-35 pr-20 py-25 h-full bg-[#131F22]">
          <div className="flex-1">
            <img
              className="h-[68vh] rounded-tl-[40px] rounded-br-[40px]"
              style={{ boxShadow: "30px 30px rgba(254, 229, 181, 0.08)" }}
              src="https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/majorgoulashHomeofficesetupphilipshuelightscosynatural0d414da7b6f6459c9f13068b4392b2d4zwuxupng-UUhBR.webp"
              alt="About Me Image"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between h-full">
            <HrLine />

            <H1Text size="[50px]" text="About Me" />

            <p className="mb-5 leading-6 tracking-wider text-[#FFFFFF99]">
              <AboutSpan
                text={
                  "Hi, I’m Pallavi Salian, a web and product designer passionateabout crafting"
                }
              />
              <AboutSpan
                text={
                  "intuitive and visually engaging experiences. With abackground in"
                }
              />
              <AboutSpan
                text={
                  "Computer Science and an MBA in Business Analytics, I blend creativity"
                }
              />
              <AboutSpan
                text={
                  "and data-driven insights to design solutions that solve real user problems."
                }
              />
            </p>
            <p className="leading-6 tracking-wider text-[#FFFFFF99]">
              <AboutSpan
                text={
                  "From business dashboards to trading apps, I’ve worked on diverse"
                }
              />
              <AboutSpan
                text={
                  "projects, focusing on user-friendly, responsive designs. Skilled in Figma"
                }
              />
              <AboutSpan
                text={
                  "and Adobe Creative Suite, I enjoy turning ideas into impactful experiences"
                }
              />
              <AboutSpan
                text={
                  "through prototyping, wireframing, and designsystems. I believe great"
                }
              />
              <AboutSpan
                text={
                  "design combines empathy, innovation, andcollaboration—and I bring this mindset to every project."
                }
              />
            </p>
          </div>
        </section>

        <section className="bg-[#17262b] pl-35 pr-25 py-25">
          <div className="flex justify-center flex-col items-center">
            <HrLine />
            <H1Text size="[50px]" text="My Services" />
          </div>

          <div className="flex flex-row justify-between items-stretch h-auto">
            <ServiceCard
              icon={<FaRegFlag className="w-[37px] h-[29px]" />}
              title="UI UX Design"
              text="I design easy-to-use and visually appealing digital experiences. From wireframes to prototypes, I create interfaces that feel natural and engaging for users."
            />

            <ServiceCard
              icon={<FaRegPenToSquare className="w-[37px] h-[29px]" />}
              title="Product Design"
              text="I craft digital products that solve real problems and look great. My process focuses on brainstorming ideas, understanding users, and creating designs that work beautifully."
            />

            <ServiceCard
              icon={<FaRegCopy className="w-[37px] h-[29px]" />}
              title="Graphic Design"
              text="I create eye-catching visuals for brands, social media, and marketing. My designs help you share your story and connect with your audience effectively."
            />
          </div>
        </section>

        <section className="bg-[#17262b] pl-35 pr-25 py-25">
          <div className="flex justify-center flex-col items-center">
            <HrLine />
            <H1Text size="50px" text="My Works" />
          </div>

          <div className="grid grid-cols-2 auto-rows-auto gap-16 ">
            <WorkCard
              figmaUrl={
                "https://www.figma.com/proto/HRlrE9ULcregTEIhmfTKCB/Mobile-Design?page-id=3%3A13164&node-id=3-25415&p=f&viewport=515%2C423%2C0.05&t=mseFUWqih1LW51OI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A25392"
              }
              imgUrl={
                "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/Wayamockup-4yhB-.png"
              }
              imgAlt={"Work Project One"}
            />
            <WorkCard
              figmaUrl={
                "https://www.figma.com/proto/OUaZ8BieSh4gznRymqVTBG/Landing-Page?page-id=0%3A1&node-id=10-2&viewport=267%2C116%2C0.06&t=SkEbaDKgQRrMLboC-1&scaling=min-zoom&content-scaling=fixed"
              }
              imgUrl={
                "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/MoneyManagementMock-8zEh1.png"
              }
              imgAlt={"Work Project Two"}
            />
            <WorkCard
              figmaUrl={
                "https://www.figma.com/proto/Mt7SdEaZsvocL4XJfaV2yK/Supreme-Website?page-id=0%3A1&node-id=8-629&viewport=1768%2C254%2C0.15&t=Do3Nk4ocs0YbKBMY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8%3A629"
              }
              imgUrl={
                "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/SupremeMockup-RwE4P.png"
              }
              imgAlt={"Work Project Three"}
            />
            <WorkCard
              figmaUrl={
                "https://www.figma.com/proto/MdwkvI8mDgoAInBWgDVhQL/Dessert-Slider?page-id=0%3A1&node-id=1-103&viewport=721%2C988%2C0.14&t=ICHvQU0UmZGaxFX7-1&scaling=min-zoom&content-scaling=fixed"
              }
              imgUrl={
                "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/DessertSliderMock-jj9_h.png"
              }
              imgAlt={"Work Project Four"}
            />
            <WorkCard
              figmaUrl={
                "https://www.figma.com/proto/vtKSi5svbI3NK4UIsRbxvX/Event-Corner?page-id=0%3A1&node-id=15-7&viewport=568%2C362%2C0.57&t=RtInCM2qcEHzFM6p-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15%3A7"
              }
              imgUrl={
                "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/EventCornerMockup-SQaAS.png"
              }
              imgAlt={"Work Project Five"}
            />
            <WorkCard
              figmaUrl={
                "https://www.figma.com/proto/OsLNlJbNTvADqC4l8LQOFv/Research-Template?page-id=0%3A1&node-id=42-313&viewport=233%2C167%2C0.32&t=0mXdwmONIC5palWM-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=42%3A313"
              }
              imgUrl={
                "https://cdn.cmsfly.com/67852bb5bccc650020d3add8/images/UserResearchTemplatecover-YHmys.png"
              }
              imgAlt={"Work Project Six"}
            />
          </div>
        </section>

        <section className="bg-[#17262b] pl-35 pr-25 py-25">
          <div className="flex justify-center flex-col items-center">
            <HrLine />
            <H1Text size="50px" text="Skills & Tools" />
          </div>
          <div className="grid grid-cols-4 auto-rows-auto gap-16">
            <SkillCard text={"Brand Design"} />
            <SkillCard text={"Brand Identity"} />
            <SkillCard text={"UI UX Design"} />
            <SkillCard text={"Product Design"} />
            <SkillCard text={"Photoshop"} />
            <SkillCard text={"Figma"} />
            <SkillCard text={"Canva"} />
            <SkillCard text={"Video Editing"} />
            <SkillCard text={"Wireframing"} />
            <SkillCard text={"Prototyping"} />
            <SkillCard text={"User Stories"} />
            <SkillCard text={"Design Strategy"} />
          </div>
        </section>

        <section className="bg-[#17262b] pl-35 pr-25 py-25">
          <div className="flex justify-center flex-col items-center">
            <HrLine />
            <H1Text size="50px" text="Work Experience" />
          </div>

          <div>
            <ExperienceCard
              role={"Junior Data Analyst"}
              companyName={"Solstice Solutions"}
              year={"November 2024 - Current"}
              location={"Connecticut, USA"}
            />

            <ExperienceCard
              role={"Graphic & UI UX Designer"}
              companyName={"Waya Financial Technologies"}
              year={"January 2023 - September 2023"}
              location={"Mumbai, India"}
            />

            <ExperienceCard
              role={"Graphic Designer"}
              companyName={"CollegeTips"}
              year={"July 2022 - August 2022"}
              location={"Mumbai, India"}
            />

            <ExperienceCard
              role={"Content Writer and Proofreader"}
              companyName={"Tellybest"}
              year={"August 2021 - July 2022"}
              location={"Mumbai, India"}
            />
          </div>
        </section>

        <section className="bg-[#17262b] pl-35 pr-25 py-25">
          <div className="flex justify-center flex-col items-center">
            <HrLine />
            <H1Text size="50px" text="Testimonials" />
          </div>

          <div className="grid grid-cols-2 auto-rows-auto gap-16 ">
            <TestimonialCard
              name={"Umesh Poojary"}
              role={"Founder, Shobhana Electronics"}
              msg={
                "Working with Pallavi Salian was a game-changer for our brand. They took the time to understand our vision and transformed it into a sleek, user-friendly design. The final product not only exceeded our expectations but also boosted user engagement by 40%."
              }
            />

            <TestimonialCard
              name={"Amit Vora"}
              role={"Founder & CEO, Waya Financial Technologies"}
              msg={
                "Pallavi Salian not only helped us design a sleek and intuitive app and website but also managed our social media presence with creativity and precision. Her designs and strategies significantly enhanced our online visibility and user engagement."
              }
            />

            <TestimonialCard
              name={"Sweta"}
              role={"UI UX Designer, Freelancer"}
              msg={
                "Pallavi Salian is an exceptional designer and collaborator. She seamlessly integrated feedback and delivered a design that everyone loved. Their ability to balance creativity with functionality is unmatched."
              }
            />

            <TestimonialCard
              name={"David Bruno"}
              role={"Founder, International Marking group of Utica"}
              msg={
                "Pallavi Salian provided invaluable insights and strategies for our expansion. She developed a detailed marketing roadmap and delivered a comprehensive report outlining essential website changes to boost user engagement and conversions."
              }
            />
          </div>
        </section>
      </main>

      <footer className="bg-[#131F22] pl-35 pr-25 pt-20 pb-25 flex flex-row justify-evenly items-center">
        <div className=" flex-1 flex justify-start flex-col items-start">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 50, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-[50px] font-[Playfair] font-bold"
            >
              Get in Touch
            </motion.h1>
          </div>

          <motion.h4 className="mt-2 text-[#FFFFFF99] leading-7 tracking-wider overflow-hidden">
            <AboutSpan
              text={"Have a project or idea? Let’s connect and create"}
            />
            <br />
            <AboutSpan
              text={"amazing together. Reach out—I’d love to hear from you!"}
            />
            <br />
            <AboutSpan text={"to hear from you!"} />
          </motion.h4>
        </div>

        <div className="flex-1 flex flex-row justify-center items-center gap-10 ">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(1px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-[13.4rem] w-[15rem] flex-1 bg-[#17262B] py-10 px-10 flex flex-col justify-center items-center rounded-tl-[20px] rounded-br-[20px]"
            style={{ boxShadow: "20px 20px rgba(254, 229, 181, 0.08)" }}
          >
            <FiMail className="text-[#FEE5B5] w-[38px] h-[35px]" />

            <a
              className="pt-5 font-bold"
              href="mailto:pallavisalian18@gmail.com"
            >
              pallavisalian18@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(1px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-[13.4rem] w-[15rem] flex-1 bg-[#17262B] py-10 px-10 flex flex-col justify-center items-center rounded-tl-[20px] rounded-br-[20px]"
            style={{ boxShadow: "20px 20px rgba(254, 229, 181, 0.08)" }}
          >
            <BsLinkedin className="text-[#FEE5B5]  w-[38px] h-[30px]" />

            <a
              className="pt-5 font-bold overflow-hidden"
              href="https://www.linkedin.com/in/pallavi-salian-uiux-designer/"
              target="_blank"
            >
              Pallavi Salian LinkedIn
            </a>
          </motion.div>
        </div>
      </footer>
    </>
  );
}

export default App;
