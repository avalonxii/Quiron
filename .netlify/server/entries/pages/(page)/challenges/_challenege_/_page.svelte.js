import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, b as each, d as add_attribute, n as null_to_empty } from "../../../../../chunks/index3.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import "../../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as ContainerCentred } from "../../../../../chunks/ContainerCentred.js";
import { C as Carousel, D as Difficulty } from "../../../../../chunks/Carousel.js";
import { S as Subtitle } from "../../../../../chunks/Subtitle.js";
import { P as Paragraph } from "../../../../../chunks/Paragraph.js";
import { S as Smalltext } from "../../../../../chunks/Smalltext.js";
import { p as page } from "../../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".single__container.svelte-9xy9lf.svelte-9xy9lf{padding-top:3rem}.single__title.svelte-9xy9lf.svelte-9xy9lf,.single__photos.svelte-9xy9lf.svelte-9xy9lf{margin-bottom:2rem}.single__title.svelte-9xy9lf.svelte-9xy9lf{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.single__photos.svelte-9xy9lf div.svelte-9xy9lf{width:100%;height:50rem;display:flex;justify-content:center;align-items:center;padding:0 7rem}.single__photos.svelte-9xy9lf div img.svelte-9xy9lf{width:100%;height:50rem}.single__other.svelte-9xy9lf.svelte-9xy9lf{display:flex;align-items:center;justify-content:space-between}.single__other.svelte-9xy9lf .tags.svelte-9xy9lf{display:flex;gap:1rem;margin-bottom:2rem;font-weight:bold;font-size:1.3rem}.single__other.svelte-9xy9lf .tags--html.svelte-9xy9lf{color:rgb(133, 195, 215)}.single__other.svelte-9xy9lf .tags--css.svelte-9xy9lf{color:rgb(238, 107, 107)}.single__other.svelte-9xy9lf .tags--js.svelte-9xy9lf{color:rgb(96, 226, 96)}.single__other.svelte-9xy9lf .tags--api.svelte-9xy9lf{color:rgb(31, 185, 177)}.single__hastags.svelte-9xy9lf.svelte-9xy9lf{display:flex;gap:1.4rem;color:#0b76f1;margin-bottom:1rem}.single__description.svelte-9xy9lf.svelte-9xy9lf{margin-bottom:1.4rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="single__container svelte-9xy9lf"><div class="single__title svelte-9xy9lf">${validate_component(Subtitle, "Subtitle").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.challenge.title)}`;
        }
      })}</div>

		<div class="single__photos svelte-9xy9lf">${validate_component(Carousel, "Carousel").$$render($$result, { autoplay: 7e3 }, {}, {
        "next-control": () => {
          return `<span class="centro" slot="next-control">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxs:right-arrow" }, {}, {})}</span>`;
        },
        "prev-control": () => {
          return `<span class="centro" slot="prev-control">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxs:left-arrow" }, {}, {})}</span>`;
        },
        default: () => {
          return `${each(data.challenge.imgsPath, (src) => {
            return `<div class="svelte-9xy9lf"><img${add_attribute("src", `../../../src/uploads/challenges/${src}`, 0)} alt="" class="svelte-9xy9lf">
					</div>`;
          })}`;
        }
      })}</div>

		<div class="single__info"><div class="single__other svelte-9xy9lf"><div class="tags svelte-9xy9lf">${each(data.challenge.tags, (tag) => {
        return `<span class="${escape(null_to_empty(`tags--${tag}`), true) + " svelte-9xy9lf"}">${escape(tag)}</span>`;
      })}</div>
				${validate_component(Difficulty, "Difficulty").$$render($$result, { difficulty: data.challenge.diffuculty }, {}, {})}</div>
			<div class="single__description svelte-9xy9lf">${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.challenge.description)}`;
        }
      })}</div>

			<div class="sinlge__buttons">${!$page.data.userAuth ? `${validate_component(Smalltext, "Smalltext").$$render($$result, {}, {}, {
        default: () => {
          return `To be able to perform the challenges you have to:`;
        }
      })}
					${validate_component(Button, "Button").$$render($$result, { label: "Log in" }, {}, {})}` : `${validate_component(Button, "Button").$$render($$result, { label: "Start Challange" }, {}, {})}`}</div></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
