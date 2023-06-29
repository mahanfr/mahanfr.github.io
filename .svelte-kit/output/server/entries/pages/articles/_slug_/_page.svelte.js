import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".article.svelte-15kgp6l{margin-top:4rem;margin-left:3rem;margin-right:3rem;margin-bottom:2.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-2j21dz_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<meta name="description"${add_attribute("content", data.description, 0)}><!-- HEAD_svelte-2j21dz_END -->`, ""}



<article class="article svelte-15kgp6l"><p class="text-gray-400">with ❤️ by Mahan Farzaneh</p>
    <h1 class="text-gray-300 text-4xl font-bold">${escape(data.title)}</h1>
    <br>
    <p class="text-gray-400 text-lg">${escape(data.description)}</p>
    <small class="text-gray-400">Published: ${escape(data.date)}</small>
    <main class="prose lg:prose-lg max-w-none prose-pre:max-w-xl prose-img:max-w-sm prose-img:mx-auto prose-code:text-gray-100 mt-10">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</main></article>`;
});
export {
  Page as default
};
