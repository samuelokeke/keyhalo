"use client";

import { ChevronDownCircle } from "lucide-react";
import React, { useState } from "react";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const WhatCandidatesSay = () => {
  const [selected, setSelected] = useState<number | undefined>(0);

  const handleCollapse = (index: number) => {
    if (selected === index) {
      setSelected(undefined);
      return;
    }

    setSelected(index);
  };

  return (
    <section className="bg-background py-20">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-accent font-extrabold mb-2">What Our Clients Say About Us </h2>
          <p className="text-muted-foreground text-sm font-medium">What peoples have to tell about our values</p>
        </div>

        <ul className="flex flex-col border border-muted-foreground font-medium rounded">
          {items.map((_, i) => (
            <li
              key={i}
              onClick={() => handleCollapse(i)}
              data-state={selected === i ? "open" : "closed"}
              className="group not-last:border-b data-[state=open]:max-h-screen data-[state=closed]:max-h-20 transition-all ease-in-out duration-0 overflow-hidden border-muted-foreground cursor-pointer"
            >
              <div className="h-20 flex items-center justify-between gap-x-8 px-4">
                <p>What do you like to know about KeyHalo {i + 1}</p>

                <ChevronDownCircle className="shrink-0 stroke-muted-foreground" />
              </div>

              <div className="text-wrap group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100 px-4 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem deserunt temporibus error dolorem
                corrupti debitis nostrum earum optio quasi veniam animi odit molestiae quo maxime, reiciendis
                consequatur corporis. Iusto.
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatCandidatesSay;
