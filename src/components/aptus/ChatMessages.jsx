export default function ChatMessages() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#184D3B] text-sm font-semibold text-white">
          A
        </div>

        {/* Message */}
        <div className="max-w-xl rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-[15px] leading-7 text-gray-700">
            Hello! I&apos;m Aptus, Afghan Geeks&apos; AI talent matcher.
            What kind of talent are you looking for today?
          </p>
        </div>
      </div>
    </div>
  );
}