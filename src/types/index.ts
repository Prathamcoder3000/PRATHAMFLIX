/**
 * Application TypeScript type definitions
 */

export * from "./ui";
export * from "./navigation";
export * from "./project";
export * from "./my-list";
export * from "./search";

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

