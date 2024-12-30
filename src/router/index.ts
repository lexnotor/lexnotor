import HomeView from "@view/HomeView.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			children: [
				{
					path: "/",
					component: HomeView,
				},
			],
		},
	],
})

export default router
