import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.52186316.js","app":"_app/immutable/entry/app.a13e54e1.js","imports":["_app/immutable/entry/start.52186316.js","_app/immutable/chunks/index.f7ca3f8a.js","_app/immutable/chunks/singletons.ed69f5ae.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.a13e54e1.js","_app/immutable/chunks/index.f7ca3f8a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js'),
			() => import('../server/nodes/13.js'),
			() => import('../server/nodes/14.js'),
			() => import('../server/nodes/15.js')
		],
		routes: [
			{
				id: "/(page)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(redirection)/alreadyLogged",
				pattern: /^\/alreadyLogged\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/api/challenges",
				pattern: /^\/api\/challenges\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/challenges/_server.ts.js')
			},
			{
				id: "/api/challenges/[challengeId]",
				pattern: /^\/api\/challenges\/([^/]+?)\/?$/,
				params: [{"name":"challengeId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/challenges/_challengeId_/_server.ts.js')
			},
			{
				id: "/api/solutions",
				pattern: /^\/api\/solutions\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/solutions/_server.ts.js')
			},
			{
				id: "/api/solutions/[solutionId]",
				pattern: /^\/api\/solutions\/([^/]+?)\/?$/,
				params: [{"name":"solutionId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/solutions/_solutionId_/_server.ts.js')
			},
			{
				id: "/api/users",
				pattern: /^\/api\/users\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/users/_server.ts.js')
			},
			{
				id: "/api/users/[userId]",
				pattern: /^\/api\/users\/([^/]+?)\/?$/,
				params: [{"name":"userId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/users/_userId_/_server.ts.js')
			},
			{
				id: "/(page)/challenges",
				pattern: /^\/challenges\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(page)/challenges/[challenege]",
				pattern: /^\/challenges\/([^/]+?)\/?$/,
				params: [{"name":"challenege","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(page)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(redirection)/noPermission",
				pattern: /^\/noPermission\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(page)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(page)/profile/edit",
				pattern: /^\/profile\/edit\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(page)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(page)/solutions",
				pattern: /^\/solutions\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(page)/solutions/[solution]",
				pattern: /^\/solutions\/([^/]+?)\/?$/,
				params: [{"name":"solution","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(page)/users",
				pattern: /^\/users\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(page)/users/[user]",
				pattern: /^\/users\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});