import React from "react";
import { blogs } from "../helper";
import { motion } from "framer-motion";

const blog = () => {
  return (
    <section id="BLOG" className="p-4 md:p-8 mb-8">
      <div className="flex flex-col items-center gap-4 my-8">
        <motion.h1
          className="primary-font primary-color text-7xl font-bold"
          initial={{ y: 50, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 * 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Blog
        </motion.h1>
        <motion.p
          className="text-center max-w-3xl opacity-80"
          initial={{ y: 10, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 * 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          ultricies nisi, vel tincidunt mi. Donec sit amet finibus justo,
          finibus vestibulum ipsum. Aenean egestas tortor nec fermentum egestas.
        </motion.p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-13 xl:px-26 gap-6">
          {blogs.map((e, i) => (
            <motion.div
              key={i}
              className={`sm:w-sm md:w-full ${
                blogs.length === 3 && i === 2
                  ? "md:col-span-2 md:justify-self-center md:max-w-sm lg:col-span-1 lg:justify-self-auto lg:max-w-none"
                  : ""
              }`}
              initial={{ y: 10, scale: 0.8, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="relative cursor-pointer group overflow-hidden">
                <img
                  src={e.img}
                  className="w-full object-cover transition-transform duration-500"
                  alt={e.name}
                />
                <div className="absolute inset-0 primary-bg opacity-0 group-hover:opacity-900 transition-opacity duration-500" />
                <div className="leading-tight font-bold absolute bottom-5 right-6 secondary-bg text-lg text-white py-2 px-4 flex flex-col items-center justify-center">
                  <p>{e.date}</p>
                  <p> FEB</p>
                </div>
              </div>
              <div className="space-y-3 mt-5">
                <p className="text-[12px] opacity-80 tracking-widest">
                  {e.name}
                </p>
                <h1 className="primary-color text-xl sm:text-2xl font-bold leading-[1] sm:leading-[0.8] tracking-[-1.4px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, quidem similique...
                </p>
                <h3 className="primary-color tracking-widest text-[12px] font-bold">
                  VIEW MORE
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default blog;
