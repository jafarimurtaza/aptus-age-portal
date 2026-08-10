    "use client";

    import {CircularProgressbar, buildStyles,} from "react-circular-progressbar";
    import "react-circular-progressbar/dist/styles.css";
    export default function CohortCard({ name, year, graduates, progress }) {
    return (
        <div className="bg-base-200 rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-4 sm:gap-8">
        <div className="w-14 h-14 sm:w-20 sm:h-20">
            <CircularProgressbar value={progress} text={`${progress}%`} styles={buildStyles({
                pathColor: "#C8955A", trailColor: "#E8E1D6", textColor: "base-content", textSize: "20px", strokeLinecap: "round", })}/>
            </div>
        <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold text-[#1B3A6B]">
                {name}
            </h3>
            <p className="text-xs sm:text-sm mt-1">Year: {year}</p>
            <p className="text-xs sm:text-sm mt-1">{graduates}</p>
            </div>

        </div>
        </div>
    );
    }