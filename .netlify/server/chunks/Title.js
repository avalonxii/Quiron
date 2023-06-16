import { c as create_ssr_component } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Poppins:ital,wght@1,600&display=swap");h2.svelte-kgtfwr{font-size:2.7rem;position:relative;width:fit-content;z-index:0;margin-bottom:2rem}h2.svelte-kgtfwr::before{content:"";position:absolute;display:block;width:100%;height:0.25rem;bottom:0;left:0;background-color:#0b76f1;transform:scaleX(0);transform-origin:top right;transition:transform 0.3s ease}h2.svelte-kgtfwr:hover::before{transform:scaleX(1)}',
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2 class="svelte-kgtfwr">${slots.default ? slots.default({}) : ``}
</h2>`;
});
export {
  Title as T
};
