import { c as create_ssr_component, f as compute_rest_props, e as escape, n as null_to_empty } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: ".container.svelte-1fbgxl7{width:100%;padding:0.8rem 18%}.display.svelte-1fbgxl7{display:flex;justify-content:space-between;align-items:center}",
  map: null
};
const ContainerCentred = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let props = { ...$$restProps };
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`${props.class} container`), true) + " svelte-1fbgxl7"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  ContainerCentred as C
};
