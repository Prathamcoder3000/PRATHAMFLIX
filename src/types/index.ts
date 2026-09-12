/**
 * Application TypeScript type definitions
 */

export * from "./ui";
export * from "./navigation";

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}
