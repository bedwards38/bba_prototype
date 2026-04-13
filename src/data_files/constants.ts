export const SITE = {
  title: "Band Boosters Association",
  description:
    "A parent-led non-profit organization whose purpose is to support all the band programs in the school district. Meetings are held every third Thursday of the month, usually in the high school band room.",
  description_short:
    "A parent-led non-profit organization whose purpose is to support all the band programs in the school district.",
  url: "https://bandboosters.org",
  author: "Braedyn Edwards",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Supporting every band program in the district make music possible`,
  description:
    "A parent-led non-profit organization whose purpose is to support all the band programs in the school district. Meetings are held every third Thursday of the month, usually in the high school band room.",
};
