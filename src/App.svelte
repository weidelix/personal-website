<script lang="ts">
	import router from 'page';

	import Router from './pager/Router.svelte';
	import Route from './pager/Route.svelte';
	import NotFound from './pager/NotFound.svelte';

	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
</script>
	
<main>
	<nav class="w-full">
		<div id="navigation" class="grid grid-cols-2 items-center font-sans py-5 mx-5">
			<div>
				<a href="/" class="text-2xl font-bold text-gray-600">Svelte App</a>
			</div>
			<div class="flex flex-row-reverse items-center">
				<div class="mx-2">
					<a class="text-2xl font-bold m-2 text-gray-500 page" href="https://www.github.com/weidelix/svelte-routify-webpack" target="_blank">
						<span class="fab fa-github"></span>
					</a>
				</div>
				<div class="mx-2">
					<a class="text-sm font-bold m-2 text-gray-500 page" href="/about">ABOUT</a>
				</div>
			</div>
		</div>
	</nav>

	<Router>
		<Route path="/" component={Home} />
		<Route path="/about" component={About} />
	</Router>

	<NotFound>
		Page not found.
	</NotFound>

</main>

<style>
	@import '@fortawesome/fontawesome-free/css/all.css';

	#navigation{
		font-family: 'Open Sans';
		border-bottom-width: 2px;
	}

	.page:hover{
		color: #60A5FA;
		transition: color 250ms;
	}
</style>