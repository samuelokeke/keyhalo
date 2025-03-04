import Articles from "./home/Articles";
import Blog from "./home/Blog";
import CallToAction from "./home/CallToAction";
import FrequentlyAskQuestions from "./home/FAQ";
import FAQsAccordion from "./home/FAQs";
import Guidelines from "./home/Guidelines";
import Hero from "./home/Hero";
import OurClients from "./home/OurClients";
import SecondHero from "./home/SecondHero";
import ServiceTabs from "./home/ServiceTabs";
import Testimonials from "./home/Testimonials";
import WhoWeAre from "./home/WhoWeAre";
import WhyWorkWithUs from "./home/WhyWorkWithUs";

export default function Home() {
  return (
    <div className="">
      <Hero />

      <SecondHero />

      <WhoWeAre />

      <Guidelines />

      <ServiceTabs />

      <WhyWorkWithUs />

      <Articles />

      <FrequentlyAskQuestions />

      <FAQsAccordion />

      <OurClients />

      <Testimonials />

      <Blog />

      <CallToAction />
    </div>
  );
}
