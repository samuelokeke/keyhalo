"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import Link from "next/link";

const SecondHero = () => {
  const gridVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-primary pt-20">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="lg:-translate-y-40 translate-y-0 bg-background border-2 border-primary rounded-3xl shadow-lg px-4 py-8 lg:p-8">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            <motion.div
              variants={itemVariants}
              className="relative h-70 overflow-hidden border border-muted-foreground bg-[url('/images/facade.jpg')] bg-no-repeat bg-cover after:absolute after:content-[''] after:inset-0 after:bg-black/75 after:rounded-xs grid place-content-center bg-primary/50x text-primary-foreground rounded-sm"
            >
              <Link href="for-employers" className="relative z-10 border border-background text-lg font-medium text-background p-4">
                For Employers
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-70 overflow-hidden border border-muted-foreground bg-[url('/images/facade.jpg')] bg-no-repeat bg-cover after:absolute after:content-[''] after:inset-0 after:bg-black/75 after:rounded-xs grid place-content-center bg-primary/50 text-primary-foreground rounded-sm"
            >
              <Link href="for-jobseeker" className="relative z-10 border border-background text-lg font-medium text-background p-4">
                For Job Seekers
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
