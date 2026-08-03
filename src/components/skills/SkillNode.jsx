"use client";

import { Handle, Position } from "reactflow";

export default function SkillNode({ data }) {
  return (
    <div
      className={`origin-left animate-[skillIn_260ms_ease-out] rounded-xl border ${data.mobile ? "w-56 px-4 py-3" : "w-45 px-3 py-2"}`}
      style={{
        backgroundColor: "var(--color-base-100)",
        borderColor: `${data.color}40`,
        animationDelay: `${data.delay ?? 0}ms`,
        animationFillMode: "backwards",
      }}
    >
      {/* <Handle
        type="target"
        position={Position.Top}
        className="h-1.5! w-1.5! !border-none"
        style={{ background: data.color }}
      /> */}
      {!data.mobile && (
        <Handle
          type="target"
          position={Position.Top}
          className="h-1.5! w-1.5! border-none!"
          style={{ background: data.color }}
        />
      )}
      {!data.mobile && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="h-1.5! w-1.5! border-none!"
          style={{ background: data.color }}
        />
      )}

      <div className="flex items-center gap-1.5">
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: data.color }}
          aria-hidden="true"
        />
        <span
          className={`
  min-w-0 flex-1 truncate font-medium
  ${data.mobile ? "text-sm" : "text-[11px] sm:text-xs"}
`}
         style={{ color: "var(--color-base-content)" }}
        >
          {data.name}
        </span>
        <span
          className="shrink-0 rounded-full px-1 py-0.5 text-[9px] font-medium tabular-nums sm:text-[10px]"
          style={{ backgroundColor: `${data.color}1a`, color: data.color }}
        >
          {data.level}%
        </span>
      </div>
      <div
        // className=" mt-2 w-full overflow-hidden rounded-full"
        className={` mt-2 w-full rounded-full ${data.mobile ? "h-1.5" : "h-1"}`}
       style={{ backgroundColor: "var(--color-base-200)" }}
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
