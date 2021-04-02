<script lang="ts">
	import Router from './pager/Router.svelte';
	import Route from './pager/Route.svelte';
	import NotFound from './pager/NotFound.svelte';

	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Stuff from './pages/Stuff.svelte';

	let initialLoad = true;

	// TODO: 
	// Make colors more vibrant
	// Photo for homepage
	// Add sound effects
	// Add fluid animations
	// Finalize design
	// Remove smooth scrolling

	function setInitialLoad(){
		initialLoad = false;
	}

</script>

<main>
	<Router>
		<Route path="/" component={Home} {initialLoad} {setInitialLoad}/>
		<Route path="/stuff" component={Stuff} {initialLoad} {setInitialLoad}/>
		<Route path="/about" component={About} {initialLoad} {setInitialLoad}/>
	
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