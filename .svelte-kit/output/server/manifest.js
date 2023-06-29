export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.cc690b3b.js","app":"_app/immutable/entry/app.503eb241.js","imports":["_app/immutable/entry/start.cc690b3b.js","_app/immutable/chunks/index.5db5db0a.js","_app/immutable/chunks/singletons.ce61063b.js","_app/immutable/entry/app.503eb241.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.5db5db0a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
