import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../chunks/Button.js";
import { T as Title } from "../../../../chunks/Title.js";
import "siema";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-13w9qff.svelte-13w9qff{position:relative;width:100%;height:100vh;padding:1.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.3rem}.container.svelte-13w9qff .title.svelte-13w9qff{backdrop-filter:blur(4px)}.container.svelte-13w9qff .name.svelte-13w9qff{display:flex;align-items:center;gap:2rem}.container.svelte-13w9qff .name span.svelte-13w9qff{background-color:rgba(163, 163, 163, 0.286);backdrop-filter:blur(4px);padding:0.4rem 1rem;border-radius:0.3rem;color:#0b76f1;font-size:2rem}.container.svelte-13w9qff .circles.svelte-13w9qff{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0}.container.svelte-13w9qff .circles li.svelte-13w9qff{position:absolute;display:block;list-style:none;width:20px;height:20px;background:#8e2de2;animation:svelte-13w9qff-animate 25s linear infinite;bottom:-150px}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(1){left:25%;width:80px;height:80px;animation-delay:20s}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(2){left:10%;width:20px;height:20px;animation-delay:2s;animation-duration:12s}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(3){left:70%;width:20px;height:20px;animation-delay:4s}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(4){left:40%;width:60px;height:60px;animation-delay:0s;animation-duration:18s}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(5){left:65%;width:20px;height:20px;animation-delay:0s}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(6){left:75%;width:110px;height:110px;animation-delay:3s}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(7){left:35%;width:150px;height:150px;animation-delay:7s}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(8){left:50%;width:25px;height:25px;animation-delay:15s;animation-duration:45s}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(9){left:20%;width:15px;height:15px;animation-delay:2s;animation-duration:35s}.container.svelte-13w9qff .circles li.svelte-13w9qff:nth-child(10){left:85%;width:150px;height:150px;animation-delay:0s;animation-duration:11s}@keyframes svelte-13w9qff-animate{0%{transform:translateY(0) rotate(0deg);opacity:1;border-radius:0}100%{transform:translateY(-1000px) rotate(720deg);background-color:#f6343e;opacity:0;border-radius:50%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="container svelte-13w9qff"><ul class="circles svelte-13w9qff"><li class="svelte-13w9qff"></li>
		<li class="svelte-13w9qff"></li>
		<li class="svelte-13w9qff"></li>
		<li class="svelte-13w9qff"></li>
		<li class="svelte-13w9qff"></li>
		<li class="svelte-13w9qff"></li>
		<li class="svelte-13w9qff"></li>
		<li class="svelte-13w9qff"></li>
		<li class="svelte-13w9qff"></li>
		<li class="svelte-13w9qff"></li></ul>
	<div class="title svelte-13w9qff">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `You are already logged whit the following User :`;
    }
  })}</div>
	<div class="name svelte-13w9qff"><span class="svelte-13w9qff">${escape($page.data.userAuth?.name)}</span>

		${validate_component(Button, "Button").$$render($$result, { label: "Go Home", secondary: true }, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
