<script lang="ts">
	import Card from '@components/Stuff/Card.svelte';
	import Button from '@components/Button.svelte';

	let buttons = [
		{
			id: 1,
			path: '/',
			label: 'Home',
			color: 'linear-gradient(150deg, #f0c433, #eb7b3f)'
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
</script>

<div class="grid grid-row page p-10 antialiased">
	<div class="grid antialiased">
		<div class="flex flex-col justify-center">
			<h1 class="title font-black">Stuff I made</h1>
			<div class="flex flex-row">
				{#each buttons as button, i (button.id)}
					<div class="self-center" out:scale={{ start: 0.5, opacity: 0, duration: 100 * button.id, easing: cubicIn }}>
						<Button link={button.path} label={button.label} color={button.color}/>
					</div>
				{/each}
			</div>
			</div>

		<div class="flex flex-wrap content-center justify-center w-full h-full">
			<Card/>
			<Card/>
			<Card/>
		</div>
	</div>
</div>

<style>
	.title {
		font-size: 3rem;
		line-height: 3rem;
		color: #525252;
	}
</style>