<script>
	import Slideshow from '/src/components/Slideshow.svelte';
</script>

<svelte:head>
	<title>San Antonio's Premier Interior Designer</title>
	<meta name="description" content="San Antonio premier interior designer" />
</svelte:head>

<section>
	<Slideshow />
</section>

<div>
	<p class="home-page-quote">"Beauty and comfort is what we keep in mind as we collaborate together to design a space that is personal and distinct for you and your home."</p>
</div>

<style>
	.home-page-quote {
		font: 1.5em 'Lato', sans-serif;
		font-size: 2.0em;
		text-align: center;
		padding: 100px 100px 0px;
	}

	@media screen and (max-width: 1000px) {
		.home-page-quote {
			font-size: 1.5em;
			padding: 50px 50px 0px;
		}
	}
</style>
