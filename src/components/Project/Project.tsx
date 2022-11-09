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
  image: string;
}

const myProject: MyProjectType[] = [
  {
    id: 1,
    image: HtmlImg,
  },
  {
    id: 2,
    image: CssImg,
  },
  {
    id: 3,
    image: JsImg,
  },
  {
    id: 4,
    image: ReactImg,
  },
  {
    id: 5,
    image: NextJsImg,
  },
  {
    id: 6,
    image: GraphQlImg,
  },
  {
    id: 7,
    image: GithubImg,
  },
  {
    id: 8,
    image: TailwindImg,
  },
  {
    id: 9,
    image: NodeImg,
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
      className="text-white bg-gradient-to-b from-black to-gray-800 w-full md:h-screen"
      {...others}
    >
      <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto w-full h-full">
        <div className="pb-8">
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>

        <div className="grid gap-8 px-12 md:grid-cols-3 sm:px-0 sm:grid-cols-2">
          {myProject.map(({ id, image }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={image}
                  alt="first"
                  className="rounded-md duration-200 hover:scale-105"
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
