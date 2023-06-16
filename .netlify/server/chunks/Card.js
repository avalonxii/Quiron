import { c as create_ssr_component, e as escape, n as null_to_empty, v as validate_component } from "./index3.js";
import { P as Paragraph } from "./Paragraph.js";
import { S as Subtitle } from "./Subtitle.js";
import { S as Smalltext } from "./Smalltext.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: "button.svelte-1fwy353.svelte-1fwy353{background-color:transparent;text-align:start;font-size:1rem}.solution.svelte-1fwy353.svelte-1fwy353{width:24rem !important}.card__container.svelte-1fwy353.svelte-1fwy353{border:0.125rem solid #e2e2e2;border-radius:0.65rem;width:22.5rem;overflow:hidden}.card__container.svelte-1fwy353 .meta--info.svelte-1fwy353{margin-top:0.5rem}.card__image.svelte-1fwy353.svelte-1fwy353{height:14.375rem;overflow:hidden;width:100%;cursor:pointer}.card__info.svelte-1fwy353.svelte-1fwy353{padding:1rem}.card__title.svelte-1fwy353.svelte-1fwy353{padding-bottom:1rem;display:flex;justify-content:space-between;text-transform:capitalize}.card__submitted-hashtags.svelte-1fwy353.svelte-1fwy353{color:#0b76f1;margin-bottom:1rem;font-weight:bold}.card__tags.svelte-1fwy353.svelte-1fwy353{padding:1rem 0}.card__extra-info.svelte-1fwy353.svelte-1fwy353{display:flex;justify-content:space-between;align-items:center}.card__user.svelte-1fwy353.svelte-1fwy353,.card__resume.svelte-1fwy353.svelte-1fwy353{padding:1rem 0;border-top:2px solid #e2e2e2}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { solution = false } = $$props;
  if ($$props.solution === void 0 && $$bindings.solution && solution !== void 0)
    $$bindings.solution(solution);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`card__container ${solution ? "solution" : ""}`), true) + " svelte-1fwy353"}"><button class="card__image svelte-1fwy353">${slots.card__image ? slots.card__image({}) : ``}</button>

	<div class="${escape(null_to_empty(`card__info `), true) + " svelte-1fwy353"}"><div class="card__header">${solution ? `${validate_component(Smalltext, "Smalltext").$$render($$result, {}, {}, {
    default: () => {
      return `${slots["card__submitted-date"] ? slots["card__submitted-date"]({}) : ``}`;
    }
  })}` : ``}
			<div class="card__title svelte-1fwy353"><button class="svelte-1fwy353">${validate_component(Subtitle, "Subtitle").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.card__title ? slots.card__title({}) : ``}`;
    }
  })}</button>
				${slots.card__difficulty ? slots.card__difficulty({}) : ``}</div>
			<div class="card__submitted-hashtags svelte-1fwy353">${slots["card__submitted-hashtags"] ? slots["card__submitted-hashtags"]({}) : ``}</div></div>

		<div class="card__extra-info svelte-1fwy353"><div class="card__tags svelte-1fwy353">${slots.card__tags ? slots.card__tags({}) : ``}</div>
			<div class="card__options">${slots.card__options ? slots.card__options({}) : ``}</div></div>
		<div class="meta--info svelte-1fwy353">${solution ? `<div class="card__user svelte-1fwy353">${slots.card__user ? slots.card__user({}) : ``}</div>` : ``}
			<div class="card__resume svelte-1fwy353">${validate_component(Paragraph, "Paragraph").$$render($$result, { class: "text-ellipsis" }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div></div></div>
</div>`;
});
export {
  Card as C
};
