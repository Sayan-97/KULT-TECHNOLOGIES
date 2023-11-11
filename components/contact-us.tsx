import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import ContactUsForm from "./forms/contact-form";

export default function ContactUs() {
  const contacts = [
    { icon: FiMail, content: "info@kult.games" },
    { icon: IoMdCall, content: "+971521129279" },
    { icon: IoLocationSharp, content: "Dubai, Trade Center" },
  ];

  return (
    <section className="py-20">
      <div className="container grid grid-cols-2 items-center">
        <div className="space-y-12">
          <h2 className="text-5xl font-semibold">Contact Us</h2>
          <ul className="text-xl space-y-6">
            {contacts.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="border-2 border-secondary rounded-full p-2">
                  <item.icon />
                </div>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <ContactUsForm />
      </div>
    </section>
  );
}
