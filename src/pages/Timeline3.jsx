import React, { useState } from "react";


const Timeline3 = () => {
    const [showContact, setShowContact] = useState(true);
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-7xl">
        {/* BACKGROUND IMAGE */}
        <img
          src="/assets/gstory (1).jpg"
          alt="Office"
          className="w-full h-auto rounded-3xl"
        />

        {/* CONTACT US POINTER WITH RINGING PHONE */}
        <div className="absolute left-[24%] top-[40%] group cursor-pointer">
       {/* PHONE IMAGE */}
   
 <img
  src={showContact ? "/assets/phone1.png" : "/assets/phone200.gif"}
  alt="Telephone"
  className="w-20 ringing-phone top-[500px] z-20"
  onClick={() => setShowContact(!showContact)}
/>
         

          {/* Ping animation */}
          {/* <div className="absolute w-8 h-8 bg-red-500 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-8 h-8 bg-red-600 rounded-full border-4 border-white z-10"></div> */}

          {/* Label */}
          <div className="absolute -top-9 -left-10 bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl animate-bounce whitespace-nowrap">
            Contact Now
          </div>

          {/* Contact Modal */}
          {/* <div className="opacity-0 group-hover:opacity-100 transition duration-500 absolute top-20 -left-10 w-80 bg-white rounded-3xl shadow-2xl p-6 z-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Contact Us</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-4 rounded-xl border border-gray-300 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-4 rounded-xl border border-gray-300 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full mb-4 p-4 rounded-xl border border-gray-300 outline-none"
            ></textarea>
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold transition duration-300">
              Send Message
            </button>
          </div> */}
        </div>

{/* ABOUT US POINTER */}
        <div className="absolute right-[10%] top-[50%] group cursor-pointer">
          <div className="absolute w-8 h-8 bg-cyan-400 rounded-full animate-pulse opacity-75"></div>
          <div className="relative w-8 h-8 bg-cyan-500 rounded-full border-4 border-white z-10"></div>
          <div className="absolute -top-16 -left-8 bg-cyan-600 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl animate-bounce whitespace-nowrap">
            About Us
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition duration-500 absolute top-14 -left-40 w-96 bg-black/80 backdrop-blur-xl border border-cyan-400 rounded-3xl shadow-2xl p-8 z-50">
            <h2 className="text-4xl font-bold text-cyan-400 mb-5">About G Tech</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              We build powerful digital experiences with SEO, automation, WhatsApp marketing,
              branding, and AI-powered growth strategies.
            </p>
          </div>
        </div>


                {/* TEAM POINTER */}
        <div className="absolute left-[65%] top-[48%] group cursor-pointer">
          <div className="absolute w-8 h-8 bg-yellow-400 rounded-full animate-pulse opacity-75"></div>
          <div className="relative w-8 h-8 bg-yellow-500 rounded-full border-4 border-white z-10"></div>
          <div className="absolute -top-16 -left-6 bg-yellow-500 text-black px-6 py-3 rounded-2xl font-bold shadow-2xl animate-bounce whitespace-nowrap">
            Our Team
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition duration-500 absolute top-14 -left-44 w-[420px] bg-black/80 backdrop-blur-xl border border-yellow-400 rounded-3xl shadow-2xl p-8 z-50">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">Meet Our Team</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Creative designers, developers, marketers, and AI experts working together
              to build powerful digital experiences.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Timeline3;