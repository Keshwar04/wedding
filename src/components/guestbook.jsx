import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Guestbook = () => {
  const inputFields = ["Full Name", "Email Address"];
  const couples = ["Josh & Judie", "John & Monica", "Brad & Family"];
  const buttons = [
    { dir: "left", custom: "custom-prev" },
    { dir: "right", custom: "custom-next" },
  ];
  return (
    <section id="GUESTBOOK" className="p-4 md:p-8 lg:p-12 secondary-bg">
      <div className="md:px-13 xl:px-26 text-white">
        <div className="flex flex-col items-center gap-4">
          <h1 className="primary-font text-7xl font-bold">Guestbook</h1>
          <p className="text-center max-w-3xl text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            ultricies nisi, vel tincidunt mi. Donec sit amet finibus justo,
            finibus vestibulum ipsum. Aenean egestas tortor nec fermentum
            egestas.
          </p>
        </div>
        <div className="grid grid-cols-12 sm:gap-8 mt-12">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-13 items-start">
            <div className="flex flex-col lg:flex-row gap-6 w-full">
              {inputFields.map((e) => (
                <input
                  key={e}
                  type="text"
                  className="border-0 border-b border-gray-400 focus:outline-none placeholder-gray-300 text-sm pb-3 w-full"
                  placeholder={e}
                />
              ))}
            </div>
            <input
              className="border-0 border-b border-gray-400 focus:outline-none placeholder-gray-300 text-sm pb-35 w-full break-words"
              placeholder="Message"
            />
            <button className="bg-white text-xs py-3 px-6 text-black inline-block hover:bg-gray-200 cursor-pointer">
              SUBMIT FORM
            </button>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col items-center justify-center">
              <Swiper
                loop={true}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                modules={[Navigation]}
                className="w-full"
              >
                {couples.map((e, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col justify-center items-center mt-5 sm:mt-0">
                      <blockquote
                        className="relative pl-8 py-4
         before:content-['“'] before:absolute before:left-1 before:-top-1
         before:text-7xl italic text-center max-w-md leading-loose text-gray-200 text-lg"
                      >
                        Cras a elit sit amet leo accumsan volutpat. Suspendisse
                        hendreriast ehicula leo, vel efficitur felis ultrices
                        non cras a elit sit amet leo acun volutpat. Suspendisse
                        hendrerit vehicula leo, vel efficitur fel.
                      </blockquote>
                      <h1 className="max-w-md text-center primary-font text-4xl font-bold">
                        {e}
                      </h1>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="mt-3 w-full flex flex-col items-center">
                <div className="max-w-md flex justify-center gap-6 ">
                  {buttons.map((e) => (
                    <button
                      className={`${e.custom} cursor-pointer text-white text-xl hover:text-gray-300`}
                      key={e.dir}
                    >
                      {e.dir === "left" ? "←" : "→"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
