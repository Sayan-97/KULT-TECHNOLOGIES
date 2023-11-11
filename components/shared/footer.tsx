import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const services = [
    "Web 3 Game Development",
    "Blockchain Services",
    "AI Solutions",
    "Branding & Designing",
    "Crypto Marketing",
  ];

  const usefulLinks = [
    "Contact Us",
    "About Us",
    "Portfolio",
    "Terms af Service",
    "Privacy Policy",
  ];

  const contacts = [
    { icon: FiMail, content: "info@kult.games" },
    { icon: IoMdCall, content: "+971521129279" },
    { icon: IoLocationSharp, content: "Dubai, Trade Center" },
  ];

  return (
    <footer>
      <div className="container">
        <div className="py-8 flex justify-between">
          <div className="w-1/4 space-y-8">
            <Image src="/svgs/kult.svg" alt="img" width={121} height={36} />
            <p>
              At Kult Technologies, we believe in a systematic and collaborative
              approach to bring your ideas to fruition. Our working process is
              streamlined into three seamless phases, ensuring transparency,
              creativity, and innovation at every step of your project.
            </p>
          </div>
          <div className="space-y-8 mt-2.5">
            <h6 className="text-lg font-bold">Services</h6>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-8 mt-2.5">
            <h6 className="text-lg font-bold">Useful Links</h6>
            <ul className="space-y-3">
              {usefulLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-8 mt-2.5">
            <h6 className="text-lg font-bold">Get In Touch</h6>
            <ul className="space-y-3">
              {contacts.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <item.icon />
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border border-secondary" />
        <div className="py-8 flex items-center justify-between">
          <p>All Rights Reserved © 2023, Kult Technologies</p>
          <div className="flex gap-4 text-xl">
            <BiLogoFacebookCircle />
            <BiLogoInstagram />
            <BiLogoLinkedinSquare />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
}
