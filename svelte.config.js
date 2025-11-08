import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  onwarn: (warning, handler) => {
    if (warning.code === 'a11y-click-events-have-key-events') return
    handler(warning)
  },
  preprocess: vitePreprocess(),
}
