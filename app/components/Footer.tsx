import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex mt-16  flex-col justify-center items-center relative px-5">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
           Copyright © {new Date().getFullYear()} South Star Gutters. All rights reserved.
        </p>

        <div className="flex items-center justify-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              target="_blank"
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;