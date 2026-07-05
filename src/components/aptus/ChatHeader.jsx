import { MoreVertical } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-5">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white">
          A
        </div>

        {/* Title */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Chat with Aptus
          </h2>

          <div className="mt-1 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

            <span className="text-sm text-gray-500">
              Online
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <button
        className="rounded-full p-2 transition hover:bg-gray-100"
        aria-label="More options"
      >
        <MoreVertical size={20} className="text-gray-600" />
      </button>
    </header>
  );
}