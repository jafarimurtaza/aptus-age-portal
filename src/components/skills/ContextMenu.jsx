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
        className="fixed z-50 w-48 max-w-[calc(100vw-16px)] origin-top-left animate-[menuIn_150ms_ease-out] overflow-hidden rounded-xl border shadow-2xl sm:w-52"
        style={{
          top: pos.top,
          left: pos.left,
          backgroundColor: "var(--color-base-100)",
          borderColor:
            "color-mix(in srgb, var(--color-primary) 15%, transparent)",
        }}
      >
        {title && (
          <div
            className="border-b px-3 py-2.5 text-[11px] font-medium uppercase tracking-wide"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-primary) 10%, transparent)",
              color:
                "color-mix(in srgb, var(--color-base-content) 55%, transparent)",
            }}
          >
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
                className={`min-h-11 w-full px-3.5 py-2.5 text-left text-sm transition-colors focus-visible:outline-none sm:min-h-0 sm:py-2
                 ${
                   item.danger
                     ? "text-error hover:--color-error/10"
                     : "hover:--color-primary/10"
                 }`}
                style={{
                  color: item.danger
                    ? "var(--color-error)"
                    : "var(--color-base-content)",
                }}
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
