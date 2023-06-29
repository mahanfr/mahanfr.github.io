import * as universal from '../entries/pages/articles/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/articles/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.6fe404af.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.5db5db0a.js"];
export const stylesheets = ["_app/immutable/assets/3.5728a71a.css"];
export const fonts = [];
