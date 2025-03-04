import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-8rem)] bg-background py-10">
      <div className="w-full h-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="h-full flex flex-col justify-center">
          <div className="flex lg:flex-row flex-col lg:justify-center items-center gap-10 lg:-translate-y-20">
            <div className="w-full lg:w-1/2 mx-auto lg:text-center text-center">
              <span className="inline-block bg-background rounded-4xl border-2 border-secondary text-secondary text-sm font-medium px-4 py-1 mb-2">
                #1 in High-Trust Recruiting
              </span>

              <h1 className="text-6xl text-primary font-extrabold mb-8">Key Halo</h1>

              <div className="mb-10">
                <p className="text-primary text-2xl font-medium mb-6">
                  The Way Recruiting and Total Team Success Should Be!
                </p>

                <p className="text-sm text-primary">
                  Recruiting and Total Team Success are Not Easy. Since 1999, KeyHalo does Hard well — creating a much
                  better experience.
                </p>
              </div>

              <Button
                variant="destructive"
                size="xl"
                className="text-lg font-semibold rounded-3xl hover:bg-destructive"
              >
                Request a Consultation
                <MoveRight className="size-8" />
              </Button>
            </div>

            <div className="hidden">
              <Image src="/images/octa-bg.webp" width={400} height={400} alt="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
