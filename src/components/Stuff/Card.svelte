<script context="module">
	import { writable } from 'svelte/store';
	export const hasMaximizedCard = writable(false);
</script>

<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	
	export let id = 1;
	
	const [send, receive] = crossfade({
			duration: 200,
			easing: cubicOut,
		
			fallback(node, params) {
				const style = getComputedStyle(node);
				const transform = style.transform === 'none' ? '' : style.transform;
		
			return {
					duration: 500 + (id * 100),
					easing: cubicOut,
					css: t => `
						transform: ${transform} scale(${t});
						opacity: ${t};`
				};
			}
	});

	let BG = 0;
	let TITLE = 1;
	let DESC = 2;
	let IMG = 3;

	let isMaximized = false;
	export let title = 'Title';
	export let desc = 'desc';
</script>

<div class="card-min flex flex-wrap justify-center place-items-center gap-4 m-5 w-full h-full">
	{#if !isMaximized }
		<div class="card-min-content text-white rounded-3xl shadow-2xl"
				 on:click={() => { isMaximized = !isMaximized; $hasMaximizedCard = true; }}
				 in:receive={{key: BG}}
				 out:send={{key: BG}}>
			<div class="flex flex-col w-full h-full">
				<div class="proj-img-min m-5 bg-white rounded-3xl"
						 in:receive={{key: IMG}}
						 out:send={{key: IMG}}>
				</div>
				<div class="flex-grow grid grid-cols-2 place-content-end px-5 w-full">
					<h1 class="bold text-5xl"
						 	in:receive={{key: TITLE}}
						 	out:send={{key: TITLE}}>
						{title}
					</h1>
					<i class="fab fa-github place-self-center justify-self-center text-5xl px-3"></i>
				</div>
				<div class="flex-grow text-xl px-5 py-2"
						 in:receive={{key: DESC}}
						 out:send={{key: DESC}}>
					<p class="overflow-hidden h-0 md:h-auto">
						{desc}
					</p>
				</div>
			</div>
		</div>
	{/if}
</div>
{#if isMaximized}
	<div class="card-max grid absolute 
							overscroll-contain left-0 text-white 
							{(!isMaximized ? ' hidden ' : ' backdrop-filter ')}
							backdrop-blur-md h-full"
			 on:click={() => {isMaximized = !isMaximized; $hasMaximizedCard = false; }}
			 on:scroll={e => e.stopPropagation()}
			 style="top: {window.scrollY}px">
		<div class="card-max-content grid grid-cols-2 self-center
								place-self-center bold text-5xl 
								rounded-3xl shadow-lg
								p-10 w-1/2 h-1/2" 
			in:receive="{{key: BG}}"
			out:send="{{key: BG}}"
			on:click={e => e.stopPropagation()}>
			<div class="proj-img-max place-self-center rounded-full bg-white"
					 in:receive={{key: IMG}}
					 out:send={{key: IMG}}>
					
			</div>
			<div class="mx-5">
				<h1 class="bold text-6xl"
					in:receive={{key: TITLE}}
					out:send={{key: TITLE}}>
					{title}
				</h1>
				<div class="flex-grow text-xl py-2"
					in:receive={{key: DESC}}
					out:send={{key: DESC}}>
					<p>
						{desc}
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	@media screen and (min-width: 720px)
	{
		.card-min {
			
			width: 300px;
			height: 420px;
		}

		.card-min-content {
			width: 300px;
			height: 420px;
			background-image: linear-gradient(to top, rgb(116, 67, 196), rgb(171, 130, 238) 80%);
		}
	}

	.card-min {
		width: 250px;
		height: 320px;
	}

	.card-min-content {
		width: 300px;
		height: 320px;
		background-image: linear-gradient(to top, rgb(116, 67, 196), rgb(171, 130, 238) 80%);
	}

	/* .card-max {
	} */

	.card-max-content {
		background-image: linear-gradient(to top, rgb(116, 67, 196), rgb(171, 130, 238) 80%);
	}

	.proj-img-min {
		height: 60%;
	}

	.proj-img-max {
		width: 250px;
		height: 250px;
	}
</style>