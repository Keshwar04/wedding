import React from "react";
import { weddingPhotos } from "../helper";
import { motion } from "framer-motion";

const Photos = () => {
  return (
    <section id="PHOTOS" className="my-10 p-4 md:p-8 lg:p-12">
      <motion.h1
        className="primary-font primary-color text-7xl text-center font-bold"
        initial={{ y: 50, scale: 0.8, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 * 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Our History in Photos
      </motion.h1>
      <div className="flex justify-center mt-4 mb-8 ">
        <motion.p
          className="w-3xl text-center opacity-80"
          initial={{ y: 50, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 * 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          ultricies nisi, vel tincidunt mi. Donec sit amet finibus justo,
          finibus vestibulum ipsum. Aenean egestas tortor nec fermentum egestas.
        </motion.p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8 xl:px-26">
        {weddingPhotos.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ y: 50, scale: 0.8, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="overflow-hidden relative group">
              <img
                src={e.img}
                alt={e.title}
                className="relative object-cover w-full cursor-pointer 
              transition-all duration-500 
              group-hover:scale-110 
              group-hover:opacity-80"
              />
            </div>
            <div className="flex flex-col gap-1 my-2 tracking-widest">
              <p className=" text-[12.5px] sm:text-[10.5] md:text-[12.5px] uppercase">
                {e.title}
              </p>
              <p className="text-[11.5px] sm:text-[10.5] md:text-[11.5px] opacity-70">
                12 PHOTOS
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Photos;
