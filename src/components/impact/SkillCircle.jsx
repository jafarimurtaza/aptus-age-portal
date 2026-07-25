export default function SkillCircle({ name, percent }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        
        {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-8"></div>

         {/* Progress circle */}
        <div className="absolute inset-0 rounded-full border-8 border-#FAF7F2"
          style={{
            clipPath: `inset(${100 - percent}% 0 0 0)`,
          }}>
        </div>
        {/* Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-dark">
          {percent}%
          </span>
        </div>
        </div>
        <p className="mt-3 font-semibold text-dark text-sm">
        {name}
        </p>
    </div>
  );
}