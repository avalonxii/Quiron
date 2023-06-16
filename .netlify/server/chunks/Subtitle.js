import { c as create_ssr_component, f as compute_rest_props, e as escape, n as null_to_empty, d as add_attribute } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Poppins:ital,wght@1,600&display=swap");h3.svelte-1mypabp{width:fit-content;font-size:2rem}h3.svelte-1mypabp:hover{text-decoration:underline;cursor:pointer}',
  map: null
};
const Subtitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let props = { ...$$restProps };
  $$result.css.add(css);
  return `<h3 class="${escape(null_to_empty(props.class), true) + " svelte-1mypabp"}"${add_attribute("style", props.style, 0)}>${slots.default ? slots.default({}) : ``}
</h3>`;
});
export {
  Subtitle as S
};
