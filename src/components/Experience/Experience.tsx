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

const techs = [
  {
    id: 1,
    image: HtmlImg,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    image: CssImg,
    title: "Css",
    style: "shadow-blue-400",
  },
  {
    id: 3,
    image: JsImg,
    title: "Javascript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    image: ReactImg,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    image: NextJsImg,
    title: "Next JS",
    style: "shadow-white",
  },
  {
    id: 6,
    image: GraphQlImg,
    title: "GraphQL",
    style: "shadow-pink-500",
  },
  {
    id: 7,
    image: GithubImg,
    title: "Github",
    style: "shadow-gray-500",
  },
  {
    id: 8,
    image: TailwindImg,
    title: "Tailwind css",
    style: "shadow-sky-500",
  },
  {
    id: 9,
    image: NodeImg,
    title: "Node JS",
    style: "shadow-orange-500",
  },
];

type ExperienceProps = {
  //
};

export const Experience = (props: ExperienceProps) => {
  /** Property */
  const { ...others } = props;

  /** Function */

  /** Render */
  return (
    <div
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
      {...others}
    >
      <div className="flex flex-col justify-center text-white w-full h-full max-w-screen-lg mx-auto p-4">
        <div>
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">There are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-center py-8 px-12 w-full sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, image, title, style }) => (
            <div
              key={id}
              className={
                "rounded-lg py-2 shadow-md hover:scale-105 duration-500" +
                " " +
                style
              }
            >
              <img src={image} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
