import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute } from "./index3.js";
import { I as Icon } from "./Icon.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: ".avatar-component__photo.svelte-1kdzfjg.svelte-1kdzfjg{min-width:var(--size);width:var(--size);height:var(--size);position:relative;border-radius:100%;border:0.0625rem solid #f8f8f8;box-shadow:0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.1);user-select:none;cursor:pointer}.avatar-component__photo.svelte-1kdzfjg>img.svelte-1kdzfjg{width:100%;height:100%;border-radius:100%;background-size:cover;background-repeat:no-repeat;background-position:center}.avatar-component__edit.svelte-1kdzfjg.svelte-1kdzfjg{position:absolute;right:0;z-index:10}.avatar-component__edit.svelte-1kdzfjg input.svelte-1kdzfjg{display:none}.avatar-component__edit.svelte-1kdzfjg label.svelte-1kdzfjg{width:2.125rem;height:2.125rem;display:flex;justify-content:center;align-items:center;border-radius:100%;background:#ffffff;border:0.0625rem solid transparent;box-shadow:0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.12);font-weight:normal;cursor:pointer;transition:all 0.2s ease-in-out}.avatar-component__edit.svelte-1kdzfjg label.svelte-1kdzfjg:hover{background:#f1f1f1;border-color:#d6d6d6}",
  map: null
};
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "http://i.pravatar.cc/500?img=7" } = $$props;
  let { editable = false } = $$props;
  let { small = false } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  $$result.css.add(css);
  return `<button class="avatar-component__photo svelte-1kdzfjg" style="${"--size: " + escape(small ? "3rem" : "10.625rem", true)}">${editable ? `<div class="avatar-component__edit svelte-1kdzfjg"><input type="file" name="image" accept="image/*" class="svelte-1kdzfjg">
			<label for="image" class="svelte-1kdzfjg">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:pencil" }, {}, {})}</label></div>` : ``}

	<img${add_attribute("src", src, 0)} alt="foto de perfil usuario" class="svelte-1kdzfjg">
</button>`;
});
export {
  Avatar as A
};
