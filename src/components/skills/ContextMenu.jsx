"use client";

import { useEffect, useRef, useState } from "react";

export default function ContextMenu({ x, y, title, items, onClose }) {
  const menuRef = useRef(null);
  const itemRefs = useRef([]);
  const [pos, setPos] = useState({ top: y, left: x });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    const { innerWidth, innerHeight } = window;
    const rect = el.getBoundingClientRect();
    const left = Math.min(x, innerWidth - rect.width - 8);
    const top = Math.min(y, innerHeight - rect.height - 8);
    setPos({ left: Math.max(8, left), top: Math.max(8, top) });
  }, [x, y]);

  useEffect(() => {
    itemRefs.current[0]?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => {
        const next = (i + 1) % items.length;
        itemRefs.current[next]?.focus();
        return next;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => {
        const next = (i - 1 + items.length) % items.length;
        itemRefs.current[next]?.focus();
        return next;
      });
    }
  };

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
        ref={menuRef}
        role="menu"
        aria-label={title || "Context menu"}
        onKeyDown={handleKeyDown}
        className="fixed z-50 w-48 max-w-[calc(100vw-16px)] origin-top-left animate-[menuIn_150ms_ease-out] overflow-hidden rounded-xl border border-[#C8955A]/25 bg-[#1B3A6B] shadow-2xl sm:w-52"
        style={{ top: pos.top, left: pos.left }}
      >
        {title && (
          <div className="border-b border-[#F5F0E8]/10 px-3 py-2.5 text-[11px] font-medium uppercase tracking-wide text-[#F5F0E8]/60">
            {title}
          </div>
        )}
        <ul className="py-1">
          {items.map((item, i) => (
            <li key={item.label} role="none">
              <button
                ref={(el) => (itemRefs.current[i] = el)}
                role="menuitem"
                onClick={() => {
                  item.onClick();
                  onClose();
                }}
                className={`min-h-[44px] w-full px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-[#C8955A]/15 focus-visible:bg-[#C8955A]/20 focus-visible:outline-none active:bg-[#C8955A]/25 sm:min-h-0 sm:py-2
                  ${item.danger ? "text-rose-400 hover:text-rose-300" : "text-[#FAF7F2]"}`}
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