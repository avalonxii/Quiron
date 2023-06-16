import { c as create_ssr_component, v as validate_component, d as add_attribute } from "./index3.js";
import { A as Avatar } from "./Avatar.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: "button.svelte-bxspqw.svelte-bxspqw{background-color:transparent;pointer-events:none}.input__container.svelte-bxspqw.svelte-bxspqw{display:flex;flex-direction:column;align-items:center;gap:1rem}.input__container.svelte-bxspqw input.svelte-bxspqw{display:none;opacity:0;height:0}.input__container.svelte-bxspqw label.svelte-bxspqw{display:flex;justify-content:center;align-items:center;position:relative;min-width:8.75rem;width:100%;padding:0.35rem 1.25rem;border-radius:0.6rem;font-size:1.125rem;font-weight:500;letter-spacing:0.05rem;cursor:pointer;transition:ease-out 0.3s;background:transparent;border:0.125rem solid #2d2d2d;width:fit-content;font-size:1rem}.input__container.svelte-bxspqw label.svelte-bxspqw:active{transform:scale(0.85)}.input__container.svelte-bxspqw label.svelte-bxspqw:hover{color:#0b76f1;border-color:#0b76f1}",
  map: null
};
const InputPhoto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `<div class="input__container svelte-bxspqw"><button class="svelte-bxspqw">${`${validate_component(Avatar, "Avatar").$$render($$result, {}, {}, {})}`}</button>

	<label class="svelte-bxspqw">UploadPhoto
		<input${add_attribute("name", name, 0)} type="file" accept="image/*" class="svelte-bxspqw"></label>
</div>`;
});
export {
  InputPhoto as I
};
