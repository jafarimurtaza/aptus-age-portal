"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Rocket, Star } from "lucide-react";

const API_URL = "/api/cohorts";

const statusMap = { Active: "ongoing", Completed: "completed" };
const iconsByCategory = { web: GraduationCap, ai: Rocket, data: Star };

function normalizeCohortsResponse(json) {
  if (Array.isArray(json)) return json;
  if (json && Array.isArray(json.data)) return json.data;
  return [];
}

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
  const startDateValue = item.startDate ?? item.start_date ?? item.start ?? "";
  const endDateValue = item.endDate ?? item.end_date ?? item.end ?? "";

  return {
    id: item.code ?? `cohort-${index + 1}`,
    title: item.name?.trim() || `Cohort ${index + 1}`,
    status: statusMap[item.status] ?? "completed",
    startDate: formatDate(startDateValue),
    endDate: formatDate(endDateValue),
    description: item.goal ?? "",
    months: getMonths(startDateValue, endDateValue),
    year: getYear(startDateValue),
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
    let isMounted = true;

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch cohorts");
        return response.json();
      })
      .then((json) => {
        const list = normalizeCohortsResponse(json);
        if (!Array.isArray(list)) {
          throw new Error("Invalid cohorts response");
        }

        if (!isMounted) return;
        setCohorts(list.map(transformCohort));
        setError(null);
      })
      .catch((err) => {
        if (!isMounted) return;
        setCohorts([]);
        setError(err?.message || "Unable to load cohorts");
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { cohorts, isLoading, error };
}