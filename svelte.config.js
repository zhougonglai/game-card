import vercel from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({ postcss: true }),
  kit: {
    adapter: vercel(),
    target: '#svelte'
  }
};
