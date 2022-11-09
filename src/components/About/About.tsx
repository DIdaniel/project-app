import React from "react";

type AboutProps = {
  //
};

export const About = (props: AboutProps) => {
  /** Property */
  const { ...others } = props;

  /** Function */

  /** Render */
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full- h-full">
        <div className="pb-8">
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          dignissimos architecto, saepe blanditiis nesciunt tempore iste
          asperiores adipisci dolorum, reprehenderit magnam neque labore fuga
          voluptas! Natus cupiditate iusto sunt cum? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quis ea numquam fuga quae rerum eligendi
          deleniti eum amet vel eveniet ad vero nemo commodi, alias maiores qui
          ab nulla veniam.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          dignissimos architecto, saepe blanditiis nesciunt tempore iste
          asperiores adipisci dolorum, reprehenderit magnam neque labore fuga
          voluptas! Natus cupiditate iusto sunt cum? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quis ea numquam fuga quae rerum eligendi
          deleniti eum amet vel eveniet ad vero nemo commodi, alias maiores qui
          ab nulla veniam.
        </p>
      </div>
    </div>
  );
};
