"use client";

export default function ContextMenu({ x, y, title, items, onClose }) {
  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        onContextMenu={(e) => {
          e.preventDefault();
          onClose();
        }}
      />
      <div
        className="fixed z-50 w-52 overflow-hidden rounded-lg border border-white/10 bg-[#1a1726] shadow-2xl"
        style={{ top: y, left: x }}
         
      >
        {title && (
          <div className="border-b border-white/5 px-3 py-2 text-[11px] uppercase tracking-wide text-slate-500">
            {title}
          </div>
        )}
        <ul className="py-1">
          {items.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => {
                  item.onClick();
                  onClose();
                }}
                className={`w-full px-3 py-2 text-left text-sm transition-colors hover:bg-white/5
                  ${item.danger ? "text-rose-400 hover:text-rose-300" : "text-slate-200"}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}