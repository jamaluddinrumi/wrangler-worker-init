/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import consola from 'consola';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		consola.info('request');
		consola.log(request);

		consola.info('env');
		consola.log(env);

		consola.info('ctx');
		consola.log(ctx);

		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
