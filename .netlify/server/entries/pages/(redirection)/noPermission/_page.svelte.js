import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "../../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../chunks/Button.js";
import "siema";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-p4p5ur.svelte-p4p5ur{position:relative;width:100%;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem}.container.svelte-p4p5ur .title.svelte-p4p5ur{font-weight:900;font-size:8vw;text-align:center;margin:0;color:#222;background:url(https://i.imgur.com/jGIGWOA.jpg) repeat fixed;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;-webkit-text-fill-color:transparent;animation:svelte-p4p5ur-bp 8s infinite linear}.container.svelte-p4p5ur .buttons.svelte-p4p5ur{display:flex;gap:3rem}@keyframes svelte-p4p5ur-bp{100%{background-position:0% 552px}0%{background-position:0% 0px}}.bc.svelte-p4p5ur.svelte-p4p5ur{top:0;left:0;position:absolute;z-index:-1}.bc.svelte-p4p5ur .cube.svelte-p4p5ur{position:absolute;top:80vh;left:45vw;width:10px;height:10px;border:solid 1px #f37f55;transform-origin:top left;transform:scale(0) rotate(0deg) translate(-50%, -50%);animation:svelte-p4p5ur-cube 8s ease-in forwards infinite}.bc.svelte-p4p5ur .cube.svelte-p4p5ur:nth-child(2n){border-color:#0b76f1}.bc.svelte-p4p5ur .cube.svelte-p4p5ur:nth-child(2){animation-delay:2s;left:25vw;top:40vh}.bc.svelte-p4p5ur .cube.svelte-p4p5ur:nth-child(3){animation-delay:4s;left:75vw;top:50vh}.bc.svelte-p4p5ur .cube.svelte-p4p5ur:nth-child(4){animation-delay:6s;left:90vw;top:10vh}.bc.svelte-p4p5ur .cube.svelte-p4p5ur:nth-child(5){animation-delay:8s;left:10vw;top:85vh}.bc.svelte-p4p5ur .cube.svelte-p4p5ur:nth-child(6){animation-delay:10s;left:50vw;top:10vh}@keyframes svelte-p4p5ur-cube{from{transform:scale(0) rotate(0deg) translate(-50%, -50%);opacity:1}to{transform:scale(20) rotate(960deg) translate(-50%, -50%);opacity:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-p4p5ur"><div class="bc svelte-p4p5ur"><div class="cube svelte-p4p5ur"></div>
		<div class="cube svelte-p4p5ur"></div>
		<div class="cube svelte-p4p5ur"></div>
		<div class="cube svelte-p4p5ur"></div>
		<div class="cube svelte-p4p5ur"></div>
		<div class="cube svelte-p4p5ur"></div></div>
	<h2 class="title svelte-p4p5ur">No Permision</h2>
	<div class="buttons svelte-p4p5ur">${validate_component(Button, "Button").$$render($$result, { label: "Go To Log in", secondary: true }, {}, {})}

		${validate_component(Button, "Button").$$render($$result, { label: "Return To Home", secondary: true }, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
