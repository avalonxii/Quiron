import { c as create_ssr_component } from "../../chunks/index3.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@1&family=Poppins:wght@600;900&display=swap");:root{--negro:#393939;--tipo-principal:Helvetica, Arial, sans-serif;--tipo-secundaria:Verdana}@media(prefers-color-scheme: dark){:root{--negro:#ececec}}@media(prefers-reduced-motion: reduce){*{animation:none !important;transition:none !important}}*,*::before,*::after{margin:0;padding:0;border:0;box-sizing:border-box;vertical-align:baseline}*::before,*::after{display:block}.svelte-1n3omnr::selection{background-color:var(--negro);color:var(--blanco)}body{min-height:100vh;font-size:100%;font-family:var(--tipo-principal);hyphens:auto;font-smooth:always;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body, button{font-family:"JetBrains Mono", monospace}h1, h2, h3, h4, h5, h6{font-family:"Poppins", sans-serif}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
