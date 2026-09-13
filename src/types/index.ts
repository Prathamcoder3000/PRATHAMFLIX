/**
 * Application TypeScript type definitions
 */

export * from "./ui";
export * from "./navigation";
export * from "./project";
export * from "./my-list";
export * from "./search";
export * from "./profile";
export * from "./developer";
export * from "./portfolio";
export * from "./credentials";
export * from "./resume";
export * from "./ai-assistant";

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

