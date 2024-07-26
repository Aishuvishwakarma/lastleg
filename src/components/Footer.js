import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#251754] text-white py-8 w-full">
      <div className="container mx-auto flex flex-wrap items-start justify-between px-4 py-10 lg:px-8">
        {/* Community Section */}
        <ul className="flex flex-col justify-start items-start mb-8 lg:mb-0 px-4 lg:px-8">
          <li className="font-light text-white-400 mb-4">Community</li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Classic Bulbs
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Filament Lamps
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            360° Illumination
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Golden Filament
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Reflector Lamps
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            LED Tubes
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Special Applications
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Decorative
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Dim-to-Warm
          </li>
        </ul>

        {/* Community Section */}
        <ul className="flex flex-col justify-start items-start mb-8 lg:mb-0 px-4 lg:px-8">
          <li className="font-light text-white-400 mb-4">Community</li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Classic Bulbs
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Filament Lamps
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            360° Illumination
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Golden Filament
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Reflector Lamps
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            LED Tubes
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Special Applications
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Decorative
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Dim-to-Warm
          </li>
        </ul>

        {/* Upcoming Races Section */}
        <ul className="flex flex-col justify-start items-start mb-8 lg:mb-0 px-4 lg:px-8">
          <li className="font-light text-white-400 mb-4">Upcoming Races</li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Bulkhead
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Downlight
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Damp Proof Batten
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Indoor Batten
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            High Bay
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Panel
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Track Lighting
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Under Cabinet
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Wall Lamp
          </li>
        </ul>

        {/* Popular Races Section */}
        <ul className="flex flex-col justify-start items-start mb-8 lg:mb-0 px-4 lg:px-8">
          <li className="font-light text-white-400 mb-4">Popular Races</li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Exit Box
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Exit Sign
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Emergency Module
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Recessed Downlight
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Slim Bulkhead
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Surface Mounted
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Twinspot
          </li>
        </ul>

        {/* LastLeg Section */}
        <ul className="flex flex-col justify-start items-start mb-8 lg:mb-0 px-4 lg:px-8">
          <li className="font-light text-white-400 mb-4">LastLeg</li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            The Stories
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Awards
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Quality
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Downloads
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Media
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Contact Us
          </li>
          <li className="font-light hover:text-yellow-400 cursor-pointer">
            Where to buy
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:px-8 py-6 border-t border-gray-700">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-4xl font-bold">LastLeg</h1>
          <div className="mt-4 flex justify-center lg:justify-start space-x-2">
            <a
              href="#"
              className="text-white w-8 h-8 lg:w-[30px] lg:h-[30px] rounded-full flex items-center justify-center p-2 bg-[#402c80] hover:bg-sky-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white w-8 h-8 lg:w-[30px] lg:h-[30px] rounded-full flex items-center justify-center p-2 bg-[#402c80] hover:bg-sky-400"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="#"
              className="text-white w-8 h-8 lg:w-[30px] lg:h-[30px] rounded-full flex items-center justify-center p-2 bg-[#402c80] hover:bg-sky-400"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white w-8 h-8 lg:w-[30px] lg:h-[30px] rounded-full flex items-center justify-center p-2 bg-[#402c80] hover:bg-sky-400"
            >
              <CiYoutube />
            </a>
          </div>
        </div>
        <div className="text-sm text-center lg:text-left">
          <p className="font-light mb-1">
            Chances are you're about to lose. For free and confidential support
            call 1800 858 858 or visit gamblinghelponline.org.au.
          </p>
          <p className="font-light mb-1">
            LastLeg® Sports is Licensed and regulated by the Northern Territory
            Racing Commission. View our Rules, Terms and Conditions.
          </p>
          <p className="font-light mb-1">
            For South Australian residents, LastLeg® is fully compliant with the
            South Australian Gambling Codes of Practice.
          </p>
          <p className="font-light mb-1">
            If you need any further assistance, please contact
            support@LastLeg.com.au.
          </p>
          <p className="font-light mb-1">
            © LastLeg®Sports Interactive Pty Ltd. 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
