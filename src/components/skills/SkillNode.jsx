"use client";

import { Handle, Position } from "reactflow";

export default function SkillNode({ data }) {
  return (
    <div
      className="w-28 origin-left animate-[skillIn_260ms_ease-out] rounded-lg border bg-dark px-2 py-1.5 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.7)] sm:w-32 sm:px-2.5 sm:py-2 md:w-36"
      style={{
        borderColor: `${data.color}55`,
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

      <div className="flex items-center justify-between gap-1.5">
        <span className="truncate text-[11px] font-medium text-cream sm:text-xs">
          {data.name}
        </span>
        <span className="shrink-0 rounded-full bg-sand/10 px-1 py-0.5 text-[9px] font-medium tabular-nums text-sand/80 sm:text-[10px]">
          {data.level}%
        </span>
      </div>
      <div
        className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-sand/10"
        role="progressbar"
        aria-valuenow={data.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${data.name} proficiency`}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${data.level}%`, backgroundColor: data.color }}
        />
      </div>
    </div>
  );
}