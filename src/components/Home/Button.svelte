<script lang="ts">
	export let link = '/';
	export let label = 'No Label';
	export let color = 'white';
</script>

<a href={link}>
	<div class="card my-5 rounded-full hover:shadow-xl" style="background-image: {color}">
		<div class="p-1">
			<center><h1 class="label font-bold my-2 antialiased">{label}</h1></center>
		</div>
	</div>
</a>

<style>
	.card {
		width: 70%;
		color: white
		/* height: 30%; Fix later */
	}
</style>