import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Quotes = () => {
  return (
    <section className="bg-background py-20">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <Accordion type="single" collapsible className="w-full mb-12">
          <AccordionItem
            value="item 1"
            className="bg-background text-foreground border not-last:border-b-0 last:border-b border-muted-foreground first:rounded-t last:rounded-b px-6"
          >
            <AccordionTrigger className="text-base font-semibold hover:no-underline [&>svg]:size-5">
              How KeyHalo is #1 in Each of Six Key Metrics Driving Recruiting & Total Team Success.
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium leading-6">
              <div className="grid lg:grid-cols-3 gap-y-6 lg:gap-6 mt-6">
                <div className="rounded p-6 border border-muted-foreground">
                  <p className="mb-4">
                    Hiring the right people — the right way — is the #1 controllable factor in long-term business
                    success.
                  </p>

                  <p>
                    That&apos;s why Winning Companies Don&apos;t Accept the Status Quo, and They Don&apos;t Gamble on
                    Hiring — They Proactively Invest.
                  </p>
                </div>
                <div className="rounded p-6 border border-muted-foreground">
                  <p>
                    With KeyHalo, your investment in the right way of hiring & total team success — is fielding the best
                    offense and defense — helping you hire, retain, and develop your #1 team — so you can FOCUS,
                    dominate your market, and drive measurable, compounding return-on-investment (ROI) year after year.
                  </p>
                </div>
                <div className="rounded p-6 border border-muted-foreground">
                  <p className="mb-4">
                    With KeyHalo, Hiring Isn&apos;t a Cost; It&apos;s a business accelerator. Regardless of compensation
                    or complexity levels, every hire can be a High-Yielding Business Asset.
                  </p>

                  <p>
                    KeyHalo is your proven, risk-free, fail-safe hiring & total team success model so that your hiring
                    investment outperforms every other business decision you make — Financially, Operationally &
                    Strategically.
                  </p>
                </div>
                <div className="rounded p-6 border border-muted-foreground">
                  <p className="mb-4">
                    You Wouldn&apos;t Accept Other Investments That Are Second-Rate — So Why Accept Hiring That Way?
                  </p>

                  <p>
                    Leaders demand high returns on financial investments — yet many unknowingly accept low returns (or
                    outright losses) on hiring, without realizing the full cost.
                  </p>
                </div>
                <div className="rounded p-6 border border-muted-foreground">
                  <p className="">
                    Want to Secure Your Hiring & Total Team Success Edge along with KeyHalo Hiring Annual ROI of 47% and
                    IRR of 55%, plus the Leadership Development Program Annual ROI of 1,010%.
                  </p>
                </div>
              </div>

              <div className="grid place-content-center my-12">
                <Button size="lg">Let&apos;s Talk ASAP & Reserve Your Spot</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-2xl font-bold my-12">
          <h1>Is Your Company Struggling with Talent Acquisition and/or Retention? If So, You&apos;re Not Alone.</h1>
        </div>

        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10 mb-12">
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            <div className="border border-secondary hover:border-primary p-4 lg:p-6 rounded">
              <h1 className="text-6xl text-muted font-black mb-2">01</h1>

              <p className="text-sm font-medium">
                Most people have long realized that the traditional hiring process has long been broken. “The vast
                majority (77%) of business leaders report that their companies neither recruit enough highly talented
                people, nor believe that their current acquisition and retention strategies will work.”
              </p>
            </div>

            <div className="border border-secondary hover:border-primary p-4 lg:p-6 rounded">
              <h1 className="text-6xl text-muted font-black mb-2">02</h1>

              <p className="text-sm font-medium">
                “The ability to make good decisions about people represents one of the last reliable sources of
                competitive advantage, since very few organizations do it well.” — Peter Drucker, renowned management
                consultant, and widely considered the father of modern management.
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Image src="/images/facade.jpg" width={400} height={400} alt="facade" />
          </div>
        </div>

        <div className="text-2xl font-bold mb-8">
          <h1>Case Study of Real Success: From Dead Last to #1 in Just 5 Months</h1>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm font-medium">
              See how KeyHalo&apos;s winning process of high-trust, high-touch, proactive, relationship-based recruiting
              & total team success in just five months turned a failing{" "}
              <span className="font-bold">$35M manufacturing subsidiary</span> from the lowest performer in a 13-site
              U.S. operations group into a high-margin, high-growth industry leader — consistently ranking #1 or #2
              monthly.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-12">
            <AccordionItem
              value="proof 1"
              className="bg-background text-foreground border not-last:border-b-0 last:border-b border-muted-foreground first:rounded-t last:rounded-b px-6"
            >
              <AccordionTrigger className="text-base font-semibold hover:no-underline [&>svg]:size-5">
                Read the full Brief Case Study → [Unlock how KeyHalo Helped Engineer This Turnaround in Five Months from
                Start]
              </AccordionTrigger>
              <AccordionContent className="text-sm font-medium leading-6">
                Real Employers. Real Success.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="proof 2"
              className="bg-background text-foreground border not-last:border-b-0 last:border-b border-muted-foreground first:rounded-t last:rounded-b px-6"
            >
              <AccordionTrigger className="text-base font-semibold hover:no-underline [&>svg]:size-5">
                Want more proof? Read Brief Testimonials from Other Clients & Candidates →
              </AccordionTrigger>
              <AccordionContent className="text-sm font-medium leading-6">
                <div className="flex flex-col gap-4">
                  <p>
                    How a Failing Last-Place $35M Subsidiary Became a High-Performing, Profitable Operation—Consistently
                    Ranking #1 or #2 Among 13 Sister Companies in Its U.S. Operations Group
                  </p>

                  <p>
                    Our U.S. operations acquired an underperforming $35M manufacturing subsidiary, but despite major
                    investments in plant & equipment, revenue dropped, costs soared, and culture clashes emerged.
                    Performance ranked dead last among our 13 U.S. locations.
                  </p>

                  <p>
                    Talks began about selling the subsidiary—even at a significant loss. After months of internal
                    delays, as the U.S. VP of HR, I received approval to bring in KeyHalo&apos;s turnaround approach of
                    high-trust recruiting & total team success.
                  </p>

                  <p>KeyHalo&apos;s results were not just good—they were transformational.</p>

                  <ul className="space-y-2 my-2">
                    <li>
                      ✅ Seven Best-in-Class Leaders Hired In just four months, KeyHalo delivered exceptional,
                      high-performing leaders—each the best in their field. Some were diamonds in the rough, and all
                      aligned seamlessly to create a culture of excellence — a team where people wanted to contribute
                      their best.
                    </li>
                    <li>
                      ✅ From Dead Last to #1 in Just 5 Months By month five, after first contacting KeyHalo, the entire
                      operation had turned around. It was an amazing experience! What was once a problem-ridden
                      subsidiary became a high-margin, high-growth success story—quickly rising from the weakest link
                      among 13 locations to consistently ranking #1 or #2 across key performance categories.
                    </li>
                  </ul>

                  <p>
                    The turnaround was so dramatic, we began sending leadership teams from other locations to study and
                    replicate their success.
                  </p>

                  <p>What we once considered selling at a loss, we began reinvesting in instead.</p>

                  <p>
                    KeyHalo didn&apos;t just fill jobs—they built a high-performing, well-aligned team that completely
                    revitalized the work environment.
                  </p>
                  <p>KeyHalo is a trustworthy, high-value recruiting partner — a catalyst for outstanding success.</p>

                  <p>
                    We have subsequently relied on KeyHalo to help us win with challenging hard-to-fill roles across
                    multiple sites. KeyHalo delivered exceptional results there too.
                  </p>

                  <p>
                    Kevin T., VP Human Resources, U.S. Operations, Multinational Manufacturer ($3B Annual Revenue),
                    Building Systems and Hardware Supplier
                  </p>

                  <p>
                    With our recruiting & total team success experience, imagine how we can help build your #1 team.
                  </p>

                  <div className="flex items-center justify-center place-content-center gap-x-6 my-8">
                    <p className="text-xl font-bold underline underline-offset-3">Let&apos;s talk</p>
                    <Button size="lg">Schedule a Call</Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
