"use client";

import { Handle, Position } from "reactflow";
import { Code2, ServerCog, Settings2, Database, ChevronDown } from "lucide-react";

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
      aria-expanded={isOpen}
      aria-label={`${data.label}, ${data.skillCount} skills, ${isOpen ? "expanded" : "collapsed"}`}
      className={`group w-52 cursor-pointer rounded-xl border bg-[#0B0F19] px-3.5 py-3 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.7)]
        transition-all duration-300 ease-out
        active:scale-[0.97]
        sm:w-56 sm:px-3.5 sm:py-3 md:w-64 md:px-4
        ${selected ? "ring-2 ring-offset-2 ring-offset-[#0B0F19]" : ""}
        ${isOpen ? "-translate-y-0.5 scale-[1.02]" : "scale-100"}`}
      style={{
        borderColor: isOpen ? data.color : `${data.color}55`,
        "--tw-ring-color": data.color,
        boxShadow: isOpen
          ? `0 0 24px ${data.color}44, 0 10px 24px -8px ${data.color}55`
          : "0 4px 14px -6px #00000080",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="h-2! w-2! !border-none"
        style={{ background: data.color }}
      />

      <div className="flex items-start gap-2.5 sm:gap-3">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 sm:h-9 sm:w-9"
          style={{
            backgroundColor: `${data.color}22`,
            color: data.color,
            boxShadow: isOpen ? `0 0 14px ${data.color}55` : "none",
          }}
        >
          <Icon size={16} className="sm:hidden" aria-hidden="true" />
          <Icon size={18} className="hidden sm:block" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate text-sm font-semibold text-[#FAF7F2] sm:text-base">
              {data.label}
            </h3>
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={`shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              style={{ color: isOpen ? data.color : "#F5F0E866" }}
            />
          </div>
          <p className="mt-1 text-[11px] leading-snug text-[#F5F0E8]/60 line-clamp-2 sm:text-xs">
            {data.description}
          </p>
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between border-t border-[#F5F0E8]/10 pt-2 text-[10px] text-[#F5F0E8]/50 sm:text-[11px]">
        <span className="font-medium">{data.skillCount} skills</span>
        <span
          className="hidden sm:inline transition-colors duration-200"
          style={{ color: isOpen ? `${data.color}cc` : undefined }}
        >
          {isOpen ? "tap to collapse" : "tap to expand"}
        </span>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="h-2! w-2! !border-none"
        style={{ background: data.color }}
      />
    </div>
  );
}