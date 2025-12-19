import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Location */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase">Location</h3>
          <p className="text-gray-200">2215 John Daniel Drive</p>
          <p className="text-gray-200">Clark, MO 65243</p>
        </div>

        {/* Around the Web */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6 uppercase">
            Around the Web
          </h3>
          <div className="flex justify-center gap-3">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaGlobe />} />
          </div>
        </div>

        {/* About Freelancer */}
        <div>
          <h3 className="text-xl font-bold mb-3 uppercase">
            About Freelancer
          </h3>
          <p className="text-gray-200 ">
            Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1a252f] py-6 text-center text-sm text-gray-300">
        Copyright © Your Website 2021
      </div>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#2c3e50] transition">
      {icon}
    </div>
  );
}

