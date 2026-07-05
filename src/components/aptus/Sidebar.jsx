import AptusCard from "./AptusCard";
import BrowseCard from "./BrowseCard";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-6">
      <AptusCard />
      <BrowseCard />
    </div>
  );
}