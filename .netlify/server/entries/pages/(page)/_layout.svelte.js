import { c as create_ssr_component, v as validate_component, a as subscribe, b as each } from "../../../chunks/index3.js";
import "devalue";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../chunks/Button.js";
import { T as TextArea } from "../../../chunks/TextArea.js";
import "siema";
import { I as Icon } from "../../../chunks/Icon.js";
import { L as Link } from "../../../chunks/Link.js";
import { A as Avatar } from "../../../chunks/Avatar.js";
const css$6 = {
  code: ".button__container.svelte-1pr8o25{position:fixed;bottom:10%;right:4%;background-color:#0b76f1;width:3.125rem;height:3.125rem;border-radius:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;font-size:2rem;color:#f5f5f5;cursor:pointer;z-index:999}",
  map: null
};
const ReturnTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<button class="button__container svelte-1pr8o25">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "button--top",
      icon: "material-symbols:arrow-upward-rounded"
    },
    {},
    {}
  )}
</button>`;
});
const css$5 = {
  code: ".header.svelte-mzi3x8{position:fixed;width:100%;min-height:4.0625rem;max-height:4.0625rem;top:0;z-index:999;background-color:#ffffff;box-shadow:rgba(100, 100, 111, 0.2) 0rem 0.4375rem 1.8125rem 0rem;display:flex;align-items:center;justify-content:space-between;width:100%;padding:0.8rem 18%}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="header svelte-mzi3x8">${slots.default ? slots.default({}) : ``}</div>

${validate_component(ReturnTop, "ReturnTop").$$render($$result, {}, {}, {})}`;
});
const css$4 = {
  code: ".menu.svelte-1wqxb8g{display:flex;width:fit-content;justify-content:end;align-items:center;gap:1.3rem;list-style:none}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<ul class="menu svelte-1wqxb8g">${slots.default ? slots.default({}) : ``}
</ul>`;
});
const css$3 = {
  code: ".noti__wrapper.svelte-1jdm8e.svelte-1jdm8e{position:relative;width:fit-content;background-color:transparent}.noti__wrapper.svelte-1jdm8e span.svelte-1jdm8e{border:0.125rem solid #e2e2e2;background-color:#0b76f1;position:absolute;border-radius:50%;display:flex;justify-content:center;align-items:center;width:1rem;height:1rem;bottom:0.1875rem;right:0.1875rem;transform:scale(0.7)}",
  map: null
};
const NotificationIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { notificaciones = [] } = $$props;
  if ($$props.notificaciones === void 0 && $$bindings.notificaciones && notificaciones !== void 0)
    $$bindings.notificaciones(notificaciones);
  $$result.css.add(css$3);
  return `<button class="noti__wrapper svelte-1jdm8e">${notificaciones.length > 0 ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "icon",
      icon: "tabler:bell-ringing-filled"
    },
    {},
    {}
  )}
		<span class="svelte-1jdm8e"></span>` : `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "icon",
      icon: "tabler:bell-filled"
    },
    {},
    {}
  )}`}
</button>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="contact">${validate_component(TextArea, "TextArea").$$render($$result, { name: "opinion", error: false }, {}, {})}
	${$page.data.userAuth ? `${validate_component(Button, "Button").$$render($$result, { label: "Send", type: "submit" }, {}, {})}` : `${validate_component(Button, "Button").$$render($$result, { label: "Log in", type: "button" }, {}, {})}`}</div>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Quiron</h1>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".footer.svelte-u83oqp.svelte-u83oqp{background-color:#ffffff;width:100%;margin-top:2.5rem}.footer__content.svelte-u83oqp.svelte-u83oqp{width:100%;padding:0.8rem 18%;box-shadow:rgba(100, 100, 111, 0.2) 0rem 0.4375rem 1.8125rem 0rem;display:flex;justify-content:space-between;flex-wrap:wrap;min-height:300px}.footer__contact.svelte-u83oqp.svelte-u83oqp{width:100%;padding:0.8rem 0}.footer__contact.svelte-u83oqp .mini-title.svelte-u83oqp{margin-bottom:0.7rem}.footer__creator.svelte-u83oqp.svelte-u83oqp{width:100%;padding:0.8rem 18%;border-top:0.125rem solid #0b76f1;background-color:#e2e2e2;display:flex;justify-content:space-between}.footer__creator.svelte-u83oqp .copy.svelte-u83oqp{display:flex;align-items:center;gap:1rem}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="footer svelte-u83oqp"><div class="footer__content svelte-u83oqp">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
		<div class="footer__social"><a href="/#">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "icon",
      icon: "ph:instagram-logo-fill"
    },
    {},
    {}
  )}</a>
			<a href="/#">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "icon",
      icon: "ph:twitter-logo-fill"
    },
    {},
    {}
  )}</a>
			<a href="/#">${validate_component(Icon, "Icon").$$render($$result, { class: "icon", icon: "mdi:facebook" }, {}, {})}</a></div>
		<div class="footer__contact svelte-u83oqp"><form action="/?/sendOpinion"><p class="mini-title svelte-u83oqp">¿Tienes alguna sugerencia para mejorar la Web o se te ha ocurrido algun reto?, ponte en
					contacto con nosotros ${validate_component(Icon, "Icon").$$render($$result, { icon: "tabler:mood-wink-2" }, {}, {})} !!!
				</p>
				${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</form></div></div>
	<div class="footer__creator svelte-u83oqp"><p class="copy svelte-u83oqp">© Quiron 2023 - Created by ${validate_component(Link, "Link").$$render($$result, { href: "", label: "Avalon XII" }, {}, {})}
			<a href="https://www.youtube.com/watch?v=uBvJUUFOwAI&list=RDMMuBvJUUFOwAI&start_radio=1&ab_channel=PabloCabezas" target="_blank">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "icon",
      icon: "mdi:dinosaur-pixel"
    },
    {},
    {}
  )}</a></p>

		<div><a href="https://github.com/avalonxii" target="_blank">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "icon",
      icon: "fluent-mdl2:git-hub-logo"
    },
    {},
    {}
  )}</a>
			<a href="https://www.instagram.com/avalondev_xii/" target="_blank">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "icon",
      icon: "ph:instagram-logo-fill"
    },
    {},
    {}
  )}</a></div></div>
</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".log-out.svelte-vllu7d{border:3px solid #f6343e;background-color:#f6343e;border-radius:0.4rem;padding:0.5rem;font-weight:bold;color:#f5f5f5;cursor:pointer;user-select:none}.log-out.svelte-vllu7d:hover{background-color:transparent;color:#f6343e}.log-out.svelte-vllu7d:active{transform:scale(0.9);transition:0.2s}",
  map: null
};
const Header_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let links = [
    { label: "Home", href: "/" },
    { label: "Challenges", href: "/challenges" },
    { label: "Solutions", href: "/solutions" }
  ];
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="logo">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
	${validate_component(Menu, "Menu").$$render($$result, {}, {}, {
        default: () => {
          return `${each(links, ({ label, href }) => {
            return `<li data-sveltekit-preload-data="hover">${validate_component(Link, "Link").$$render($$result, { label, href }, {}, {})}</li>`;
          })}

		${$page.data.userAuth?.role === "ADMIN" ? `<li>${validate_component(Link, "Link").$$render($$result, { label: "Users", href: "/users" }, {}, {})}</li>` : ``}

		${!$page.data.userAuth ? `<li>${validate_component(Button, "Button").$$render($$result, { label: "Get started" }, {}, {})}</li>` : `<li><a href="/notifications">${validate_component(NotificationIcon, "NotificationIcon").$$render($$result, {}, {}, {})}</a></li>

			<li><a href="/profile">${validate_component(Avatar, "Avatar").$$render(
            $$result,
            {
              src: `../../src/uploads/users/${$page.data.userAuth.avatarPhotoPath}`,
              small: true
            },
            {},
            {}
          )}</a></li>

			<form action="/?/logOut" method="post"><button class="log-out svelte-vllu7d">Log Out</button></form>`}`;
        }
      })}`;
    }
  })}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content{min-height:100vh;padding-top:4.0625rem}.icon{color:#212121;font-size:2rem;padding:0.3rem;cursor:pointer}.icon:hover{transform:scale(1.1)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header_1, "Header").$$render($$result, {}, {}, {})}

<div class="content">${slots.default ? slots.default({}) : ``}</div>

<form action="?/sendOpinion" method="POST">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</form>`;
});
export {
  Layout as default
};
