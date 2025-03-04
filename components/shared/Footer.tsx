"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Facebook from "../icons/Facebook";
import LinkedIn from "../icons/LinkedIn";
import Instagram from "../icons/Instagram";
import X from "../icons/X";
import TikTok from "../icons/Tiktok";
import { ArrowUp, MailIcon, MoveRight, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Appstore from "../icons/Appstore";

const Footer = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.body.onscroll = () => {
      if (scrollY < 800) {
        btnRef.current?.classList.add("invisible");
      } else {
        btnRef.current?.classList.remove("invisible");
      }
    };

    return () => {
      document.body.onscroll = null;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary">
      <div className="bg-muted py-2">
        <div className="w-full lg:max-w-7xl h-full mx-auto px-6 lg:px-4">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-2">
            <p className="text-sm font-medium"></p>

            <div className="flex items-center gap-12">
              <motion.p
                initial={{ x: 0 }}
                animate={{ x: 24 }}
                transition={{
                  type: "spring",
                  yoyo: Infinity,
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  bounce: 0.75,
                }}
              >
                <MoveRight className="size-8 stroke-accent" />
              </motion.p>

              <ul className="flex items-center gap-2">
                <li>
                  <Link href="">
                    <Facebook className="fill-accent w-8 h-8" />
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <LinkedIn className="fill-accent w-8 h-8" />
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <Instagram className="fill-accent w-8 h-8" />
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <X className="fill-accent w-8 h-8" />
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <TikTok className="fill-accent w-8 h-8" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-background text-primary-background font-medium py-20">
        <div className="w-full lg:max-w-7xl h-full mx-auto px-6 lg:px-4">
          <button
            ref={btnRef}
            onClick={scrollToTop}
            className="fixed lg:absolute w-16 h-16 grid place-content-center bg-primary/60 lg:bg-primary rounded-full lg:-top-8 bottom-30 right-6 lg:left-1/2 lg:-translate-x-1/2 cursor-pointer"
          >
            <ArrowUp size="40" className="stroke-white" />
          </button>

          <div className="grid grid-cols-12 items-start gap-y-8 lg:gap-10">
            <div className="col-span-12 lg:col-span-4">
              <Image src="logo.svg" alt="logo" width={200} height={100} className="w-[200px] h-auto" priority />

              <h1 className="text-xl font-black mb-6">Key Halo</h1>

              <p className="text-sm text-muted-foreground mb-8">
                We are the best at recruiting professionals and delivering qualiity jobs to job seekers
              </p>

              <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
                <a href="" className="bg-black text-primary-foreground flex items-center gap-2 px-4 py-2 rounded">
                  <Appstore className="w-6 h-6 fill-white" />

                  <p className="font-medium">App store</p>
                </a>

                <a href="" className="bg-black text-primary-foreground flex items-center gap-2 px-4 py-2 rounded">
                  <Image src="icons/play-store.svg" width={24} height={24} alt="play store" />

                  <p className="font-medium">Play store</p>
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_auto]">
              <div className="">
                <h2 className="text-lg font-bold mb-6">Company</h2>

                <ul className="flex flex-col gap-2 text-sm">
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    About us
                  </Link>
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    Contact us
                  </Link>
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    Blog
                  </Link>
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    Privacy Policy
                  </Link>
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    FAQs
                  </Link>
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    Testimonials
                  </Link>
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    Terms of use
                  </Link>
                </ul>
              </div>

              <div className="">
                <h2 className="text-lg font-bold mb-6">Get in touch</h2>

                <ul className="flex flex-col gap-2 text-sm">
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    <div className="flex items-center gap-2">
                      <MailIcon size={16} />
                      <span>(897) 567 1235</span>
                    </div>
                  </Link>
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    <div className="flex items-center gap-2">
                      <PhoneCall size={16} />
                      <span>support@keyhalo.com</span>
                    </div>
                  </Link>
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    Support
                  </Link>
                  <Link href="" className="text-muted-foreground hover:text-accent">
                    Get a demo
                  </Link>
                </ul>
              </div>

              <div className="">
                <h2 className="text-lg font-bold mb-6">Subscribe to Newsletter</h2>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 focus-within:ring-1 focus-within:ring-accent focus-within:shadow-sm focus-within:shadow-accent/50 text-sm rounded">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 border border-r-0 border-accent focus-visible:outline-none rounded-s"
                  />

                  <button className="bg-accent text-accent-foreground px-4 py-2 rounded-e">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground py-2">
        <div className="w-full lg:max-w-7xl h-full mx-auto px-6 lg:px-4">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
            <p className="text-sm font-medium">&copy; {currentYear} Key Halo. All Rights Reserved.</p>

            <ul className="flex flex-wrap items-center gap-2 justify-center overflow-x-auto whitespace-nowrap text-muted font-medium">
              <Link href="" className="text-xs hover:text-accent">
                Privacy Policy
              </Link>
              |
              <Link href="" className="text-xs hover:text-accent">
                Legals
              </Link>
              |
              <Link href="" className="text-xs hover:text-accent">
                Terms & Conditions
              </Link>
              |
              <Link href="" className="text-xs hover:text-accent">
                Cookie Statement
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
