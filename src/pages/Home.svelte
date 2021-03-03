<script lang="ts">
	import Card from '../components/Home/Card.svelte';
	import { scale } from 'svelte/transition';
	import { cubicOut, cubicIn } from 'svelte/easing';

	let cards = [
		{
			id: 1,
			path: '/stuff',
			label: 'Stuff I made',
			color: 'linear-gradient(140deg, rgb(171, 130, 238), rgb(116, 67, 196))'
		},
		{
			id: 2,
			path: '/about',
			label: 'About me',
			color: 'linear-gradient(140deg, rgb(236, 113, 113), rgb(219, 60, 60))'
		},
		{
			id: 3,
			path: '/',
			label: 'Source code',
			color: 'linear-gradient(140deg, rgb(71, 224, 153), rgb(39, 211, 96)'
		}
	];
</script>

<div class="grid place-items-center page p-8 antialiased" transition:scale={{ start: 0.7, opacity: 0, duration: 300, easing: cubicIn}}>
	<div class="home flex flex-col flex-wrap rounded-3xl shadow-2xl place-content-around w-full h-full">
		<div class="side-one h-full">
		</div>
		<div class="flex flex-col side-two p-7 h-full">
			<!-- Home page title -->
			<div>	
				<h3 class="sub-title">Hi! I'm</h3>
				<h1 class="title justify-self-center font-black">Anthony</h1>
			</div>

			<!-- Desscription -->
			<div class="desc py-5">
				In the beningging
			</div>

			<!-- Links to pages -->
			<div class="grid flex-col flex-grow">
				<div class="self-center">
					{#each cards as card, i (card.id)}
					<div class="self-center" in:scale={{ start: 0.5, opacity: 1, duration: 300 * card.id, easing: cubicOut}} 
													 out:scale={{ start: 0.5, opacity: 0, duration: 100 * card.id, easing: cubicIn}}>
						<Card link={card.path} label={card.label} color={card.color}/>
					</div>
					{/each}
				</div>
			</div>

			<!-- Footer -->
			<div class="footer flex justify-center flex-grow text-5xl">
				<i class="fab fa-github place-self-center justify-self-center px-3"></i>
				<i class="fab fa-facebook place-self-center justify-self-center px-3"></i>
				<i class="fab fa-instagram place-self-center justify-self-center px-3"></i>
			</div>
		</div>
	</div>
</div>

<style>
	
	@media screen and (min-width: 720px)
	{
		.home {
			width: 720px;
			background-color: white;
			overflow: hidden;
			/* background-image: linear-gradient(130deg, rgb(71, 224, 153), rgb(39, 211, 96)),
			background-image: linear-gradient(130deg, rgb(171, 130, 238), rgb(116, 67, 196)),
			background-image: linear-gradient(130deg, rgb(236, 113, 113), rgb(219, 60, 60)), */
		}
	}
	
	.title {
		font-size: 3rem;
		line-height: 3rem;
		color: #525252;
		text-shadow: 1px 1px 3px #bebcbc;
	}
	
	.sub-title {
		font-size: 1.5rem;
		font-weight: 100;
		color: #525252;
		/* text-shadow: 1px 1px 3px #a1a1a1; */
	}
	
	.side-one {
		background-image: linear-gradient(130deg, #f0c433, #eb7b3f);
		width: 50%;
	}
	
	.side-two {
		width: 50%;
		/* -o-linear-gradient(120deg, #f0c433, #eb7b3f),
		-moz-linear-gradient(120deg, #f0c433, #eb7b3f),
		-webkit-linear-gradient(120deg, #f0c433, #eb7b3f); */
	}
	
	.desc {
		color: #525252;
		/* text-shadow: 1px 1px 3px #a1a1a1; */
	}
	
	.footer {
		color: #525252;
	}
	</style>