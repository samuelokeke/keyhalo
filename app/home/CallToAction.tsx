import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-accent bg-[radial-gradient(circle_at_left_center,_var(--destructive),_transparent_60%),radial-gradient(circle_at_right_center,_var(--destructive),_transparent_40%)] py-20">
      <div className="w-full lg:max-w-7xl h-full mx-auto px-6 lg:px-4">
        <div className="grid place-content-center place-items-center text-center p-20">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl text-white font-semibold mb-16">
              Make data-driven improvements to your hiring experience
            </h1>

            <h2 className="text-2xl font-bold"></h2>

            <Button
              variant="ghost"
              size="xl"
              className="rounded-4xl bg-gradient-to-b from-primary/90 via-primary/90 to-black/90 hover:bg-primary"
            >
              Book a Consultation
              <ArrowUpRight className="size-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
