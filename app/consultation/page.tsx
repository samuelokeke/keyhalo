import React from "react";
import MultiStepForm from "@/components/shared/multi-step-forms";

const Consultation = () => {
  return (
    <section>
      <ConsultationBanner />

      <div className="bg-background py-20">
        <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl text-primary-50 font-extrabold mb-2">Consultation Form</h2>
            <p className="text-muted-foreground text-base font-medium">
              Please fill out the form below to schedule a consultation with us.
            </p>
          </div>

          <div className="grid place-items-center">
            <div className="w-full lg:w-1/2">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConsultationBanner = () => {
  return (
    <div className="h-96 bg-primary bg-radial-[circle_at_50%] from-primary-50 to-primary text-accent py-12">
      <div className="w-full h-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="w-full mx-auto lg:w-1/2 h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold text-center mb-6">Consultation</h1>

          <p className="text-muted/70 text-base text-center font-medium">
            Schedule a consultation with our expert team to discuss your staffing needs and discover tailored solutions
            for your business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
