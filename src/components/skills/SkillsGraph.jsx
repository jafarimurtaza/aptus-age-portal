"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  useEdgesState,
  useNodesState,
  useReactFlow,
  MarkerType,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

import { CATEGORIES } from "../../app/skills/data/skills-data";
import CategoryNode from "./CategoryNode";
import SkillNode from "./SkillNode";
import ContextMenu from "./ContextMenu";

const nodeTypes = { category: CategoryNode, skill: SkillNode };

function useViewportWidth() {
  const [width, setWidth] = useState(1380);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}

function getLayout(width) {
  if (width < 640) {
    return {
      mode: "stacked",
      rootY: 16,
      afterRootGap: 80,
      categoryGap: 135,
      skillGap: 50,
      skillIndent: 18,
      root: { width: 168, height: 58, fontSize: 17 },
      fitViewPadding: 0.28,
      fitViewMinZoom: 0.4,
      fitViewMaxZoom: 1,
      edgeType: "smoothstep",
      skillEdgeAnimated: false,
      hideEdges: true,
    };
  }
  if (width < 1024) {
    return {
      mode: "stacked",
      rootY: 24,
      afterRootGap: 130,
      categoryGap: 100,
      skillGap: 80,
      skillIndent: 32,
      root: { width: 200, height: 70, fontSize: 20 },
      fitViewPadding: 0.12,
      fitViewMinZoom: 0.35,
      fitViewMaxZoom: 1,
      edgeType: "smoothstep",
      skillEdgeAnimated: false,
      hideEdges: false,
    };
  }
  return {
    mode: "spread",
    rootDepth: 10,
    categoryDepth: 200,
    skillDepth: 380,
    minColumnWidth: 270,
    skillRowHeight: 150,
    root: { width: 240, height: 80, fontSize: 24 },
    fitViewPadding: 0.3,
    fitViewMinZoom: 0.55,
    fitViewMaxZoom: 1,
    edgeType: "smoothstep",
    skillEdgeAnimated: false,
    hideEdges: false,
  };
}

function getRootNodeBase(root) {
  return {
    id: "root",
    type: "default",
    data: { label: "Skills" },
    className: "text-center",
    style: {
      background: "linear-gradient(135deg, #1B3A6B, #0B0F19)",
      color: "#FAF7F2",
      border: "1px solid #C8955A66",
      borderRadius: 16,
      fontWeight: 800,
      fontSize: root.fontSize,
      width: root.width,
      height: root.height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 28px #C8955A33, 0 8px 20px -6px #00000080",
    },
  };
}

function buildStackedGraph(expanded, removedSkills, layout) {
  const { rootY, afterRootGap, categoryGap, skillGap, skillIndent, root, edgeType, skillEdgeAnimated, hideEdges } = layout;
  const rootNodeBase = getRootNodeBase(root);
  const nodes = [];
  const edges = [];

  nodes.push({ ...rootNodeBase, position: { x: 0, y: rootY } });

  let y = rootY + afterRootGap;

  CATEGORIES.forEach((cat) => {
    const visibleSkills = cat.skills.filter((s) => !removedSkills.has(s.id));
    const isOpen = !!expanded[cat.id];

    nodes.push({
      id: cat.id,
      type: "category",
      position: { x: 0, y },
      data: {
        label: cat.label,
        description: cat.description,
        color: cat.color,
        icon: cat.icon,
        skillCount: visibleSkills.length,
        expanded: isOpen,
        hovered: false,
      },
    });

    if (!hideEdges) {
      edges.push({
        id: `root-${cat.id}`,
        source: "root",
        target: cat.id,
        type: edgeType,
        style: { stroke: cat.color, strokeWidth: 1.5, strokeDasharray: "4 4", opacity: 0.7 },
        animated: true,
        markerEnd: { type: MarkerType.ArrowClosed, color: cat.color, width: 14, height: 14 },
      });
    }

    y += categoryGap;

    if (isOpen) {
      visibleSkills.forEach((skill, j) => {
        nodes.push({
          id: skill.id,
          type: "skill",
          position: { x: skillIndent, y },
          data: { name: skill.name, level: skill.level, color: cat.color, delay: j * 40 },
        });
        if (!hideEdges) {
          edges.push({
            id: `${cat.id}-${skill.id}`,
            source: cat.id,
            target: skill.id,
            type: edgeType,
            animated: skillEdgeAnimated,
            style: {
              stroke: cat.color,
              strokeWidth: 1,
              strokeDasharray: "2 4",
              opacity: 0.5,
            },
          });
        }
        y += skillGap;
      });
    }
  });

  return { nodes, edges };
}

function buildSpreadGraph(expanded, removedSkills, layout) {
  const { rootDepth, categoryDepth, skillDepth, minColumnWidth, skillRowHeight, root, edgeType, skillEdgeAnimated } = layout;
  const rootNodeBase = getRootNodeBase(root);
  const nodes = [];
  const edges = [];

  const footprints = CATEGORIES.map((cat) => {
    const visibleSkills = cat.skills.filter((s) => !removedSkills.has(s.id));
    const isOpen = !!expanded[cat.id];
    const spreadWidth = isOpen ? (visibleSkills.length - 1) * skillRowHeight : 0;
    return Math.max(minColumnWidth, spreadWidth + minColumnWidth);
  });

  const positions = [];
  let x = 0;
  footprints.forEach((w) => {
    positions.push(x + w / 2);
    x += w;
  });
  const totalWidth = x;

  nodes.push({
    ...rootNodeBase,
    position: { x: totalWidth / 2 - root.width / 2, y: rootDepth },
  });

  CATEGORIES.forEach((cat, i) => {
    const catX = positions[i];
    const visibleSkills = cat.skills.filter((s) => !removedSkills.has(s.id));
    const isOpen = !!expanded[cat.id];

    nodes.push({
      id: cat.id,
      type: "category",
      position: { x: catX, y: categoryDepth },
      data: {
        label: cat.label,
        description: cat.description,
        color: cat.color,
        icon: cat.icon,
        skillCount: visibleSkills.length,
        expanded: isOpen,
        hovered: false,
      },
    });

    edges.push({
      id: `root-${cat.id}`,
      source: "root",
      target: cat.id,
      type: edgeType,
      style: { stroke: cat.color, strokeWidth: 1.5, strokeDasharray: "4 4", opacity: 0.7 },
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed, color: cat.color, width: 14, height: 14 },
    });

    if (isOpen) {
      const offsetStart = catX - ((visibleSkills.length - 1) * skillRowHeight) / 2;
      visibleSkills.forEach((skill, j) => {
        nodes.push({
          id: skill.id,
          type: "skill",
          position: { x: offsetStart + j * skillRowHeight, y: skillDepth },
          data: { name: skill.name, level: skill.level, color: cat.color, delay: j * 40 },
        });
        edges.push({
          id: `${cat.id}-${skill.id}`,
          source: cat.id,
          target: skill.id,
          type: edgeType,
          animated: skillEdgeAnimated,
          style: {
            stroke: cat.color,
            strokeWidth: 1,
            strokeDasharray: "2 4",
            opacity: 0.5,
          },
        });
      });
    }
  });

  return { nodes, edges };
}

function buildGraph(expanded, removedSkills, layout) {
  return layout.mode === "stacked"
    ? buildStackedGraph(expanded, removedSkills, layout)
    : buildSpreadGraph(expanded, removedSkills, layout);
}

function Graph() {
  const [expanded, setExpanded] = useState({});
  const [removedSkills, setRemovedSkills] = useState(new Set());
  const [menu, setMenu] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  const fitTimer = useRef(null);
  const { fitView } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const viewportWidth = useViewportWidth();
  const layout = getLayout(viewportWidth);
  const isStacked = layout.mode === "stacked";

  const allExpanded = CATEGORIES.every((c) => expanded[c.id]);
  const noneExpanded = CATEGORIES.every((c) => !expanded[c.id]);


  useEffect(() => {
    const { nodes: builtNodes, edges: builtEdges } = buildGraph(
      expanded,
      removedSkills,
      layout
    );
    setNodes(builtNodes);
    setEdges(builtEdges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, removedSkills, viewportWidth, setNodes, setEdges]);

  
  useEffect(() => {
    if (fitTimer.current) clearTimeout(fitTimer.current);
    fitTimer.current = setTimeout(() => {
      fitView({
        padding: layout.fitViewPadding,
        minZoom: layout.fitViewMinZoom,
        maxZoom: layout.fitViewMaxZoom,
        duration: 300,
      });
    }, 30);
    return () => {
      if (fitTimer.current) clearTimeout(fitTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, removedSkills, viewportWidth, fitView]);

  const expandAll = useCallback(() => {
    setExpanded(Object.fromEntries(CATEGORIES.map((c) => [c.id, true])));
  }, []);

  const collapseAll = useCallback(() => setExpanded({}), []);

  const resetRemoved = useCallback(() => setRemovedSkills(new Set()), []);

  const closeMenu = useCallback(() => setMenu(null), []);

  useEffect(() => {
    if (!menu) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menu, closeMenu]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu, expanded]);

const toggleCategory = useCallback((id) => {
  setExpanded((prev) => {
    const isCurrentlyOpen = !!prev[id];
    return isCurrentlyOpen ? {} : { [id]: true };
  });
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
        fitViewOptions={{
          padding: layout.fitViewPadding,
          minZoom: layout.fitViewMinZoom,
          maxZoom: layout.fitViewMaxZoom,
        }}
        proOptions={{ hideAttribution: true }}
        minZoom={isStacked ? 0.25 : 0.4}
        maxZoom={1.5}
        nodesDraggable={false}
        panOnScroll={false}
        zoomOnPinch
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#C8955A1f" />
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