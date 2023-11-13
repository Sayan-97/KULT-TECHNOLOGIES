import Image from "next/image";
import Button from "./button";

type ServicesProps = {
  image: string;
  title: string;
  desc: string;
};

export default function ServicesCard(props: { item: ServicesProps }) {
  const item = props.item;
  return (
    <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333333%-16px)] h-full md:h-[532px] bg-accent p-6 flex flex-col items-start gap-8 rounded-2xl card-border">
      <div className="w-full h-2/5 flex justify-center">
        <Image
          src={item.image}
          alt="img"
          width={271.488}
          height={300}
          className="h-auto object-cover overflow-visible"
        />
      </div>
      <h3 className="text-2xl font-bold">{item.title}</h3>
      <p className="flex-grow text-muted">{item.desc}</p>
      <Button variant="secondary" content="Get Started" />
    </div>
  );
}
