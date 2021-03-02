<script lang="ts">
	import Card from '../components/Home/Card.svelte';

	let cards = [
		{
			path: '/stuff',
			label: 'Stuff I made',
			img: 'assets/img/stuff.png'
		},
		{
			path: '/about',
			label: 'About me',
			img: 'assets/img/about.png'
		},
		{
			path: '/',
			label: 'Source code',
			img: 'assets/img/source.png'
		}
	];
</script>

<div class="home page p-6">
	<div class="flex flex-row flex-wrap place-content-around w-full h-full">
		<!-- <div class="background justify-self-center"> 
			<img class="place-self-center" src="assets/img/cosmos.svg"/>
		</div> -->

		<div class="grid">
			<div class="my-10">	
				<h3 class="sub-title text-3xl font-thin">Hi! I'm</h3>
				<h1 class="title justify-self-center font-black">Anthony</h1>
			</div>
			<!-- <p class="text-xl justify-self-center font-base text-gray-500">
				<i>"This my movie, and this my life"</i>
				 -Tommy Wiseau
			</p> -->
		</div>
		<div class="grid grid-cols-2 place-items-center">
			{#each cards as card, i (card.path)}
				<Card link={card.path} img={card.img}/>
				{card.label}
			{/each}
		</div>
	</div>
</div>

<style>
	.home {
		background-size: cover;
		overflow: hidden;
		background-image: radial-gradient(#0b132b, rgb(24, 24, 24));
	}
	
	.background {
		background-repeat: no-repeat;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -99999999;
	}
	
	img {
		width: 100%;
		height: 100%;
	}
	
	.title {
		font-size: 6rem;
		line-height: 6rem;
		color: #6fffe9;
	}
	
	.sub-title {
		color: rgb(230, 230, 230);
		font-weight: 100;
	}
	</style>