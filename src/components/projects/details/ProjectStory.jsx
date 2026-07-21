export default function ProjectStory({ project }) {
  const paragraphs = project.paragraphs || [];
  const initialParagraphs = paragraphs.slice(0, 2);
  const remainingParagraphs = paragraphs.slice(2);
  const storyImage = project.heroImage;

  return (
    <section className="mt-0 pt-0" dir="ltr">
   

      <div className="max-w-4xl space-y-4 text-base leading-7 text-slate-600">
        {initialParagraphs.map((text, index) => (
          <p key={index}>
            {text}
          </p>
        ))}
      </div>


      {storyImage && (
        <div className="my-6">
          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">

            <img
              src={storyImage}
              alt={project.title}
              loading="lazy"
              className="
                h-[420px]
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

          </div>
        </div>
      )}


      {remainingParagraphs.length > 0 && (
        <div className="max-w-4xl space-y-4 text-base leading-7 text-slate-600">

          {remainingParagraphs.map((text, index) => {
            const isLast =
              index === remainingParagraphs.length - 1;

            return isLast ? (
              <p
                key={index}
                className="
                  border-l-4
                  border-pink-500
                  bg-pink-50
                  px-4
                  py-3
                  font-medium
                  text-slate-700
                "
              >
                {text}
              </p>
            ) : (
              <p key={index}>
                {text}
              </p>
            );
          })}

        </div>
      )}

    </section>
  );
}