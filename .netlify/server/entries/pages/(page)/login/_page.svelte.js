import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/index3.js";
import "../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as ContainerCentred } from "../../../../chunks/ContainerCentred.js";
import { I as Input } from "../../../../chunks/Input.js";
import { T as Title } from "../../../../chunks/Title.js";
import { M as Minititle } from "../../../../chunks/Minititle.js";
import "siema";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-2iligq.svelte-2iligq{padding-top:8.75rem}.login__container.svelte-2iligq.svelte-2iligq{position:relative;border:0.1875rem solid #e2e2e2;border-radius:1rem;padding:3.3rem;display:grid;gap:1rem}.login__container.svelte-2iligq .title.svelte-2iligq{position:absolute;top:-35px;left:30px;display:flex;padding:0 0.5rem;background-color:#ffffff}.go-register.svelte-2iligq.svelte-2iligq{position:relative;border:0.1875rem solid #e2e2e2;border-radius:1rem;padding:1.3rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem;justify-self:end}.go-register.svelte-2iligq .title.svelte-2iligq{position:absolute;top:-12px;left:30px;background-color:#ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="bc content svelte-2iligq">${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `<form action="?/login" method="POST" class="login__container svelte-2iligq"><div class="title svelte-2iligq">${validate_component(Title, "Title").$$render($$result, {}, {}, {
        default: () => {
          return `Log In`;
        }
      })}</div>
			${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "Enter your Email",
          type: "email",
          value: form?.email,
          name: "email",
          required: true,
          error: form?.error ? true : false
        },
        {},
        {
          default: () => {
            return `${escape(form?.error)}`;
          }
        }
      )}
			${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "Enter your password",
          type: "password",
          name: "password",
          required: true
        },
        {},
        {}
      )}
			${validate_component(Button, "Button").$$render($$result, { label: "Log in" }, {}, {})}</form>

		<div class="go-register svelte-2iligq"><div class="title svelte-2iligq">${validate_component(Minititle, "Minititle").$$render($$result, {}, {}, {
        default: () => {
          return `You don´t have an account?`;
        }
      })}</div>
			<div></div>
			${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Navigate to Register",
          secondary: true
        },
        {},
        {}
      )}</div>`;
    }
  })}
</div>`;
});
export {
  Page as default
};
