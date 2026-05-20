import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Code2,
  Briefcase,
  Laptop,
  Trophy,
} from "lucide-react";

const timelineData = [
  {
    id: "01",
    year: "2020",
    title: "Started Journey",
    description: "Started learning frontend development.",
    icon: <Rocket className="w-6 h-6" />,
    pinTop: "80%",
    pinLeft: "17%",
    cardPosition: "right",
  },

  {
    id: "02",
    year: "2021",
    title: "React Learning",
    description: "Built multiple ReactJS projects.",
    icon: <Code2 className="w-6 h-6" />,
    pinTop: "60%",
    pinLeft: "30%",
    cardPosition: "left",
  },

  {
    id: "03",
    year: "2022",
    title: "Internship",
    description: "Worked as Frontend Developer Intern.",
    icon: <Briefcase className="w-6 h-6" />,
    pinTop: "50%",
    pinLeft: "55%",
    cardPosition: "left",
  },

  {
    id: "04",
    year: "2023",
    title: "Freelancing",
    description: "Started freelance development work.",
    icon: <Laptop className="w-6 h-6" />,
    pinTop: "40%",
    pinLeft: "75%",
    cardPosition: "left",
  },

  {
    id: "05",
    year: "2024",
    title: "Big Achievement",
    description: "Created advanced animated apps.",
    icon: <Trophy className="w-6 h-6" />,
    pinTop: "26%",
    pinLeft: "50%",
    cardPosition: "right",
  },
];

const Timeline2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full min-h-screen bg-[#050505] overflow-hidden py-24 px-4 relative">

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-250px] left-[-250px] w-[500px] h-[500px] bg-yellow-500/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-[-250px] right-[-250px] w-[500px] h-[500px] bg-orange-500/10 blur-[180px] rounded-full" />

        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-yellow-300/5 blur-[150px] rounded-full" />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-20">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-5xl
              md:text-7xl
              font-black
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-yellow-300
              via-yellow-500
              to-orange-500
              drop-shadow-[0_0_30px_rgba(255,196,0,0.4)]
            "
          >
            My Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mt-6 text-lg md:text-xl"
          >
            Timeline of Growth & Achievements
          </motion.p>
        </div>

        {/* ================= MAIN ROAD BOX ================= */}
        <div
          className="
            relative
            w-full
            rounded-[40px]
            border
            border-yellow-500/10
            bg-gradient-to-b
            from-[#0d0d0d]
            to-[#050505]
            p-4
            md:p-10
            overflow-hidden
            shadow-[0_0_60px_rgba(255,196,0,0.08)]
          "
        >

          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,196,0,0.06),transparent_70%)]" />

          {/* ROAD IMAGE */}
          <img
            src="/assets/road-vector.png"
            alt="road"
            className="
              w-full
              object-contain
              relative
              z-10
              drop-shadow-[0_0_40px_rgba(255,196,0,0.15)]
            "
          />

          {/* ================= ANIMATED BOY ================= */}
          {/* <motion.img
            src=""
            alt="boy"
            animate={{
              top: timelineData[activeIndex].pinTop,
              left: timelineData[activeIndex].pinLeft,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            className="
              absolute
              w-[80px]
              md:w-[120px]
              z-40
              -translate-x-1/2
              -translate-y-1/2
              pointer-events-none
              drop-shadow-[0_0_25px_rgba(255,196,0,0.5)]
            "
          /> */}

          {/* ================= POINTERS ================= */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="group absolute z-30"
              style={{
                top: item.pinTop,
                left: item.pinLeft,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >

              {/* POINTER */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="relative cursor-pointer"
              >

                {/* GLOW */}
                <div className="absolute left-1/2 top-[75px] -translate-x-1/2 w-24 h-10 bg-yellow-400 blur-2xl opacity-70" />

                {/* PULSE */}
                <motion.div
                  animate={{
                    scale: [1, 1.4],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                  className="absolute inset-0 rounded-full bg-red-500"
                />

                {/* MAIN POINTER */}
                <div
                  className={`
                    relative
                    w-20
                    h-20
                    rounded-full
                    border-[8px]
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_30px_rgba(255,0,0,0.7)]
                    transition-all
                    duration-300

                    ${
                      activeIndex === index
                        ? "bg-yellow-400 border-yellow-300 scale-110"
                        : "bg-white border-red-500"
                    }
                  `}
                >
                  <span className="text-3xl font-black text-black">
                    {item.id}
                  </span>

                  {/* TRIANGLE */}
                  <div
                    className={`
                      absolute
                      -bottom-4
                      left-1/2
                      -translate-x-1/2
                      w-0
                      h-0
                      border-l-[16px]
                      border-r-[16px]
                      border-t-[22px]
                      border-l-transparent
                      border-r-transparent

                      ${
                        activeIndex === index
                          ? "border-t-yellow-400"
                          : "border-t-red-500"
                      }
                    `}
                  />
                </div>
              </motion.div>

              {/* ================= CARD ================= */}
              <div
                className={`
                  absolute
                  w-[290px]
                  bg-[#0d0d0d]/95
                  border
                  border-yellow-500/40
                  rounded-[28px]
                  p-6
                  backdrop-blur-xl
                  shadow-[0_0_30px_rgba(255,196,0,0.15)]

                  opacity-0
                  invisible
                  scale-90

                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:scale-100

                  transition-all
                  duration-300
                  z-50

                  ${
                    item.cardPosition === "left"
                      ? "right-[120px] top-1/2 -translate-y-1/2"
                      : ""
                  }

                  ${
                    item.cardPosition === "right"
                      ? "left-[120px] top-1/2 -translate-y-1/2"
                      : ""
                  }

                  ${
                    item.cardPosition === "top"
                      ? "bottom-[120px] left-1/2 -translate-x-1/2"
                      : ""
                  }
                `}
              >

                {/* CONNECTOR */}
                <div
                  className={`
                    absolute
                    border-dashed
                    border-yellow-400

                    ${
                      item.cardPosition === "left"
                        ? "top-1/2 -right-16 w-16 border-t-2"
                        : ""
                    }

                    ${
                      item.cardPosition === "right"
                        ? "top-1/2 -left-16 w-16 border-t-2"
                        : ""
                    }

                    ${
                      item.cardPosition === "top"
                        ? "left-1/2 -bottom-16 h-16 border-l-2"
                        : ""
                    }
                  `}
                />

                {/* YEAR */}
                <div className="flex items-center justify-between mb-5">

                  <span
                    className="
                      px-4
                      py-2
                      bg-yellow-400
                      rounded-xl
                      text-black
                      font-bold
                      text-lg
                    "
                  >
                    {item.year}
                  </span>

                  <div className="text-yellow-400">
                    {item.icon}
                  </div>
                </div>

                {/* TITLE */}
                <h2 className="text-white text-2xl font-bold mb-3">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline2;