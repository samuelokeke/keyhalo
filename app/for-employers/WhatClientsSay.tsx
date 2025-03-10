"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const WhatClientsSay = () => {
  const [selected, setSelected] = useState(0);

  const handleCollapse = (index: number) => {
    setSelected(index);
  };

  return (
    <section className="bg-background py-20">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-accent font-extrabold mb-2">What Our Clients Say About Us </h2>
          <p className="text-muted-foreground text-sm font-medium">What peoples have to tell about our values</p>
        </div>

        <ul className="flex flex-col lg:flex-row border border-muted-foreground font-medium rounded overflow-auto">
          {items.map((item, i) => (
            <li
              key={item}
              data-state={selected === i ? "open" : "closed"}
              className="group grid lg:data-[state=closed]:grid-cols-[56px_0fr] lg:data-[state=open]:grid-cols-[56px_1fr] data-[state=closed]:grid-rows-[56px_0fr] lg:data-[state=closed]:grid-rows-1 data-[state=open]:grid-rows-[56px_1fr] lg:data-[state=open]:grid-rows-1 transition-all ease-in duration-300 not-last:border-b lg:not-last:border-b-0 lg:not-last:border-r border-muted-foreground"
            >
              <button
                data-state={selected === i ? "open" : "closed"}
                onClick={() => handleCollapse(i)}
                className="lg:w-[56px] h-full flex items-center gap-4 data-[state=open]:bg-muted/50 writing-mode-tb px-4 py-6 lg:py-0 cursor-pointer text-start"
              >
                {selected === i ? <Minus /> : <Plus />}
                <p>What do you like to know about KeyHalo {i + 1}</p>
              </button>

              <div className="overflow-hidden group-data-[state=closed]:-translate-y-10 group-data-[state=open]:translate-y-0 delay-100 duration-500">
                <p className="text-sm text-wrap p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem deserunt temporibus error
                  dolorem corrupti debitis nostrum earum optio quasi veniam animi odit molestiae quo maxime, reiciendis
                  consequatur corporis. Iusto.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatClientsSay;
