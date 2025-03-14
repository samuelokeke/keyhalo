import React from "react";
import ContactUsForm from "./ContactForm";

const ContactUsPage = () => {
  return (
    <section>
      <ContactBanner />

      <div className="bg-background py-20">
        <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-4">
          <div className="mb-16 text-center">
            <h1 className="text-3xl text-primary-50 font-extrabold mb-2">Contact Form</h1>
            <p className="text-muted-foreground text-base font-medium">
              Fill out the form below to get in touch with us. We&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="">
              <iframe
                title="key halo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224615.8761503828!2d-75.27224892206765!3d39.984548086835325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA%2C%20USA!5e0!3m2!1sen!2sng!4v1741939283214!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactBanner = () => {
  return (
    <div className="h-96 bg-primary bg-radial-[circle_at_50%] from-primary-50 to-primary text-white py-12">
      <div className="w-full h-full lg:max-w-7xl mx-auto px-6 lg:px-4">
        <div className="w-full mx-auto lg:w-1/2 h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold text-center mb-6">Contact Us</h1>

          <p className="text-muted/70 text-base text-center font-medium">
            We are a team of experienced professionals who are dedicated to providing the best possible service to our
            clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
