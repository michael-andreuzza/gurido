# Astro & Tailwind CSS Template

Built by [Mike Andreuzza](https://michaelandreuzza.com) with Astro & Tailwind CSS under the [Creative Commons Attribution license](https://windbasics.com/license)

### This is a human-readable summary of (and not a substitute for) the [license](https://creativecommons.org/licenses/by/3.0/legalcode). [Disclaimer](https://creativecommons.org/licenses/by/3.0/#).

Extended version on LICENSE file.

## Need an attribution-free version?

Checkout [Lexington Themes](https://lexingtonthemes.com/) for free and premium multipage themes & UI Kits
For freelancers, developers, businesses, and personal use.
Beautifully crafted with Astro.js, and Tailwind CSS — Simple & easy to customise.

## Updates

This template is open-source software licensed under the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0). Feel free to fork, modify, and use it in your projects.

## This template is using Tailwind CSS V4

Now we are using only a CSS file. It's called `global.css` and it's located in the src/styles folder. Now we are eimporting Tailwind CSS on the same file instead of using the `tailwind.config.cjs` file. Like this:

```css
// Importing Tailwind CSS
@import "tailwindcss";
// Importing Tailwind plugins
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";
```

Then to add your styles you will use the @theme directive. Like this:

```css
@theme {
  /* Your CSS goes here, see how styles are written on the global.css file */
}
```

Remember this is just in Alpha version, so you can use it as you want. Just keep an eye on the changes that Tailwind CSS is going to make.


## Template Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.
Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:
| Command | Action |
| :--------------------- | :----------------------------------------------- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI |

# [Wind Basics](https://windbasics.com/)
