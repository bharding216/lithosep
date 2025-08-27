<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div>
	<Header />

	<main>
		<div class="container">
			<slot />
		</div>
	</main>

	<Footer />
</div>

<style>

</style>
