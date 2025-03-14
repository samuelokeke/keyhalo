import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section>
      <AboutUsBanner />

      <div className="bg-background py-20">
        <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
          <div className="mb-16 text-center">
            <h1 className="text-3xl text-primary-50 font-extrabold mb-2">About Us</h1>
            <p className="text-muted-foreground text-base font-medium">
              We are a team of experienced professionals who are dedicated to providing the best possible service to our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="">
              <Image src="/images/about-us.jpg" alt="About Us" width={700} height={500} />
            </div>

            <div className="">
              <div className="mb-6">
                <h2 className="text-xl text-primary-50 font-bold mb-2">Our Mission</h2>

                <p className="text-muted-foreground text-base font-medium">
                  We are a team of experienced professionals who are dedicated to providing the best possible service to
                  our clients.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-primary-50 font-bold mb-2">Our Vision</h2>

                <p className="text-muted-foreground text-base font-medium">
                  We are a team of experienced professionals who are dedicated to providing the best possible service to
                  our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUsBanner = () => {
  return (
    <div className="h-96 bg-primary bg-radial-[circle_at_50%] from-primary-50 to-primary text-white py-12">
      <div className="w-full h-full lg:max-w-7xl mx-auto px-6 lg:px-4">
			
        <div className="w-full mx-auto lg:w-1/2 h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold text-center mb-6">About Us</h1>

          <p className="text-muted/70 text-base text-center font-medium">
            Empowering businesses with innovative staffing solutions and connecting talented professionals with
            rewarding career opportunities since 2010.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
