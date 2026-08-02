
import {
  LayoutGrid,
  Brain,
  Code2,
  Database,
  Infinity,
} from "lucide-react";

export const yearFilters = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "2022", value: "2022" },
  { id: 3, label: "2023", value: "2023" },
  { id: 4, label: "2024", value: "2024" },
  { id: 5, label: "Ongoing", value: "ongoing" },
];

export const categoryFilters = [
  {
    id: 1,
    label: "All",
    value: "all",
    icon: LayoutGrid,
  },
  {
    id: 2,
    label: "AI",
    value: "ai",
    icon: Brain,
  },
  {
    id: 3,
    label: "Web",
    value: "web",
    icon: Code2,
  },
  {
    id: 4,
    label: "Data",
    value: "data",
    icon: Database,
  },
  {
    id: 5,
    label: "DevOps",
    value: "devops",
    icon: Infinity,
  },
];