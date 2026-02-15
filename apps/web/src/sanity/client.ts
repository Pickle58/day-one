import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fnp4jm0i",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});