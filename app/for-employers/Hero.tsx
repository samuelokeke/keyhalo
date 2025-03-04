import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-background py-20 border-b border-muted">
      <div className="w-full h-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="h-full flex flex-col justify-center">
          <div className="flex lg:flex-row flex-col lg:justify-center items-center gap-8">
            <div className="w-full lg:w-1/2 mx-auto lg:text-center text-center">
              <span className="inline-block bg-background rounded-4xl border-2 border-secondary text-secondary text-sm font-medium px-4 py-1 mb-2">
                #1 in High-Trust Recruiting
              </span>

              <h1 className="text-5xl text-primary font-extrabold mb-8">Key Halo <span className="text-secondary">For Employers</span></h1>

              <div className="mb-10">
                <p className="text-primary text-xl font-bold mb-6">
                  The Only Recruiting Investment That Pays for Itself — & Much More.
                </p>
                
                <p className="text-primary text-lg font-medium">
                  Recruiting and Total Team Success are Not Easy. Since 1999, KeyHalo does Hard well — creating a much
                  better experience.
                </p>
              </div>

              <Button
                variant="secondary"
                size="xl"
                className="text-lg font-semibold rounded-3xl hover:bg-secondary"
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
