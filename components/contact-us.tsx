import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import ContactUsForm from "./forms/contact-form";
import Image from "next/image";

export default function ContactUs() {
  const contacts = [
    { icon: FiMail, content: "info@kult.games" },
    { icon: IoMdCall, content: "+971521129279" },
    { icon: IoLocationSharp, content: "Trade Center 1, Dubai, UAE" },
  ];

  return (
    <section
      id="contactus"
      className="relative grid lg:grid-cols-2 items-center max-lg:gap-12"
    >
      <div
        className="absolute top-[-18%] left-[-10%] w-[354.323px] h-[354.323px] blur-[100px] rounded-[354.323px] -z-10"
        style={{
          background: "linear-gradient(180deg, #173B80 0%, #11573E 100%)",
        }}
      ></div>
      <div className="space-y-12">
        <h2 className="text-5xl font-semibold">Contact Us</h2>
        <ul className="text-xl space-y-6">
          {contacts.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="border-2 border-secondary rounded-full p-2">
                <item.icon />
              </div>
              <div className="flex items-center gap-3">
                <p>{item.content}</p>
                {index === 2 && (
                  <Image src="/imgs/UAE.png" alt="img" width={20} height={20} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ContactUsForm />
    </section>
  );
}
