"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  useEdgesState,
  useNodesState,
  MarkerType,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

import { CATEGORIES } from "../../app/skills/data/skills-data";
import CategoryNode from "./CategoryNode";
import SkillNode from "./SkillNode";
import ContextMenu from "./ContextMenu";

const nodeTypes = { category: CategoryNode, skill: SkillNode };

const ROOT_X = 40;
const CATEGORY_X = 300;
const SKILL_X = 560;
const ROW_HEIGHT = 270;
const SKILL_ROW_HEIGHT = 220;
const HOVER_COLLAPSE_DELAY = 260; 


function buildGraph(expanded, hoverId, removedSkills) {
  const nodes = [];
  const edges = [];

  nodes.push({
    id: "root",
    type: "default",
    position: { y: ROOT_X, x: (CATEGORIES.length * ROW_HEIGHT) / 2 - 20 },
    data: { label: "Skills" },
    style: {
      background: "linear-gradient(135deg, #1a1726, #221d33)",
      color: "#f1f5f9",
      border: "1px solid #ffffff22",
      borderRadius: 12,
      fontWeight: 600,
      padding: "10px 18px",
      boxShadow: "0 0 20px #ffffff11",
    },
  });

  CATEGORIES.forEach((cat, i) => {
    const catY = i * ROW_HEIGHT;
    const visibleSkills = cat.skills.filter((s) => !removedSkills.has(s.id));
    const isOpen = !!expanded[cat.id] || hoverId === cat.id;

    nodes.push({
      id: cat.id,
      type: "category",
      position: { y: CATEGORY_X, x: catY },
      data: {
        label: cat.label,
        description: cat.description,
        color: cat.color,
        icon: cat.icon,
        skillCount: visibleSkills.length,
        expanded: isOpen,
        hovered: hoverId === cat.id,
      },
    });

    edges.push({
      id: `root-${cat.id}`,
      source: "root",
      target: cat.id,
      style: { stroke: cat.color, strokeWidth: 1.5, strokeDasharray: "4 4", opacity: 0.7 },
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed, color: cat.color, width: 14, height: 14 },
    });

    if (isOpen) {
      const offsetStart = catY - ((visibleSkills.length - 1) * SKILL_ROW_HEIGHT) / 2;
      visibleSkills.forEach((skill, j) => {
        nodes.push({
          id: skill.id,
          type: "skill",
          position: { y: SKILL_X, x: offsetStart + j * SKILL_ROW_HEIGHT },
          data: { name: skill.name, level: skill.level, color: cat.color, delay: j * 40 },
        });
        edges.push({
          id: `${cat.id}-${skill.id}`,
          source: cat.id,
          target: skill.id,
          style: {
            stroke: cat.color,
            strokeWidth: 1.2,
            strokeDasharray: "3 3",
            opacity: hoverId === cat.id ? 0.9 : 0.5,
          },
        });
      });
    }
  });

  return { nodes, edges };
}

function Graph() {
  const [expanded, setExpanded] = useState({});
  const [hoverId, setHoverId] = useState(null);
  const [removedSkills, setRemovedSkills] = useState(new Set());
  const [menu, setMenu] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  const collapseTimer = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const { nodes: builtNodes, edges: builtEdges } = buildGraph(expanded, hoverId, removedSkills);
    setNodes(builtNodes);
    setEdges(builtEdges);
  }, [expanded, hoverId, removedSkills, setNodes, setEdges]);

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

  const clearCollapseTimer = useCallback(() => {
    if (collapseTimer.current) {
      clearTimeout(collapseTimer.current);
      collapseTimer.current = null;
    }
  }, []);


  const onNodeMouseEnter = useCallback(
    (_, node) => {
      clearCollapseTimer();
      if (node.type === "category") {
        setHoverId(node.id);
      } else if (node.type === "skill") {
        const parent = CATEGORIES.find((c) => c.skills.some((s) => s.id === node.id));
        if (parent) setHoverId(parent.id);
      }
    },
    [clearCollapseTimer]
  );

  const onNodeMouseLeave = useCallback(
    (_, node) => {
      if (node.type !== "category" && node.type !== "skill") return;
      clearCollapseTimer();
      collapseTimer.current = setTimeout(() => setHoverId(null), HOVER_COLLAPSE_DELAY);
    },
    [clearCollapseTimer]
  );

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
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        onNodeContextMenu={onNodeContextMenu}
        onPaneContextMenu={onPaneContextMenu}
        onPaneClick={closeMenu}
        onMove={closeMenu}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        proOptions={{ hideAttribution: true }}
        minZoom={0.4}
        maxZoom={1.5}
        nodesDraggable={false}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#ffffff14" />
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