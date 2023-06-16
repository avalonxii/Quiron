import { c as create_ssr_component, e as escape, d as add_attribute, a as subscribe, o as onDestroy, v as validate_component, b as each, n as null_to_empty } from "../../../../chunks/index3.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
import "../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { C as ContainerCentred } from "../../../../chunks/ContainerCentred.js";
import { P as Paragraph } from "../../../../chunks/Paragraph.js";
import { M as MiniUserCard } from "../../../../chunks/MiniUserCard.js";
import "siema";
import { w as writable } from "../../../../chunks/index2.js";
const css$1 = {
  code: ".search__container.svelte-123kslq.svelte-123kslq{position:relative;width:30rem;background:#e2e2e2;border-radius:0.5rem}.search__input.svelte-123kslq.svelte-123kslq,.search__button.svelte-123kslq.svelte-123kslq{height:3.4rem;border:0;font-size:1.8rem}.search__button.svelte-123kslq.svelte-123kslq{display:none;position:absolute;top:0;right:0;width:6rem;font-weight:bold;background:#099c7a;color:#f5f5f5;border-radius:0 0.5rem 0.5rem 0;cursor:pointer}.search__input.svelte-123kslq.svelte-123kslq:not(:placeholder-shown){border-radius:0.5rem 0 0 0.5rem;width:calc(100% - 6rem)}.search__input.svelte-123kslq:not(:placeholder-shown)+button.svelte-123kslq{display:block}.search__label.svelte-123kslq.svelte-123kslq{position:absolute;clip-path:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}input[type=search].svelte-123kslq.svelte-123kslq{width:100%;background:#e2e2e2;padding:0 1.6rem;border-radius:0.5rem;appearance:none;transition:all 0.3s cubic-bezier(0, 0, 0.43, 1.49);transition-property:width, border-radius;z-index:1;position:relative}",
  map: null
};
const InputSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "Search..." } = $$props;
  let { name = "" } = $$props;
  let { value = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$1);
  return `<div class="search__container svelte-123kslq" onsubmit="event.preventDefault();" role="search"><label class="search__label svelte-123kslq" for="search">${escape(label)}</label>
	<input class="search__input svelte-123kslq" type="search"${add_attribute("placeholder", label, 0)}${add_attribute("name", name, 0)} required${add_attribute("value", value, 0)}>
	<button class="search__button svelte-123kslq" type="button">Go</button>
</div>`;
});
const createSearchStore = (data) => {
  const { subscribe: subscribe2, set, update } = writable({
    data,
    filtered: data,
    search: ""
  });
  return {
    subscribe: subscribe2,
    set,
    update
  };
};
const searchHandler = (store) => {
  const searchTerm = store.search.toLowerCase() || "";
  store.filtered = store.data.filter((item) => {
    const name = item.name;
    if (name.toLowerCase().includes(searchTerm))
      return item;
  });
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bc.svelte-1ggkkpy.svelte-1ggkkpy{position:relative;width:100%;height:100vh}.disabled.svelte-1ggkkpy.svelte-1ggkkpy{display:none}.close.svelte-1ggkkpy.svelte-1ggkkpy{visibility:hidden}.popup.svelte-1ggkkpy.svelte-1ggkkpy{position:absolute;top:0;left:0;background-color:rgba(0, 0, 0, 0.364);width:100%;height:100vh;display:flex;justify-content:center;align-items:center}.popup.svelte-1ggkkpy .info.svelte-1ggkkpy{position:absolute;background-color:#f5f5f5;border-radius:0.7rem;min-width:19.75rem;padding:2rem}.popup.svelte-1ggkkpy .info .buttons.svelte-1ggkkpy{display:flex;gap:1rem;padding-top:1rem}.popup.svelte-1ggkkpy .info .buttons .no.svelte-1ggkkpy{border:3px solid #0b76f1;border-radius:0.7rem;padding:1rem 2rem;color:#0b76f1;font-weight:bold;cursor:pointer}.popup.svelte-1ggkkpy .info .buttons .no.svelte-1ggkkpy:hover{color:#f5f5f5;background-color:#0b76f1}.delete.svelte-1ggkkpy.svelte-1ggkkpy{width:100%;border:3px solid #f6343e;background-color:#f6343e;border-radius:0.4rem;padding:0.5rem;font-weight:bold;color:#f5f5f5;cursor:pointer;user-select:none}.delete.svelte-1ggkkpy.svelte-1ggkkpy:hover{background-color:transparent;color:#f6343e}.delete.svelte-1ggkkpy.svelte-1ggkkpy:active{transform:scale(0.9);transition:0.2s}.users__container.svelte-1ggkkpy.svelte-1ggkkpy{display:flex;flex-wrap:wrap;gap:1.2rem}.users__search.svelte-1ggkkpy.svelte-1ggkkpy{margin-top:2rem;margin-bottom:3rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showPopUp;
  let userName;
  let id;
  let $searchStore, $$unsubscribe_searchStore;
  let { data } = $$props;
  let { users } = data;
  const searchUsers = users.map((user) => ({
    ...user,
    searchTerms: `${user.name} ${user.userName}`
  }));
  const searchStore = createSearchStore(searchUsers);
  $$unsubscribe_searchStore = subscribe(searchStore, (value) => $searchStore = value);
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
  onDestroy(() => {
    unsubscribe();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    showPopUp = false;
    userName = "";
    id = "";
    $$rendered = `<div class="bc svelte-1ggkkpy">${validate_component(ContainerCentred, "ContainerCentred").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="users__search svelte-1ggkkpy">${validate_component(InputSearch, "InputSearch").$$render(
          $$result,
          {
            label: "Filter by name",
            value: $searchStore.search
          },
          {
            value: ($$value) => {
              $searchStore.search = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>

		<div class="users__container svelte-1ggkkpy">${each($searchStore.filtered, (user) => {
          return `<div class="users__cell">${validate_component(MiniUserCard, "MiniUserCard").$$render($$result, { border: true }, {}, {
            "card__sub-data": () => {
              return `<span slot="card__sub-data">@${escape(user.userName)}</span>`;
            },
            "card__extra-data": () => {
              return `<span slot="card__extra-data">${escape(user.points)}</span>`;
            },
            "card__main-data": () => {
              return `<span slot="card__main-data">${escape(user.name)}</span>`;
            },
            card__image: () => {
              return `<div slot="card__image">${validate_component(Avatar, "Avatar").$$render(
                $$result,
                {
                  src: `../src/uploads/users/${user.avatarPhotoPath}`,
                  small: true
                },
                {},
                {}
              )}
						</div>`;
            }
          })}

					<button type="button" class="delete svelte-1ggkkpy">delete</button>
				</div>`;
        })}

			</div>`;
      }
    })}

	<div class="${escape(null_to_empty(`popup ${showPopUp ? "" : "close"}`), true) + " svelte-1ggkkpy"}"><div class="info svelte-1ggkkpy">${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {
      default: () => {
        return `seguro que Quieres eliminar al usuario : ${escape(userName)} ?`;
      }
    })}
			<form action="?/delete" method="POST"><div class="disabled svelte-1ggkkpy"><input type="text" name="id"${add_attribute("value", id, 0)}></div>

				<div class="buttons svelte-1ggkkpy"><button type="button" class="no svelte-1ggkkpy">No</button>
					<button class="delete svelte-1ggkkpy" type="submit">Si, Eliminar</button></div></form></div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_searchStore();
  return $$rendered;
});
export {
  Page as default
};
