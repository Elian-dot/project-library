import { defineCollection, z } from "astro:content";

// Esquema definido como un objeto Zod estático
const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  img: z.string(),
  readtime: z.number(),
  description: z.string(),
  buy: z.object({
    spain: z.string().url(),
    usa: z.string().url(),
  }),
});

// Define la colección usando el esquema estático
const books = defineCollection({
  schema: bookSchema,
});

// Exporta el tipo basado en el esquema
export type Book = z.infer<typeof bookSchema>;

export const collections = { books };