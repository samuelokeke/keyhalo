import React from "react";

const testimonies = [
  { title: "", content: "", name: "Harvard Business Review" },
  { title: "", content: "", name: "Harvard Business Review" },
  { title: "", content: "", name: "Harvard Business Review" },
  { title: "", content: "", name: "Harvard Business Review" },
  { title: "", content: "", name: "Harvard Business Review" },
  { title: "", content: "", name: "Harvard Business Review" },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold mb-2">Testimonials</h1>
          <p className="font-medium">What peoples have to tell about our values</p>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonies.map((testimony, i) => (
              <div key={i} className="px-4 py-6 border rounded">
                <h2 className="text-lg font-bold mb-6">{testimony.title}</h2>

                <p className="text-sm font-medium">{testimony.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
