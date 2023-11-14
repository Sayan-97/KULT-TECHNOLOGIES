import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="space-y-12">
      <div className="lg:w-1/2 flex flex-col items-center space-y-6 mx-auto text-center">
        <h2 className="text-5xl font-semibold">Why Choose Us</h2>
        <p className="text-xl text-muted">
          {" "}
          We&apos;re a cutting-edge service company with a passion for
          innovation, offering a wide range of services that empower businesses
          in the digital age.
        </p>
      </div>
      <div className="grid grid-cols-10 grid-rows-2 gap-6">
        <div className="bg-accent col-span-10 lg:col-span-4 row-span-2 p-8 rounded-2xl space-y-8">
          <Image
            src={`/imgs/eth-coins.png`}
            alt="img"
            width={394.57}
            height={394.57}
          />
          <h3 className="text-3xl font-bold">
            We stay ahead of the curve, delivering solutions that are
            future-ready.
          </h3>
        </div>
        <div className="bg-accent col-span-10 lg:col-span-6 p-8 rounded-2xl flex max-md:flex-col items-start gap-8">
          <h3 className="lg:w-1/2 text-3xl font-bold leading-normal">
            Our team comprises industry experts in game development, AI,
            branding, and blockchain.
          </h3>
          <Image
            src={`/imgs/suitcase.png`}
            alt="img"
            width={242.698}
            height={246}
          />
        </div>
        <div className="relative bg-accent col-span-10 md:col-span-5 lg:col-span-3 p-8 rounded-2xl pb-40">
          <Image src={`/imgs/GridBG.png`} alt="img" fill sizes="100%, 100%" />
          <h3 className="text-3xl font-bold">
            We understand your unique needs and provide customized solution.
          </h3>
        </div>
        <div className="relative bg-accent col-span-10 md:col-span-5 lg:col-span-3 p-8 rounded-2xl pb-40">
          <Image src={`/imgs/LooperBG.png`} alt="img" fill sizes="100%, 100%" />
          <h3 className="text-3xl font-bold">
            We measure our success by your achievements.
          </h3>
        </div>
      </div>
    </section>
  );
}
