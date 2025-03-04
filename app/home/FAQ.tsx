"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  { question: "What is Key Halo?", answer: "Key Halo is a recruiting firm that helps professionals get quality jobs" },
  { question: "What makes Key Halo different?", answer: "Key Halo is different because we are the best at what we do" },
  { question: "How can I get started with Key Halo?", answer: "You can get started by signing up on our platform" },
  { question: "Does Key Halo offer remote jobs?", answer: "Yes, we offer remote jobs" },
  { question: "Is there a fee to use Key Halo?", answer: "No, Key Halo is free to use" },
  { question: "What is the capital of Nigeria?", answer: "Abuja" },
  { question: "What is the capital of Ghana?", answer: "Accra" },
  { question: "What is the capital of Kenya?", answer: "Nairobi" },
  { question: "What is the capital of South Africa?", answer: "Pretoria" },
  { question: "What is the capital of Egypt?", answer: "Cairo" },
];

const FrequentlyAskQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = React.useState<Faq | null>(faqs[0]);

  return (
    <section className="bg-white py-20">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="rounded-4xl lg:p-6 lg:border-2 border-muted">
          <div className="mb-12">
            <h2 className="text-3xl text-accent font-black mb-2">Frequently Ask Questions</h2>
            <p className="text-foreground">What peoples have to tell about our values</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold">Asked Questions</h2>

              <div className="max-h-[calc(100vh-25rem)] overflow-y-auto" data-lenis-prevent>
                <ul className="flex flex-col gap-4 text-sm">
                  {faqs.map((faq, i) => (
                    <li
                      key={i}
                      onClick={() => setSelectedQuestion(faq)}
                      className="text-base text-primary font-medium transition-all p-3 border-2 border-muted rounded-md cursor-pointer"
                    >
                      {faq.question}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold">Answer</h2>

              <div className="flex-grow bg-primary text-primary-foreground rounded-2xl p-6">
                <AnimatePresence key={selectedQuestion?.answer}>
                  {selectedQuestion && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="text-base font-medium"
                    >
                      {selectedQuestion?.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskQuestions;
