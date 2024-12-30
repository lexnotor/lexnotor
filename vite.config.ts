import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueDevTools()],
	resolve: {
		alias: {
			"@asset": fileURLToPath(new URL("./src/assets", import.meta.url)),
			"@comps": fileURLToPath(new URL("./src/components", import.meta.url)),
			"@route": fileURLToPath(new URL("./src/router", import.meta.url)),
			"@store": fileURLToPath(new URL("./src/stores", import.meta.url)),
			"@view": fileURLToPath(new URL("./src/views", import.meta.url)),
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
})
