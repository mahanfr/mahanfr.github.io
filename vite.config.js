import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    base: "/mahanfr.github.io/",
    plugins: [sveltekit()]
};

export default config;
