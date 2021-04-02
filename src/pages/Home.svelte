<script lang="ts">
	import Card from '../components/Home/Button.svelte';
	import { scale } from 'svelte/transition';
	import { cubicOut, cubicIn } from 'svelte/easing';
	import { onDestroy, onMount } from 'svelte';

	let cards = [
		{
			id: 1,
			path: '/stuff',
			label: 'Stuff I made',
			color: 'linear-gradient(150deg, rgb(171, 130, 238), rgb(116, 67, 196))'
		},
		{
			id: 2,
			path: '/about',
			label: 'About me',
			color: 'linear-gradient(150deg, rgb(236, 113, 113), rgb(192, 22, 22))'
		},
		{
			id: 3,
			path: '/',
			label: 'Source code',
			color: 'linear-gradient(150deg, rgb(61, 230, 151), rgb(25, 194, 81))'
		}
	];

	onDestroy(() => {
		$$props.setInitialLoad();
	});
</script>

{#if !$$props.initialLoad}
	<div class="grid place-items-center page p-10 antialiased"
	in:scale={{ start: 0.7, opacity: 0, duration: 300, easing: cubicOut }}
	out:scale={{ start: 0.7, opacity: 0, duration: 300, easing: cubicIn}}>
		<div class="home flex flex-col flex-wrap rounded-3xl shadow-2xl place-content-around w-full h-full">
			<div class="flex flex-col side-one h-full">
				<!-- Temporary -->
				<div class="image self-center rounded-full shadow-lg my-16"></div>
			</div>
			<div class="flex flex-col side-two p-7 h-full">
				<!-- Home page title -->
				<div>	
					<h3 class="sub-title">Hi! I'm</h3>
					<h1 class="title justify-self-center font-black">Anthony</h1>
				</div>

				<!-- Description -->
				<div class="desc py-5">
					Almost before we knew it, we had left the ground
				</div>

				<!-- Links to pages -->
				<div class="grid flex-col flex-grow">
					<div class="self-center">
						{#each cards as card, i (card.id)}
						<div class="self-center" in:scale={{ start: 0.5, opacity: 1, duration: 300 * card.id, easing: cubicOut }} 
														out:scale={{ start: 0.5, opacity: 0, duration: 100 * card.id, easing: cubicIn }}>
							<Card link={card.path} label={card.label} color={card.color}/>
						</div>
						{/each}
					</div>
				</div>

				<!-- Footer -->
				<div class="footer flex justify-center flex-grow text-5xl">
					<i class="fab fa-github place-self-center justify-self-center px-3"
						in:scale={{ start: 0, opacity: 0, duration: 500, easing: cubicOut }}></i>
					<i class="fab fa-facebook place-self-center justify-self-center px-3"
						in:scale={{ start: 0, opacity: 0, duration: 1000, easing: cubicOut }}></i>
					<i class="fab fa-instagram place-self-center justify-self-center px-3"
						in:scale={{ start: 0, opacity: 0, duration: 1500, easing: cubicOut }}></i>
				</div>
			</div>
		</div>
	</div>

{:else}
	<div class="grid place-items-center page p-10 antialiased"
		out:scale={{ start: 0.7, opacity: 0, duration: 300, easing: cubicIn}}>
		<div class="home flex flex-col flex-wrap rounded-3xl shadow-2xl place-content-around w-full h-full">
			<div class="flex flex-col side-one h-full">
				<!-- Temporary -->
				<div class="image self-center rounded-full shadow-lg my-16"></div>
			</div>
			<div class="flex flex-col side-two p-7 h-full">
				<!-- Home page title -->
				<div>	
					<h3 class="sub-title">Hi! I'm</h3>
					<h1 class="title justify-self-center font-black">Anthony</h1>
				</div>

				<!-- Description -->
				<div class="desc py-5">
					Almost before we knew it, we had left the ground
				</div>

				<!-- Links to pages -->
				<div class="grid flex-col flex-grow">
					<div class="self-center">
						{#each cards as card, i (card.id)}
						<div class="self-center" out:scale={{ start: 0.5, opacity: 0, duration: 100 * card.id, easing: cubicIn }}>
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
{/if}


<style>
	
	@media screen and (min-width: 720px)
	{
		.home {
			width: 720px;
			background-color: white;
			overflow: hidden;
		}
	}
	
	.title {
		font-size: 3rem;
		line-height: 3rem;
		color: #525252;
		text-shadow: 1px 1px 3px #bebcbc;
	}
	
	.sub-title {
		font-size: 1.2rem;
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
	}
	
	.desc {
		width: 80%;
		color: #525252;
	}
	
	.footer {
		color: #525252;
	}

	.image {
		border-width: 5px;
		border-color: white;
		background-image: url('/assets/img/bg.png');
		width: 200px;
		height: 200px;
	}
	</style>