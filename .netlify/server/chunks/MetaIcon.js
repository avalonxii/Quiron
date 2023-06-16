import { c as create_ssr_component } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: ".meta__container.svelte-cupnyx{display:flex;flex-direction:column;align-items:center;font-size:1.4rem;color:#2d2d2d}.meta--icon.svelte-cupnyx{cursor:pointer}.meta--icon.svelte-cupnyx:hover{transform:scale(1.1)}.meta--icon.svelte-cupnyx:active{transform:scale(0.9)}.meta--info.svelte-cupnyx{font-size:0.7rem;user-select:none}",
  map: null
};
const MetaIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="meta__container svelte-cupnyx"><div class="meta--icon svelte-cupnyx">${slots.default ? slots.default({}) : ``}</div>
	<div class="meta--info svelte-cupnyx">${slots["meta-info"] ? slots["meta-info"]({}) : ``}</div>
</div>`;
});
export {
  MetaIcon as M
};
