<script>
	import { cubicOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
 
	const [send, receive] = crossfade({
		duration: 300,
		easing: cubicOut,
 
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;
 
		return {
				duration: 600,
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
	let y = 0;
	let isMaximized = false;
	export let title = 'Title';
	export let desc = 'desc';
</script>

<svelte:window bind:scrollY={y}/>

<div class="card-min flex flex-wrap justify-center place-items-center gap-4 m-5 w-full h-full">
	{#if !isMaximized }
		<div class="card-min-content text-white rounded-3xl shadow-2xl"
			on:click={() => { isMaximized = !isMaximized }}
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
					<p>
						{desc}
					</p>
				</div>
			</div>
		</div>
	{/if}
</div>
{#if isMaximized}
	<div class="card-max grid absolute left-0 top-0
					text-white 
					{(!isMaximized ? ' hidden ' : ' backdrop-filter ')}
					backdrop-blur-md w-full h-full"
		on:click={() => {isMaximized = !isMaximized}}>
		<div class="card-max-content grid grid-cols-2 self-center
				place-self-center bold text-5xl 
				rounded-3xl shadow-lg
				p-10 w-1/2 h-1/2" 
			in:receive="{{key: BG}}"
			out:send="{{key: BG}}">
			
			<div class="proj-img-max place-self-center rounded-full bg-white w-full h-full"
				in:receive={{key: IMG}}
				out:send={{key: IMG}}>
					
			</div>
			<div class="mx-5">
				<h1 class="bold text-5xl"
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
	.card-min {
		width: 300px;
		height: 420px;
	}

	.card-min-content {
		width: 300px;
		height: 420px;
		background-image: linear-gradient(to top, rgb(116, 67, 196), rgb(171, 130, 238) 80%);
	}

	.card-max {
	}

	.card-max-content {
		background-image: linear-gradient(to top, rgb(116, 67, 196), rgb(171, 130, 238) 80%);
	}

	.proj-img-min {
		height: 60%;
	}

	.proj-img-max {
	}
</style>
<!-- <script lang="ts">
	export let title = 'Title';
</script>

<div class="card m-5 rounded-3xl shadow-2xl">
	<div class="flex flex-col content w-full h-full card-text">
		<div class="proj-img m-5 rounded-3xl" style="background-color: white">
			Image
		</div>
		<div class="flex-grow grid grid-cols-2 place-content-end px-5 w-full">
			<h1 class="text-5xl font-bold">{title}</h1>
			<i class="text-5xl fab fa-github place-self-center justify-self-center px-3"></i>
		</div>
		<div class="flex-grow px-5 py-2">
			<p>
				Description.
			</p>
		</div>
	</div>
</div>

<style>
	.proj-img {
		height: 60%;
	}
	
	.card {
		width: 300px;
		height: 430px;
		background-image: linear-gradient(to top, rgb(116, 67, 196), rgb(171, 130, 238) 80%);
		overflow: hidden;
	}

	.card-text {
		color: white;
	}
</style> -->