<script lang="ts">
	import Button from '@components/Button.svelte';
	import { scale } from 'svelte/transition';
	import { cubicOut, cubicIn } from 'svelte/easing';
	import { onDestroy, onMount } from 'svelte';

	let buttons = [
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
	<div class="grid place-items-center page 
							p-0 md:p-10 antialiased h-screen"
		in:scale={{ start: 0.7, opacity: 0, duration: 300, easing: cubicOut }}
		out:scale={{ start: 0.7, opacity: 0, duration: 300, easing: cubicIn}}>
		<div class="home flex flex-col md:flex-row 
								md:flex-wrap md:rounded-3xl shadow-2xl 
								place-content-around w-full h-full">
			<div class="side-one flex md:flex-col justify-center 
									md:place-content-start md:h-full md:w-1/2">
				<!-- Temporary -->
				<div class="image md:self-center transform translate-y-2/4 
										md:translate-y-0 rounded-full shadow-lg md:my-16"></div>
			</div>
			<div class="side-two flex flex-col p-7 h-full md:w-1/2">
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
				<div class="flex flex-wrap content-center flex-grow">
					<div class="flex flex-col w-full h-50 md:w-4/5">
						{#each buttons as button, i (button.id)}
							<div class="md:justify-self-start m-2" 
									in:scale={{ start: 0.5, opacity: 1, duration: 300 * button.id, easing: cubicOut }} 
									out:scale={{ start: 0.5, opacity: 0, duration: 100 * button.id, easing: cubicIn }}>
								<Button link={button.path} color={button.color}>{button.label}</Button>
							</div>
						{/each}
					</div>
				</div>

				<!-- Footer -->
				<div class="footer flex justify-center flex-grow text-5xl">
					<i class="fab fa-github place-self-center px-3"
						in:scale={{ start: 0, opacity: 0, duration: 500, easing: cubicOut }}></i>
					<i class="fab fa-facebook place-self-center px-3"
						in:scale={{ start: 0, opacity: 0, duration: 1000, easing: cubicOut }}></i>
					<i class="fab fa-instagram place-self-center px-3"
						in:scale={{ start: 0, opacity: 0, duration: 1500, easing: cubicOut }}></i>
				</div>
			</div>
		</div>
	</div>

{:else}
	<div class="grid place-items-center page 
				p-0 md:p-10 antialiased h-screen"
				out:scale={{ start: 0.7, opacity: 0, duration: 300, easing: cubicIn}}>
		<div class="home flex flex-col md:flex-row md:flex-wrap 
					md:rounded-3xl shadow-2xl 
					place-content-around w-full h-full">
			<div class="side-one flex md:flex-col justify-center 
						md:place-content-start md:h-full md:w-1/2">
				<!-- Temporary -->
				<div class="image md:self-center transform translate-y-2/4 
							md:translate-y-0 rounded-full shadow-lg md:my-16"></div>
			</div>
			<div class="side-two flex flex-col p-7 h-full md:w-1/2">
				<!-- Home page title -->
				<div>	
					<h3 class="sub-title">Hi! I'm</h3>
					<h1 class="title justify-self-center font-black">Anthony Mesina</h1>
				</div>

				<!-- Description -->
				<div class="desc py-5">
					Almost before we knew it, we had left the ground
				</div>

				<!-- Links to pages -->
				<div class="flex flex-wrap content-center flex-grow">
					<div class="flex flex-col w-full h-50 md:w-4/5">
						{#each buttons as button, i (button.id)}
							<div class="md:justify-self-start m-2 h-full" 
									 out:scale={{ start: 0.5, opacity: 0, duration: 100 * button.id, easing: cubicIn }}>
								<Button link={button.path} color={button.color}>{button.label}</Button>
							</div>
						{/each}
					</div>
				</div>

				<!-- Footer -->
				<div class="flex justify-center flex-grow text-5xl">
					<i class="fab fa-github place-self-center px-3"></i>
					<i class="fab fa-facebook place-self-center px-3"></i>
					<i class="fab fa-instagram place-self-center px-3"></i>
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
		/* text-shadow: 1px 1px 3px #bebcbc; */
	}
	
	.sub-title {
		font-size: 1.2rem;
		font-weight: 100;
		color: #525252;
		/* text-shadow: 1px 1px 3px #a1a1a1; */
	}
	
	.side-one {
		background-image: linear-gradient(130deg, #f0c433, #eb7b3f);
	}
	.side-two {
		background-color: white;
		padding-top: 100px;
	}

	@media (min-width: 768px) {
		.side-two {
			padding-top: 1.75rem;
		}
	}
	
	.desc {
		width: 80%;
		color: #525252;
	}

	.image {
		border-width: 5px;
		border-color: white;
		background-image: linear-gradient(130deg, #eb7b3f, #f0c433);
		width: 200px;
		height: 200px;
	}
</style>