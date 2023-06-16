import { c as create_ssr_component, f as compute_rest_props, k as spread, l as escape_object, p as escape_attribute_value, e as escape } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
const css = {
  code: '.primary.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce{display:flex;justify-content:center;align-items:center;position:relative;min-width:8.75rem;width:100%;padding:0.35rem 1.25rem;border-radius:0.6rem;font-size:1.125rem;font-weight:500;letter-spacing:0.05rem;cursor:pointer;transition:ease-out 0.3s;background:#0b76f1;color:#f5f5f5;border:0.125rem solid #0b76f1;box-shadow:inset 0 0 0 0 #0b76f1}.primary.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce:active{transform:scale(0.85)}.primary.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce:hover{box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px}.primary.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce:active{transition:0.3s}.secondary.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce{display:flex;justify-content:center;align-items:center;position:relative;min-width:8.75rem;width:100%;padding:0.35rem 1.25rem;border-radius:0.6rem;font-size:1.125rem;font-weight:500;letter-spacing:0.05rem;cursor:pointer;transition:ease-out 0.3s;background:transparent;border:0.125rem solid #2d2d2d}.secondary.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce:active{transform:scale(0.85)}.secondary.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce:hover{color:#8e2de2;border-color:#8e2de2}.code.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce{display:flex;justify-content:center;align-items:center;position:relative;min-width:8.75rem;width:100%;padding:0.35rem 1.25rem;border-radius:0.6rem;font-size:1.125rem;font-weight:500;letter-spacing:0.05rem;cursor:pointer;transition:ease-out 0.3s;color:#f5f5f5;border:none;background:linear-gradient(to right, #8e2de2, #4a00e0);overflow:hidden}.code.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce:active{transform:scale(0.85)}.code.svelte-1lp09ce span.svelte-1lp09ce.svelte-1lp09ce{position:relative;z-index:10;display:flex;align-items:center;gap:0.8rem}.code.svelte-1lp09ce span.svelte-1lp09ce>svg.svelte-1lp09ce{width:1em}.code.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce::after,.code.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce::before{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}.code.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce::before{content:"";background:#2d2d2d;width:120%;left:-10%;transform:skew(30deg);transition:transform 0.4s cubic-bezier(0.3, 1, 0.8, 1)}.code.svelte-1lp09ce.svelte-1lp09ce.svelte-1lp09ce:hover::before{transform:translate3d(100%, 0, 0)}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label", "secondary", "code", "disabled"]);
  let { label = "label" } = $$props;
  let { secondary = false } = $$props;
  let { code = false } = $$props;
  let { disabled = false } = $$props;
  let props = { ...$$restProps };
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css);
  return `${code ? `<button type="button" class="code svelte-1lp09ce"><span class="svelte-1lp09ce"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1lp09ce"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path></svg>
			Code
		</span></button>` : `<button${spread(
    [
      escape_object(props),
      {
        class: escape_attribute_value(secondary ? "secondary" : "primary")
      },
      { disabled: disabled || null }
    ],
    { classes: "svelte-1lp09ce" }
  )}>${escape(label)}</button>`}`;
});
export {
  Button as B
};
