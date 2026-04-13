# Band Boosters Association Website

![BBA Homepage](https://github.com/bedwards38/bba_prototype/blob/master/src/assets/images/home.png)

The Band Boosters Association (BBA) website is an archived, proof-of-concept site built off of an [open-source template](https://github.com/mearashadowfax/ScrewFast).

This project was developed in under a week, and it was intended to be inspiration for a BBA in need of a modernized webiste that emphasized functional minimalism. 

In an effort to provide the BBA some anonymity, all identifying aspects have been stripped from the codebase, including icons, images, names, etc. This necessitated wiping the project's entire development history from Git, leaving only one commit in the repo.

This project was built with the combination of [Astro 4](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [Preline UI](https://preline.co/).
  
### A Note on AI Usage
In this day and age, I feel its important to be open and honest about the use of AI in the development of a project. 

AI ***was not*** used in the developement of this project. More specifically, I ***did not*** use AI in any way when developing ontop of the base template. I cannot claim to know if AI was used in the development of the base template.

## Project Structure
Inside of the repository, you'll see the following structure:

```text
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── icon.svg
│   │   │   └── ...
│   │   └── ...
│   ├── components/
│   │   ├── BrandLogo.astro
│   │   └── ...
│   ├── content/
│   │   ├── events/
│   │   │   ├── en/
│   │   │   │   ├── band-booster-meeting.mdx
│   │   │   │   └── ...
│   │   │   └── ...
│   │   └── ...
│   ├── data_files/
│   │   ├── faqs.json/
│   │   └── ...
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── events/
│   │   │   ├── index.astro
│   │   │   └── ...
│   │   ├──  index.astro
│   │   └── ...
│   ├── utils/
│   │   ├──  utils.ts
│   │   └── ...
├── package.json
├── astro.config.mjs
├── tailwind.config.js
└── ...
```

In the `src/pages/` directory, each page is exposed as an accessible route on the site based on its file name.

In the `src/content/` and `src/data_files/` directories, each `.mdx` and `.json` file is used to supply dynamic content to pages that can be abstracted for use in multiple scenarios.

The `src/layout/` and `src/components/` directories aren't special; however, they contain resuable components that are used across the various pages of the site.

In the `src/utils/` directory, each `.ts` file provides some utility function that is used in another area of the project.

Any static assets, like images, are stored in the `src/assets` directory.
