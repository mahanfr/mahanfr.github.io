import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.c10c5e93.js","_app/immutable/chunks/index.5db5db0a.js"];
export const stylesheets = ["_app/immutable/assets/0.244ad3a3.css"];
export const fonts = [];
