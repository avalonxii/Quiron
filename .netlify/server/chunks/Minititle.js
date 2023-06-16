import { c as create_ssr_component, e as escape, n as null_to_empty } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Poppins:ital,wght@1,600&display=swap");p.svelte-1qdzh1s{position:relative;font-weight:bold;font-size:1.2rem;margin-bottom:1rem;padding:0 0.4rem}.underlined.svelte-1qdzh1s::before{content:"";position:absolute;left:24px;bottom:-2px;width:150px;height:14px;transform:skew(-12deg) translateX(-50%);background:rgba(238, 111, 87, 0.5);z-index:-1}',
  map: null
};
const Minititle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { underlined = false } = $$props;
  if ($$props.underlined === void 0 && $$bindings.underlined && underlined !== void 0)
    $$bindings.underlined(underlined);
  $$result.css.add(css);
  return `<p class="${escape(null_to_empty(underlined ? "underlined" : ""), true) + " svelte-1qdzh1s"}">${slots.default ? slots.default({}) : ``}
</p>`;
});
export {
  Minititle as M
};
