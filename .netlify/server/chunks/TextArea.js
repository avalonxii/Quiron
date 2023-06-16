import { c as create_ssr_component, d as add_attribute, e as escape, n as null_to_empty } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: ".error.svelte-1odlq6u.svelte-1odlq6u.svelte-1odlq6u{padding:0.75rem;color:#f6343e}.normal.svelte-1odlq6u.svelte-1odlq6u.svelte-1odlq6u{display:none}.text-area__wrapper.svelte-1odlq6u.svelte-1odlq6u.svelte-1odlq6u{position:relative;width:100%;border-radius:0.3125rem;overflow:hidden;display:flex;flex-direction:column;min-height:13rem}.text-area__wrapper.svelte-1odlq6u .focus-bg.svelte-1odlq6u.svelte-1odlq6u{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.05);z-index:-1;transform:scaleX(0);transform-origin:left}.text-area__wrapper.svelte-1odlq6u .input.svelte-1odlq6u.svelte-1odlq6u{-webkit-appearance:none;appearance:none;width:100%;border:0;font-family:inherit;padding:1rem 0.75rem 0 0.75rem;height:3.5rem;font-size:1rem;font-weight:400;letter-spacing:0.0938rem;background:rgba(0, 0, 0, 0.02);box-shadow:inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.3);color:black;transition:all 0.15s ease}.text-area__wrapper.svelte-1odlq6u .input.svelte-1odlq6u.svelte-1odlq6u:hover{background:rgba(0, 0, 0, 0.07);box-shadow:inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.5)}.text-area__wrapper.svelte-1odlq6u .input.svelte-1odlq6u.svelte-1odlq6u:focus{background:rgba(0, 0, 0, 0.05);outline:none;box-shadow:inset 0 -0.125rem 0 #0b76f1}.text-area__wrapper.svelte-1odlq6u .input.svelte-1odlq6u:focus+.focus-bg.svelte-1odlq6u{transform:scaleX(1);transition:all 0.1s ease}.text-area__wrapper.svelte-1odlq6u .input.svelte-1odlq6u.svelte-1odlq6u{height:10.625rem;resize:none;padding:1rem}.text-area__wrapper.svelte-1odlq6u .input.svelte-1odlq6u.svelte-1odlq6u::-webkit-scrollbar{width:0.4875rem}.text-area__wrapper.svelte-1odlq6u .input.svelte-1odlq6u.svelte-1odlq6u::-webkit-scrollbar-thumb{border-radius:0.625rem;-webkit-box-shadow:inset 0 0 0.375rem rgba(11, 118, 241, 0.3);background-color:#0b76f1}.text-area__wrapper.svelte-1odlq6u .input:not(:focus).input.svelte-1odlq6u.svelte-1odlq6u::-webkit-scrollbar-thumb{border-radius:0.625rem;-webkit-box-shadow:inset 0 0 0.375rem rgba(11, 118, 241, 0.3);background-color:rgba(45, 45, 45, 0.5)}",
  map: null
};
const TextArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error = false } = $$props;
  let { name = "" } = $$props;
  let { value = "" } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  return `<div class="text-area__wrapper svelte-1odlq6u"><textarea${add_attribute("name", name, 0)} class="input svelte-1odlq6u" cols="30" rows="10" maxlength="150">${escape(value, false)}</textarea>

	<span class="focus-bg svelte-1odlq6u"></span>
	<span class="${escape(null_to_empty(error ? "error" : "normal"), true) + " svelte-1odlq6u"}">mensaje de error</span>
</div>`;
});
export {
  TextArea as T
};
