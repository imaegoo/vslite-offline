/// <reference types="vite/client" />

declare module globalThis {
  var process: Record<string, any>;
  var WEBCONTAINER_API_IFRAME_URL: string;
}