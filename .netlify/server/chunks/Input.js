import { c as create_ssr_component, f as compute_rest_props, e as escape, n as null_to_empty, d as add_attribute, v as validate_component } from "./index3.js";
import { I as Icon } from "./Icon.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: ".input__wrapper.svelte-98uzkg.svelte-98uzkg.svelte-98uzkg{position:relative;width:100%;border-radius:0.3125rem;overflow:hidden;display:flex;flex-direction:column;min-width:300px;min-height:100px}.input__wrapper.svelte-98uzkg .label.svelte-98uzkg.svelte-98uzkg{position:absolute;top:1.25rem;left:0.75rem;font-size:1.125rem;color:rgba(0, 0, 0, 0.5);font-weight:500;transform-origin:0 0;transform:translate3d(0, 0, 0);transition:all 0.2s ease;pointer-events:none}.input__wrapper.svelte-98uzkg .icon.svelte-98uzkg.svelte-98uzkg{position:absolute;color:rgba(0, 0, 0, 0.6);background-color:transparent;top:1rem;right:0.75rem;font-size:1.5rem;cursor:pointer}.input__wrapper.svelte-98uzkg .icon--active.svelte-98uzkg.svelte-98uzkg{color:#0b76f1}.input__wrapper.svelte-98uzkg .focus-bg.svelte-98uzkg.svelte-98uzkg{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.05);z-index:-1;transform:scaleX(0);transform-origin:left}.input__wrapper.svelte-98uzkg .input.svelte-98uzkg.svelte-98uzkg{-webkit-appearance:none;appearance:none;width:100%;border:0;font-family:inherit;padding:1rem 0.75rem 0 0.75rem;height:3.5rem;font-size:1rem;font-weight:400;letter-spacing:0.0938rem;background:rgba(0, 0, 0, 0.02);box-shadow:inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.3);color:black;transition:all 0.15s ease}.input__wrapper.svelte-98uzkg .input.svelte-98uzkg.svelte-98uzkg:hover{background:rgba(0, 0, 0, 0.07);box-shadow:inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.5)}.input__wrapper.svelte-98uzkg .input.svelte-98uzkg:not(:placeholder-shown)+.label.svelte-98uzkg{color:rgba(0, 0, 0, 0.5);transform:translate3d(0, -0.75rem, 0) scale(0.75)}.input__wrapper.svelte-98uzkg .input.svelte-98uzkg.svelte-98uzkg:focus{background:rgba(0, 0, 0, 0.05);outline:none;box-shadow:inset 0 -0.125rem 0 #0b76f1}.input__wrapper.svelte-98uzkg .input.svelte-98uzkg:focus+.label.svelte-98uzkg{color:#0b76f1;transform:translate3d(0, -0.75rem, 0) scale(0.75)}.error.svelte-98uzkg.svelte-98uzkg.svelte-98uzkg{padding:0.75rem;color:#f6343e}.error-input.svelte-98uzkg.svelte-98uzkg.svelte-98uzkg{background-color:rgba(246, 52, 62, 0.45) !important}.error-input.svelte-98uzkg.svelte-98uzkg.svelte-98uzkg:focus{box-shadow:inset 0 -0.125rem 0 #f6343e !important}.error-input.svelte-98uzkg:focus+.label.svelte-98uzkg.svelte-98uzkg{color:#2d2d2d !important;transform:translate3d(0, -0.75rem, 0) scale(0.75)}.normal.svelte-98uzkg.svelte-98uzkg.svelte-98uzkg{display:none}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label", "name", "type", "value", "required", "error"]);
  let { label = "label" } = $$props;
  let { name = "name" } = $$props;
  let { type = "text" } = $$props;
  let { value = "" } = $$props;
  let { required = false } = $$props;
  let { error = false } = $$props;
  let props = { ...$$restProps };
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `<div class="input__wrapper svelte-98uzkg"><input class="${escape(null_to_empty(`input ${props.class} ${error ? "error-input" : ""}`), true) + " svelte-98uzkg"}"${add_attribute("type", type, 0)} placeholder=" "${add_attribute("value", value, 0)}${add_attribute("name", name, 0)} ${required ? "required" : ""}>

	<label class="label svelte-98uzkg"${add_attribute("for", name, 0)}>${escape(label)}</label>

	${type == "password" ? `<button type="button" class="${"icon " + escape("", true) + " svelte-98uzkg"}">${`${validate_component(Icon, "Icon").$$render($$result, { class: "see-pssw", icon: "mdi:eye-off" }, {}, {})}`}</button>` : ``}

	<span class="focus-bg svelte-98uzkg"></span>
	<span class="${escape(null_to_empty(error ? "error" : "normal"), true) + " svelte-98uzkg"}">${slots.default ? slots.default({}) : ``}</span>
</div>`;
});
export {
  Input as I
};
