import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
 
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#020617] overflow-hidden border-t border-white/10">

        {/* Background Glow */}
        <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-10">

          {/* TOP CTA */}
          <div className="mb-20 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>
              <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm uppercase tracking-[4px]">
                Let's Work Together
              </span>

              <h2 className="text-4xl md:text-6xl font-black text-white mt-8 leading-tight">
                Ready To Grow
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h2>
            </div>

            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-105 transition duration-300 flex items-center gap-3">
              Get Started
              <ArrowUpRight
                size={22}
                className="group-hover:rotate-45 transition duration-300"
              />
            </button>
          </div>

          {/* FOOTER GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

            {/* LOGO & ABOUT */}
            <div>

         

              <p className="text-gray-400 leading-relaxed text-lg">
                Modern digital marketing agency helping businesses scale online
                with premium web solutions and high-converting strategies.
              </p>

              {/* SOCIAL */}
              <div className="flex items-center gap-4 mt-8">



                <a
                  href="/"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition duration-300"
                >
                  <FaFacebookF  size={20} />
                </a>

                <a
                  href="/"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition duration-300"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="/"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition duration-300"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href="/"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition duration-300"
                >
                  <FaXTwitter size={20} />
                </a>

              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Quick Links
              </h3>

              <ul className="space-y-5">

                {["Home", "Services", "About", "Projects", "Contact"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-cyan-400 transition duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 scale-0 group-hover:scale-100 transition duration-300"></span>

                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Services
              </h3>

              <ul className="space-y-5 text-gray-400">

                {[
                  "SEO Marketing",
                  "Web Development",
                  "Google Ads",
                  "Social Media Marketing",
                  "WhatsApp API",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="hover:text-cyan-400 transition duration-300 cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Info
              </h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
                      Location
                    </h4>

                    <p className="text-gray-400 mt-1">
                      Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
                      Email
                    </h4>

                    <p className="text-gray-400 mt-1">
                      info@gtech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
                      Phone
                    </h4>

                    <p className="text-gray-400 mt-1">
                      +91 9876543210
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-gray-500 text-center md:text-left">
              © 2026 G Tech Web Marketing. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-gray-500">

              <a
                href="/"
                className="hover:text-cyan-400 transition duration-300"
              >
                Privacy Policy
              </a>

              <a
                href="/"
                className="hover:text-cyan-400 transition duration-300"
              >
                Terms & Conditions
              </a>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;