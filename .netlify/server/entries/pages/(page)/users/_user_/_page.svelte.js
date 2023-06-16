import { c as create_ssr_component, v as validate_component, e as escape, b as each, n as null_to_empty, d as add_attribute } from "../../../../../chunks/index3.js";
import { A as Avatar } from "../../../../../chunks/Avatar.js";
import "../../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import { C as ContainerCentred } from "../../../../../chunks/ContainerCentred.js";
import { M as MetaIcon } from "../../../../../chunks/MetaIcon.js";
import { T as Title } from "../../../../../chunks/Title.js";
import { S as Subtitle } from "../../../../../chunks/Subtitle.js";
import { M as Minititle } from "../../../../../chunks/Minititle.js";
import { P as Paragraph } from "../../../../../chunks/Paragraph.js";
import { S as Smalltext } from "../../../../../chunks/Smalltext.js";
import { C as Card } from "../../../../../chunks/Card.js";
import "siema";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bc.svelte-1cvd9at.svelte-1cvd9at{background-color:#f5f5f5}.profile__user.svelte-1cvd9at.svelte-1cvd9at{min-height:200px;padding-top:1.5rem;padding-bottom:1.5rem;display:flex;justify-content:space-between;align-items:start;gap:20%}.profile__info.svelte-1cvd9at.svelte-1cvd9at{width:100%;height:100%;display:flex;align-items:center;gap:2.5rem}.profile__data.svelte-1cvd9at.svelte-1cvd9at{display:grid;gap:0.5rem}.profile__data.svelte-1cvd9at .points.svelte-1cvd9at{font-size:2rem;font-weight:bold;color:#0b76f1}.profile__solutions.svelte-1cvd9at.svelte-1cvd9at{margin-bottom:2rem;margin-top:4.5rem}.profile__solutions.svelte-1cvd9at .title.svelte-1cvd9at{height:fit-content;display:flex;justify-content:center}.solution__cards.svelte-1cvd9at.svelte-1cvd9at{display:flex;flex-wrap:wrap;justify-content:start;column-gap:0.3125rem}.solution__cards.svelte-1cvd9at img.svelte-1cvd9at{width:100%;height:100%}.solution__cards.svelte-1cvd9at img.svelte-1cvd9at:hover{transform:scale(1.1);transition:0.35s}.card__options.svelte-1cvd9at.svelte-1cvd9at{display:flex;gap:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { solutions, user } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Title, "Title").$$render($$result, {}, {}, {
        default: () => {
          return `Profile`;
        }
      })}`;
    }
  })}

<div class="bc svelte-1cvd9at">${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="profile__user svelte-1cvd9at"><div class="profile__info svelte-1cvd9at"><div class="profile__photo">${validate_component(Avatar, "Avatar").$$render(
        $$result,
        {
          src: `../../src/uploads/users/${user.avatarPhotoPath || "fotounknown.jpg"}`
        },
        {},
        {}
      )}</div>
				<div class="profile__data svelte-1cvd9at">${validate_component(Subtitle, "Subtitle").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(user.name)}`;
        }
      })}
					${validate_component(Smalltext, "Smalltext").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(user.userName)}`;
        }
      })}
					<div class="points svelte-1cvd9at">${escape(user.points)} points</div>
					<a href="/">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          class: "icon",
          icon: "fluent-mdl2:git-hub-logo"
        },
        {},
        {}
      )}</a></div></div>
			${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(user.aboutme || "'hola que tal esta es una descripcion de ejemplo'")}`;
        }
      })}</div>`;
    }
  })}</div>

${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="profile__solutions svelte-1cvd9at"><div class="title svelte-1cvd9at">${validate_component(Minititle, "Minititle").$$render($$result, { underlined: true }, {}, {
        default: () => {
          return `last solutions`;
        }
      })}</div>
		<div class="solution__cards svelte-1cvd9at">${each(solutions, (solution) => {
        return `${validate_component(Card, "Card").$$render($$result, { solution: true }, {}, {
          card__options: () => {
            return `<div class="card__options svelte-1cvd9at" slot="card__options">${validate_component(MetaIcon, "MetaIcon").$$render($$result, {}, {}, {
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
            return `<div class="card__tags" slot="card__tags">${each(solution.tags, (tag) => {
              return `<span class="${escape(null_to_empty(`card__tags--${tag}`), true) + " svelte-1cvd9at"}">${escape(tag)}</span>`;
            })}
					</div>`;
          },
          "card__submitted-hashtags": () => {
            return `<div class="card__submitted-hashtags" slot="card__submitted-hashtags">${each(solution.hashtags, (hashtag) => {
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
            return `<img slot="card__image"${add_attribute("src", `../../src/uploads/solutions/${solution.imgsPath[0]}`, 0)}${add_attribute("alt", `${solution.title} imagen`, 0)} class="svelte-1cvd9at">`;
          },
          default: () => {
            return `${escape(solution.description)}
				`;
          }
        })}`;
      })}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
