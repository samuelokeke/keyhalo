import Image from "next/image";
import React from "react";

const Guidelines = () => {
  return (
    <section className="bg-accentx text-primary py-20">
      <div className="w-full lg:max-w-7xl h-full mx-auto px-6 lg:px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Guidelines</h2>
          <p className="text-lg font-medium">Easy workflow to get our attention</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold">Get in touch with these simple steps</h2>

            <div className="overflow-y-auto">
              <ul className="relative list-counter flex flex-col gap-4 text-sm font-medium pl-16 before:absolute before:w-1 before:h-full before:bg-primary before:left-6">
                <li className="relative before:absolute before:content-[''] before:w-12 before:h-12 before:-left-16 before:top-0 before:bg-primary before:text-xl before:text-white before:rounded-full text-primary transition-all p-4 border-2 border-muted rounded-md cursor-pointer">
                  <p>Fill the form with your details</p>
                </li>
                <li className="relative before:absolute before:content-[''] before:w-12 before:h-12 before:-left-16 before:top-0 before:bg-primary before:text-xl before:text-white before:rounded-full text-primary transition-all p-4 border-2 border-muted rounded-md cursor-pointer">
                  <p>Wait for our response</p>
                </li>
                <li className="relative before:absolute before:content-[''] before:w-12 before:h-12 before:-left-16 before:top-0 before:bg-primary before:text-xl before:text-white before:rounded-full text-primary transition-all p-4 border-2 border-muted rounded-md cursor-pointer">
                  <p>Get your job done</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-start">
            <Image src="/images/placement.jpg" width={600} height={400} className="w-auto h-auto" alt="placement" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
