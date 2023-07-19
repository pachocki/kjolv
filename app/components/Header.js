"use client";
import Link from "next/link";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";
import { AiOutlineClose as Close } from "react-icons/ai";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollBg, setScrollBg] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Change background on scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setScrollBg(true);
    } else {
      setScrollBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <nav className="fixed right-0 top-0 w-full z-[9999] transition-all ">
      <div
        className={` ${
          scrollBg
            ? "bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 "
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center py-5 px-10  sm:px-5 w-full 2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto">
          <Link
            href="/"
            className="flex gap-2 items-center transition-all hover:opacity-50"
          >
            <img
              className="w-10 h-10 lg:w-8 lg:h-8 "
              src="./logo.png"
              alt="Logo"
            />
            <span className="text-2xl font-bold lg:text-xl">Kjølv</span>
          </Link>
          <div className="flex gap-5 text-2xl font-bold sm:hidden lg:text-xl">
            <Link
              href="/"
              className={
                pathname == "/"
                  ? "flex gap-2 items-center transition-all hover:opacity-50 text-teal-600 "
                  : "  flex gap-2 items-center transition-all hover:opacity-50"
              }
            >
              Hjem
            </Link>
            <Link
              href="/about"
              className={
                pathname == "/about"
                  ? "flex gap-2 items-center transition-all hover:opacity-50 text-teal-600 "
                  : "  flex gap-2 items-center transition-all hover:opacity-50"
              }
            >
              Om oss
            </Link>
            <Link
              href="/services"
              className={
                pathname == "/services"
                  ? "flex gap-2 items-center transition-all hover:opacity-50 text-teal-600 "
                  : "  flex gap-2 items-center transition-all hover:opacity-50"
              }
            >
              Tjenester
            </Link>
            <Link
              href="/contact"
              className={
                pathname == "/contact"
                  ? "flex gap-2 items-center transition-all hover:opacity-50 text-teal-600 "
                  : "  flex gap-2 items-center transition-all hover:opacity-50"
              }
            >
              Kontakt
            </Link>
          </div>
          <Hamburger
            className={`hidden sm:block text-2xl ${
              scrollBg ? "text-white" : ""
            }`}
            onClick={toggleMenu}
          />
        </div>
        {isMenuOpen && (
          <div
            className="fixed top-0 w-full h-full bg-teal-600 "
            data-aos="fade-left"
          >
            <div className="flex flex-col bg-teal-600 gap-5 text-2xl font-bold relative h-screen justify-center items-center transition-all animate-fade-in">
              <Close
                className="text-2xl absolute top-6 right-5 text-white"
                onClick={closeMenu}
              />
              <Link
                href="/"
                className="text-4xl transition-all hover:text-teal-600"
                onClick={closeMenu}
              >
                Hjem
              </Link>
              <Link
                href="/about"
                className="text-4xl transition-all hover:text-teal-600"
                onClick={closeMenu}
              >
                Om oss
              </Link>
              <Link
                href="/services"
                className="text-4xl transition-all hover:text-teal-600"
                onClick={closeMenu}
              >
                Tjenester
              </Link>
              <Link
                href="/contact"
                className="text-4xl transition-all hover:text-teal-600"
                onClick={closeMenu}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
