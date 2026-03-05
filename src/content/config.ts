import { defineCollection, z } from "astro:content";

const articulos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    categoria: z.enum(["politica","sociedad","cultura","economia","opinion"]),
    fecha: z.date()
  })
});

export const collections = {
  articulos
};