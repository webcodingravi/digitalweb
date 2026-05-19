import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#030712]"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">

          {/* Gradient Glow */}
          <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse"></div>

          <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[150px] animate-pulse"></div>

          {/* Floating Orbs */}
          <div className="absolute top-24 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-float"></div>

          <div className="absolute top-40 right-32 w-8 h-8 bg-blue-500 rounded-full animate-floatSlow"></div>

          <div className="absolute bottom-32 left-1/3 w-6 h-6 bg-cyan-300 rounded-full animate-float"></div>

          <div className="absolute bottom-20 right-20 w-10 h-10 bg-indigo-500 rounded-full animate-floatSlow"></div>

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

          {/* Waves */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

            {/* Wave 1 */}
            <svg
              className="relative block w-[200%] h-[220px] animate-waveSlow opacity-30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#06b6d4"
                fillOpacity="0.25"
                d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L0,320Z"
              ></path>
            </svg>

            {/* Wave 2 */}
            <svg
              className="absolute bottom-0 left-0 w-[200%] h-[180px] animate-waveFast opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#2563eb"
                fillOpacity="0.4"
                d="M0,256L80,245.3C160,235,320,213,480,186.7C640,160,800,128,960,144C1120,160,1280,224,1360,256L1440,288L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-32">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-cyan-300 text-sm shadow-xl">
              🚀 India’s #1 Digital Marketing Agency
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-8 text-white">
              Build Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Digital Empire
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
              We help brands dominate online with SEO, Website Development,
              WhatsApp API, Performance Marketing & next-generation digital solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold shadow-[0_0_35px_rgba(59,130,246,0.45)] hover:scale-105 transition duration-300">
                Get Started
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button className="border border-white/20 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white/10 transition duration-300">
                View Services
              </button>

            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-30 rounded-full"></div>

            {/* Main Image */}
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Digital Marketing"
                className="relative z-10 rounded-[40px] border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.35)]"
              />

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="z-50 absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl w-72"
              >
                <h3 className="text-white text-3xl font-bold">
                  300% Growth
                </h3>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  Helping businesses scale with modern performance marketing.
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* FULL WIDTH TRUSTED PARTNERS */}
          <div className="lg:col-span-2 mt-20 overflow-hidden">

            {/* <p className="text-gray-400 text-sm uppercase tracking-[5px] mb-8 text-center">
              Trusted Partners
            </p> */}

            <div className="relative overflow-hidden w-full py-8">

              {/* Left Fade */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#030712] to-transparent z-10"></div>

              {/* Right Fade */}
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#030712] to-transparent z-10"></div>

              {/* Marquee */}
              <div className="flex w-max items-center gap-24 animate-marquee">

                {/* Logos */}
                <img
                  src="/assets/company-partner/imgi_17_reliance-retail-logo.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_18_tata-logo.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_19_burger-king-logo-1999svg-1-removebg-preview.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_20_aditya-birla-group-logosvg-removebg-preview.png"
                  alt=""
                  className="h-[100px] opacity-70 invert hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_25_bluestar-removebg-preview-1.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_22_y1-10-removebg-preview-1.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

                {/* Duplicate Logos */}
                <img
                  src="/assets/company-partner/imgi_17_reliance-retail-logo.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_18_tata-logo.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_19_burger-king-logo-1999svg-1-removebg-preview.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_20_aditya-birla-group-logosvg-removebg-preview.png"
                  alt=""
                  className="h-[100px] opacity-70 invert hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_25_bluestar-removebg-preview-1.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

                <img
                  src="/assets/company-partner/imgi_22_y1-10-removebg-preview-1.png"
                  alt=""
                  className="h-[100px] opacity-70 hover:opacity-100 transition"
                />

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;