import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { A as Avatar } from "../../../chunks/Avatar.js";
import "../../../chunks/Carousel.svelte_svelte_type_style_lang.js";
import { T as Title } from "../../../chunks/Title.js";
import { P as Paragraph } from "../../../chunks/Paragraph.js";
import "siema";
import { M as Minititle } from "../../../chunks/Minititle.js";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Poppins:ital,wght@1,600&display=swap");h1.svelte-8iyjyy{font-size:3.4rem;position:relative;width:fit-content;z-index:0;margin-bottom:2rem}h1.svelte-8iyjyy::before{content:"";position:absolute;display:block;width:100%;height:0.25rem;bottom:0;left:0;background-color:#0b76f1;transform:scaleX(0);transform-origin:top right;transition:transform 0.3s ease}h1.svelte-8iyjyy:hover::before{transform:scaleX(1)}',
  map: null
};
const Bigtitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<h1 class="svelte-8iyjyy">${slots.default ? slots.default({}) : ``}
</h1>`;
});
const avaImg = "/_app/immutable/assets/avalonDEV.b1a46dd0.png";
const About_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".aboutus__bc.svelte-1su788s.svelte-1su788s{margin-bottom:3rem;width:100%;padding:0.8rem 18%}.aboutus__container.svelte-1su788s.svelte-1su788s{position:relative;border:1px solid #e2e2e2;border-radius:5px;margin-top:3.875rem;width:100%;padding:0.8rem 1.4rem}.aboutus__container.svelte-1su788s .medium.svelte-1su788s{margin-bottom:1.4rem}.aboutus__container.svelte-1su788s .title.svelte-1su788s{background-color:white;position:absolute;right:20px;top:-25px}.aboutus__info-info.svelte-1su788s.svelte-1su788s{display:flex;align-items:center;gap:2rem;margin-bottom:3rem}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="aboutus__bc container svelte-1su788s"><div class="aboutus__container svelte-1su788s"><div class="title svelte-1su788s">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `About Me`;
    }
  })}</div>
		<div class="aboutus__info"><h3 class="medium svelte-1su788s">HOLA, MI NOMBRE ES AVADEV</h3>

			<div class="aboutus__info-info svelte-1su788s">${validate_component(Avatar, "Avatar").$$render($$result, { src: avaImg }, {}, {})}
				${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {
    default: () => {
      return `Soy un estudiante de ciclo formativo de grado superior y esta página web es mi TFG, que
					nace ante la curiosidad de ver hasta donde llego con el desarrollo y estar presente en las
					distintas etapas de este. El nombre de esta web es QUIRON que según la mitológia griega
					fue un centauro inteligente, sabio y de buen carácter que fue tutor de héroes como Aquiles
					o Áyax.
				`;
    }
  })}</div></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".home__container.svelte-rvlvo2.svelte-rvlvo2{position:relative;background-image:linear-gradient(to right top, #13cfd9, #00dbc6, #00e5a0, #60eb6a, #a8eb12);min-height:100vh;z-index:1;display:flex}.home__container.svelte-rvlvo2 .bc-shape.svelte-rvlvo2{position:absolute;bottom:0;left:0;width:100%;overflow:hidden;line-height:0}.home__container.svelte-rvlvo2 .bc-shape svg.svelte-rvlvo2{position:relative;display:block;width:calc(100% + 1.3px);height:9.375rem}.home__container.svelte-rvlvo2 .bc-shape .shape-fill.svelte-rvlvo2{fill:#ffffff}.home__content.svelte-rvlvo2.svelte-rvlvo2{position:absolute;z-index:1;gap:1.4rem;width:45%;height:100%;width:100%;padding:0.8rem 18%;display:flex;align-items:center}.home__content.svelte-rvlvo2 .subtitle.svelte-rvlvo2{max-width:37.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="home__container svelte-rvlvo2"><div class="bc-shape svelte-rvlvo2"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-rvlvo2"><path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill svelte-rvlvo2"></path></svg></div>

	<div class="home__content svelte-rvlvo2"><div>${validate_component(Bigtitle, "Bigtitle").$$render($$result, {}, {}, {
    default: () => {
      return `Quiron`;
    }
  })}
			<div class="subtitle svelte-rvlvo2">${validate_component(Minititle, "Minititle").$$render($$result, {}, {}, {
    default: () => {
      return `¡Bienvenido a Quirón: El Repositorio de Retos de Programación!`;
    }
  })}</div>
			${validate_component(Paragraph, "Paragraph").$$render($$result, { style: "width: 450px;" }, {}, {
    default: () => {
      return `Sumérgete en el fascinante laberinto de la programación y descubre los desafíos más
				cautivadores que te llevarán a superar tus límites. Al igual que el mítico Quirón de la
				mitología griega, este repositorio es el guardián de conocimientos y desafíos que te guiarán
				en tu camino hacia la maestría en programación.
			`;
    }
  })}</div></div></div>

${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
