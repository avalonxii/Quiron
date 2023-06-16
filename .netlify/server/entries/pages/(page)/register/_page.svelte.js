import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/index3.js";
import "../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as ContainerCentred } from "../../../../chunks/ContainerCentred.js";
import { I as Input } from "../../../../chunks/Input.js";
import { I as InputPhoto } from "../../../../chunks/InputPhoto.js";
import { T as Title } from "../../../../chunks/Title.js";
import { M as Minititle } from "../../../../chunks/Minititle.js";
import "siema";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".register__container.svelte-14ik84m.svelte-14ik84m{position:relative;border:0.1875rem solid #e2e2e2;border-radius:1rem;padding:1.3rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem}.register__container.svelte-14ik84m .title.svelte-14ik84m{position:absolute;right:40px;top:-35px;padding:0 0.5rem;background-color:#ffffff}.register__inputs.svelte-14ik84m.svelte-14ik84m{border-right:2px solid #e2e2e2;padding-right:1rem}.register__other.svelte-14ik84m.svelte-14ik84m{display:flex;flex-direction:column;justify-content:space-between;padding:3rem 0}.go-login.svelte-14ik84m.svelte-14ik84m{position:relative;border:0.1875rem solid #e2e2e2;border-radius:1rem;padding:1.3rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem;justify-self:end}.go-login.svelte-14ik84m .title.svelte-14ik84m{position:absolute;top:-12px;left:30px;background-color:#ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="bc content">${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `<form action="?/register" method="post" enctype="multipart/form-data" class="register__container svelte-14ik84m"><div class="title svelte-14ik84m">${validate_component(Title, "Title").$$render($$result, {}, {}, {
        default: () => {
          return `Register`;
        }
      })}</div>
			<div class="register__inputs svelte-14ik84m">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "What's ur name?",
          type: "text",
          value: form?.name.name || "",
          name: "name",
          required: true,
          error: form?.name.error != "" && form?.name.error ? true : false
        },
        {},
        {
          default: () => {
            return `${escape(form?.name.error)}`;
          }
        }
      )}
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "What's ur userName?",
          type: "text",
          value: form?.userName.userName || "",
          name: "userName",
          required: true,
          error: form?.userName.error != "" && form?.userName.error ? true : false
        },
        {},
        {
          default: () => {
            return `${escape(form?.userName.error)}`;
          }
        }
      )}
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "What's ur email?",
          type: "email",
          value: form?.email.email || "",
          name: "email",
          required: true,
          error: form?.email.error != "" && form?.email.error ? true : false
        },
        {},
        {
          default: () => {
            return `${escape(form?.email.error)}`;
          }
        }
      )}
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "What's ur password?",
          type: "password",
          value: form?.passw.passw || "",
          name: "password",
          required: true,
          error: form?.passw.error != "" && form?.passw.error ? true : false
        },
        {},
        {
          default: () => {
            return `${escape(form?.passw.error)}`;
          }
        }
      )}
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "repeat ur password",
          type: "password",
          name: "password2",
          required: true,
          error: form?.passw2.error != "" && form?.passw2.error ? true : false
        },
        {},
        {
          default: () => {
            return `${escape(form?.passw2.error)}`;
          }
        }
      )}</div>

			<div class="register__other svelte-14ik84m">${validate_component(InputPhoto, "InputPhoto").$$render($$result, { name: "image" }, {}, {})}
				${validate_component(Button, "Button").$$render($$result, { label: "register" }, {}, {})}</div></form>

		<div class="go-login svelte-14ik84m"><div class="title svelte-14ik84m">${validate_component(Minititle, "Minititle").$$render($$result, {}, {}, {
        default: () => {
          return `You already have an account ?`;
        }
      })}</div>
			<div></div>
			${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Navigate to Login",
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
