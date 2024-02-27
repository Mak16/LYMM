/* eslint-disable react/jsx-key */
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/logo.png";

const Nav = () => {
  let links = [
    {
      name: "Nos Services",
      link: "LYMM/services",
      className: "md:py-4 md:px-5 flex self-center text-[#C69C59]  px-4 py-2",
    },
    {
      name: "Tarifs",
      link: "LYMM/tarifs",
      className: "md:py-4 md:px-5 flex self-center text-[#C69C59]  px-4 py-2",
    },
    {
      name: "Notre Mission",
      link: "LYMM/mission",
      className: "md:py-4 md:px-5 flex self-center text-[#C69C59] px-4 py-2",
    },
    {
      name: "Ressources",
      link: "/LYMM/ressources",
      className: "md:py-4 md:px-5 flex self-center text-[#C69C59]  px-4 py-2",
    },
    {
      name: "Nous contacter",
      link: "/LYMM/contacter",
      className:
        "bg-[#C69C59] rounded-[30px] md:py-4 md:px-5 flex self-center px-4 py-2 text-white",
    },
  ];
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="bg-[#E7E7E7] flex justify-between items-center shadow-md w-full h-16 fixed top-0 left-0 z-10">
        <Link to='LYMM/' className="w-1/3 mr-4 h-auto md:w-1/12 md:h-24 " >
        <img
          src={logo}
          alt="LYMM logo"
        />
        </Link>
        <ul className="hidden sm:flex  ">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.link} className={link.className}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 top-3 cursor-pointer md:hidden"
        >
          {isOpen ? (
            <Icon
              className="text-[#C69C59] w-10 h-10"
              icon="material-symbols:close"
            />
          ) : (
            <Icon
              className="text-[#C69C59] w-10 h-10"
              icon="healthicons:ui-menu-negative"
            />
          )}
        </div>
        <ul
          className={` bg-[#E7E7E7] md:flex pl-5 md:pl-0  md:items-center md:pb-0 pb-12 z-[1] absolute left-0 w-full md:z-auto transition-all duration-1000 ease-in flex md:flex-row flex-col md:justify-between justify-between 
                    ${isOpen ? "top-14" : "top-[-490px]"}`}
        >
          {links.map((link, index) => (
            <li className={link.className} key={index}>
              <Link to={link.link} >{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
