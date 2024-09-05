import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Richard Lin's Greatest Portfolio of All Time",
  description: "6.1040 Fall 2024",
  base: "/portfolio-rlin/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "/about"}
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "About Me",
        link: "/about",
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/earlight" }, 
                  { icon: "linkedin", link: "https://www.linkedin.com/in/rwlny" }],
  },
});
