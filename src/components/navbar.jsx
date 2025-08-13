import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { menus } from "../helper";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      //Adjust the margin Top value as needed
      const marginTop = window.innerWidth > 1023 ? 100 : 380;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  const determineActiveSection = () => {
    for (let i = menus.length - 1; i >= 0; i--) {
      const section = document.getElementById(menus[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(menus[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", determineActiveSection);
    return () => window.removeEventListener("scroll", determineActiveSection);
  }, []);
  return (
    <>
      <div className="shadow-xs lg:shadow-none fixed lg:static bg-white w-full z-888 flex justify-between lg:justify-center items-center lg:my-6 px-5 lg:px-0 py-4 lg:py-0">
        <h1 className="text-5xl font-bold primary-font primary-color text-center">
          Jessica & Johny
        </h1>
        <button
          className="lg:hidden bg-[var(--primary-color)] h-[35px] px-3 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdMenu size="20" color="white" />
        </button>
      </div>
      <div className="border-b border-gray-200" />
      <nav
        className={`shadow-xs sticky top-[75px] lg:top-0 z-99 bg-white lg:py-6 lg:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row lg:justify-center lg:gap-18">
          {menus.map((e) => (
            <li
              key={e}
              className={`group relative text-[#60635C] hover:text-white lg:hover:text-[#60635C] hover:bg-[var(--primary-color)] lg:hover:bg-transparent font-semibold ps-5 lg:ps-0 py-2 lg:py-1 border-b border-gray-200 lg:border-none cursor-pointer`}
              onClick={() => {
                setIsOpen(!isOpen);
                scrollToSection(e);
              }}
            >
              <span>{e}</span>
              <span
                className={`hidden lg:inline absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out 
    ${
      activeLink === e
        ? "w-full secondary-bg"
        : "w-0 group-hover:w-full secondary-bg"
    }`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
