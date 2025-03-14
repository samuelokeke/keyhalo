"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
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
    <section className="bg-primary text-muted py-20">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-secondary font-extrabold mb-2">What Our Candidates Say About Us </h2>
          <p className="text-muted text-base font-medium">What candidates have to tell about our values</p>
        </div>

        <ul className="flex flex-col border border-secondary/40 font-medium rounded">
          {items.map((item, i) => (
            <li
              key={item}
              data-state={selected === i ? "open" : "closed"}
              className="group not-last:border-b data-[state=open]:max-h-screen data-[state=closed]:max-h-20 transition-all ease-in-out duration-0 overflow-hidden border-secondary/40"
            >
              <button onClick={() => handleCollapse(i)} className="w-full h-20 text-left">
                <div className="h-full flex items-center justify-between gap-x-8 px-4">
                  <p>What do you like to know about KeyHalo {i + 1}</p>

                  {selected === i ? (
                    <ChevronUp className="shrink-0 stroke-muted-foreground" />
                  ) : (
                    <ChevronDown className="shrink-0 stroke-muted-foreground" />
                  )}
                </div>
              </button>

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
