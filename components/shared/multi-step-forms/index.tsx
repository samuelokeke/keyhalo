"use client";

import React from "react";
import { useFormStore } from "./store";
import PersonalForm from "./PersonalForm";
import BasicForm from "./BasicForm";
import AdvancedForm from "./AdvancedForm";

const MultiStepForm = () => {
  const { currentStep } = useFormStore();

  console.log(currentStep, 'currentStep')

  return (
    <div className="">
      {currentStep === 0 && <PersonalForm />}
      {currentStep === 1 && <BasicForm />}
      {currentStep === 2 && <AdvancedForm />}
    </div>
  );
};

export default MultiStepForm;
