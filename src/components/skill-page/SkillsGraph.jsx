"use client";

import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  Panel,
  useEdgesState,
  useNodesState,
  MarkerType,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

import { CATEGORIES } from "../../app/skill-page/data/skills-data";
import CategoryNode from "./CategoryNode";
import SkillNode from "./SkillNode";
import ContextMenu from "./ContextMenu";

const nodeTypes = { category: CategoryNode, skill: SkillNode };

const ROOT_X = 40;
const CATEGORY_X = 380;
const SKILL_X = 760;
const ROW_HEIGHT = 170;
const SKILL_ROW_HEIGHT = 56;

function buildGraph(expanded, removedSkills) {
  const nodes = [];
  const edges = [];

  nodes.push({
    id: "root",
    type: "default",
    position: { x: ROOT_X, y: (CATEGORIES.length * ROW_HEIGHT) / 2 - 20 },
    data: { label: "Skills" },
    style: {
      background: "#1a1726",
      color: "#f1f5f9",
      border: "1px solid #ffffff22",
      borderRadius: 12,
      fontWeight: 600,
      padding: "10px 16px",
    },
  });

  CATEGORIES.forEach((cat, i) => {
    const catY = i * ROW_HEIGHT;
    const visibleSkills = cat.skills.filter((s) => !removedSkills.has(s.id));

    nodes.push({
      id: cat.id,
      type: "category",
      position: { x: CATEGORY_X, y: catY },
      data: {
        label: cat.label,
        description: cat.description,
        color: cat.color,
        icon: cat.icon,
        skillCount: visibleSkills.length,
        expanded: !!expanded[cat.id],
      },
    });

    edges.push({
      id: `root-${cat.id}`,
      source: "root",
      target: cat.id,
      style: { stroke: cat.color, strokeWidth: 1.5, strokeDasharray: "4 4" },
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed, color: cat.color, width: 14, height: 14 },
    });

    if (expanded[cat.id]) {
      const offsetStart = catY - ((visibleSkills.length - 1) * SKILL_ROW_HEIGHT) / 2;
      visibleSkills.forEach((skill, j) => {
        nodes.push({
          id: skill.id,
          type: "skill",
          position: { x: SKILL_X, y: offsetStart + j * SKILL_ROW_HEIGHT },
          data: { name: skill.name, level: skill.level, color: cat.color },
        });
        edges.push({
          id: `${cat.id}-${skill.id}`,
          source: cat.id,
          target: skill.id,
          style: { stroke: cat.color, strokeWidth: 1, strokeDasharray: "3 3" },
        });
      });
    }
  });

  return { nodes, edges };
}

function Graph() {
  const [expanded, setExpanded] = useState({});
  const [removedSkills, setRemovedSkills] = useState(new Set());
  const [menu, setMenu] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Rebuild the graph whenever expanded categories or removed skills change
  useEffect(() => {
    const { nodes: builtNodes, edges: builtEdges } = buildGraph(expanded, removedSkills);
    setNodes(builtNodes);
    setEdges(builtEdges);
  }, [expanded, removedSkills, setNodes, setEdges]);

  // Recompute the context menu content whenever the target or state changes
  useEffect(() => {
    if (!menu) {
      setMenuItems(null);
      return;
    }

    if (menu.type === "category") {
      const isOpen = !!expanded[menu.id];
      const cat = CATEGORIES.find((c) => c.id === menu.id);
      setMenuItems({
        title: cat?.label,
        items: [
          { label: isOpen ? "Collapse skills" : "Expand skills", onClick: () => toggleCategory(menu.id) },
          {
            label: "Restore removed skills",
            onClick: () =>
              setRemovedSkills((prev) => {
                const next = new Set(prev);
                cat?.skills.forEach((s) => next.delete(s.id));
                return next;
              }),
          },
        ],
      });
      return;
    }

    if (menu.type === "skill") {
      setMenuItems({
        title: "Skill",
        items: [
          {
            label: "Remove from view",
            danger: true,
            onClick: () => setRemovedSkills((prev) => new Set(prev).add(menu.id)),
          },
        ],
      });
      return;
    }

    setMenuItems({
      title: "Canvas",
      items: [
        {
          label: "Expand all categories",
          onClick: () => setExpanded(Object.fromEntries(CATEGORIES.map((c) => [c.id, true]))),
        },
        { label: "Collapse all categories", onClick: () => setExpanded({}) },
        { label: "Reset removed skills", onClick: () => setRemovedSkills(new Set()) },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu, expanded]);

  const toggleCategory = useCallback((id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const onNodeClick = useCallback(
    (_, node) => {
      if (node.type === "category") toggleCategory(node.id);
    },
    [toggleCategory]
  );

  const onNodeContextMenu = useCallback((event, node) => {
    event.preventDefault();
    if (node.type === "category") {
      setMenu({ type: "category", id: node.id, x: event.clientX, y: event.clientY });
    } else if (node.type === "skill") {
      const parent = CATEGORIES.find((c) => c.skills.some((s) => s.id === node.id));
      setMenu({ type: "skill", id: node.id, parentId: parent?.id ?? "", x: event.clientX, y: event.clientY });
    }
  }, []);

  const onPaneContextMenu = useCallback((event) => {
    event.preventDefault();
    setMenu({ type: "pane", x: event.clientX, y: event.clientY });
  }, []);

  const closeMenu = useCallback(() => setMenu(null), []);

  return (
    <div className="relative h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        onNodeContextMenu={onNodeContextMenu}
        onPaneContextMenu={onPaneContextMenu}
        onPaneClick={closeMenu}
        onMove={closeMenu}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        proOptions={{ hideAttribution: true }}
        minZoom={0.4}
        maxZoom={1.5}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#ffffff14" />
        <Controls className="!bg-[#1a1726] !border !border-white/10 !fill-slate-200 [&>button]:!border-white/10" />
        <MiniMap
          className="!bg-[#12101c] !border !border-white/10"
          nodeColor={(n) => n.data?.color ?? "#64748b"}
          maskColor="rgba(11,10,19,0.7)"
        />
        <Panel position="top-left" className="rounded-lg border border-white/10 bg-[#12101c]/90 px-4 py-3 text-slate-200 backdrop-blur">
          <h1 className="text-sm font-semibold">Skill Map</h1>
          <p className="mt-0.5 text-xs text-slate-400">Click a category to expand · right-click for options</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span key={c.id} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                {c.label}
              </span>
            ))}
          </div>
        </Panel>
      </ReactFlow>

      {menu && menuItems && (
        <ContextMenu x={menu.x} y={menu.y} title={menuItems.title} items={menuItems.items} onClose={closeMenu} />
      )}
    </div>
  );
}

export default function SkillsGraph() {
  return (
    <ReactFlowProvider>
      <Graph />
    </ReactFlowProvider>
  );
}