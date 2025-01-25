import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./App.css";
import RecentWork from "./components/RecentWork";
import MotionLink from "./components/MotionLink";
import AvatarGroup from "./components/AvatarGroup";
function App() {

  // Track the user's scroll progress
  const { scrollYProgress } = useScroll();

  // Transformations for the image
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]); // Scale down the image
  const width = useTransform(scrollYProgress, [0, 0.25], ["100%", "40%"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["0%", "1.5rem"]
  );

  return (
    <>
      <header className="relative h-[500vh]">
        <div className="flex flex-row sticky top-0 w-full h-[100vh]">
          <div className="ml-20 z-10">
            <h1 className="mt-5 text-xl font-[Montserrat]">PALLAVI SALIAN</h1>
            <div className="py-15 text-base">
              <a href="mailto:pallavisalian18@gmail.com"> Hire me</a>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="inline pl-2 text-white"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </div>

            <h2 className="text-7xl pb-15 font-[Montserrat]">
              UI/UX & Graphic <br /> Designer
            </h2>

            <p className="text-base">
              Are you an agency or a freelancer? I always welcome new <br />{" "}
              opportunities to exchange ideas and to explore <br />{" "}
              collaborations
            </p>
          </div>

          {/* Animated Image */}

          <div className="absolute w-full h-[100vh]">
            <motion.img
              src="https://cdn.prod.website-files.com/6405fcf125150a174dce6e85/64079deb61285e86c2e9825b_matteo-fabbiani-design.jpg"
              alt="Pallavi picture"
              className="absolute right-0 object-cover w-full h-full"
              style={{
                scale: scale, // Apply dynamic scale
                width: width, // Apply dynamic width
                borderRadius: borderRadius, // Apply dynamic border-radius
                willChange: "transform, width, height", // Optimize for performance
              }}
            />
          </div>
        </div>
      </header>

      <main>
        <section className="py-35 px-5">
          <h1 className="text-center text-5xl font-[Montserrat] mb-20">
            About Me
          </h1>
          <div className="flex justify-center">
            <p className="text-center w-3/5 text-xl leading-8  tracking-wide text-[#eaeaea]">
              Hi, I’m <span className="text-white">Pallavi Salian</span>, a web
              and product designer with a passion for creating intuitive,
              visually engaging experiences. Combining a Computer Science
              background with an MBA in Business Analytics, I design solutions
              that solve real user problems. From business dashboards to trading
              apps, I specialize in user-friendly, responsive designs using
              tools like Figma and Adobe Creative Suite. Skilled in prototyping,
              wireframing, and design systems, I focus on blending creativity,
              data insights, and collaboration to deliver impactful results.
            </p>
          </div>
        </section>
        <section className="py-35 px-5">
          <h1 className="text-center text-5xl font-[Montserrat] mb-20">
            Services
          </h1>

          <div className="flex flex-row justify-evenly flex-wrap">
            <div className="border-[1px] border-[#292929] rounded-[.75rem] p-4 text-center w-[23rem] flex flex-col justify-between">
              <h1 className="text-3xl my-5 text-[#eaeaea]">UI/UX Design</h1>
              <p className="text-base mb-5 text-[#a3a3a3]">
                Full custom Website/app design. I create intuitive, engaging,
                and visually stunning UI/UX designs that elevate your brand.{" "}
              </p>
              <img
                src="https://cdn.prod.website-files.com/6405fcf125150a174dce6e85/65ff07c3590d432567fc928d_figma-to-webflow-matteo-p-1600.png"
                alt=""
              />

              <a
                className=" text-base text-[#d6d6d6] py-2 px-5 mt-5 rounded-[.75rem] border-[1px] border-[#525252] w-full hover:bg-[#292929] transition-all"
                href="mailto:pallavisalian18@gmail.com"
              >
                {" "}
                GET IN TOUCH
              </a>
            </div>
            <div className="border-[1px] border-[#292929] rounded-[.75rem] p-4 text-center w-[23rem] flex flex-col justify-between">
              <h1 className="text-3xl my-5 text-[#eaeaea]">Product Design</h1>
              <p className="text-base mb-5 text-[#a3a3a3]">
                I craft digital products that solve real problems and look
                great. My process focuses on brainstorming ideas, understanding
                users, and creating designs that work beautifully.
              </p>
              <img
                src="https://cdn.prod.website-files.com/6405fcf125150a174dce6e85/65ff07c3590d432567fc928d_figma-to-webflow-matteo-p-1600.png"
                alt=""
              />

              <a
                className=" text-base text-[#d6d6d6] py-2 px-5 mt-5 rounded-[.75rem] border-[1px] border-[#525252] w-full hover:bg-[#292929] transition-all"
                href="mailto:pallavisalian18@gmail.com"
              >
                {" "}
                GET IN TOUCH
              </a>
            </div>
            <div className="border-[1px] border-[#292929] rounded-[.75rem] p-4 text-center w-[23rem] flex flex-col justify-between">
              <h1 className="text-3xl my-5 text-[#eaeaea]">Graphic Design</h1>
              <p className="text-base mb-5 text-[#a3a3a3]">
                I create eye-catching visuals for brands, social media, and
                marketing. My designs help you share your story and connect with
                your audience effectively.
              </p>
              <img
                src="https://cdn.prod.website-files.com/6405fcf125150a174dce6e85/65ff07c3590d432567fc928d_figma-to-webflow-matteo-p-1600.png"
                alt=""
              />

              <a
                className=" text-base text-[#d6d6d6] py-2 px-5 mt-5 rounded-[.75rem] border-[1px] border-[#525252] w-full hover:bg-[#292929] transition-all"
                href="mailto:pallavisalian18@gmail.com"
              >
                {" "}
                GET IN TOUCH
              </a>
            </div>
          </div>
        </section>

        <RecentWork />

        <section className="py-35 px-5">
          <h1 className="text-center text-5xl font-[Montserrat] mb-20">
            EXPRESION
          </h1>

          <div className="my-5 flex flex-col items-center w-full gap-10">
            <div className="flex flex-row justify-between items-center w-4xl">
              <h2 className="text-4xl w-lg self-start">Solstice Solutions</h2>
              <div className="w-sm">
                <h3 className="text-2xl">Junior Data Analyst</h3>
                <p className="text-sm text-[#d5d4d9]">
                  November 2024 - Current
                </p>
                <p className="text-sm text-[#d5d4d9]">Connecticut, USA</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center w-4xl">
              <h2 className="text-4xl w-lg self-start">Waya Financial</h2>
              <div className="w-sm">
                <h3 className="text-2xl">Graphic & UI UX Designer</h3>
                <p className="text-sm text-[#d5d4d9]">
                  January 2023 - September 2023
                </p>
                <p className="text-sm text-[#d5d4d9]">Mumbai, India</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center w-4xl">
              <h2 className="text-4xl w-lg self-start">CollegeTips</h2>
              <div className="w-sm">
                <h3 className="text-2xl">Graphic Designer</h3>
                <p className="text-sm text-[#d5d4d9]">
                  July 2022 - August 2022
                </p>
                <p className="text-sm text-[#d5d4d9]">Mumbai, India</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center w-full max-w-4xl">
              <h2 className="text-4xl w-lg self-start">Tellybest</h2>
              <div className="w-sm">
                <h3 className="text-2xl">Content Writer and Proofreader</h3>
                <p className="text-sm text-[#d5d4d9]">
                  August 2021 - July 2022
                </p>
                <p className="text-sm text-[#d5d4d9]">Mumbai, India</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-30 p-5 bg-[#0f0f0ffb]">
          <h1 className="text-center text-5xl font-[Montserrat] mb-20 uppercase">
            Testimonials
          </h1>

          <AvatarGroup />

          {/* <div className="flex flex-row justify-evenly items-center mb-10">
            <div className="border-[1px] border-[#292929] rounded-[.75rem] p-4 w-[40%]">
              <div className="flex flex-row justify-start items-start gap-2 mb-5 ">
                <img
                  className="rounded-[.50rem]"
                  width={50}
                  height={50}
                  src="https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?ga=GA1.1.2114907676.1736685557&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h5 className="text-lg">Umesh Poojary</h5>
                  <h6 className="text-[#cbcbcb]">
                    Founder, Shobhana Electronics
                  </h6>
                </div>
              </div>

              <p className="text-[#d5d4d9] tracking-wide leading-6">
                &quot;Working with Pallavi Salian was a game-changer for our
                brand. They took the time to understand our vision and
                transformed it into a sleek, user-friendly design. The final
                product not only exceeded our expectations but also boosted user
                engagement by 40%.&quot;
              </p>
            </div>

            <div className="border-[1px] border-[#292929] rounded-[.75rem] p-4 w-[40%]">
              <div className="flex flex-row justify-start items-start gap-2 mb-5 ">
                <img
                  className="rounded-[.50rem]"
                  width={50}
                  height={50}
                  src="https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?ga=GA1.1.2114907676.1736685557&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h5 className="text-lg">Umesh Poojary</h5>
                  <h6 className="text-[#cbcbcb]">
                    Founder, Shobhana Electronics
                  </h6>
                </div>
              </div>

              <p className="text-[#d5d4d9] tracking-wide leading-6">
                &quot;Working with Pallavi Salian was a game-changer for our
                brand. They took the time to understand our vision and
                transformed it into a sleek, user-friendly design. The final
                product not only exceeded our expectations but also boosted user
                engagement by 40%.&quot;
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-evenly items-center">
            <div className="border-[1px] border-[#292929] rounded-[.75rem] p-4 w-[40%]">
              <div className="flex flex-row justify-start items-start gap-2 mb-5 ">
                <img
                  className="rounded-[.50rem]"
                  width={50}
                  height={50}
                  src="https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?ga=GA1.1.2114907676.1736685557&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h5 className="text-lg">Umesh Poojary</h5>
                  <h6 className="text-[#cbcbcb]">
                    Founder, Shobhana Electronics
                  </h6>
                </div>
              </div>

              <p className="text-[#d5d4d9] tracking-wide leading-6">
                &quot;Working with Pallavi Salian was a game-changer for our
                brand. They took the time to understand our vision and
                transformed it into a sleek, user-friendly design. The final
                product not only exceeded our expectations but also boosted user
                engagement by 40%.&quot;
              </p>
            </div>

            <div className="border-[1px] border-[#292929] rounded-[.75rem] p-4 w-[40%]">
              <div className="flex flex-row justify-start items-start gap-2 mb-5 ">
                <img
                  className="rounded-[.50rem]"
                  width={50}
                  height={50}
                  src="https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?ga=GA1.1.2114907676.1736685557&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h5 className="text-lg">Umesh Poojary</h5>
                  <h6 className="text-[#cbcbcb]">
                    Founder, Shobhana Electronics
                  </h6>
                </div>
              </div>

              <p className="text-[#d5d4d9] tracking-wide leading-6">
                &quot;Working with Pallavi Salian was a game-changer for our
                brand. They took the time to understand our vision and
                transformed it into a sleek, user-friendly design. The final
                product not only exceeded our expectations but also boosted user
                engagement by 40%.&quot;
              </p>
            </div>
          </div> */}
        </section>

        <section className="px-5">
          <hr className="mb-5" />
          <div className="py-10 flex flex-row justify-between items-center">
            <div>
              <h1 className=" text-4xl font-[Montserrat] text-[#d6d6d6] mb-15 uppercase">
                GET IN TOUCH
              </h1>
              <p>
                Have a project or idea? Let’s connect and create <br />{" "}
                something amazing together. Reach out—I’d love <br /> to hear
                from you!
              </p>
            </div>

            <div className="mr-10 self-end">
              <MotionLink
                href="mailto:pallavisalian18@gmail.com"
                custom={1}
                text="pallavisalian18@gmail.com"
              />
              <span className="px-5"></span>
              <MotionLink
                href="https://www.linkedin.com/in/pallavi-salian-uiux-designer/"
                custom={1}
                text="Linkedin"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
