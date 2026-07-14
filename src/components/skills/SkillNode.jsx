"use client";

import { Handle, Position } from "reactflow";

export default function SkillNode({ data }) {
  return (
    <div
      className="w-52 origin-left animate-[skillIn_260ms_ease-out] rounded-lg border bg-[#151220] px-3 py-2 shadow-md transition-transform duration-200 hover:scale-[1.04]"
      style={{
        borderColor: `${data.color}40`,
        animationDelay: `${data.delay ?? 0}ms`,
        animationFillMode: "backwards",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="h-1.5! w-1.5! !border-none"
        style={{ background: data.color }}
      />

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-100">{data.name}</span>
        <span className="text-[11px] tabular-nums text-slate-400">{data.level}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${data.level}%`, backgroundColor: data.color }}
        />
      </div>
    </div>
  );
}