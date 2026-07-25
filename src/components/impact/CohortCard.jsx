"use client";

import {CircularProgressbar,buildStyles,} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CohortCard({
    name, year, graduates, progress,}) {
        return (
        <div className="bg-[#F3F4F6]  rounded-2xl p-6 text-center shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-8">

        {/* Progress Circle */}
        <div className="w-20 h-20">
            <CircularProgressbar value={progress} text={`${progress}%`} styles={buildStyles({
            pathColor: "#C8955A", trailColor: "#E8E1D6", textColor: "#1B3A6B",textSize: "20px",strokeLinecap: "round",})}/>
        </div>
        {/* Cohort Information */}
        <div>
            <h3 className="text-lg font-bold text-[#1B3A6B]">
            {name}
            </h3>
            <p className="text-sm dark mt-1">
            Year: {year}
            </p>
            <p className="text-sm dark mt-1">
            {graduates}
            </p>
        </div>
        </div>
        </div>
        );
    }