"use client";

import { Handle, Position } from "reactflow";
import {
  Code2,
  ServerCog,
  Settings2,
  Database,
  ChevronDown,
} from "lucide-react";

const DARK = "var(--color-dark)";
const CREAM = "var(--color-cream)";

const ICONS = {
  frontend: Code2,
  backend: ServerCog,
  devops: Settings2,
  data: Database,
};

export default function CategoryNode({ data, selected }) {
  const Icon = ICONS[data.icon];
  const isOpen = data.expanded;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-label={`${data.label}, ${data.skillCount} skills, ${isOpen ? "expanded" : "collapsed"}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          data.onToggle?.();
        }
      }}
      // className={`group w-52 cursor-pointer rounded-2xl border px-3.5 py-3 shadow-[0_4px_14px_-6px_rgba(11,15,25,0.18)]
      //   transition-all duration-300 ease-out
      //   active:scale-[0.97]
      //   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      //   sm:w-56 sm:px-3.5 sm:py-3 md:w-64 md:px-4
      //   ${selected ? "ring-2 ring-offset-2" : ""}
      //   ${isOpen ? "-translate-y-0.5 scale-[1.02]" : "scale-100"}`}
      className={`
 group cursor-pointer rounded-2xl border shadow-[0_4px_14px_-6px_rgba(11,15,25,0.18)]
 transition-all duration-300 ease-out

 ${data.mobile ? "w-72 px-5 py-4" : "w-52 px-3.5 py-3 sm:w-56 md:w-64"}

 ${selected ? "ring-2 ring-offset-2" : ""}
 ${isOpen ? "-translate-y-0.5 scale-[1.02]" : "scale-100"}
`}
      style={{
        backgroundColor: CREAM,
        borderColor: isOpen ? data.color : `${data.color}33`,
        "--tw-ring-color": data.color,
        "--tw-ring-offset-color": CREAM,
        boxShadow: isOpen
          ? `0 12px 32px -12px ${data.color}55, 0 0 0 1px ${data.color}22`
          : "0 2px 8px -4px rgba(11,15,25,0.12)",
      }}
    >
      {/* <Handle
        type="target"
        position={Position.Top}
        className="h-2! w-2! !border-none"
        style={{ background: data.color }}
      /> */}
      {!data.mobile && (
        <Handle
          type="target"
          position={Position.Top}
          className="h-2! w-2! border-none!"
          style={{ background: data.color }}
        />
      )}

      <div className="flex items-start gap-2.5 sm:gap-3">
        <div
          className={`
flex shrink-0 items-center justify-center rounded-lg
${data.mobile ? "h-11 w-11" : "h-8 w-8 sm:h-9 sm:w-9"}
`}
          style={{
            backgroundColor: `${data.color}1f`,
            color: data.color,
            boxShadow: isOpen ? `0 0 14px ${data.color}33` : "none",
          }}
        >
          <Icon size={16} className="sm:hidden" aria-hidden="true" />
          <Icon size={18} className="hidden sm:block" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3
              className="truncate text-sm font-semibold sm:text-base"
              style={{ color: DARK }}
            >
              {data.label}
            </h3>
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              style={{ color: isOpen ? data.color : `${DARK}55` }}
            />
          </div>
          <p
            className="mt-1 text-[11px] leading-snug line-clamp-2 sm:text-xs"
            style={{ color: `${DARK}99` }}
          >
            {data.description}
          </p>
        </div>
      </div>

      <div
        className="mt-2.5 flex items-center justify-between border-t pt-2 text-[10px] sm:text-[11px]"
        style={{ borderColor: `${data.color}55`, color: `${DARK}88` }}
      >
        <span
          className="rounded-full px-2 py-0.5 font-medium"
          style={{ backgroundColor: `${data.color}1a`, color: data.color }}
        >
          {data.skillCount} skills
        </span>
        <span
          className="hidden sm:inline transition-colors duration-200"
          style={{ color: isOpen ? data.color : undefined }}
        >
          {isOpen ? "tap to collapse" : "tap to expand"}
        </span>
      </div>

      {isOpen && data.skillCount === 0 && (
        <p
          className="mt-2 rounded-lg px-2.5 py-2 text-[10px] leading-snug sm:text-[11px]"
          style={{ backgroundColor: `${data.color}14`, color: data.color }}
        >
          All skills here were removed. Right-click this card and choose{" "}
          <span className="font-semibold">Restore removed skills</span>, or use
          the toolbar's <span className="font-semibold">Restore skills</span>{" "}
          button.
        </p>
      )}

      {/* <Handle
        type="source"
        position={Position.Bottom}
        className="h-2! w-2! !border-none"
        style={{ background: data.color }}
      /> */}
      {!data.mobile && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="h-2! w-2! border-none!"
          style={{ background: data.color }}
        />
      )}
    </div>
  );
}
