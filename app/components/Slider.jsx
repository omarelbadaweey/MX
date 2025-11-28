"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function Slider() {
  const slides = [
    {
      id: 1,
      image: "/img/door14.jpg",
      title: "Dors Collection",
      link: "/doors",
    },

    {
      id: 2,
      image: "/img/slide-farnichars.jpg",
      title: " Farnichars Collection",
      link: "/farnichars",
    },

    {
      id: 3,
      image: "/img/molging3.jpg",
      title: " Moldings Collection",
      link: "/moldings",
    },
    {
      id: 4,
      image: "/img/slide-chair.avif",
      title: " Farnichars Collection",
      link: "/farnichars",
    },
    {
      id: 5,
      image: "/img/molging14.jpg",
      title: " Moldings Collection",
      link: "/moldings",
    },
  ];

  return (
    <section>
      <div className="bg-amber-50 py-5">
        <h2 className=" relative w-fit mx-auto before:w-full before:rounded-full before:bg-black before:h-1 before:absolute before:-bottom-5  after:w-7 after:h-7 after:absolute after:-bottom-8 after:left-[50%] after:-translate-x-[50%] after:right-[50%]  after:rounded-full after:bg-amber-50 after:border-3 text-4xl font-bold text-black text-center mb-10">
          MX-Collection
        </h2>
      </div>
      <div className="w-full h-[calc(100vh-70px)] border-y-3 border-black bg-black relative">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1500}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              <div
                src={slide.image}
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center max-w-4xl px-6">
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-100 mb-6 animate-fade-in">
                    {slide.title}
                  </h2>
                  <Link
                    href={slide.link}
                    className="bg-amber-100 text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-amber-100 transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-in"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="absolute top-8 right-8 z-20">
                <span className="bg-black/50 text-amber-100 px-4 py-2 rounded-full text-lg font-semibold backdrop-blur-sm">
                  {slide.id} / {slides.length}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* styles for Css*/}
        <style jsx global>{`
          /* تخصيص النقاط */
          .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
            background-color: rgba(254, 243, 199, 0.4);
            opacity: 1;
            margin: 0 8px !important;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background-color: rgb(254, 243, 199);
            transform: scale(1.2);
          }

          /* تأثيرات للأنيميشن */
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce-in {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }

          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out 0.3s both;
          }

          .animate-bounce-in {
            animation: bounce-in 1s ease-out 0.6s both;
          }
        `}</style>
      </div>
    </section>
  );
}
