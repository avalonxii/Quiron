import { c as create_ssr_component, a as subscribe, v as validate_component, d as add_attribute, e as escape } from "../../../../../chunks/index3.js";
import "../../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as ContainerCentred } from "../../../../../chunks/ContainerCentred.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { T as TextArea } from "../../../../../chunks/TextArea.js";
import { I as InputPhoto } from "../../../../../chunks/InputPhoto.js";
import { T as Title } from "../../../../../chunks/Title.js";
import { M as Minititle } from "../../../../../chunks/Minititle.js";
import { S as Smalltext } from "../../../../../chunks/Smalltext.js";
import "siema";
import { p as page } from "../../../../../chunks/stores.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".oculto.svelte-p1khaq.svelte-p1khaq{display:none}.edit__container.svelte-p1khaq.svelte-p1khaq{position:relative;border:0.1875rem solid #e2e2e2;border-radius:1rem;padding:5rem 5rem 2rem;margin-top:5rem}.edit__title.svelte-p1khaq.svelte-p1khaq{position:absolute;top:-29px;background-color:#ffffff;padding:0 0.5rem}.edit__inputs--first.svelte-p1khaq.svelte-p1khaq{display:flex;justify-content:center;align-items:center;gap:3rem}.edit__inputs--first.svelte-p1khaq .names.svelte-p1khaq{width:100%}.edit__inputs--second.svelte-p1khaq.svelte-p1khaq{margin-top:1.5rem;padding-top:1.5rem;border-top:0.1875rem solid rgba(11, 118, 241, 0.6)}.edit__inputs--third.svelte-p1khaq.svelte-p1khaq{display:flex;flex-direction:column;gap:1rem}.edit__inputs--third.svelte-p1khaq div.svelte-p1khaq{display:flex;gap:2.3rem}.edit__aboutme.svelte-p1khaq.svelte-p1khaq{margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `<form action="?/uploadUser" method="POST"><div class="edit__container svelte-p1khaq"><div class="edit__title svelte-p1khaq">${validate_component(Title, "Title").$$render($$result, {}, {}, {
        default: () => {
          return `Edit Your Profile`;
        }
      })}</div>
			<div class="oculto svelte-p1khaq"><input type="text" name="_id"${add_attribute("value", $page.data.userAuth?._id, 0)}></div>
			<div class="edit__inputs--first svelte-p1khaq">${validate_component(InputPhoto, "InputPhoto").$$render($$result, { name: "image" }, {}, {})}
				<div class="names svelte-p1khaq">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "What's ur name?",
          type: "text",
          value: form?.name.name || $page.data.userAuth?.name,
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
          value: form?.userName.userName || $page.data.userAuth?.userName,
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
      )}</div></div>
			<div class="edit__inputs--second svelte-p1khaq">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "What's ur email?",
          type: "email",
          value: form?.email.email || $page.data.userAuth?.email,
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
      )}</div>
			<div class="edit__inputs--third svelte-p1khaq">${validate_component(Smalltext, "Smalltext").$$render($$result, {}, {}, {
        default: () => {
          return `For greater security you will always have to update your password again (you can retype
					the previous one if you want)
				`;
        }
      })}
				<div class="svelte-p1khaq">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "What's ur new password?",
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
          label: "Repeat ur new password",
          type: "password",
          value: form?.passw2.passw2 || "",
          name: "password2",
          required: true,
          error: form?.passw.error != "" && form?.passw.error ? true : false
        },
        {},
        {
          default: () => {
            return `${escape(form?.passw.error)}`;
          }
        }
      )}</div></div>
			<div class="edit__aboutme svelte-p1khaq">${validate_component(Minititle, "Minititle").$$render($$result, { underlined: true }, {}, {
        default: () => {
          return `About Me:`;
        }
      })}
				${validate_component(TextArea, "TextArea").$$render(
        $$result,
        {
          name: "aboutme",
          value: form?.aboutme.aboutme || $page.data.userAuth?.aboutme
        },
        {},
        {}
      )}</div>
			${validate_component(Button, "Button").$$render($$result, { type: "submit", label: "Editar !!" }, {}, {})}</div></form>`;
    }
  })}`;
});
export {
  Page as default
};
