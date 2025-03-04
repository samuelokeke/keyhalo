"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Appbar = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.onscroll = () => {
      if (window.scrollY > 40) {
        headerRef.current?.classList.add("shadow");
      } else {
        headerRef.current?.classList.remove("shadow");
      }
    };

    return () => {
      document.body.onscroll = null;
    };
  }, []);

  return (
    <>
      <div className="bg-primary text-primary-foreground py-1.5">
        <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
          <div className="flex justify-center items-center">
            <div className="w-fit flex flex-wrap items-center justify-center gap-1 lg:gap-2">
              <p className="text-xs lg:text-sm font-medium">
                Call us: <a href="tel:+234-123-456-7890">+234-123-456-7890</a>
              </p>
              <span className="hidden lg:inline">|</span>
              <p className="text-xs lg:text-sm font-medium">
                Email: <a href="mailto:info@keyhalo.com">info@keyhalo.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <header ref={headerRef} className="sticky top-0 z-10 h-20 bg-background border-muted border-b">
        <div className="relative w-full lg:max-w-7xl h-full mx-auto px-6 lg:px-4">
          <div className="h-full flex justify-between items-center">
            <Link href="/" className="min-h-14 border-secondary border-b">
              <Image src="logo.svg" alt="logo" width={200} height={100} className="w-[200px] h-auto" priority />
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-6">
                <li className="group">
                  <Link
                    href=""
                    className="inline-flex items-center gap-1 transition-all hover:bg-muted font-medium px-4 py-2 rounded"
                  >
                    Jobs
                    <ChevronDown className="stroke-1" />
                  </Link>

                  <div className="absolute group-hover:visible group-hover:scale-100 group-hover:transition invisible scale-90 w-full top-15 pt-5 left-0 right-0 z-10 bg-background text-foreground">
                    <div className="shadow border-muted px-8 py-8">
                      <span className="sr-only">Dropdown</span>

                      <span className="absolute top-0 right-0 w-2 h-2 bg-background text-primary rounded-full animate-ping"></span>

                      <div className="flex flex-wrap gap-6 items-start">
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold mb-4">Products</h3>

                          <ul className="flex flex-col gap-2 text-sm font-medium">
                            <Link href="" className="text-foreground hover:text-accent">
                              About us
                            </Link>
                            <Link href="" className="text-foreground hover:text-accent">
                              Contact us
                            </Link>
                            <Link href="" className="text-foreground hover:text-accent">
                              Blog
                            </Link>
                            <Link href="" className="text-foreground hover:text-accent">
                              Privacy Policy
                            </Link>
                          </ul>
                        </div>

                        <div className="flex-grow">
                          <h3 className="text-lg font-bold mb-4">For Business</h3>

                          <ul className="flex flex-col gap-2 text-sm font-medium">
                            <Link href="" className="text-foreground hover:text-accent">
                              About us
                            </Link>
                            <Link href="" className="text-foreground hover:text-accent">
                              Contact us
                            </Link>
                            <Link href="" className="text-foreground hover:text-accent">
                              Blog
                            </Link>
                            <Link href="" className="text-foreground hover:text-accent">
                              Privacy Policy
                            </Link>
                          </ul>
                        </div>

                        <div className="flex-grow">
                          <h3 className="text-lg font-bold mb-4">For Job Seeker</h3>

                          <ul className="flex flex-col gap-2 text-sm font-medium">
                            <Link href="" className="text-foreground hover:text-accent">
                              About us
                            </Link>
                            <Link href="" className="text-foreground hover:text-accent">
                              Contact us
                            </Link>
                            <Link href="" className="text-foreground hover:text-accent">
                              Blog
                            </Link>
                            <Link href="" className="text-foreground hover:text-accent">
                              Privacy Policy
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="for-employers"
                    className="block hover:bg-primary hover:text-primary-foreground font-medium px-4 py-2 rounded"
                  >
                    For Employers
                  </Link>
                </li>

                <li>
                  <Link
                    href="for-jobseekers"
                    className="block hover:bg-primary hover:text-primary-foreground font-medium px-4 py-2 rounded"
                  >
                    For Job Seekers
                  </Link>
                </li>

                <li>
                  <Link
                    href=""
                    className="block hover:bg-primary hover:text-primary-foreground font-medium px-4 py-2 rounded"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Appbar;
