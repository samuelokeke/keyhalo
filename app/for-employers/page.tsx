import React from "react";
import Hero from "./Hero";
import Quotes from "./Quotes";
import WhatClientsSay from "./WhatClientsSay";
import WhatCandidatesSay from "./WhatCandidatesSay";
import ConsultationForm from "./ConsultationForm";

const ForBusinessPage = () => {
  return (
    <div>
      <Hero />

      <Quotes />

      <WhatClientsSay />

      <WhatCandidatesSay />

      <ConsultationForm />
    </div>
  );
};

export default ForBusinessPage;
