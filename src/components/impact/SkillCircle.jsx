export default function SkillCircle({ name, percent }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-8" style={{clipPath: `inset(${100 - percent}% 0 0 0)`,}}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">
          {percent}%
          </span>
        </div>
        </div>
        <p className="mt-3 font-semibold text-sm">
        {name}
        </p>
    </div>
  );
}