import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { RiMailSendFill } from "react-icons/ri";

type ContactProps = {
  //
};

export const Contact = (props: ContactProps) => {
  /** Property */
  const { ...others } = props;

  const [isSent, setIsSent] = useState(false);

  /** Function */
  const handleSendEmail = (
    event: React.FormEvent<HTMLFormElement | undefined>
  ) => {
    event.preventDefault();

    try {
      if (
        process.env.REACT_APP_SERVICE_ID &&
        process.env.REACT_APP_TEMPLATE_ID &&
        process.env.REACT_APP_PUBLIC_KEY
      ) {
        emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          event.currentTarget,
          process.env.REACT_APP_PUBLIC_KEY
        );
      }

      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 2000);
    } catch (err) {
      setIsSent(false);
    }
  };

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
          <form
            action="submit"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSendEmail}
          >
            <input
              type="text"
              name="email_name"
              placeholder="Enter your name"
              className="p-2 border-2 bg-transparent rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email_from"
              placeholder="Enter your email"
              className="p-2 my-4 border-2 bg-transparent rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              placeholder="Enter your message"
              className="p-2 border-2 bg-transparent rounded-md text-white focus:outline-none"
            />

            <button
              type="submit"
              className="flex item-center rounded-md text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto hover:scale-110 duration-300 w-full"
            >
              <div className="flex align-center justify-center w-full">
                {isSent ? (
                  <p>🎉 Your email has been sent successfully 🎉</p>
                ) : (
                  <>
                    <p className="mr-3">Let's talk with "DONG IL"</p>
                    <RiMailSendFill
                      className="text-white"
                      color="#fff"
                      size={20}
                    />
                  </>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
