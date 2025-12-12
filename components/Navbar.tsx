"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Group from "../public/Group.svg";
import Link from "next/link";
import InstagramIcon from "../public/Instagram.svg";
import FacebookIcon from "../public/Facebook.svg";
import TelegramIcon from "../public/Telegram.svg";
import TwitterIcon from "../public/Thread.svg";
import YoutubeIcon from "../public/Youtube.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInBeYourOwnBoss, setIsInBeYourOwnBoss] = useState(false);
  const router = useRouter();

  const handleNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const hash = href; // like "#about"

    // If already on homepage —
    if (window.location.pathname === "/") {
      if (window.lenis) window.lenis.scrollTo(hash);
      setIsMenuOpen(false);
      return;
    }

    // If on another page —
    router.push("/" + hash);

    // Wait for next tick, then scroll after route loads
    setTimeout(() => {
      if (window.lenis) window.lenis.scrollTo(hash);
    }, 500);

    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("beYourOwnBoss");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsInBeYourOwnBoss(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("beYourOwnBoss");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsInBeYourOwnBoss(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setNavVisible(true), 500);
  }, []);

  return (
    <div
      className={`fixed top-2.5 left-1/2 -translate-x-1/2 w-full h-[74px] z-50 will-change-transform
  transition-all duration-800 
  ${navVisible ? "translate-y-0" : "-translate-y-[120%]"}`}
    >
      <div className="flex-none w-auto h-auto relative opacity-100">
        <div className="w-full flex justify-between items-center py-[15px] px-[50px] relative">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`font-krona text-[34px] tracking-[-0.08em] leading-[0.9em] text-[#BB2215] transition-opacity duration-300 ${isInBeYourOwnBoss ? "opacity-0" : "opacity-100"
              }`}
          >
            ANISH.
          </Link>

          <div className="relative">
            {/* <div
              className="bg-white hover:bg-[#BB2215] rounded-[100px] h-[44px] w-[44px] flex justify-center items-center cursor-pointer transition-colors duration-300 group
              "
              onClick={() => setIsMenuOpen(!isMenuOpen)
                
              }
            > */}
            <div
              className={`group absolute top-0 right-0 bg-white hover:bg-[#BB2215] rounded-full h-11 w-11 flex justify-center items-center cursor-pointer transition-transform duration-300 ${isMenuOpen
                  ? "-translate-x-[300px] translate-y-[30px]"
                  : "translate-x-0 translate-y-0"
                }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image
                src={Group}
                alt="Menu"
                width={20}
                height={14}
                className="transition-all duration-300 group-hover:invert group-hover:brightness-0"
              />
            </div>

            <div
              className={`absolute top-0 flex flex-col gap-[25px]
  right-0 w-[347px] h-[530px]
  bg-black text-white pt-[25px] pr-[25px] pb-[50px] pl-[45px]
  rounded-lg shadow-lg transform 
  transition-transform duration-300 ease-in-out
  ${isMenuOpen ? "translate-x-0" : "translate-x-[120%]"}
`}
            >
              <div className=" relative w-full h-[50px]  flex flex-col gap-2.5 justify-end items-end">
                <div className="relative w-full h-[50px] flex flex-col justify-end items-end">
                  <div className="relative w-[50px] h-[50px] flex justify-center items-center">
                    <button
                      className="relative w-8 h-8 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="block w-4 h-0.5 bg-white/15 rotate-45 absolute"></span>
                        <span className="block w-4 h-0.5 bg-white/15 -rotate-45 absolute"></span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="font-krona text-[34px] tracking-[-0.08em] leading-[0.9em] text-[#F9432D]"
              >
                ANISH.
              </Link>
              <div
                className="relative w-full h-52 pr-[15px] flex flex-col gap-0
                text-[#FFFFFF]/25 [42px] text-[32px] font-medium leading-[1.3]  tracking-[-0.04em] font-clash-display"
              >
                <Link
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                  className="hover:text-[#FFDAD6]/70"
                >
                  About me
                </Link>
                <Link
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "#projects")}
                  className="hover:text-[#FFDAD6]/70"
                >
                  Projects
                </Link>
                <Link
                  href="#personal"
                  onClick={(e) => handleNavClick(e, "#personal")}
                  className="hover:text-[#FFDAD6]/70"
                >
                  Personal
                </Link>
                <Link
                  href="#beYourOwnBoss"
                  onClick={(e) => handleNavClick(e, "#beYourOwnBoss")}
                  className="hover:text-[#FFDAD6]/70"
                >
                  Be Your Own Boss
                </Link>
                <Link
                  href="#resources"
                  onClick={(e) => handleNavClick(e, "#resources")}
                  className="hover:text-[#FFDAD6]/70"
                >
                  Resources
                </Link>
              </div>
              <div className="relative w-full flex flex-col h-[91px] gap-[25px]">
                <div className="w-[191px] p-0  justify-center items-center  self-center flex flex-row h-5 gap-[25px]">
                  <Link
                    href="https://www.instagram.com/anishsinghthakur/"
                    className="opacity-65 transition-all duration-300 hover:opacity-100"
                  >
                    <Image
                      src={InstagramIcon}
                      alt="Instagram"
                      width={18}
                      height={18}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/ianishsinghthakur"
                    className="opacity-65 transition-all duration-300 hover:opacity-100"
                  >
                    <Image
                      src={FacebookIcon}
                      alt="Facebook"
                      width={11}
                      height={20}
                    />
                  </Link>
                  <Link
                    href="https://t.me/boomingbullscompany"
                    className="opacity-65 transition-all duration-300 hover:opacity-100"
                  >
                    <Image
                      src={TelegramIcon}
                      alt="Telegram"
                      width={19}
                      height={16}
                    />
                  </Link>
                  <Link
                    href="https://x.com/anishsthakur"
                    className="opacity-65 transition-all duration-300 hover:opacity-100"
                  >
                    <Image
                      src={TwitterIcon}
                      alt="Twitter"
                      width={20}
                      height={18}
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@AnishVlogs"
                    className="opacity-65 transition-all duration-300 hover:opacity-100"
                  >
                    <Image
                      src={YoutubeIcon}
                      alt="YouTube"
                      width={22}
                      height={16}
                    />
                  </Link>
                </div>
                <div className="bg-white w-full h-[46px] gap-2.5 py-[15px] px-[25px] rounded-[100px] flex justify-center items-center">
                  <Link
                    href="/connect-with-me"
                    onClick={() => setIsMenuOpen(false)}
                    className=" font-clash-grotesk font-medium text-black text-[18px] tracking-[-0.03em] leading-[0.9]"
                  >
                    Connect With Anish{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
