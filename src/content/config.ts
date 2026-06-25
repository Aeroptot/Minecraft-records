import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string().min(1, 'Article title is required'),
  description: z.string().min(1, 'Article description is required'),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  category: z.string().min(1, 'Article category is required'),
  cover: z.string().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
});

const galleryItemSchema = z.union([
  z.string(),
  z.object({
    src: z.string().min(1, 'Gallery image path is required'),
    caption: z.string().optional(),
  }),
]);

const worldSchema = z.object({
  title: z.string().min(1, 'World entry title is required'),
  description: z.string().min(1, 'World entry description is required'),
  date: z.coerce.date(),
  minecraftVersion: z.string().min(1, 'Minecraft version is required'),
  phase: z.string().min(1, 'World phase is required'),
  location: z.string().optional(),
  coordinates: z.string().optional(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  gallery: z.array(galleryItemSchema).default([]),
  relatedArticles: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
});

export const collections = {
  articles: defineCollection({
    type: 'content',
    schema: articleSchema,
  }),
  world: defineCollection({
    type: 'content',
    schema: worldSchema,
  }),
};
