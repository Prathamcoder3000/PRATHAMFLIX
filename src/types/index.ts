/**
 * Application TypeScript type definitions
 */

export * from "./ui";

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}
