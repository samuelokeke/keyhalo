"use client";

import MultiStepForm from "@/components/shared/multi-step-forms";
import React from "react";

const ConsultationForm = () => {
  return (
    <section className="bg-background py-12">
      <div className="w-full h-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2">Consultation Form</h2>
          <p className="text-muted-foreground text-sm font-medium">
            Please fill out the form below to schedule a consultation with us.
          </p>
        </div>

        <div className="grid place-items-center">
          <div className="w-full lg:w-1/2">
            <MultiStepForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
