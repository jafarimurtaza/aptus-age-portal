export default function ProjectStory({ project }) {
  const paragraphs = project.paragraphs || [];
  
  // تقسیم پاراگراف‌ها: ۲ تای اول قبل از عکس، بقیه بعد از عکس قرار می‌گیرند
  const initialParagraphs = paragraphs.slice(0, 2);
  const remainingParagraphs = paragraphs.slice(2);

  // دریافت عکس‌های گالری (حداکثر ۲ عکس)
  const galleryImages = project.galleryImages?.length > 0 
    ? project.galleryImages.slice(0, 2) 
    : [project.storyImage, project.storyImage].filter(Boolean);

  return (
    <section className="mt-12 border-t border-slate-100 pt-10" dir="ltr">
      {/* عنوان اصلی پروژه */}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-6 sm:text-4xl">
        {project.title}
      </h2>
      
      {/* پاراگراف‌های ابتدایی (بخش اول توضیحات) */}
      <div className="space-y-6 text-base leading-8 text-slate-600 max-w-3xl">
        {initialParagraphs.map((text, idx) => (
          <p key={`init-${idx}`}>{text}</p>
        ))}
      </div>

      {/* گالری تصاویر با افکت‌های مدرن */}
      {galleryImages.length > 0 && (
        <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {galleryImages.map((imgUrl, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-2xl h-72 bg-slate-100 shadow-sm border border-slate-100/50 transition-all duration-300 hover:shadow-md"
            >
              <img
                alt={`Project Gallery ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                src={imgUrl}
              />
            </div>
          ))}
        </div>
      )}

      {/* پاراگراف‌های انتهایی (بخش دوم توضیحات - بدون محدودیت تعداد) */}
      {remainingParagraphs.length > 0 && (
        <div className="space-y-6 text-base leading-8 text-slate-600 max-w-3xl mb-12">
          {remainingParagraphs.map((text, idx) => {
            // پاراگراف آخر را متمایز و شبیه نقل‌قول/نتیجه‌گیری نمایش می‌دهد
            const isLast = idx === remainingParagraphs.length - 1;
            if (isLast) {
              return (
                <p key={`rem-${idx}`} className="border-l-4 border-pink-500 pl-4 py-1 bg-gradient-to-r from-pink-50/30 to-transparent font-medium text-slate-700">
                  {text}
                </p>
              );
            }
            return <p key={`rem-${idx}`}>{text}</p>;
          })}
        </div>
      )}
    </section>
  );
}
