import react from "react";
import StatsCardSection from "./StatsCardSection";

export default function ImpactHeroSection() {
  return (
    <section className="bg-brand-primary text-white py-15 px-7">
     <div className="text-center flex flex-col gap-3">
        <span className ="text-sm  uppercase text-White-300">
          Impact</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold text-white">
             Measuring What Matters</h1>
             <p className="mt-6 text-lg text-gray-300 leading-relaxed">
             Afghan Geeks is more than an education programme—it is a statement
             about who gets to build the future.</p>
       </div>
    </section>
  );
}