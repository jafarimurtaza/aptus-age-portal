import ChatCard from "./ChatCard";
import Button from "./Button";

export default function AptusMain() {
  return (
    <section className="relative overflow-hidden bg-[#163F32] py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl"></div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row">

        {/* ========================= */}
        {/* Left Content */}
        {/* ========================= */}
        <div className="max-w-xl text-center lg:text-left animate-fade-in">

          {/* Small Label */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Aptus AI
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find the right talent
            <br />
            in minutes
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg leading-9 text-gray-200">
            Aptus is Afghan Geeks&apos; intelligent talent-matching assistant.
            Describe your team&apos;s needs in plain language and Aptus surfaces
            the right graduate profiles semantically—no keywords, no filters,
            just conversation.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Button>
              Start Conversation
            </Button>
          </div>

        </div>

        {/* ========================= */}
        {/* Right Content */}
        {/* ========================= */}
        <div className="relative flex w-full justify-center lg:w-1/2">

          {/* Soft Glow Behind Card */}
          <div className="absolute h-80 w-80 rounded-full bg-green-400/20 blur-3xl"></div>

          <div className="relative animate-float">
            <ChatCard />
          </div>

        </div>

      </div>
    </section>
  );
}