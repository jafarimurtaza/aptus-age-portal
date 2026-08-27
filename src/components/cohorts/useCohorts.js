"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Rocket, Star } from "lucide-react";
const API_URL = "/api/cohorts";

const statusMap = { Active: "ongoing", Completed: "completed" };

const iconsByCategory = { web: GraduationCap, ai: Rocket, data: Star };

// "2026-07-18" → "Jul 2026"
function formatDate(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  return isNaN(date)
    ? ""
    : date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

// "2026-07-18" → "2026"
function getYear(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  return isNaN(date) ? "" : String(date.getFullYear());
}

function getMonths(startIso, endIso) {
  if (!startIso || !endIso) return 0;
  const start = new Date(startIso);
  const end = new Date(endIso);
  if (isNaN(start) || isNaN(end)) return 0;
  const diffInDays = (end - start) / (1000 * 60 * 60 * 24);
  return Math.max(1, Math.round(diffInDays / 30.44));
}

function transformCohort(item, index) {
  const category = "web"; // API has no category field yet
  return {
    id: item.code ?? `cohort-${index + 1}`,
    title: item.name?.trim() || `Cohort ${index + 1}`,
    status: statusMap[item.status] ?? "completed",
    startDate: formatDate(item.startDate),
    endDate: formatDate(item.endDate),
    description: item.goal ?? "",
    months: getMonths(item.startDate, item.endDate),
    year: getYear(item.startDate),
    category,
    icon: iconsByCategory[category],
    button: "View Cohort",
    graduates: 0,
    projects: 0,
    skills: [],
  };
}

export default function useCohorts() {
  const [cohorts, setCohorts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cohorts");
        return res.json();
      })
      .then((json) => {
        const list = Array.isArray(json) ? json : json.data;
        if (!Array.isArray(list)) throw new Error("Invalid cohorts response");
        setCohorts(list.map(transformCohort));
        setError(null);
      })
      .catch((err) => {
        setCohorts([]);
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { cohorts, isLoading, error };
}