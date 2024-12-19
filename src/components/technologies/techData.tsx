import { Layout, Database, Server } from "lucide-react";
import type { TechStack, AdditionalTool } from "./types";

export const techStacks: TechStack[] = [
  {
    key: "frontend",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    key: "backend",
    icon: <Server className="w-6 h-6" />,
  },
  {
    key: "database",
    icon: <Database className="w-6 h-6" />,
  },
];

export const additionalTools: AdditionalTool[] = [
  { key: "git", level: 90, color: "#F05032" },
  { key: "cicd", level: 85, color: "#2396ED" },
  { key: "testing", level: 85, color: "#15C213" },
  { key: "agile", level: 90, color: "#764ABC" },
  { key: "uiux", level: 80, color: "#FF61F6" },
  { key: "performance", level: 85, color: "#FFB800" },
];
