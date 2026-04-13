import { z, defineCollection } from "astro:content";

const eventsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      date: z.date(),
      cardImage: image(),
      cardImageAlt: z.string(),
      main: z.object({
        subtitle: z.string(),
        mainImage: image(),
        mainImageAlt: image(),
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        }),
      ),
      longDescription: z.object({
        title: z.string(),
        content: z.string(),
      }),
      descriptionList: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
          icon: z.string().optional(),
        }),
      ),
      musicDescription: z
        .object({
          title: z.string(),
          subtitle: z.string().optional(),
          featuredTitle: z.string(),
          featured: z.array(z.string()),
        })
        .optional(),
    }),
});
