<script lang="ts">
	import Card, { hasMaximizedCard } from '@components/Stuff/Card.svelte';
	import Button from '@components/Button.svelte';

	let buttons = [
		{
			id: 1,
			path: '/',
			label: 'fa-home',
			color: 'linear-gradient(150deg, #f0c433, #eb7b3f)',
			title: 'Home'
		},
		{
			id: 2,
			path: '/about',
			label: 'fa-user',
			color: 'linear-gradient(150deg, rgb(236, 113, 113), rgb(192, 22, 22))',
			title: 'About me'
		},
		{
			id: 3,
			path: '/',
			label: 'fa-code',
			color: 'linear-gradient(150deg, rgb(61, 230, 151), rgb(25, 194, 81))',
			title: 'Source code'
		}
	];
</script>

<div class="p-5 antialiased h-full overflow-y-auto"
		 on:scroll={e => e.preventDefault()}>
	<div class="grid antialiased w-full">
		<div class="flex flex-col w-full">
			<h1 class="title self-center font-black py-2 md:text-5xl">Stuff  I made</h1>
			<div class="flex flex-row content-center justify-center self-center w-64 md:w-96">
				{#each buttons as button, i (button.id)}
					<div class="justify-self-center mx-2 w-full"> <!--out:scale={{ start: 0.5, opacity: 0, duration: 100 * button.id, easing: cubicIn }}> -->
						<Button title="{button.title}" link={button.path} color={button.color}>
							<i class="fa {button.label}" aria-hidden="true"></i>
						</Button>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="flex flex-wrap flex-grow content-center justify-center md:py-1 w-full">
		<Card id={1}/>
		<Card id={2}/> 
		<Card id={3}/>
	</div>
</div>

<style>
	.title {
		color: #525252;
	}
</style>