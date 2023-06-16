import { c as create_ssr_component, v as validate_component, b as each, e as escape, n as null_to_empty, d as add_attribute } from "../../../../chunks/index3.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
import { B as Button } from "../../../../chunks/Button.js";
import "../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { C as ContainerCentred } from "../../../../chunks/ContainerCentred.js";
import { M as MetaIcon } from "../../../../chunks/MetaIcon.js";
import { T as Title } from "../../../../chunks/Title.js";
import { C as Card } from "../../../../chunks/Card.js";
import { M as MiniUserCard } from "../../../../chunks/MiniUserCard.js";
import "siema";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".solution__cards.svelte-egkem5.svelte-egkem5{display:flex;flex-wrap:wrap;justify-content:center;column-gap:0.3125rem}.solution__cards.svelte-egkem5 img.svelte-egkem5{width:100%;height:100%}.solution__cards.svelte-egkem5 img.svelte-egkem5:hover{transform:scale(1.1);transition:0.35s}.ocultar.svelte-egkem5.svelte-egkem5{display:none}.solution-container.svelte-egkem5.svelte-egkem5{display:flex;justify-content:space-between;align-items:center;margin-top:1rem;margin-bottom:1.5rem}.card__submitted-hashtags.svelte-egkem5.svelte-egkem5{display:flex;gap:0.8rem}.card__tags.svelte-egkem5.svelte-egkem5{display:flex;gap:0.7rem;text-transform:uppercase;font-weight:bold}.card__tags--html.svelte-egkem5.svelte-egkem5{color:rgb(133, 195, 215)}.card__tags--css.svelte-egkem5.svelte-egkem5{color:rgb(238, 107, 107)}.card__tags--js.svelte-egkem5.svelte-egkem5{color:rgb(96, 226, 96)}.card__tags--api.svelte-egkem5.svelte-egkem5{color:rgb(31, 185, 177)}.card__options.svelte-egkem5.svelte-egkem5{display:flex;gap:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const datos = data.solutionWUser;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="bc">${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="solution-container svelte-egkem5">${validate_component(Title, "Title").$$render($$result, {}, {}, {
        default: () => {
          return `Solutions`;
        }
      })}
			<div class="filtros">${validate_component(Button, "Button").$$render($$result, { label: "filtro" }, {}, {})}</div></div>
		<div class="solution__cards svelte-egkem5">${each(datos, ({ solution, user }) => {
        return `${validate_component(Card, "Card").$$render($$result, { solution: true }, {}, {
          card__user: () => {
            return `<div slot="card__user">${validate_component(MiniUserCard, "MiniUserCard").$$render($$result, {}, {}, {
              "card__sub-data": () => {
                return `<span slot="card__sub-data">@${escape(user?.userName)}</span>`;
              },
              "card__extra-data": () => {
                return `<span slot="card__extra-data">${escape(user?.points)}</span>`;
              },
              "card__main-data": () => {
                return `<span slot="card__main-data">${escape(user?.name)}</span>`;
              },
              card__image: () => {
                return `<div slot="card__image">${validate_component(Avatar, "Avatar").$$render(
                  $$result,
                  {
                    src: `../../src/uploads/users/${user?.avatarPhotoPath}`,
                    small: true
                  },
                  {},
                  {}
                )}
							</div>`;
              }
            })}
					</div>`;
          },
          card__options: () => {
            return `<div class="card__options svelte-egkem5" slot="card__options">${validate_component(MetaIcon, "MetaIcon").$$render($$result, {}, {}, {
              "meta-info": () => {
                return `<span slot="meta-info">10</span>`;
              },
              default: () => {
                return `${validate_component(Icon, "Icon").$$render($$result, { icon: "ci:chat" }, {}, {})}
							
						`;
              }
            })}
						${validate_component(MetaIcon, "MetaIcon").$$render($$result, {}, {}, {
              "meta-info": () => {
                return `<span slot="meta-info">${escape(solution.likes.length)}</span>`;
              },
              default: () => {
                return `${validate_component(Icon, "Icon").$$render($$result, { icon: "icon-park-outline:like" }, {}, {})}
							
						`;
              }
            })}
						${validate_component(MetaIcon, "MetaIcon").$$render($$result, {}, {}, {
              "meta-info": () => {
                return `<span slot="meta-info">10</span>`;
              },
              default: () => {
                return `${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:save-copy-20-regular" }, {}, {})}
							
						`;
              }
            })}
					</div>`;
          },
          card__tags: () => {
            return `<div class="card__tags svelte-egkem5" slot="card__tags">${each(solution.tags, (tag) => {
              return `<span class="${escape(null_to_empty(`card__tags--${tag}`), true) + " svelte-egkem5"}">${escape(tag)}</span>`;
            })}
					</div>`;
          },
          "card__submitted-hashtags": () => {
            return `<div class="card__submitted-hashtags svelte-egkem5" slot="card__submitted-hashtags">${each(solution.hashtags, (hashtag) => {
              return `<span>${escape(hashtag)}</span>`;
            })}
					</div>`;
          },
          card__title: () => {
            return `<span slot="card__title">${escape(solution.title)}</span>`;
          },
          "card__submitted-date": () => {
            return `<span slot="card__submitted-date">submitetd 5 minutes ago</span>`;
          },
          card__image: () => {
            return `<img slot="card__image"${add_attribute("src", `../../src/uploads/solutions/${solution.imgsPath[0]}`, 0)}${add_attribute("alt", `${solution.title} imagen`, 0)} class="svelte-egkem5">`;
          },
          default: () => {
            return `${escape(solution.description)}
				`;
          }
        })}`;
      })}</div>`;
    }
  })}
</div>`;
});
export {
  Page as default
};
