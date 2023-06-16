import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.3d4ff47b.js","_app/immutable/chunks/index.f7ca3f8a.js"];
export const stylesheets = ["_app/immutable/assets/0.57adb1d7.css"];
export const fonts = [];
