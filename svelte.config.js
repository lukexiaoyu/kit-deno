// svelte.config.js
import adapter from 'svelte-adapter-deno';

export default {
  kit: {
    adapter: adapter({
      // default options are shown
      out: 'build',
      deps: './deps.ts' // (relative to adapter-deno package)
    })
  }
};