import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "2018",
    title: "Company Started",
    desc: "We started our digital journey with creative ideas and modern business solutions.",
  },

  {
    year: "2020",
    title: "100+ Clients",
    desc: "Successfully delivered projects for startups, brands and growing businesses.",
  },

  {
    year: "2022",
    title: "Growth Expansion",
    desc: "Expanded our services with SEO, marketing automation and branding strategies.",
  },

  {
    year: "2025",
    title: "Leading Digital Agency",
    desc: "Now helping businesses scale globally with premium digital experiences.",
  },
];

const Story = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // CHARACTER MOVE
  const characterY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "88%"]
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#050816] overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Glow 1 */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full"
        />

      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm uppercase tracking-[4px]">
            Our Journey
          </span>

          <h2 className="text-5xl md:text-7xl font-black text-white mt-8 leading-tight pb-4">
            From Startup To
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Leader
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
            Every milestone reflects our passion, innovation and commitment
            to building premium digital experiences.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE WRAPPER */}
          <div className="absolute left-8 top-0 h-full w-[4px] overflow-visible">

            {/* BASE LINE */}
            <div className="absolute inset-0 bg-white/10 rounded-full"></div>

            {/* ACTIVE LINE */}
            <motion.div
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top",
              }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500 rounded-full"
            />

          
        {/* MOVING CHARACTER */}
<motion.div
  style={{
    top: characterY,
  }}
  className="absolute left-[50%] translate-x-[-50%] z-[999] w-[120px] h-[120px] flex items-center justify-center"
>

              {/* Glow */}
              <div className="absolute w-32 h-32 bg-cyan-400/30 blur-[60px] rounded-full"></div>

              {/* Ring 1 */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-28 h-28 rounded-full border border-dashed border-cyan-400/40"
              />

              {/* Ring 2 */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-40 h-40 rounded-full border border-white/10"
              />

              {/* CHARACTER */}
              <motion.img
                src="/assets/white logo (2).png"
                alt="Animated Character"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-28 h-28 md:w-32 md:h-32 object-contain pointer-events-none drop-shadow-[0_0_35px_rgba(34,211,238,0.95)]"
              />

            </motion.div>
          </div>

          {/* TIMELINE ITEMS */}
          <div className="flex flex-col gap-32 pl-28">

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="relative"
              >

                {/* DOT */}
                <div className="absolute -left-[88px] top-12 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 border-4 border-[#050816] shadow-[0_0_25px_rgba(59,130,246,0.8)] z-20"></div>

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 md:p-10 overflow-hidden"
                >

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition duration-500"></div>

                  {/* YEAR */}
                  <div className="absolute top-5 right-5 text-5xl md:text-7xl font-black text-white/10">
                    {item.year}
                  </div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full text-xs uppercase tracking-[3px]">
                    Journey Milestone
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl md:text-5xl font-black text-white mt-8 leading-tight relative z-10">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-400 text-lg leading-relaxed mt-6 relative z-10 max-w-3xl">
                    {item.desc}
                  </p>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-4 rounded-full font-semibold shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                  >
                    Explore More
                  </motion.button>

                  {/* Bottom Glow */}
                  <div className="absolute -bottom-20 right-0 w-[250px] h-[120px] bg-cyan-500/20 blur-[90px] rounded-full"></div>

                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;