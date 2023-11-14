export interface Template {
    url: string;
    description: string;
    title: string;
    avatar: string;
  };
  const workOne: Template = {
    url: "https://windstatic.com/",
    description: "A set of 161 elements & layouts made with Tailwind CSS and Alpine.js",
    avatar: "/work/windstatic.png ",
    title: "Windstatic",
  };
  const workNine: Template = {
    url: "https://windbasics.com/",
    description: "Wind Basics, basic and sturdy themes under the creative commons license.",
    avatar: "/work/windbasics.png ",
    title: "Windbasics",
  };
  const workTwo: Template = {
    url: "https://lexingtonthemes.com/",
    description: "Outstanding themes and UI Kits made with Astro & Tailwind CSS",
    avatar: "/work/lexington.png",
    title: "Lexington Themes",
  };
  const workThree: Template = {
    url: "https://colorsandfonts.com/",
    description: "Color and typography resources and inspiration for Web Developers and Digital Designers.",
    avatar: "/work/caf.png  ",
    title: "Colors & fonts",
  };
  const workfour: Template = {
    url: "https://svgdoodles.com/",
    description: "A free collection of 208 super duper SVG Doodles to spice up your designs.",
    avatar: "/work/doodles.png  ",
    title: "SVG Doodles",
  };
  const workfive: Template = {
    url: "https://gradients.michaelandreuzza.com/",
    description: "A collection of 50 multi colour vector for web developers and digital designers.",
    avatar: "/work/gradients.png  ",
    title: "SVG Gradients",
  };
  const worksix: Template = {
    url: "https://marketplace.visualstudio.com/publishers/wicked-labs",
    description: "A popular collection of 7 different themes with different variatons.",
    avatar: "/work/vscode.png ",
    title: "VS Code themes",
  };
  const workseven: Template = {
    url: "https://www.builtatlightspeed.com/",
    description: "A directory of 4000+ templates & UI kits for the modern stack.",
    avatar: "/work/bls.png  ",
    title: "Website for Built at light speed",
  };
  const workeight: Template = {
    url: "https://devdojo.com/tails/",
    description: "Tailwind Page Builder and Component Library",
    avatar: "/work/tails.png  ",
    title: "Different components for Tails",
  };
  const workTen: Template = {
    url: "https://wickedbackgrounds.com/",
    description: "Create beautiful SVG backgrounds for your designs.",
    avatar: "/work/wb.png  ",
    title: "Landing page for Wicked Backgrounds",
  };
  export const byName = {
    workTwo,
    workOne,
    workNine,
    workThree,
    workfour,
    workfive,
    worksix,
    workseven,
    workTen,
    workeight,
  };
  export const work = Object.values(byName);
