// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { UserLocals } from "$utils/types/types";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {role:string, name:string} | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
