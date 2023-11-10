import Button from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="py-20">
        <div className="container relative flex flex-col items-center text-center gap-4">
          {/* <Image
            src={`/home-hero-grad-left.png`}
            alt="img"
            width={749.4}
            height={856.75}
            className="absolute md:-top-[520px] -left-[120px] -z-10"
          /> */}
          <h4 className="text-2xl text-muted uppercase">
            Welcome to Kult Technologies
          </h4>
          <h1 className="w-full lg:w-4/6 text-4xl md:text-6xl font-bold capitalize leading-tight lg:leading-tight">
            Revolutionize Your Industry with Web 3 Technology:{" "}
            <span className="text-indigo-400">Explore the Future</span>
          </h1>
          <div className="space-x-6 pt-12">
            <Button content="Get Started" />
            <Button content="Our Portfolio" />
          </div>
          {/* <Image
            src={`/imgs/Group 3.png`}
            alt="img"
            width={797}
            height={855}
            className="absolute -right-[320px] -top-[440px] -z-10"
          /> */}
          {/* <Image
            src={`/imgs/Group 4.png`}
            alt="img"
            width={797}
            height={855}
            className="absolute -right-[340px] -top-[160px] -z-10"
          />
          <Image
            src={`/imgs/sphere.png`}
            alt="img"
            width={180}
            height={180}
            className="absolute -right-[60px] bottom-0 -z-10"
          /> */}
        </div>
      </section>

      <section className="py-20">
        <div>
          
        </div>
      </section>
    </>
  );
}
