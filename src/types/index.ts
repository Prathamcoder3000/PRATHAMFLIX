/**
 * Application TypeScript type definitions
 */

export * from "./ui";
export * from "./navigation";
export * from "./project";

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

