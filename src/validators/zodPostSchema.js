import { z } from "zod";
// Zod Post schema
export const zodPostSchema = z.object({
  caption: z.string({ message: "Caption OR Image is missing" }).min(1),
  //   image: z.string({ message: "Image is required" }),
});
