import React, { useEffect, useState } from "react";
import { gifts } from "../helper";
import coupleHands from "../assets/jessica-john-hands.jpg";
import { motion } from "framer-motion";
const Gifts = () => {
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setZoom(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="GIFTS">
      <div className="p-4 md:p-8 lg:p-12">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h1 className="primary-font primary-color text-7xl font-bold">
            Gift Registry
          </h1>
          <p className="text-center max-w-3xl opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            ultricies nisi, vel tincidunt mi. Donec sit amet finibus justo,
            finibus vestibulum ipsum. Aenean egestas tortor nec fermentum
            egestas.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-10 sm:gap-30 lg:gap-5 sm:px-13 xl:px-26 flex justify-center items-center">
          {gifts.map((e, i) => (
            <motion.img
              key={i}
              src={e}
              className="max-w-[120px] lg:max-w-[100px] xl:max-w-[120px]"
              initial={{ x: 10, scale: 0.9, opacity: 0 }}
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              alt={`${i}-img`}
            />
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <img
          src={coupleHands}
          className={`w-full object-cover h-[450px] transition-transform duration-[38s] ease-out z-0 ${
            zoom ? "scale-100" : "scale-150"
          }`}
          alt="couples-hands"
        />
        <div className="absolute top-0 h-full w-full primary-bg" />
        <div className="absolute inset-0 flex items-end justify-center mb-5">
          <div className="mb-3 text-center">
            <p className="primary-font text-white text-[80px] md:text-9xl">
              Jessica & John
            </p>
            <div className="font-bold text-[12px] md:text-sm tracking-widest">
              <span className="text-white">ARE GETTING MARRIED</span>
              <span className="ms-4 bg-white p-2">10-12-2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
