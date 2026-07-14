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

  return (
    <div
      className={`group w-64 cursor-pointer rounded-xl border bg-[#12101c] px-4 py-3 shadow-lg
        transition-all duration-300 ease-out
        ${selected ? "ring-2 ring-offset-2 ring-offset-[#0b0a13]" : ""}
        ${data.hovered ? "-translate-y-0.5 scale-[1.03]" : "scale-100"}`}
      style={{
        borderColor: data.hovered ? data.color : `${data.color}55`,
        "--tw-ring-color": data.color,
        boxShadow: data.hovered
          ? `0 0 24px ${data.color}55, 0 8px 20px -6px ${data.color}66`
          : "0 4px 10px -4px #00000066",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="h-2! w-2! !border-none"
        style={{ background: data.color }}
      />

      <div className="flex items-start gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${data.color}22`, color: data.color }}
        >
          <Icon size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="truncate font-semibold text-slate-100">{data.label}</h3>
            <ChevronDown
              size={16}
              className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                data.expanded ? "rotate-180" : ""
              }`}
              style={{ color: data.hovered ? data.color : undefined }}
            />
          </div>
          <p className="mt-0.5 text-xs leading-snug text-slate-400 line-clamp-2">{data.description}</p>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
        <span>{data.skillCount} skills</span>
        <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {data.expanded ? "hover away to collapse" : "hover to preview"}
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