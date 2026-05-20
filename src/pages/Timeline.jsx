import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const timelineData = [
  {
    year: "2020",
    month: "APR",
    title: "Started Journey",
    description: "Started learning frontend development.",
    side: "top",
  },
  {
    year: "2021",
    month: "OCT",
    title: "React Learning",
    description: "Built multiple ReactJS projects.",
    side: "bottom",
  },
  {
    year: "2022",
    month: "FEB",
    title: "Internship",
    description: "Worked as Frontend Developer Intern.",
    side: "top",
  },
  {
    year: "2023",
    month: "NOV",
    title: "Freelancing",
    description: "Started freelance development work.",
    side: "bottom",
  },
  {
    year: "2024",
    month: "MAY",
    title: "Big Achievement",
    description: "Created advanced animated apps.",
    side: "top",
  },



  


  
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const refs = useRef([]);

  // MOBILE ACTIVE CARD ON SCROLL
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#f8fbff] to-[#eef4ff] py-20 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-28">
          <p className="text-blue-600 font-semibold tracking-[4px] uppercase mb-4">
            My Career Path
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Interactive Journey Timeline
          </h1>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Hover over each milestone to explore the journey with smooth
            airplane animation and interactive cards.
          </p>
        </div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden lg:block relative min-h-[850px]">

          {/* MAIN LINE */}
          <div className="absolute top-[340px] left-0 w-full h-[6px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600" />

          {/* AIRPLANE */}
          <motion.div
            className="absolute top-[285px] z-50"
            animate={{
              left: `calc(${activeIndex * 20}% + 30px)`,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 14,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="relative"
            >

              {/* TRAIL */}
              <div className="absolute top-7 -left-28 w-28 border-t-2 border-dashed border-gray-400" />

              {/* PLANE */}
              <div className="w-16 h-16 rounded-full bg-black shadow-2xl flex items-center justify-center">
                <Plane className="text-white w-8 h-8 rotate-45" />
              </div>
            </motion.div>
          </motion.div>

          {/* ITEMS */}
          <div className="grid grid-cols-5 relative">

            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setActiveIndex(index)}
              >

                {/* ================= TOP SECTION ================= */}
                {item.side === "top" ? (
                  <div className="h-[320px] flex flex-col items-center justify-end">

                    {/* CARD */}
                    <div className="h-[220px] flex items-end">
                      {activeIndex === index && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -40,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="w-[250px] bg-white rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 text-center"
                        >
                          <span className="text-xs tracking-[3px] text-blue-500 font-bold">
                            {item.month}
                          </span>

                          <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {item.year}
                          </h2>

                          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">
                            {item.title}
                          </h3>

                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* CONNECTOR */}
                    <div className="w-[3px] h-24 bg-gradient-to-b from-blue-500 to-transparent" />
                  </div>
                ) : (
                  <div className="h-[320px]" />
                )}

                {/* ================= DOT ================= */}
                <motion.div
                  whileHover={{
                    scale: 1.15,
                  }}
                  animate={{
                    backgroundColor:
                      activeIndex === index ? "#000" : "#2563eb",
                  }}
                  className="absolute top-[300px] z-30 w-20 h-20 rounded-full border-[8px] border-white shadow-2xl flex items-center justify-center cursor-pointer"
                >

                  {/* PULSE */}
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-blue-400"
                      animate={{
                        scale: [1, 1.6],
                        opacity: [0.8, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                    />
                  )}

                  <div className="w-5 h-5 rounded-full bg-white" />
                </motion.div>

                {/* ================= BOTTOM SECTION ================= */}
                {item.side === "bottom" ? (
                  <div className="mt-24 flex flex-col items-center">

                    {/* CONNECTOR */}
                    <div className="w-[3px] h-24 bg-gradient-to-t from-blue-500 to-transparent" />

                    {/* CARD */}
                    <div className="h-[220px] mt-2">
                      {activeIndex === index && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="w-[250px] bg-white rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 text-center"
                        >
                          <span className="text-xs tracking-[3px] text-blue-500 font-bold">
                            {item.month}
                          </span>

                          <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {item.year}
                          </h2>

                          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">
                            {item.title}
                          </h3>

                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="h-[320px]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="lg:hidden relative pl-8">

          {/* LINE */}
          <div className="absolute left-[28px] top-0 w-[4px] h-full rounded-full bg-gradient-to-b from-cyan-400 to-blue-700" />

          <div className="space-y-14">

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                ref={(el) => (refs.current[index] = el)}
                data-index={index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="relative flex items-start gap-5"
              >

                {/* DOT */}
                <div
                  className={`relative z-10 min-w-[60px] h-[60px] rounded-full border-4 border-white shadow-xl flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-black scale-110"
                      : "bg-blue-600"
                  }`}
                >
                  {activeIndex === index ? (
                    <Plane className="text-white w-6 h-6 rotate-45" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-white" />
                  )}
                </div>

                {/* CARD */}
                <motion.div
                  animate={{
                    scale: activeIndex === index ? 1 : 0.96,
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}
                  className="bg-white rounded-2xl p-5 shadow-lg w-full border border-gray-100"
                >
                  <p className="text-xs tracking-[3px] text-blue-500 font-bold">
                    {item.month}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mt-1">
                    {item.year}
                  </h2>

                  <h3 className="text-lg font-semibold text-gray-700 mt-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;