import { c as create_ssr_component, v as validate_component, b as each, e as escape, n as null_to_empty, d as add_attribute } from "../../../../chunks/index3.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import "../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as ContainerCentred } from "../../../../chunks/ContainerCentred.js";
import { C as Carousel, D as Difficulty } from "../../../../chunks/Carousel.js";
import { T as Title } from "../../../../chunks/Title.js";
import { C as Card } from "../../../../chunks/Card.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".challange-container.svelte-1xvab3r{display:flex;justify-content:space-between;align-items:center;margin-top:1rem;margin-bottom:1.5rem}.centro.svelte-1xvab3r{display:flex;align-items:center}.page.svelte-1xvab3r{width:fit-content;display:flex;justify-content:center;flex-wrap:wrap;gap:2rem}.card__title.svelte-1xvab3r{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:1.65rem !important}.card__tags.svelte-1xvab3r{display:flex;gap:0.7rem;text-transform:uppercase;font-weight:bold}.card__tags--html.svelte-1xvab3r{color:rgb(133, 195, 215)}.card__tags--css.svelte-1xvab3r{color:rgb(238, 107, 107)}.card__tags--js.svelte-1xvab3r{color:rgb(96, 226, 96)}.card__tags--api.svelte-1xvab3r{color:rgb(31, 185, 177)}img.svelte-1xvab3r{width:100%;height:100%}img.svelte-1xvab3r:hover{transform:scale(1.1);transition:0.35s}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let counter = data.challenges.length;
  const { challenges } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="bc">${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="challange-container svelte-1xvab3r">${validate_component(Title, "Title").$$render($$result, {}, {}, {
        default: () => {
          return `Challenges`;
        }
      })}
			<div class="filtros">${validate_component(Button, "Button").$$render($$result, { label: "filtro" }, {}, {})}</div></div>
		${validate_component(Carousel, "Carousel").$$render($$result, { autoplay: 7e3 }, {}, {
        "next-control": () => {
          return `<span class="centro svelte-1xvab3r" slot="next-control">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxs:right-arrow" }, {}, {})}</span>`;
        },
        "prev-control": () => {
          return `<span class="centro svelte-1xvab3r" slot="prev-control">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxs:left-arrow" }, {}, {})}</span>`;
        },
        default: () => {
          return `${each({ length: Math.ceil(counter / 6) }, (_, i) => {
            return `<div class="page svelte-1xvab3r">${each(Array.from(Array((i + 1) * 6).keys()).slice(6 * i), (j) => {
              return `${challenges[j] ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                card__options: () => {
                  return `<div class="card__options" slot="card__options">${validate_component(Difficulty, "Difficulty").$$render($$result, { difficulty: challenges[j].diffuculty }, {}, {})}
								</div>`;
                },
                card__tags: () => {
                  return `<div class="card__tags svelte-1xvab3r" slot="card__tags">${each(challenges[j].tags, (tag) => {
                    return `<span class="${escape(null_to_empty(`card__tags--${tag}`), true) + " svelte-1xvab3r"}">${escape(tag)}</span>`;
                  })}
								</div>`;
                },
                card__title: () => {
                  return `<span class="card__title svelte-1xvab3r" slot="card__title">${escape(challenges[j].title)} </span>`;
                },
                "card__submitted-date": () => {
                  return `<span class="card__submitted-date" slot="card__submitted-date">submitetd 5 minutes ago</span>`;
                },
                card__image: () => {
                  return `<img slot="card__image"${add_attribute("src", `../../src/uploads/challenges/${challenges[j].imgsPath[0]}`, 0)}${add_attribute("alt", `${challenges[j].title} image`, 0)} class="svelte-1xvab3r">`;
                },
                default: () => {
                  return `${escape(challenges[j].description)}
							`;
                }
              })}` : ``}`;
            })}
				</div>`;
          })}`;
        }
      })}`;
    }
  })}
</div>`;
});
export {
  Page as default
};
