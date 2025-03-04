"use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     syncTouch: false, // Ensures touch works properly
  //     autoRaf: true, // Enable auto requestAnimationFrame
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy(); // Cleanup on unmount
  //   };
  // }, []);

  return <>{children}</>;
}
