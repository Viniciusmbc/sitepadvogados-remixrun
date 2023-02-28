import { Link } from "@remix-run/react";

export default function Navbar() {
  const menuItems: string[] = [
    "Como funciona?",
    "Planos",
    "FAQ",
    "Quem nós somos?",
  ];

  return (
    <header className=" relative z-50 ">
      <div
        className=" h-52  w-64 bg-tercery opacity-10 
            rounded-br-full absolute -z-20 "
      ></div>
      <nav className=" justify-around items-center flex  text-[#000000] h-16 text-lg">
        <div>AdvogWebBrasil</div>
        <ul className=" flex space-x-10 items-center">
          {menuItems.map((items, index) => (
            <li key={index}>
              <Link to={items}> {items}</Link>
            </li>
          ))}
          <Link
            href={"/faleconoso"}
            className=" border-4  border-quaternary rounded-lg p-3"
          >
            Fale Conosco
          </Link>
        </ul>
      </nav>
    </header>
  );
}
