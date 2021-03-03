<script lang="ts">
	export let link = '/';
	export let label = 'No Label';
</script>

<a href={link}>
	<div class="card my-5">
		<div class="img p-1 rounded-full hover:shadow-2xl">
		<!-- <img src={img} alt={label}/> -->
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
	
	.img {
		background-color: rgba(0, 0, 0, 0.151);
		width: 100%;
		height: 100%;
	}
</style>