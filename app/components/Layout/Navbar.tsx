import { Link } from "@remix-run/react";
import { useState } from "react";
import { genericHamburgerLine, whatsappIcon } from "../Common/Icons";
import advogwebimage from "public/image-logo1-advogweb1.png";

export default function Navbar() {
  const menuItems: string[] = [
    "Como funciona?",
    "Planos",
    "FAQ",
    "Quem nós somos?",
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" relative z-50 max-w-[100vw] ">
      <div
        className=" h-52  w-64 bg-tercery opacity-10 
            rounded-br-full absolute -z-20 hidden md:block  "
      ></div>
      <nav className=" hidden justify-around items-center  text-[#000000] h-16 text-lg md:flex">
        <img
          src={advogwebimage}
          alt={"Logo do AdvogWeb"}
          width="300"
          height="300"
          className=" w-fit max-h-full"
        />
        <ul className="  space-x-10 items-center md:flex">
          {menuItems.map((items, index) => (
            <li className=" hover:text-tercery" key={index}>
              <Link to={items}> {items}</Link>
            </li>
          ))}
          <Link
            to={"/faleconoso"}
            className=" border-4  border-quaternary rounded-lg p-3  hover:text-tercery"
          >
            Fale Conosco
          </Link>
        </ul>
      </nav>

      <>
        <button
          className=" group absolute z-50  mt-4 flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-tercery ml-3 md:hidden "
          aria-label="abre o menu de navegação"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`${genericHamburgerLine} ${
              isOpen
                ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <span
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <span
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
        <figure className=" mr-3 pt-3 ml-auto max-w-[50px]">
          <img
            src={advogwebimage}
            alt={"Logo do AdvogWeb"}
            width="300"
            height="300"
          />
        </figure>
      </>

      <nav
        className={`fixed top-0 left-0 bottom-0 flex w-[80%] max-w-sm flex-col overflow-y-auto border-r bg-quaternary py-6 px-6 h-[500px]  rounded-br-[99px] transition-all ease-in-out duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden  `}
      >
        <ul className="z-50  mt-24 space-y-8">
          {menuItems.map((items, index) => (
            <li className="text-lg text-white" key={index}>
              <Link to={items}> {items}</Link>
            </li>
          ))}
          <li>
            <a
              href={
                "https://wa.me/5555992560707?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+advogado"
              }
              target="_blank"
              rel="noopener noreferrer"
              className=" border-green hover:border-gold flex items-center justify-center gap-x-1 border p-3 text-xl text-[#128c7e] hover:text-white "
            >
              <span className=" text-[#128c7e]">{whatsappIcon}</span>
              WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
