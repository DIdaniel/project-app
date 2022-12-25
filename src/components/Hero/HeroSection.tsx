import React from "react";
import Profile from "../../assets/profile.jpg";
import HeroImage from "../../assets/code.png";
import Avatar from "../../assets/crayonzgrim-avatar-2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type HeroSectionProps = {
  //
};

export const HeroSection = (props: HeroSectionProps) => {
  /** Property */
  const { ...others } = props;

  /** Function */

  /** Render */
  return (
    <div
      {...others}
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg h-full mx-auto flex flex-col-reverse items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center md:mr-10">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            consequatur odit mollitia enim. Odit quibusdam dolor libero hic quas
            alias eum repudiandae soluta sed eveniet! Modi provident alias
            explicabo vel.
          </p>

          <div>
            <button className="group flex items-center rouned-md text-white w-fit px-6 py-3 my-2 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="lg:ml-2" />
              </span>
            </button>
          </div>
        </div>

        <div className="mb-10 p-5">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl md:mx-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};
