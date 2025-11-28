import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const AboutHero = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/mx.design1?igsh=MXU3eHlzODNjYzZ4Zg==",
    },
    {
      name: "Whats app",
      icon: <FaWhatsapp />,
      url: "https://api.whatsapp.com/send/?phone=201550764367&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <section className="relative h-[calc(100vh-75px)] mt-[75px]  flex items-center justify-center overflow-hidden">
      <div className="absolute w-full h-full inset-0 ">
        <img
          src="/heroabout.avif"
          alt="MX Wood Crafts Workshop"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide">
          MX
        </h1>

        <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
          We specialize in custom wooden works, including doors, beds, and
          wooden moldings, with a focus on high-quality craftsmanship and
          elegant finishes. Our goal is to deliver durable, stylish, and
          precisely crafted wood designs that suit both modern
          and classic spaces.
        </p>

        <div className="mb-12 mx-auto w-fit">
          <p className="text-amber-200 mb-4 text-lg">Follow Our Journey</p>
          <div className="flex justify-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-white text-3xl hover:text-amber-300 transition duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-amber-400 opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-amber-400 opacity-60"></div>
    </section>
  );
};

export default AboutHero;
