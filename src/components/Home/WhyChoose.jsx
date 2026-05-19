import React from 'react'
import { motion } from "framer-motion";

const WhyChoose = () => {
  return (
    <>
     <section className="py-28 bg-[#030712] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

 <div className="text-center mb-20">
  
  <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm uppercase tracking-[4px]">
    Why Choose Us
  </span>

  <h2 className="text-5xl md:text-6xl font-black text-white mt-8 leading-tight pb-3">
    Why Brands Trust
    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
      G Tech Solutions
    </span>
  </h2>

  <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
    We combine creativity, technology and marketing expertise to build
    high-performing digital experiences that help businesses grow faster.
  </p>

</div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {["Fast Delivery", "Premium Design", "SEO Optimized", "24/7 Support"].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -12 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl text-center"
        >
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-xl mb-6">
            ✨
          </div>

          <h3 className="text-2xl font-bold text-white">
            {item}
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Delivering high-quality modern digital solutions with latest technologies.
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </>
  )
}

export default WhyChoose