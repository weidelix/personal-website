<script lang="ts">
	import Router from './pager/Router.svelte';
	import Route from './pager/Route.svelte';
	import NotFound from './pager/NotFound.svelte';

	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Stuff from './pages/Stuff.svelte';

	// Color Pallete

	// Russian Violet: 0B0033
	// Dark Purple: 370031
	// Antique Ruby: 832232
	// Raw Sienna: CE8964
	// Key Lime: EAF27C

	// TODO: 
	// Add sound effects
	// Add fluid animations
	// Finalize design
</script>

<main>
	<Router>
		<Route path="/" component={Home} />
		<Route path="/stuff" component={Stuff} />
		<Route path="/about" component={About} />
	
		<NotFound>
			Page not found.
		</NotFound> 
	</Router>
</main>

<style>
	/* TODO: Import the ones I only need */
	@import '@fortawesome/fontawesome-free/css/all.css';

	main {
		height: 100%;
		width: 100%;
		background-color: rgb(241, 168, 192);
	}
</style>