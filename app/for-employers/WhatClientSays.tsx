"use client";

import React, { Fragment, useState } from "react";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const WhatClientSays = () => {
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

        <ul className="flex border border-muted-foreground font-medium rounded overflow-x-auto">
          {items.map((_, i) => (
            <Fragment key={i}>
              <li
                className="writing-mode-tb not-last:border-r nth-last-[2]:border-r-0 border-muted-foreground px-4 py-6 cursor-pointer"
                onClick={() => handleCollapse(i)}
              >
                <p>What do you like to know about KeyHalo {i + 1}</p>
              </li>

              <li
                className="data-[state=open]:max-w-full data-[state=open]:opacity-100 data-[state=open]:visible data-[state=closed]:max-w-0 data-[state=closed]:invisible data-[state=closed]:opacity-0 transition-all duration-300 overflow-hidden data-[state=open]:not-last:border-r"
                data-state={selected === i ? "open" : "closed"}
              >
                <div className="text-wrap p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem deserunt temporibus error
                  dolorem corrupti debitis nostrum earum optio quasi veniam animi odit molestiae quo maxime, reiciendis
                  consequatur corporis. Iusto.
                </div>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatClientSays;
