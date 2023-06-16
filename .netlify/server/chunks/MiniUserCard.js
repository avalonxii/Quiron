import { c as create_ssr_component, e as escape, n as null_to_empty, v as validate_component } from "./index3.js";
import { S as Smalltext } from "./Smalltext.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Poppins:ital,wght@1,600&display=swap");button.svelte-wngv62.svelte-wngv62{background-color:transparent;text-align:start;font-size:1rem}.border.svelte-wngv62.svelte-wngv62{border:0.3125rem solid #e2e2e2 !important;border-radius:0.625rem;padding:0.5rem}.card-user__container.svelte-wngv62.svelte-wngv62{width:100%;display:flex;align-items:center;gap:3rem;cursor:pointer}.card-user__container.svelte-wngv62.svelte-wngv62:hover{background-color:rgb(250, 250, 250)}.card-user__info.svelte-wngv62.svelte-wngv62{display:grid;gap:0.5rem}.card-user__name.svelte-wngv62.svelte-wngv62{display:flex;gap:1rem;font-weight:bold;cursor:pointer}.card-user__name.svelte-wngv62 .points.svelte-wngv62{color:#0b76f1}',
  map: null
};
const MiniUserCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { border = false } = $$props;
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  $$result.css.add(css);
  return `<button class="${escape(null_to_empty(`card-user__container ${border ? "border" : ""}`), true) + " svelte-wngv62"}"><div class="card__image">${slots.card__image ? slots.card__image({}) : ``}</div>
	<div class="card-user__info svelte-wngv62"><div class="card-user__name svelte-wngv62">${slots["card__main-data"] ? slots["card__main-data"]({}) : ``}
			<li class="points svelte-wngv62">${slots["card__extra-data"] ? slots["card__extra-data"]({}) : ``}</li></div>
		${validate_component(Smalltext, "Smalltext").$$render($$result, {}, {}, {
    default: () => {
      return `${slots["card__sub-data"] ? slots["card__sub-data"]({}) : ``}`;
    }
  })}</div>
</button>`;
});
export {
  MiniUserCard as M
};
