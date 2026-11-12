import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each project is a Markdown file in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    period: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

// Each race is a Markdown file in src/content/races/
const races = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/races' }),
  schema: z.object({
    name: z.string(),
    distance: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(), // leave out for upcoming races
    note: z.string().optional(),
  }),
});

export const collections = { projects, races };
