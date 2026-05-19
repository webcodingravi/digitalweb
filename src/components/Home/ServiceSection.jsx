import React from 'react'
import { motion } from "framer-motion";

import {
  ArrowRight,
  Globe,
 

} from "lucide-react";

const ServiceSection = () => {

      const services = [
    {
      title: "Digital Marketing",
      desc: "SEO, PPC, Social Media & complete brand growth solutions.",
    },
    {
      title: "WhatsApp API",
      desc: "Automate customer engagement with verified business messaging.",
    },
    {
      title: "Web Development",
      desc: "Modern responsive websites & ecommerce development.",
    },
    // {
    //   title: "Affiliate Marketing",
    //   desc: "Lead generation & performance-based campaign management.",
    // },
  ];

  return (
    <>
     <section
  id="services"
  className="relative py-28 bg-[#050816] overflow-hidden"
>
  {/* Background Effects */}
  <div className="absolute inset-0 overflow-hidden">
    
    {/* Glow */}
    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

    {/* Grid */}
    <div className="absolute "></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* Heading */}
    <div className="text-center mb-20">
      
      <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm tracking-widest uppercase">
        Our Expertise
      </span>

 <h2 className="text-5xl md:text-6xl font-black text-white mt-6 leading-tight pb-3">
  Premium Digital
  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Marketing Services
  </span>
</h2>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
        We provide cutting-edge marketing solutions designed to boost
        visibility, increase conversions, and scale your business online.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            y: -15,
            scale: 1.03,
          }}
          viewport={{ once: true }}
          className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[30px] p-8 overflow-hidden hover:border-cyan-400/40 transition duration-500"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition duration-500"></div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-[30px] border border-transparent group-hover:border-cyan-400/20 transition"></div>

          {/* Icon */}
          <div className="relative z-10 bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] mb-6 group-hover:scale-110 transition duration-300">
            <Globe className="text-white" size={30} />
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition">
            {service.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-gray-400 leading-relaxed">
            {service.desc}
          </p>

          {/* Button */}
          <button className="relative z-10 mt-8 flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all duration-300">
            Learn More
            <ArrowRight size={18} />
          </button>

          {/* Floating Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section> 
    </>
  )
}

export default ServiceSection