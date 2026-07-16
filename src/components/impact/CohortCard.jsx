"use client";

import {CircularProgressbar,buildStyles,} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CohortCard({
  name,
  year,
  graduates,
  progress,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-5">

        {/* Progress Circle */}
        <div className="w-20 h-20">
            <CircularProgressbar value={progress} text={`${progress}%`} styles={buildStyles({
            pathColor: "#059669", trailColor: "#ecfdf5", textColor: "#065f46",textSize: "20px",strokeLinecap: "round",})}/>
        </div>

        {/* Cohort Information */}
        <div>
            <h3 className="text-lg font-bold text-gray-900">
            {name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
            Year: {year}
            </p>
            <p className="text-sm text-gray-600 mt-1">
            {graduates}
            </p>
        </div>
        </div>
        </div>
        );
    }