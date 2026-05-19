import React from "react";


import HeroSection from "../components/Home/HeroSection";
import ServiceSection from "../components/Home/ServiceSection";
import Header from "../components/Header";
import About from "../components/Home/About";
import WhyChoose from "../components/Home/WhyChoose";
import ProjectSection from "../components/Home/ProjectSection";
import Footer from "../components/Footer";
import Story from "../components/Home/Story";

export default function Home() {
    



  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Header */}
       <Header/>

   <HeroSection/>

   {/* SERVICES SECTION */}
   <ServiceSection/>

 {/* About Section */}
   <About/>

   {/* <WhyChoose/> */} 
   <WhyChoose/>

      {/* Project section */}
   <ProjectSection/>

   <Story/>

     

     

      {/* CTA */}
      {/* <section className="py-24 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center bg-white rounded-[40px] shadow-xl p-14">
          <h2 className="text-4xl font-bold leading-tight">
            Ready To Grow Your Business?
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto">
            Let’s build a strong online presence together with modern digital
            marketing solutions.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg">
            Contact Us Today
          </button>
        </div>
      </section> */}

      {/* Footer */}
      <Footer/>
    </div>
  );
}
