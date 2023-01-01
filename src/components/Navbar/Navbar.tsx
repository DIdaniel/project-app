import React, { MouseEventHandler, MouseEvent, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

type NavbarProps = {
  //
};

export const Navbar = (props: NavbarProps) => {
  /** Property */
  const { ...others } = props;

  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuLinks = [
    {
      id: 0,
      title: "home",
    },
    {
      id: 1,
      title: "about",
    },
    {
      id: 2,
      title: "portfolio",
    },
    {
      id: 3,
      title: "experience",
    },
    {
      id: 4,
      title: "contact",
    },
  ];

  /** Function */
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log((event.target as HTMLLIElement)?.textContent);
  };

  /** Render */
  return (
    <div className="flex justify-between items-center px-4 text-white bg-black w-full h-20 fixed">
      <div>
        <h1 className="text-2xl font-signature ml-2">DONGIL</h1>
      </div>

      <div className="hidden md:flex">
        {menuLinks.map((link) => (
          <button
            key={link.id}
            className="px-4 text-gray-500 font-medium capitalize cursor-pointer hover:scale-105 duration-300"
            onClick={(e) => handleClick(e)}
          >
            <Link to={link.title} spy={true} smooth={true}>
              {link.title}
            </Link>
          </button>
        ))}
      </div>

      <div className="text-gray-500 pr-4 z-10 cursor-pointer md:hidden">
        <button onClick={() => setIsNavOpen((prev) => !prev)}>
          {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      {isNavOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {menuLinks.map((link) => (
            <li
              key={link.id}
              className="px-4 py-6 text-4xl capitalize cursor-pointer hover:scale-105 duration-300"
            >
              {link.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
