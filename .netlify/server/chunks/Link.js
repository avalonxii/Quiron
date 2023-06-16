import { c as create_ssr_component, d as add_attribute, e as escape } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: "a.svelte-1w27vfg{color:#0b76f1;font-weight:bold;text-transform:capitalize;text-decoration:none}a.svelte-1w27vfg:hover{transform:scale(1.1)}",
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "#" } = $$props;
  let { label = "label" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  return `<a${add_attribute("href", href, 0)} class="svelte-1w27vfg">${escape(label)}</a>`;
});
export {
  Link as L
};
