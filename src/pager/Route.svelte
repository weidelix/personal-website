<script lang="ts">
	import { register, activeRoute } from './Router.svelte';
	
	let params = {};

	export let middleware = [];
	export let path = '*';
	export let component = null;
 
	register({ path, component, middleware});

	$: if ($activeRoute.path === path) 
	{
   	params = ($activeRoute as any).params;
   }
</script>

{#if $activeRoute.path === path}
	{#if $activeRoute.component}
		<svelte:component 
			this={$activeRoute.component}
			{...$$restProps}
			{...params}
			/>
	{:else}	
		<slot {params} />
	{/if}
{/if}