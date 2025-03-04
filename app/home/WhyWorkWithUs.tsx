import { Globe, MountainIcon, OrbitIcon } from "lucide-react";
import React from "react";

const WhyWorkWithUs = () => {
  return (
    <section className="bg-primary py-20">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl text-accent font-extrabold mb-2">Why Work With Us</h2>
          <p className="text-lg text-white">Winning Starts with the Right People — and us serving the right people, our tribe.</p>

          <hr className="block bg-accent w-24 h-1 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="card-gradient col-span-12 lg:col-span-4 bg-background rounded-md p-6">
            <div className="rounded-xl bg-primary p-4 w-16 h-16 flex items-center justify-center mb-6">
              <Globe size="40" color="#fff" />
            </div>

            <div className="font-medium">
              <h2 className="text-xl font-bold mb-6">How to land a 6 figure job</h2>

              <p className="text-sm text-muted-foreground">What peoples have to tell about our values</p>
            </div>
          </div>

          <div className="card-gradient col-span-12 lg:col-span-4 bg-background rounded-md p-6">
            <div className="rounded-xl bg-primary p-4 w-16 h-16 flex items-center justify-center mb-6">
              <OrbitIcon size="40" color="#fff" />
            </div>

            <div className="font-medium">
              <h2 className="text-xl font-bold mb-6">What they don&apos;t tell you about interview</h2>

              <p className="text-sm text-muted-foreground mb-4">
                What peoples have to tell about our values isn&apos;t solely about the quality of jobs you are able to
                find, but your chances of landing a job is assured.
              </p>
            </div>
          </div>

          <div className="card-gradient col-span-12 lg:col-span-4 bg-background rounded-md p-6">
            <div className="rounded-xl bg-primary p-4 w-16 h-16 flex items-center justify-center mb-6">
              <MountainIcon size="40" color="#fff" />
            </div>

            <div className="font-medium">
              <h2 className="text-xl font-bold mb-6">Why international companies prefer outsourcing</h2>

              <p className="text-sm text-muted-foreground">What peoples have to tell about our values</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
