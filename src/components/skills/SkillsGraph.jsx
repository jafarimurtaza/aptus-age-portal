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
import { Search } from "lucide-react";
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
      afterRootGap: 100,
      categoryGap: 135,
      skillGap: 60,
      skillIndent: 13,
      categoryWidth: 208,
      root: { width: 168, height: 58, fontSize: 17 },
      fitViewPadding: 0.28,
      fitViewMinZoom: 0.4,
      fitViewMaxZoom: 1,
      edgeType: "smoothstep",
      skillEdgeAnimated: false,
      hideEdges: true,
    };
  }

  // Tablet
  if (width < 1024) {
    return {
      mode: "stacked",
      rootY: 24,
      afterRootGap: 130,
      categoryGap: 150,
      skillGap: 70,
      skillIndent: 32,
      categoryWidth: 224,
      root: { width: 300, height: 80, fontSize: 30 },
      fitViewPadding: 0.12,
      fitViewMinZoom: 0.35,
      fitViewMaxZoom: 1,
      edgeType: "smoothstep",
      skillEdgeAnimated: false,
      hideEdges: true,
    };
  }

  return {
    mode: "spread",
    rootDepth: 10,
    categoryDepth: 200,
    skillDepth: 380,
    minColumnWidth: 270,
    skillRowHeight: 190,
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
      background:
        "linear-gradient(135deg, var(--color-primary) 0%, var(--color-base-300) 100%)",
      color: "var(--color-base-100)",
      border: "1px solid var(--color-primary)",
      borderRadius: "18px",
      fontWeight: 700,
      fontSize: root.fontSize,
      letterSpacing: "0.5px",
      width: root.width,
      height: root.height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `
        0 10px 30px rgba(24, 58, 107, 0.25),
        0 2px 8px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.08)
      `,
      transition: "all 0.25s ease",
    },
  };
}

function buildStackedGraph(
  expanded,
  removedSkills,
  search,
  layout,
  viewportWidth,
) {
  const {
    rootY,
    afterRootGap,
    categoryGap,
    skillGap,
    skillIndent,
    categoryWidth,
    root,
    edgeType,
    skillEdgeAnimated,
    hideEdges,
  } = layout;
  const rootNodeBase = getRootNodeBase(root);
  const nodes = [];
  const edges = [];

  const rootX = (categoryWidth - root.width) / 2;
  nodes.push({ ...rootNodeBase, position: { x: rootX, y: rootY } });

  let y = rootY + afterRootGap;

  CATEGORIES.forEach((cat) => {
    const visibleSkills = cat.skills.filter(
      (s) =>
        !removedSkills.has(s.id) &&
        s.name.toLowerCase().includes(search.toLowerCase()),
    );
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
        style: {
          stroke: "var(--color-primary)",
          strokeWidth: 1.5,
          strokeDasharray: "4 4",
          opacity: 0.7,
        },
        animated: true,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: cat.color,
          width: 14,
          height: 14,
        },
      });
    }

    y += categoryGap;

    if (isOpen) {
      visibleSkills.forEach((skill, j) => {
        nodes.push({
          id: skill.id,
          type: "skill",
          position: { x: skillIndent, y },
          data: {
            name: skill.name,
            level: skill.level,
            color: cat.color,
            delay: j * 40,
          },
        });
        if (!hideEdges) {
          edges.push({
            id: `${cat.id}-${skill.id}`,
            source: cat.id,
            target: skill.id,
            type: edgeType,
            animated: skillEdgeAnimated,
            style: {
             stroke: "var(--color-primary)",
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

function buildSpreadGraph(expanded, removedSkills, search, layout) {
  const {
    rootDepth,
    categoryDepth,
    skillDepth,
    minColumnWidth,
    skillRowHeight,
    root,
    edgeType,
    skillEdgeAnimated,
    viewportWidth,
  } = layout;
  const rootNodeBase = getRootNodeBase(root);
  const nodes = [];
  const edges = [];

  const footprints = CATEGORIES.map((cat) => {
    const visibleSkills = cat.skills.filter((s) => !removedSkills.has(s.id));
    const isOpen = !!expanded[cat.id];
    const spreadWidth = isOpen
      ? (visibleSkills.length - 1) * skillRowHeight
      : 0;
    return Math.max(minColumnWidth, spreadWidth + minColumnWidth);
  });

  const leftPadding = 100;

  const positions = [];
  let x = leftPadding;

  footprints.forEach((w) => {
    positions.push(x + w / 2);
    x += w;
  });

  const contentWidth = footprints.reduce((sum, w) => sum + w, 250);

  nodes.push({
    ...rootNodeBase,
    position: {
      x: leftPadding + contentWidth / 2 - root.width / 2,
      y: rootDepth,
    },
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
        // mobile: layout.mode === "stacked" && viewportWidth < 640,
        mobile: viewportWidth < 640,
      },
    });

    edges.push({
      id: `root-${cat.id}`,
      source: "root",
      target: cat.id,
      type: edgeType,
      style: {
        stroke: cat.color,
        strokeWidth: 1.5,
        strokeDasharray: "4 4",
        opacity: 0.7,
      },
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: cat.color,
        width: 14,
        height: 14,
      },
    });

    if (isOpen) {
      const offsetStart =
        catX - ((visibleSkills.length - 1) * skillRowHeight) / 2;
      visibleSkills.forEach((skill, j) => {
        nodes.push({
          id: skill.id,
          type: "skill",
          position: { x: offsetStart + j * skillRowHeight, y: skillDepth },
          data: {
            name: skill.name,
            level: skill.level,
            color: cat.color,
            delay: j * 40,
          },
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

function buildGraph(expanded, removedSkills, search, layout, viewportWidth) {
  const graph =
    layout.mode === "stacked"
      ? buildStackedGraph(
          expanded,
          removedSkills,
          search,
          layout,
          viewportWidth,
        )
      : buildSpreadGraph(
          expanded,
          removedSkills,
          search,
          layout,
          viewportWidth,
        );

  if (layout.hideEdges) {
    return {
      nodes: graph.nodes,
      edges: [],
    };
  }

  return graph;
}

function Graph() {
  const [expanded, setExpanded] = useState({});
  const [removedSkills, setRemovedSkills] = useState(new Set());
  const [menu, setMenu] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [search, setSearch] = useState("");
  const fitTimer = useRef(null);
  const { fitView } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const viewportWidth = useViewportWidth();
  const layout = getLayout(viewportWidth);

  useEffect(() => {
    const { nodes: builtNodes, edges: builtEdges } = buildGraph(
      expanded,
      removedSkills,
      search,
      layout,
      viewportWidth,
    );
    setNodes(builtNodes);
    setEdges(builtEdges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, removedSkills, search, viewportWidth, setNodes, setEdges]);

  useEffect(() => {
    if (fitTimer.current) clearTimeout(fitTimer.current);
    fitTimer.current = setTimeout(() => {
      fitView({ duration: 300 });
    }, 30);
    return () => {
      if (fitTimer.current) clearTimeout(fitTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, removedSkills, viewportWidth, fitView]);

  const expandAll = useCallback(() => {
    setExpanded(Object.fromEntries(CATEGORIES.map((c) => [c.id, true])));
  }, []);

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
          {
            label: isOpen ? "Collapse skills" : "Expand skills",
            onClick: () => toggleCategory(menu.id),
          },
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
            onClick: () =>
              setRemovedSkills((prev) => new Set(prev).add(menu.id)),
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
    [toggleCategory],
  );

  const onNodeContextMenu = useCallback((event, node) => {
    event.preventDefault();
    if (node.type === "category") {
      setMenu({
        type: "category",
        id: node.id,
        x: event.clientX,
        y: event.clientY,
      });
    } else if (node.type === "skill") {
      const parent = CATEGORIES.find((c) =>
        c.skills.some((s) => s.id === node.id),
      );
      setMenu({
        type: "skill",
        id: node.id,
        parentId: parent?.id ?? "",
        x: event.clientX,
        y: event.clientY,
      });
    }
  }, []);

  const onPaneContextMenu = useCallback((event) => {
    event.preventDefault();
    setMenu({ type: "pane", x: event.clientX, y: event.clientY });
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* <div className="absolute left-1/2 top-5 z-20 w-[92%] max-w-md -translate-x-1/2">
        <div className="flex items-center rounded-2xl border border-[#E8DDD1] bg-cream px-4 py-3 shadow-lg">
          <Search size={18} className="mr-3 text-[#B5A79A]" />

          <input
            type="text"
            placeholder="Search a skill (e.g. Docker, TypeScript...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-dark placeholder:text-[#B5A79A] outline-none"
          />
        </div>
      </div> */}
      <ReactFlow
        nodes={nodes}
        edges={layout.hideEdges ? [] : edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        onNodeContextMenu={onNodeContextMenu}
        onPaneContextMenu={onPaneContextMenu}
        onPaneClick={closeMenu}
        onMove={closeMenu}
        fitView
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={true}
        zoomOnDoubleClick={false}
        nodesConnectable={false}
        edgesFocusable={false}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="rgb(from var(--color-secondary) r g b / 0.12)"
        />
      </ReactFlow>
      )
      {menu && menuItems && (
        <ContextMenu
          x={menu.x}
          y={menu.y}
          title={menuItems.title}
          items={menuItems.items}
          onClose={closeMenu}
        />
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
