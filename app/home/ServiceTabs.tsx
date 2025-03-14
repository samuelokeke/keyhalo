"use client";

import clsx from "clsx";
import { AnimatePresence, motion, Variants } from "motion/react";
import React, { useState } from "react";

type SelectedState = "employers" | "jobseeker";

const tabVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.75 } },
  exit: { opacity: 0 },
};

const ServiceTabs = () => {
  const [selected, setSelected] = useState<SelectedState>("employers");

  const handleChange = (value: SelectedState) => {
    setSelected(value);
  };

  return (
    <section className="bg-background py-20">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="flex justify-center">
          <ul className="w-fit bg-background ring-2 ring-accent flex gap-2 p-1 rounded-[2.25rem]">
            <button
              onClick={() => handleChange("employers")}
              className={clsx(
                { "bg-accent text-white": selected === "employers" },
                "text-muted-foreground transition-all duration-200 font-medium px-4 lg:px-8 py-2 rounded-4xl cursor-pointer max-w-48 text-ellipsis whitespace-nowrap overflow-hidden"
              )}
            >
              For Employers
            </button>

            <button
              onClick={() => handleChange("jobseeker")}
              className={clsx(
                { "bg-accent text-white": selected === "jobseeker" },
                "text-muted-foreground transition-all duration-200 font-medium px-4 lg:px-8 py-2 rounded-4xl cursor-pointer max-w-48 text-ellipsis whitespace-nowrap overflow-hidden"
              )}
            >
              For Job Seekers
            </button>
          </ul>
        </div>

        <div className="text-center mt-10">
          <AnimatePresence key={selected}>
            {selected === "employers" ? (
              <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
                <h2 className="text-2xl font-bold mb-6">Become a Employers</h2>
                <p className="text-lg">Choose the service that fits your needs</p>
              </motion.div>
            ) : (
              <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
                <h2 className="text-2xl font-bold mb-6">Secure a Job at ease</h2>
                <p className="text-lg">Choose the service that fits your needs</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;
