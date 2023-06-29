

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b39f5f75.js","_app/immutable/chunks/index.5db5db0a.js","_app/immutable/chunks/singletons.ce61063b.js"];
export const stylesheets = [];
export const fonts = [];
