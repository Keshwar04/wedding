import "animate.css/animate.min.css";
import { brideGroom, menus } from "../helper";
import couples from "../assets/couples.jpg";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import couples1 from "../assets/couples1.jpg";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { useEffect, useState } from "react";

const Home = () => {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoom(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Navbar />
      <section id="HOME" className="mt-[78px] lg:mt-[0]">
        <div className="relative overflow-hidden">
          <img
            src={couples}
            className={`w-full object-cover h-[550px] md:h-[650px] transition-transform duration-[38s] ease-out z-0 ${
              zoom ? "scale-100" : "scale-150"
            }`}
            alt="couples"
          />
          <div className="absolute top-0 h-full w-full z-10 primary-bg" />
          <div className="absolute inset-0 flex items-end mb-5 justify-center z-20">
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
        <div className="my-12 flex flex-col gap-13 lg:gap-0 lg:flex-row justify-evenly items-center">
          {brideGroom.map((e, i) => (
            <motion.div
              key={e.name}
              className="flex flex-col items-center max-w-[350px] md:max-w-[450px] lg:max-w-[350px]"
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={e.img}
                className="max-w-[250px] h-[250px] "
                alt={e.name}
              />
              <h1 className="primary-font primary-color font-bold text-6xl mt-2">
                {e.name}
              </h1>
              <span className="default-color text-sm tracking-widest">
                THE BRIDE
              </span>
              <p className="text-center default-color my-3 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vitae ligula tempor, consectetur erat eget, auctor mi.
              </p>
              <div className="flex gap-5 default-color">
                <FaInstagram />
                <FaSquareFacebook />
                <RiTwitterXLine />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="relative">
          <img src={couples1} className="h-[300px] w-full object-cover" />
          <h1 className="absolute z-2 top-1/2 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 text-white text-center primary-font text-7xl font-bold">
            Counting down for the Special Day
          </h1>
          <div className="absolute top-0 h-full w-full z-1 primary-bg" />
        </div>
      </section>
    </>
  );
};

export default Home;
