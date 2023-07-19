import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const ContactForm = () => {
  const form = useRef();
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const [text, setText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    firstRef.current.value = "";
    secondRef.current.value = "";
    setText("");

    emailjs
      .sendForm(
        "service_2sx6l1f",
        "template_eb1877e",
        form.current,
        "Q3EqNhSYzF-QeWh4m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="bg-white text-black"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="text-center pt-10 sm:pt-5">
        <h2 className="text-6xl font-bold xl:text-5xl lg:text-3xl lg:w-full md:text-2xl md:w-auto sm:text-2xl xs:text-xl ">
          La oss starte noe stort{" "}
          <span className="text-teal-600"> sammen.</span>
        </h2>
      </div>
      <div className="flex justify-between gap-10 py-20 sm:pt-5 sm:pb-10 sm:flex-col">
        <form
          className="flex flex-col w-1/2 gap-2 sm:w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>
            <h2 className="2xl:text-4xl text-2xl  font-bold lg:text-xl sm:text-lg">
              Navn
            </h2>
          </label>
          <input
            ref={firstRef}
            className="w-full border border-black font-bold px-2 py-2  focus:outline-none focus:border-teal-600 focus:ring-1 sm:py-1"
            type="text"
            name="user_name"
          />
          <label>
            <h2 className="2xl:text-4xl text-2xl font-bold lg:text-xl sm:text-lg">
              Email
            </h2>
          </label>
          <input
            ref={secondRef}
            className="w-full border border-black font-bold  px-2 py-2  focus:outline-none focus:border-teal-600 focus:ring-1 sm:py-1"
            type="email"
            name="user_email"
          />
          <label>
            <h2 className="2xl:text-4xl text-2xl font-bold lg:text-xl sm:text-lg">
              Melding
            </h2>
          </label>
          <textarea
            value={text}
            onChange={(v) => setText(v.target.value)}
            className="w-full border border-black font-bold h-[41vh]  px-2 py-2  focus:outline-none focus:border-teal-600 focus:ring-1 sm:h-[30vh] "
            name="message"
            plaveholder="Please Write Message to us"
          />
          <button className="2xl:text-2xl 2xl:w-[120px] text-xl bg-teal-600 py-2 rounded-xl  w-[100px] hover:opacity-80 xl:text-2xl lg:text-lg">
            <input type="submit" value="Send" className="text-white" />
          </button>
        </form>
        <div className="flex flex-col gap-2 w-1/2 font-bold  sm:w-full">
          <h3 className=" 2xl:text-5xl  xl:text-4xl lg:text-2xl sm:text-xl">
            Address:
          </h3>
          <span className=" 2xl:text-4xl  text-2xl lg:text-xl sm:text-lg">
            Klepp
          </span>
          <span className=" 2xl:text-4xl  text-2xl lg:text-xl sm:text-lg">
            Kvernelandsvegen 10
          </span>
          <Link
            href="mailto:kjølv@gmail.com"
            className=" 2xl:text-4xl  text-2xl lg:text-xl sm:text-lg "
          >
            Email:kjølv@gmail.com
          </Link>
          <Link
            href="tel:+1234567890"
            className=" 2xl:text-4xl 2xl:leading-relaxed text-2xl lg:text-xl sm:text-lg "
          >
            Mobile:+4796849777
          </Link>
          <iframe
            title="home"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1034.2110845741456!2d5.725649244871889!3d58.773327025869776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a39cae49298a5%3A0xf023b74792228256!2sKr%C3%A5vegen%204%2C%204355%20Kvernaland!5e0!3m2!1spl!2sno!4v1664524440439!5m2!1spl!2sno"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="sm:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
