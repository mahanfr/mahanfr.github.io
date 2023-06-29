

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5f5e8ae8.js","_app/immutable/chunks/index.5db5db0a.js","_app/immutable/chunks/singletons.6c0be38e.js"];
export const stylesheets = [];
export const fonts = [];
