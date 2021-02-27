<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export const activeRoute = writable({path: '', component: null});
	
	const routes: any = {};

	export function register(route: any) 
	{
		routes[route.path] = route;
	}

</script>

<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import page from "page";
	
	const last = (route) => {
  		return function (ctx) {
    		$activeRoute = { ...route, params: ctx.params };
  		};
	};

	const setupPage = () => {
   	for (let [path, route] of Object.entries(routes)) 
		{
			route as any
			page(path, ...(route as any).middleware, last(route));
   	}

   	page.start();
  };

  onMount(setupPage);
  onDestroy(page.stop);
</script>
 
<slot />