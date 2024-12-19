export type ProjectKey = "rollmaster" | "globalize" | "fourYou" | "schoolfield";

export interface Project {
  key: ProjectKey;
  image: string;
  background: string;
  website: string;
  direction: "left" | "right";
}
