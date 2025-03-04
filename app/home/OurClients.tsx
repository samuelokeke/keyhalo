"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
];

const OurClients = () => {
  return (
    <section className="bg-white py-10">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-2">Our Clients</h2>
          <p className="text-lg text-muted-foreground font-medium">What peoples have to tell about our values</p>
        </div>

        <PrimaryClients />
      </div>
    </section>
  );
};

export default OurClients;

const PrimaryClients = () => {
  return (
    <div className="mask-lr flex items-center justify-centerx gap-8 py-4 overflow-x-auto">
      {[...Array(10).keys()].map((_, i) => (
        <div key={i} className="flex-1 w-80 p-8 border border-muted"></div>
      ))}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SecondaryClients = () => {
  return (
    <div className="relative flex overflow-hidden w-full py-4">
      <motion.div
        className="flex space-x-8 min-w-max"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
          yoyo: Infinity,
        }}
      >
        {[...clients, ...clients].map((logo, index) => (
          <Image key={index} src={logo} alt={`Client ${index}`} className="h-16 w-auto object-contain" />
        ))}
      </motion.div>
    </div>
  );
};
