<script lang="ts">
	export let title = 'Title';
</script>

<div class="card m-5 rounded-3xl shadow-2xl">
	<div class="flex flex-col content w-full h-full card-text">
		<div class="proj-img m-5 rounded-3xl" style="background-color: white">
			<!-- Image -->
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
		height: 500px;
		background-image: linear-gradient(to top, rgb(116, 67, 196), rgb(171, 130, 238) 80%);
		overflow: hidden;
	}

	.card-text {
		color: white;
	}
</style>