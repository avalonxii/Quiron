import { c as create_ssr_component, e as escape, g as createEventDispatcher, d as add_attribute, b as each } from "./index3.js";
import "./Carousel.svelte_svelte_type_style_lang.js";
import "siema";
const css$1 = {
  code: ".difficulty--1.svelte-giapwy.svelte-giapwy{border:0.0625rem solid #aad742;display:flex;align-items:center;width:fit-content;border-radius:0.3125rem;overflow:hidden;font-weight:bold}.difficulty--1.svelte-giapwy .number.svelte-giapwy{background-color:#aad742;color:white;padding:0.2rem 0.5rem;font-size:0.75rem}.difficulty--1.svelte-giapwy .tag.svelte-giapwy{padding:0 0.5rem;color:#aad742;text-transform:uppercase;font-size:0.75rem}.difficulty--2.svelte-giapwy.svelte-giapwy{border:0.0625rem solid #6abecd;display:flex;align-items:center;width:fit-content;border-radius:0.3125rem;overflow:hidden;font-weight:bold}.difficulty--2.svelte-giapwy .number.svelte-giapwy{background-color:#6abecd;color:white;padding:0.2rem 0.5rem;font-size:0.75rem}.difficulty--2.svelte-giapwy .tag.svelte-giapwy{padding:0 0.5rem;color:#6abecd;text-transform:uppercase;font-size:0.75rem}.difficulty--3.svelte-giapwy.svelte-giapwy{border:0.0625rem solid #f1b604;display:flex;align-items:center;width:fit-content;border-radius:0.3125rem;overflow:hidden;font-weight:bold}.difficulty--3.svelte-giapwy .number.svelte-giapwy{background-color:#f1b604;color:white;padding:0.2rem 0.5rem;font-size:0.75rem}.difficulty--3.svelte-giapwy .tag.svelte-giapwy{padding:0 0.5rem;color:#f1b604;text-transform:uppercase;font-size:0.75rem}.difficulty--4.svelte-giapwy.svelte-giapwy{border:0.0625rem solid #f48925;display:flex;align-items:center;width:fit-content;border-radius:0.3125rem;overflow:hidden;font-weight:bold}.difficulty--4.svelte-giapwy .number.svelte-giapwy{background-color:#f48925;color:white;padding:0.2rem 0.5rem;font-size:0.75rem}.difficulty--4.svelte-giapwy .tag.svelte-giapwy{padding:0 0.5rem;color:#f48925;text-transform:uppercase;font-size:0.75rem}",
  map: null
};
const Difficulty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { difficulty = 4 } = $$props;
  if ($$props.difficulty === void 0 && $$bindings.difficulty && difficulty !== void 0)
    $$bindings.difficulty(difficulty);
  $$result.css.add(css$1);
  return `<div class="${"difficulty--" + escape(difficulty, true) + " svelte-giapwy"}"><span class="number svelte-giapwy">${escape(difficulty)}</span>
	${difficulty == 1 ? `<span class="tag svelte-giapwy">Newbie</span>` : `${difficulty == 2 ? `<span class="tag svelte-giapwy">Junior</span>` : `${difficulty == 3 ? `<span class="tag svelte-giapwy">intermediated</span>` : `${difficulty == 4 ? `<span class="tag svelte-giapwy">advanced</span>` : ``}`}`}`}
</div>`;
});
const css = {
  code: ".carousel__container.svelte-15cms2r.svelte-15cms2r{position:relative;border:3px solid #e2e2e2;border-radius:1rem;padding:2rem 1rem;display:flex;justify-content:center}.carousel__buttons.svelte-15cms2r.svelte-15cms2r{position:absolute;left:0;top:50%;width:100%;display:flex;justify-content:space-between;align-items:center}.carousel__buttons.svelte-15cms2r .prev.svelte-15cms2r,.carousel__buttons.svelte-15cms2r .next.svelte-15cms2r{padding:0.6rem;font-size:1.2rem;border-radius:0.3125rem;cursor:pointer;border:2px solid #e2e2e2;color:#0b76f1;display:flex;align-items:center;justify-content:center}.carousel__buttons.svelte-15cms2r .prev.svelte-15cms2r:hover,.carousel__buttons.svelte-15cms2r .next.svelte-15cms2r:hover{transform:scale(1.1);transition:0.25s}.carousel__buttons.svelte-15cms2r .prev.svelte-15cms2r:active,.carousel__buttons.svelte-15cms2r .next.svelte-15cms2r:active{transform:scale(0.9);transition:0.25s}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pips;
  let currentPerPage;
  let totalDots;
  let { perPage = 1 } = $$props;
  let { loop = true } = $$props;
  let { autoplay = 0 } = $$props;
  let { duration = 500 } = $$props;
  let { easing = "ease-out" } = $$props;
  let { startIndex = 0 } = $$props;
  let { draggable = false } = $$props;
  let { multipleDrag = false } = $$props;
  let { dots = false } = $$props;
  let { controls = true } = $$props;
  let { threshold = 20 } = $$props;
  let { rtl = false } = $$props;
  let currentIndex = startIndex;
  let siema;
  let controller;
  let timer;
  createEventDispatcher();
  function isDotActive(currentIndex2, dotIndex) {
    if (currentIndex2 < 0)
      currentIndex2 = pips.length + currentIndex2;
    return currentIndex2 >= dotIndex * currentPerPage && currentIndex2 < dotIndex * currentPerPage + currentPerPage;
  }
  function left() {
    controller.prev();
  }
  function right() {
    controller.next();
  }
  function go(index) {
    controller.goTo(index);
  }
  function pause() {
    clearInterval(timer);
  }
  function resume() {
    if (autoplay) {
      timer = setInterval(right, autoplay);
    }
  }
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0)
    $$bindings.perPage(perPage);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
    $$bindings.easing(easing);
  if ($$props.startIndex === void 0 && $$bindings.startIndex && startIndex !== void 0)
    $$bindings.startIndex(startIndex);
  if ($$props.draggable === void 0 && $$bindings.draggable && draggable !== void 0)
    $$bindings.draggable(draggable);
  if ($$props.multipleDrag === void 0 && $$bindings.multipleDrag && multipleDrag !== void 0)
    $$bindings.multipleDrag(multipleDrag);
  if ($$props.dots === void 0 && $$bindings.dots && dots !== void 0)
    $$bindings.dots(dots);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.rtl === void 0 && $$bindings.rtl && rtl !== void 0)
    $$bindings.rtl(rtl);
  if ($$props.isDotActive === void 0 && $$bindings.isDotActive && isDotActive !== void 0)
    $$bindings.isDotActive(isDotActive);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.resume === void 0 && $$bindings.resume && resume !== void 0)
    $$bindings.resume(resume);
  $$result.css.add(css);
  pips = [];
  currentPerPage = perPage;
  totalDots = [];
  return `<div class="carousel__container svelte-15cms2r"><div class="carousel__photo"${add_attribute("this", siema, 0)}>${slots.default ? slots.default({}) : ``}</div>

	${controls ? `<div class="carousel__buttons svelte-15cms2r"><button class="prev svelte-15cms2r">${slots["prev-control"] ? slots["prev-control"]({}) : ``}</button>

			<button class="next svelte-15cms2r">${slots["next-control"] ? slots["next-control"]({}) : ``}</button></div>` : ``}

	${dots ? `<div class="pagination__container">${each({ length: totalDots }, (_, i) => {
    return `<button${add_attribute("class", isDotActive(currentIndex, i) ? "active" : "", 0)}></button>`;
  })}</div>` : ``}
</div>`;
});
export {
  Carousel as C,
  Difficulty as D
};
