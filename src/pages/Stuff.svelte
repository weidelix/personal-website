<script lang="ts">
	import Card from '../components/Stuff/Card.svelte';
</script>

<h1 class="title font-black">Stuff I made</h1>
<div class="grid place-items-center page p-10 antialiased">
	<div class="flex flex-wrap content-center justify-center w-full h-full">
		<Card/>
		<Card/>
		<Card/>
	</div>
</div>

<style>
	.title {
		font-size: 3rem;
		line-height: 3rem;
		color: #525252;
	}
</style>