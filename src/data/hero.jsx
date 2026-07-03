import {
  Users,
  Trophy,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

export const hero = {
  badge: "Our Journey",

  title: {
    first: "Cohorts that",
    highlight: "create impact",
  },

  description:
    "We build learning cohorts that help students grow, collaborate, and achieve real-world results through structured learning experiences.",

  stats: [
    {
      id: 1,
      icon: Users,
      value: "25+",
      label: "Active Students",
    },
    {
      id: 2,
      icon: Trophy,
      value: "85%",
      label: "Success Rate",
    },
    {
      id: 3,
      icon: GraduationCap,
      value: "14+",
      label: "Graduates",
    },
    {
      id: 4,
      icon: TrendingUp,
      value: "3+",
      label: "Cohorts Completed",
    },
  ],
};