import React from 'react'
import { motion,animate,
    useInView } from "framer-motion";
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';



const About = () => {
    function Counter({ value, suffix="" }) {
        const ref=useRef(null);
    
        const isInView=useInView(ref, {
            once: true,
        });
    
        const [displayValue, setDisplayValue]=useState(0);
    
        useEffect(() => {
            if (!isInView) return;
    
            const controls=animate(0, value, {
                duration: 2,
                ease: "easeOut",
    
                onUpdate(latest) {
                    setDisplayValue(Math.floor(latest));
                },
            });
    
            return () => controls.stop();
        }, [isInView, value]);
    
        return (
            <span ref={ref}>
                {displayValue}
                {suffix}
            </span>
        );
    }

  return (
    <>
    <section className="relative py-28 bg-[#050816] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
        alt="About"
        className="relative rounded-[40px] border border-white/10 shadow-2xl"
      />
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm uppercase tracking-widest">
        About G Tech
      </span>

      <h2 className="text-5xl font-black mt-8 leading-tight">

        <span className='block text-white'>We Create Powerful</span>
        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Digital Experiences
        </span>
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed mt-8">
        We help brands grow online with modern web solutions, SEO,
        WhatsApp API integration, paid advertising and strategic marketing.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <h3 className="text-4xl font-bold text-cyan-400">
                                    <Counter value={15} suffix="+" />
                                </h3>
        
          <p className="text-gray-400 mt-2">Years Experience</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <h3 className="text-4xl font-bold text-cyan-400">
                                    <Counter value={1000} suffix="+" />
                                </h3>
     
          <p className="text-gray-400 mt-2">Happy Clients</p>
        </div>
      </div>
    </motion.div>
  </div>
</section>
     
    </>
  )
}

export default About