import React from "react";

type ContactProps = {
  //
};

export const Contact = (props: ContactProps) => {
  /** Property */
  const { ...others } = props;

  /** Function */

  /** Render */
  return (
    <div
      className="w-full h-screen text-white p-4 bg-gradient-to-b from-black to-gray-800"
      {...others}
    >
      <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto w-full h-full">
        <div className="pb-8">
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="text"
              placeholder="Enter your name"
              className="p-2 border-2 bg-transparent rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 border-2 bg-transparent rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              placeholder="Enter your message"
              className="p-2 border-2 bg-transparent rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="flex item-center rouned-md text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
