import { c as create_ssr_component, f as compute_rest_props, d as add_attribute, e as escape, n as null_to_empty } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Poppins:ital,wght@1,600&display=swap");p.svelte-1irggs0{font-size:1rem;line-height:20px}',
  map: null
};
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let props = { ...$$restProps };
  $$result.css.add(css);
  return `<p${add_attribute("style", props.style, 0)} class="${escape(null_to_empty(props.class), true) + " svelte-1irggs0"}">${slots.default ? slots.default({}) : ``}
</p>`;
});
export {
  Paragraph as P
};
