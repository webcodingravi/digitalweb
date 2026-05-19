import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Website Development",
    subtitle: "Modern UI/UX Experience",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "02",
    title: "SEO Marketing",
    subtitle: "Organic Growth Strategy",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "03",
    title: "Brand Campaign",
    subtitle: "Creative Digital Branding",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
];

const ProjectSection = () => {
  return (
    <section className="relative bg-[#050816] py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full"
        />

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm uppercase tracking-[4px]">
            Our Work
          </span>

          <h2 className="text-5xl md:text-7xl font-black text-white mt-8 leading-tight pb-4">
            Creative Digital
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>

        </motion.div>

        {/* STACK SCROLL EFFECT */}
        <div className="relative">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="sticky top-24 mb-20"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: false }}
            >

              {/* CARD */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(59,130,246,0.15)]"
              >

                {/* IMAGE */}
                <div className="relative h-[750px] overflow-hidden">

                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/40 to-transparent"></div>

                  {/* Big Number */}
                  <div className="absolute top-10 right-10 text-[120px] font-black text-white/10 leading-none">
                    {project.id}
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">

                    <div className="max-w-4xl">

                      {/* Tag */}
                      <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-black text-sm tracking-[3px]">
                        Creative Solution
                      </div>

                      {/* TITLE */}
                      <h3 className="text-5xl md:text-7xl font-black text-white mt-8 leading-tight">
                        {project.title}

                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {project.subtitle}
                        </span>
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-8 max-w-3xl">
                        We create premium digital experiences with modern UI,
                        smooth animations and high-performance development.
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-5 mt-12">

                        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 transition duration-300">
                          View Project
                        </button>

                        <button className="border border-white/10 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white/10 transition duration-300">
                          Live Preview
                        </button>

                      </div>

                    </div>
                  </div>

                </div>

                {/* Bottom Glow */}
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;