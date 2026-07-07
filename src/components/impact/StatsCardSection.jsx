import react from "react";

export default function StatsCardSection() {
  return (
     <section className="bg-brand-primary text-white py-20 px-6">
         <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">       
         <div className="flex flex-col items-center text-center gap-1 bg-brand-Secondary-light rounded-2xl p-6">
          <span className="text-5xl font-bold">100</span>
          <span className="text-green-200 text-sm">Graduates</span>
          </div>
           <div className="flex flex-col items-center text-center gap-1 bg-brand-Secondary-light rounded-2xl p-6">
          <span className="text-5xl font-bold">20</span>
          <span className="text-green-200 text-sm">Project shipped</span>
          </div>
           <div className="flex flex-col items-center text-center gap-1 bg-brand-Secondary-light rounded-2xl p-6">
          <span className="text-5xl font-bold">3</span>
          <span className="text-green-200 text-sm">Cohorts</span>
          </div>
           <div className="flex flex-col items-center text-center gap-1 bg-brand-Secondary-light rounded-2xl p-6">
          <span className="text-5xl font-bold">14</span>
          <span className="text-green-200 text-sm">Skills Taught</span>
          </div>
           <div className="flex flex-col items-center text-center gap-1 bg-brand-Secondary-light rounded-2xl p-6">
          <span className="text-5xl font-bold">6</span>
          <span className="text-green-200 text-sm">Currently Available</span>
          </div>
           <div className="flex flex-col items-center text-center gap-1 bg-brand-Secondary-light rounded-2xl p-6">
          <span className="text-5xl font-bold">4</span>
          <span className="text-green-200 text-sm">Employed</span>
          </div>
        </div>
    </section>
    );
} 

  
     