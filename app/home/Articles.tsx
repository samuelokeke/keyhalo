import { Button } from "@/components/ui/button";
import React from "react";

const articles = [
  {
    title: "Who We Work With (And Who We Don't)",
    content:
      "Tire Talent is a boutique search firm that specializes in tire, auto, truck, OTR, farm and ag, and the rubber industries. With over 30 years of experience in talent acquisition, we are your trusted partner for reliable and skilled professionals you can depend on.",
  },
  {
    title: "Who We Most Enjoy Working With",
    content:
      "Tire Talent is a boutique search firm that specializes in tire, auto, truck, OTR, farm and ag, and the rubber industries. With over 30 years of experience in talent acquisition, we are your trusted partner for reliable and skilled professionals you can depend on.",
  },
  {
    title: "Who We’re NOT The Right Fit For",
    content:
      "Tire Talent is a boutique search firm that specializes in tire, auto, truck, OTR, farm and ag, and the rubber industries. With over 30 years of experience in talent acquisition, we are your trusted partner for reliable and skilled professionals you can depend on.",
  },
];

const Articles = () => {
  return (
    <section className="bg-muted bg-pattern-2 py-20">
      <div className="w-full lg:max-w-7xl h-full mx-auto px-6 lg:px-4">
        <div className="relative min-h-screen grid place-content-center">
          {articles.map((article, i) => (
            <div key={i} className="bg-background sticky top-26 h-screen border-t-4 border-muted rounded-2xl shadow-md">
              <div className="px-6 py-12">
                <h1 className="text-xl font-bold mb-6">{article.title}</h1>

                <p className="text-base mb-8">{article.content}</p>

                <Button variant="ghost" size="lg">
                  See more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
