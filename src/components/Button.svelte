<script lang="ts">
	export let link = '/';
	export let color = 'white';
	export let title = "";
</script>

<a href={link}>
	<div class="card transition-all rounded-full hover:shadow-xl px-0 md:px-5 w-full h-full" 
			 title="{title}" style="background-image: {color}">
		<div class="flex flex-wrap content-center justify-center p-1 h-12">
			<slot></slot>
		</div>
	</div>
</a>

<style>
	.card {
		color: white
		/* height: 30%; Fix later */
	}
</style>