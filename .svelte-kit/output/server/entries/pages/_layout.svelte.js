import { c as create_ssr_component } from "../../chunks/index2.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-color:#2C3333}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main style="display: block;flex: 1 0 auto;">${slots.default ? slots.default({}) : ``}</main>
<footer class=""><hr class="mt-4 h-1 border-none bg-primary mx-4 lg:mx-10 mb-2">
    <p class="mb-2 text-center text-gray-300">© 2023 Mahanfr</p></footer>`;
});
export {
  Layout as default
};
