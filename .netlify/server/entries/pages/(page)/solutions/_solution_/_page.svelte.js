import { c as create_ssr_component, v as validate_component, e as escape, b as each, d as add_attribute } from "../../../../../chunks/index3.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import "../../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { C as ContainerCentred } from "../../../../../chunks/ContainerCentred.js";
import { C as Carousel, D as Difficulty } from "../../../../../chunks/Carousel.js";
import { L as Link } from "../../../../../chunks/Link.js";
import { S as Subtitle } from "../../../../../chunks/Subtitle.js";
import { P as Paragraph } from "../../../../../chunks/Paragraph.js";
import { S as Smalltext } from "../../../../../chunks/Smalltext.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".single__container.svelte-1nu5129.svelte-1nu5129{padding-top:3rem}.single__title.svelte-1nu5129.svelte-1nu5129,.single__photos.svelte-1nu5129.svelte-1nu5129{margin-bottom:2rem}.single__photos.svelte-1nu5129 div.svelte-1nu5129{width:100%;height:100%;object-fit:contain;display:flex;justify-content:center;align-items:center}.single__photos.svelte-1nu5129 div img.svelte-1nu5129{width:100%;height:50rem}.single__other.svelte-1nu5129.svelte-1nu5129{display:flex;justify-content:space-between}.single__hastags.svelte-1nu5129.svelte-1nu5129{display:flex;gap:1.4rem;color:#0b76f1;margin-bottom:1rem}.single__description.svelte-1nu5129.svelte-1nu5129{margin-bottom:1.4rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="single__container svelte-1nu5129"><div class="single__title svelte-1nu5129">${validate_component(Subtitle, "Subtitle").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.solution.title)}`;
        }
      })}</div>

		<div class="single__photos svelte-1nu5129">${validate_component(Carousel, "Carousel").$$render($$result, { autoplay: 7e3 }, {}, {
        "next-control": () => {
          return `<span class="centro" slot="next-control">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxs:right-arrow" }, {}, {})}</span>`;
        },
        "prev-control": () => {
          return `<span class="centro" slot="prev-control">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxs:left-arrow" }, {}, {})}</span>`;
        },
        default: () => {
          return `${each(data.solution.imgsPath, (src) => {
            return `<div class="svelte-1nu5129"><img${add_attribute("src", `../../../src/uploads/solutions/${src}`, 0)} alt="" class="svelte-1nu5129">
					</div>`;
          })}`;
        }
      })}</div>

		<div class="single__info"><div class="single__other svelte-1nu5129"><div class="tags">${each(data.solution.tags, (tag) => {
        return `<span>${escape(tag)}</span>`;
      })}</div>
				${validate_component(Difficulty, "Difficulty").$$render($$result, { difficulty: 2 }, {}, {})}</div>

			<div class="single__hastags svelte-1nu5129">${each(data.solution.hashtags, (hashtags) => {
        return `<span>${escape(hashtags)}</span>`;
      })}</div>
			<div class="single__description svelte-1nu5129">${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.solution.description)}`;
        }
      })}</div>
			${validate_component(Smalltext, "Smalltext").$$render($$result, {}, {}, {
        default: () => {
          return `puedes encontrar el codigo en ${validate_component(Link, "Link").$$render($$result, { href: "", label: "gitHub" }, {}, {})} creado por ${validate_component(Link, "Link").$$render($$result, { href: "", label: "creador" }, {}, {})}`;
        }
      })}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
