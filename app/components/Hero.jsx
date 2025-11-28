import Link from "next/link";
function Hero() {
  return (
    <section className="relative w-[100%] h-[100vh] text-5xl font-bold">
      <img
        src="/hero.jpg"
        className="absolute top-0 left-0 h-full w-full md:object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black/50">
        <div />

        <div className=" relative z-40 px-5  sm:px-10 md:px-25 py-25 text-amber-100 flex flex-col gap-8 md:gap-5 justify-center h-full ">
          <div className=" py-2 px-4 bg-amber-100 w-fit text-black text-[18px] mt-12">
            MX-Store
          </div>
          <h1 className="w-full  md:w-[650px] capitalize text-3xl md:text-5xl font-bold ">
            where traditional meets modern
          </h1>
          <p className="text-[#c1acac] text-[17px] w-[330px] sm:w-[450px] md:w-[500px] mb-5">
            Specialized in luxury woodwork and high-end home finishing. Built
            with precision. Designed to last.
          </p>
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=201550764367&text&type=phone_number&app_absent=0"
              className="cursor-pointer hover:scale-[1.03] hover:rounded-2xl  transition-all duration-300 py-2 px-7 content-center text-center bg-amber-100 text-black text-lg outline-2 outline-amber-100 block md:inline w-full md:w-fit md:mr-5 mb-6 md:mb-0"
            >
              Contact
            </a>
            <Link
              href="/about"
              className="cursor-pointer hover:scale-[1.03] hover:rounded-2xl  transition-all duration-300 py-2 px-7 content-center text-center text-lg outline-2 outline-amber-100 block md:inline w-full md:w-fit"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
