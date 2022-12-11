import React from "react";
import HtmlImg from "../../assets/project-images/html.png";
import CssImg from "../../assets/project-images/css.png";
import JsImg from "../../assets/project-images/javascript.png";
import ReactImg from "../../assets/project-images/react.png";
import NextJsImg from "../../assets/project-images/nextjs.png";
import GraphQlImg from "../../assets/project-images/graphql.png";
import GithubImg from "../../assets/project-images/github.png";
import TailwindImg from "../../assets/project-images/tailwind.png";
import NodeImg from "../../assets/project-images/node.png";

interface MyProjectType {
  id: number;
  name: string;
  image: string;
}

const whatIuse: MyProjectType[] = [
  {
    id: 1,
    name: "html",
    image: HtmlImg,
  },
  {
    id: 2,
    name: "css",
    image: CssImg,
  },
  {
    id: 3,
    name: "js",
    image: JsImg,
  },
  {
    id: 4,
    name: "react",
    image: ReactImg,
  },
];

type ProjectProps = {
  //
};

export const Project = (props: ProjectProps) => {
  /** Property */
  const { ...others } = props;

  /** Function */

  /** Render */
  return (
    <div
      {...others}
      className="w-full h-screen text-white bg-gradient-to-b from-black to-gray-800 flex align-center justify-center flex-col"
    >
      <div className="flex flex-col justify-center p-4 mx-auto max-w-screen-lg w-full">
        <div className="pb-8">
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>
        <div className="grid grid-cols-2 gap-8 h-full md:grid-cols-4">
          {whatIuse.map(({ id, name, image }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-center align-center w-[14rem]"
              >
                <img
                  src={image}
                  alt={name}
                  className="rounded-md p-10 duration-200 hover:scale-105"
                />
                <div className="flex justify-center items-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
