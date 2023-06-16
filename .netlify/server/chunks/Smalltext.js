import { c as create_ssr_component } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Poppins:ital,wght@1,600&display=swap");p.svelte-mfa0zb{font-size:0.9rem;color:rgb(156, 156, 156);margin-bottom:0.1875rem}',
  map: null
};
const Smalltext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<p class="svelte-mfa0zb">${slots.default ? slots.default({}) : ``}</p>`;
});
export {
  Smalltext as S
};
