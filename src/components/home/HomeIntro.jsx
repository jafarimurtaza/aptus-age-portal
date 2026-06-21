import React from "react";

export default function HomeIntro() {
  return (
    <div>
      <span className="text-base-content text-center">
        Afghan Geeks Education
      </span>

      <h1 className="text-4xl text-primary">Afghan Geeks Graduates</h1>

      <h4 className="text-base-content/70">
        Real talent. Real projects. Ready to build.
      </h4>

      <div className="flex items-center gap-4">
        <button className="btn btn-secondary">Hire Graduates</button>
        <button className="btn btn-outline btn-primary">Try Aptus AI</button>
      </div>
    </div>
  );
}
