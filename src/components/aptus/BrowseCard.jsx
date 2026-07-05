import { ArrowRight } from "lucide-react";

export default function BrowseCard() {
  return (
    <div className="mt-auto rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">
        Browse Graduates
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        Explore successful graduate profiles and discover inspiring academic
        journeys.
      </p>

      <button
        className="
          mt-6
          flex
          w-full
          items-center
          justify-between
          rounded-2xl
          bg-[#111827]
          px-5
          py-4
          text-white
          transition-all
          duration-300
          hover:bg-black
        "
      >
        <span className="font-medium">
          View All Graduates
        </span>

        <ArrowRight size={20} />
      </button>
    </div>
  );
}