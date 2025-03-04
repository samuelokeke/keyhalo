import { Globe, MountainIcon, OrbitIcon } from "lucide-react";
import React from "react";

const Blog = () => {
  return (
    <section className="relative bg-primary py-20">
      <div className="w-full lg:max-w-7xl h-full mx-auto px-6 lg:px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl text-accent font-extrabold mb-2">Our Blog</h2>
          <p className="text-lg text-white">Learn more about what we are doing</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="card-gradient col-span-12 lg:col-span-4 bg-background rounded-md p-6">
            <div className="rounded-xl bg-primary p-4 w-16 h-16 flex items-center justify-center mb-6">
              <Globe className="text-white size-8" />
            </div>

            <div className="font-medium">
              <h2 className="text-xl font-bold mb-6">How to land a 6 figure job</h2>

              <p className="text-sm text-muted-foreground">What peoples have to tell about our values</p>
            </div>
          </div>

          <div className="card-gradient col-span-12 lg:col-span-4 bg-background rounded-md p-6">
            <div className="rounded-xl bg-primary p-4 w-16 h-16 flex items-center justify-center mb-6">
              <OrbitIcon className="text-white size-8" />
            </div>

            <div className="font-medium">
              <h2 className="text-xl font-bold mb-6">What they don&apos;t tell you about interview</h2>

              <p className="text-sm text-muted-foreground mb-4">
                What peoples have to tell about our values isn&apos;t solely about the quality of jobs you are able to
                find, but your chances of landing a job is assured.
              </p>

              <p className="text-sm text-muted-foreground">
                What peoples have to tell about our values isn&apos;t solely about the quality of jobs you are able to
                find, but your chances of landing a job is assured.
              </p>
            </div>
          </div>

          <div className="card-gradient col-span-12 lg:col-span-4 bg-background rounded-md p-6">
            <div className="rounded-xl bg-primary p-4 w-16 h-16 flex items-center justify-center mb-6">
              <MountainIcon className="text-white size-8" />
            </div>

            <div className="font-medium">
              <h2 className="text-xl font-bold mb-6">Why international companies prefer outsourcing</h2>

              <p className="text-sm text-muted-foreground">What peoples have to tell about our values</p>
            </div>
          </div>
        </div>
      </div>

      <svg className="absolute left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--primary)"
          fillOpacity="1"
          d="M0,224L288,96L576,64L864,160L1152,64L1440,192L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Blog;
