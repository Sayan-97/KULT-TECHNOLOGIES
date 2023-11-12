import Marquee from "react-fast-marquee";
import Image from "next/image";
import { blockchains } from "@/constants";

export default function Blockchains() {
  return (
    <div className="space-y-10 text-center">
      <h6 className="text-secondary text-lg font-medium capitalize">
        Blockchains that we work with
      </h6>
      <Marquee
        className="flex items-center"
        autoFill={true}
        gradient={true}
        gradientColor="#0b0b0f"
      >
        {blockchains.map((item, index) => (
          <div key={index} className="px-4">
            <Image
              src={item.image}
              alt="img"
              width={item.width}
              height={item.height}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
