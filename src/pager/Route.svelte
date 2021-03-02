<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	
	const isMouseScrolling = writable(true);
	const scroll = tweened(0, { duration: 200, easing: cubicOut });

	scroll.subscribe(value => window.scrollTo(0, value));
</script>

<script lang="ts">
	import { register, activeRoute } from './Router.svelte';
	
	export let middleware = [];
	export let path = '*';
	export let component = null;
	
	let params = {};
	
	register({ path, component, middleware });
	
	$: if ($activeRoute.path === path) 
	{
		params = ($activeRoute as any).params;
   }
</script>

{#if $activeRoute.path === path}
	{#if component}
		<svelte:component this={component} {...$$restProps} {...params}/>
	{:else}	
		<slot {params}/>
	{/if}
{/if}