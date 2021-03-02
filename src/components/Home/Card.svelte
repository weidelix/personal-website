<script lang="ts">
	export let link = '/';
	export let label = 'No Label';
	export let img = '';
</script>

<a href={link}>
	<div class="card my-5">
		<div class="img p-2 rounded-2xl shadow-2xl">
		<img src={img} alt={label}/>
		</div>
		<!-- <center><h1 class="text-xl my-2 antialiased">{label}</h1></center> -->
	</div>
</a>

<style>
	.card {
		width: 100%;
		height: 100%;
	}
	
	.img {
		background-color: white;
		width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: 431px) {
		.card {
			width: 6rem;
			height: 6rem;
		}
	}

	@media only screen and (max-width: 494px) {
		.card {
			width: 7rem;
			height: 7rem;
		}
	}

	@media only screen and (min-width: 495px) {
		.card {
			width: 8rem;
			height: 8rem;
		}
	}
</style>