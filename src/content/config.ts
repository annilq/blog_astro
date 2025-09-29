import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Define the `posts` content collection. Files will live in `src/content/posts`.
// We will symlink this directory to `public/posts` to reuse your existing files.
const posts = defineCollection({
  loader: glob({ pattern: "posts/**/*.{md,mdx}", base: "./src/content" }),
  schema: z.object({
    title: z.coerce.string().optional(),
    date: z.union([z.string(), z.date()]).optional(),
    description: z.string().optional(),
    tags: z.union([z.array(z.string()), z.string()]).optional()
  }).optional()
});

export const collections = {
  posts
};


