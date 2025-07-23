import { weddingDetails } from "../helper";
import { TiLocationArrowOutline } from "react-icons/ti";
import brideBeach from "../assets/bride-beach.jpg";
import { motion } from "framer-motion";
const Wedding = () => {
  return (
    <section id="THE WEDDING" className="my-6 pt-10">
      <motion.h1
        className="text-center primary-font primary-color text-7xl font-bold"
        initial={{ y: 50, scale: 0.8, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 * 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        The Wedding
      </motion.h1>
      <div className="flex justify-center px-6 sm:px-0">
        <motion.p
          className="w-3xl text-center opacity-80 mt-4"
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
      <div className="grid grid-cols-1 md:grid-cols-2 my-8">
        {weddingDetails.map((e) => (
          <motion.div
            key={e.title}
            className="flex flex-col items-center mb-8 md:mb-0"
            initial={{ y: 50, scale: 0.8, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="sm:w-[335px] md:w-[350px] px-6 sm:px-0">
              <img src={e.img} className="w-full" alt={e.title} />
              <div className="flex flex-col items-center gap-1 my-4 ">
                <h1 className="primary-font primary-color font-bold text-5xl">
                  {e.title}
                </h1>
                <p className="font-bold text-sm">{e.date}</p>
                <p className="text-xs">{e.time}</p>
              </div>
              <div className="border-t border-b [border-color:#dcdcdc] flex justify-between py-2">
                <div>
                  <h1 className="text-[20px] primary-color font-bold">
                    {e.place}
                  </h1>
                  <p className="text-sm">
                    123 Porto Street,
                    <br />
                    New York Ny - 12345
                  </p>
                </div>
                <div className="flex flex-col items-end justify-evenly">
                  <div className="w-10 h-10 border rounded-full flex items-center justify-center">
                    <TiLocationArrowOutline size="24" />
                  </div>
                  <p className="text-[10px]">DIRECTIONS</p>
                </div>
              </div>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vel ultricies nisi, vel tincidunt mi. Donec sit amet finibus
                justo
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative h-[550px] mt-10">
        <img
          src={brideBeach}
          className="h-full w-full object-cover"
          alt="brideBeach"
        />
        <div className="absolute top-0 h-full w-full z-1 primary-bg" />
        <div className="absolute z-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <blockquote
            className="relative pl-5 sm:pl-8 py-4
         before:content-['“'] before:absolute before:left-1 before:-top-1
         before:text-4xl italic sm:w-xl text-lg text-center"
          >
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast
            ehicula leo, vel efficitur felis ultrices non cras a elit sit amet
            leo acun volutpat. Suspendisse hendrerit vehicula leo, vel efficitur
            fel.
          </blockquote>
          <h1 className="primary-font text-6xl text-center">Jessica</h1>
          <h3 className="text-sm font-normal tracking-widest text-center">
            THE BRIDE
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Wedding;
