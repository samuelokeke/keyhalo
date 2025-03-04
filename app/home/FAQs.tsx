import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "What is Key Halo?", answer: "Key Halo is a recruiting firm that helps professionals get quality jobs" },
  { question: "What makes Key Halo different?", answer: "Key Halo is different because we are the best at what we do" },
  { question: "How can I get started with Key Halo?", answer: "You can get started by signing up on our platform" },
  { question: "Does Key Halo offer remote jobs?", answer: "Yes, we offer remote jobs" },
  { question: "Is there a fee to use Key Halo?", answer: "No, Key Halo is free to use" },
];

const FAQsAccordion = () => {
  return (
    <section className="bg-background py-20">
      <div className="w-full lg:max-w-7xl h-full mx-auto px-6 lg:px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-accent font-extrabold mb-2">Frequently Ask Questions</h2>
          <p className="text-muted-foreground font-medium">What peoples have to tell about our values</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-background text-foreground border not-last:border-b-0 last:border-b border-accent first:rounded-t last:rounded-b px-6"
            >
              <AccordionTrigger className="text-base hover:no-underline [&>svg]:size-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQsAccordion;
