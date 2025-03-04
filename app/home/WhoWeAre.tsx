"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { Button } from "@/components/ui/button";

const WhoWeAre = () => {
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
    <section className="bg-background py-20 border-b border-muted">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="flex flex-col items-center gap-2 mb-12">
          <span className="inline-block bg-accent rounded-4xl border-2 border-muted text-accent-foreground text-sm font-medium px-4 py-1">
            #1 in High-Trust Recruiting
          </span>

          <h1 className="text-4xl text-foreground font-bold text-center">Who We Are</h1>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-start"
        >
          <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8 rounded-sm">
            <div className="mb-12">
              <svg className="fill-muted" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="font-medium mb-6">
                We&apos;re #1 in High-Trust Recruiting, Market-Making, Match-Making, & Serial Innovation — The Next
                Evolution in Recruiting & Total Team Success — Moving Organizations to Talent Abundance; Building
                High-Impact Teams; & Scaling Companies.
              </p>

              <p className="font-medium">
                We&apos;re #1 in Six Key Metrics That Drive Recruiting & Total Team Success; Guaranteed, Fail-safe, &
                Hassle-free.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                How KeyHalo is #1 in Each of Six Key Metrics Driving Recruiting & Total Team Success.
              </h2>

              <p className="font-medium mb-4">
                Hiring the right people — the right way — is the #1 controllable factor in long-term business success.
                That&apos;s why Winning Companies Don&apos;t Accept the Status Quo, and They Don&apos;t Gamble on Hiring
                — They Proactively Invest.
              </p>

              <p className="font-medium mb-4">
                With KeyHalo, your investment in the right way of hiring & total team success — is fielding the best
                offense and defense — helping you hire, retain, and develop your #1 team — so you can FOCUS, dominate
                your market, and drive measurable, compounding return-on-investment (ROI) year after year.
              </p>

              <p className="font-medium mb-4">
                With KeyHalo, Hiring Isn&apos;t a Cost; It&apos;s a business accelerator. Regardless of compensation or
                complexity levels, every hire can be a High-Yielding Business Asset. KeyHalo is your proven, risk-free,
                fail-safe hiring & total team success model so that your hiring investment outperforms every other
                business decision you make — Financially, Operationally & Strategically.
              </p>
            </div>

            <Button size="xl" className="btn btn-primary-outline">
              Explore more
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-4 h-96 text-primary rounded-sm border border-muted"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
