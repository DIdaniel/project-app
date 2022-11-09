import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    href: "https://linkedin.com",
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    style: "rounded-tr-md",
  },
  {
    id: 2,
    href: "https://github.com",
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
  },
  {
    id: 3,
    href: "https://cappu159@gmail.com",
    child: (
      <>
        Gmail <HiOutlineMail size={30} />
      </>
    ),
  },
  {
    id: 4,
    href: "https://tistory.com",
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    style: "rounded-br-md",
    download: true,
  },
];

type SideLinkProps = {
  //
};

export const SideLink = (props: SideLinkProps) => {
  /** Property */
  const { ...others } = props;

  /** Render */
  return (
    <div className="flex flex-col top-[35%] left-0 fixed" {...others}>
      <ul>
        {links.map((link) => {
          const { id, child, href, style, download } = link;
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300" +
                " " +
                style
              }
            >
              <a
                className="flex justify-between items-center w-full text-white"
                href={href}
                download={download}
                target="_blank"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
