export default function ProjectDetailsGrid({ project }) {
  const details = [
    { id: 1, text: project?.author || "Janelle Hiroshige", type: "user" },
    { id: 2, text: project?.date || "22 August 2021", type: "calendar" },
    { id: 3, text: project?.location || "U598, USA", type: "map" },
    { id: 4, text: project?.duration || "04 months", type: "clock" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-2 lg:grid-cols-4">
      {details.map((item) => (
        <div key={item.id} className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-pink-50/40 p-6 text-center shadow-sm border border-slate-100">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-pink-500 shadow-sm border border-pink-50">
            {item.type === "user" && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            )}
            {item.type === "calendar" && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            )}
            {item.type === "map" && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            )}
            {item.type === "clock" && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )}
          </div>
          <p className="text-sm font-semibold text-slate-800">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
