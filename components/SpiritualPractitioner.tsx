"use client"
import Image from "next/image";
import spritual from "../public/spritual.png"
import content from "../public/Content.png"
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function SpiritualPractitioner() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);


  useEffect(() => {
    if (!paragraphRef.current) return;

    const paragraph = paragraphRef.current;

    // Wrap words only if not already wrapped
    if (!paragraph.querySelector(".word")) {
      const words = paragraph.textContent?.split(" ") || [];
      paragraph.innerHTML = words
        .map(word => `<span class="word">${word} </span>`)
        .join("");
    }

    // Wait for DOM to update
    requestAnimationFrame(() => {
      const wordSpans = paragraph.querySelectorAll(".word");
      gsap.fromTo(
        wordSpans,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.2,
            toggleActions: "play play reverse reverse", // lowercase
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div className=" relative h-[750px] bg-[#F2EFE9]/90 flex items-center justify-center text-black">

      <div
        className="absolute inset-0 opacity-[0.10] z-0"
        style={{
          backgroundImage: "url('/sparkles.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div
        className="absolute inset-0  bg-[#F2EFE9]/90"></div>
      <div className="flex sticky top-0 z-1 w-full max-w-[1350px] flex-none flex-col lg:flex-row justify-center items-center gap-0  py-[100px]   overflow-hidden">

        {/* Left Section */}
        <div className=" w-full h-auto lg:h-[422px] flex flex-col gap-[15px] lg:gap-[25px]  outline-nonepy-0 lg:py-0 px-5 ">
          <h2 className=" text-[32px] xl:text-[52px] font-clash-display font-medium  lg:h-[125px] tracking-[-0.01em] leading-[1.2]">
            A Spiritual Practitioner<br />at Heart
          </h2>
          <p
            ref={paragraphRef}
            className="w-full h-auto font-clash-grotesk  text-[16px] 
            tracking-[-0.02em] lg:w-[575px] lg:h-[172px] lg:text-[20px] font-medium text-[#000000]/70 leading-[1.1] "
          >
            Spirituality plays a subtle yet powerful role in his life. He begins every
            morning with meditation, grounding himself before stepping into the
            fast-paced world of markets and business, his oracuce keeps him
            centered, focused, and emotionally balanced qualities heaso instils
            in his student. This practice keeps him centered, focused, and
            emotionally balanced, qualities he also instills in his students.
          </p>

          {/* Mobile Images - Inside left section, below paragraph */}
          <div className="xl:hidden flex flex-row justify-end items-end  w-full h-[300px] relative px-5 mt-[20px]">
            {/* Left image - Temple/spiritual image */}
            <motion.div
              className="absolute   -bottom-18  md:-bottom-14 lg:-bottom-20  left-1/2 -translate-x-[140px]  w-[160px] h-[160px] lg:w-[200px] lg:h-[200px]  z-15 md:-translate-x-[130px]  lg:translate-x-[100px]"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
              }}
              viewport={{ once: true }}
            >
              <Image
                src={spritual}
                alt="Temple Image"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            {/* Right image - Family/group photo */}
            <motion.div
              className="absolute bottom-0  left-1/2 translate-x-[20px] w-[200px] h-[300px]  md:w-[180px] md:h-[280px] lg:w-[270px] lg:h-[400px] rounded-xl z-2"
              style={{ left: '100px' }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4
              }}
              viewport={{ once: true }}
            >
              <Image
                src={content}
                alt="Family Image"
                className="w-full h-full object-cover rounded-xl md:left-1/2 md:translate-x-[250px] lg:translate-x-[600px]"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Section - Desktop Image Grid (unchanged) */}
        <div className="hidden xl:flex flex-row flex-none justify-end items-end gap-[10px] w-min h-min p-0 relative overflow-visible">
          <div className="flex flex-row flex-none justify-end items-center self-stretch gap-[10px] w-min min-w-[267px] h-auto p-0 relative overflow-visible">
            <motion.div className="absolute bottom-[-25px] left-[5px] right-[-38px] h-[330px] z-2 rounded-[10px] flex-none "
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
              }}
              viewport={{ once: true }}>
              <div className="absolute inset-0 rounded-inherit">
                <Image
                  src={spritual}
                  alt="Temple Image"
                  className="block w-full h-full object-cover object-center rounded-inherit"
                  style={{ borderRadius: 'inherit' }}
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-row flex-none justify-center items-center gap-[10px] w-min h-min p-0 relative overflow-visible">
            <div className="flex flex-row flex-none justify-center items-center gap-0 w-min h-min p-0 relative overflow-visible">
              <motion.div className="flex flex-row flex-none justify-center items-center gap-[10px] w-[400px] h-[550px] p-0 relative overflow-visible z-[1]"
                initial={{ x: 400, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.4
                }}
                viewport={{ once: true }}
              >
                <div className="h-full relative rounded-2xl flex-[1_0_0] w-1px">
                  <div className="absolute inset-0">
                    <Image
                      src={content}
                      alt="Car Image"
                      fill
                      className="block w-full h-full object-cover object-top-right"
                      style={{ borderRadius: "inherit" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default SpiritualPractitioner;