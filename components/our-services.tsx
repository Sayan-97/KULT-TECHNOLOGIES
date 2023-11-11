import Image from "next/image";
import Button from "./ui/button";

export default function OurServices() {
  return (
    <section className="py-20">
      <div className="container space-y-12">
        <div className="lg:w-1/2 space-y-6 flex flex-col items-center text-center mx-auto">
          <h2 className="text-5xl font-semibold">Our Services</h2>
          <p className="text-xl text-muted">
            {" "}
            We&apos;re a cutting-edge service company with a passion for
            innovation, offering a wide range of services that empower
            businesses in the digital age.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="service-content bg-accent p-6 rounded-2xl flex flex-col items-start gap-8">
            <Image
              src={`/imgs/services-1.png`}
              alt="img"
              width={271.488}
              height={280.585}
              className="self-center"
            />
            <h3 className="text-2xl font-bold">Web 3 Game Development</h3>
            <p className="text-muted">
              Transform your gaming ideas into immersive experiences in the Web
              3.0 era. Our game development experts craft interactive and
              decentralized games that redefine the gaming landscape.
            </p>
            <Button content="Get Started" />
          </div>

          <div className="service-content bg-accent p-6 rounded-2xl flex flex-col items-start gap-8">
            <Image
              src={`/imgs/services-1.png`}
              alt="img"
              width={271.488}
              height={280.585}
              className="self-center"
            />
            <h3 className="text-2xl font-bold">Web 3 Game Development</h3>
            <p className="text-muted">
              Transform your gaming ideas into immersive experiences in the Web
              3.0 era. Our game development experts craft interactive and
              decentralized games that redefine the gaming landscape.
            </p>
            <Button content="Get Started" />
          </div>

          <div className="service-content bg-accent p-6 rounded-2xl flex flex-col items-start gap-8">
            <Image
              src={`/imgs/services-1.png`}
              alt="img"
              width={271.488}
              height={280.585}
              className="self-center"
            />
            <h3 className="text-2xl font-bold">Web 3 Game Development</h3>
            <p className="text-muted">
              Transform your gaming ideas into immersive experiences in the Web
              3.0 era. Our game development experts craft interactive and
              decentralized games that redefine the gaming landscape.
            </p>
            <Button content="Get Started" />
          </div>

          <div className="service-content bg-accent p-6 rounded-2xl flex flex-col items-start gap-8">
            <Image
              src={`/imgs/services-1.png`}
              alt="img"
              width={271.488}
              height={280.585}
              className="self-center"
            />
            <h3 className="text-2xl font-bold">Web 3 Game Development</h3>
            <p className="text-muted">
              Transform your gaming ideas into immersive experiences in the Web
              3.0 era. Our game development experts craft interactive and
              decentralized games that redefine the gaming landscape.
            </p>
            <Button content="Get Started" />
          </div>

          <div className="service-content bg-accent p-6 rounded-2xl flex flex-col items-start gap-8">
            <Image
              src={`/imgs/services-1.png`}
              alt="img"
              width={271.488}
              height={280.585}
              className="self-center"
            />
            <h3 className="text-2xl font-bold">Web 3 Game Development</h3>
            <p className="text-muted">
              Transform your gaming ideas into immersive experiences in the Web
              3.0 era. Our game development experts craft interactive and
              decentralized games that redefine the gaming landscape.
            </p>
            <Button content="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
}
