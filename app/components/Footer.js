import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-black relative z-[20] h-full overflow-hidden px-10 py-20 sm:px-5 xl:py-10 sm:py-5 xs:px-2">
      <div className="w-full h-full absolute right-0 top-0 bg-gradient-to-r z-[-1] from-sky-600  to-pink-600 blur-xl opacity-20 "></div>
      <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto">
        <div className=" flex justify-between items-center border-b border-gray-500 pb-10 sm:gap-2">
          <h4 className="text-7xl font-bold xl:text-5xl lg:text-4xl  md:text-3xl sm:text-2xl sm:w-1/2 xs:w-3/5">
            La oss jobbe sammen.
          </h4>
          <Link
            href="/kontakt"
            className="2xl:text-3xl  bg-teal-600 text-xl font-bold text-center p-3 rounded-xl transition-all hover:bg-teal-900 md:text-lg sm:text-sm  sm:px-1 xs:w-1/2 "
          >
            La oss snakke !
          </Link>
        </div>
        <div className="flex justify-between items-center pt-10 md:pt-2 ">
          <div>
            <Link
              href="/"
              className="flex gap-2 items-center transition-all hover:opacity-50"
            >
              <img
                className="w-[80px] h-full lg:w-10 sm:w-4 sm:h-4 xs:hidden "
                src="./logo.png"
                alt="Logo"
              />
              <span className="text-4xl lg:text-2xl font-bold sm:text-lg xs:text-sm">
                Kjølv AS
              </span>
            </Link>
          </div>

          <div className="flex justify-center items-center gap-5 text-3xl lg:gap-3 xl:text-xl md:flex-col sm:flex-row sm:text-sm xs:text-[0.8rem]">
            <Link href="/" className="transition-all hover:text-teal-600 ">
              Hjem
            </Link>
            <Link href="/" className="transition-all hover:text-teal-600 ">
              Om oss
            </Link>
            <Link href="/" className="transition-all hover:text-teal-600 ">
              Tjenester
            </Link>
            <Link href="/" className="transition-all hover:text-teal-600 ">
              Kontakt
            </Link>
          </div>
          <div className="flex flex-col gap-3 sm:hidden">
            <span className="text-3xl xl:text-2xl lg:text-lg ">Adress:</span>
            <span className="text-2xl xl:text-xl lg:text-sm">Klepp</span>
            <span className="text-2xl xl:text-xl lg:text-sm">
              Kvernelandsvegen 10
            </span>
            <Link
              href="mailto:kjølv@gmail.com"
              className="text-2xl xl:text-xl lg:text-sm"
            >
              Email:kjølv@gmail.com
            </Link>
            <Link
              href="tel:+1234567890"
              className="text-2xl xl:text-xl lg:text-sm"
            >
              +4796849777
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
