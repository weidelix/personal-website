<script lang="ts">
	export let link = '/';
	export let color = 'white';
	export let title = "";
</script>

<a href={link}>
	<div class="card transition-all rounded-full hover:shadow-xl px-5 w-full h-full" title="{title}" style="background-image: {color}">
		<div class="flex flex-wrap content-center justify-center p-1 h-full">
			<h1 class="label font-bold my-2 antialiased"><slot></slot></h1>
		</div>
	</div>
</a>

<style>
	.card {
		color: white
		/* height: 30%; Fix later */
	}

	.label {
		text-overflow: "...";
	} 
</style>