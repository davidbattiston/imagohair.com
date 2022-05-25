<script>
	import Header from '../lib/components/layout/header.svelte';
	import Footer from '../lib/components/layout/footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,700&display=block"
		rel="stylesheet"
	/>
</svelte:head>

<div class="wrapper">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	@use '../node_modules/rfs/scss.scss' as rfs;

	div.wrapper {
		padding: 16px;
		max-width: 1200px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		@media only screen and (min-width: 1200px) {
			padding: 24px;
		}
	}

	:global {
		* {
			box-sizing: border-box;
		}

		html,
		body {
			padding: 0;
			margin: 0;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
				Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			@include rfs.font-size(16px);
			font-family: 'Poppins', sans-serif;
		}

		main {
			display: grid;
			grid-template-columns: 1fr;
		}

		h1 {
			@include rfs.font-size(60px);
			@include rfs.margin-top(60px);
			@include rfs.margin-bottom(60px);
		}

		h2 {
			@include rfs.font-size(50px);
			@include rfs.margin-top(50px);
			@include rfs.margin-bottom(50px);
		}

		h3 {
			@include rfs.font-size(40px);
			@include rfs.margin-top(40px);
			@include rfs.margin-bottom(40px);
		}

		h4 {
			@include rfs.font-size(30px);
			@include rfs.margin-top(30px);
			@include rfs.margin-bottom(30px);
		}

		h5 {
			@include rfs.font-size(20px);
			@include rfs.margin-top(20px);
			@include rfs.margin-bottom(20px);
		}

		p {
			@include rfs.font-size(16px);
			@include rfs.margin-top(16px);
			@include rfs.margin-bottom(16px);
		}

		span {
			@include rfs.font-size(16px);
			@include rfs.margin-top(16px);
			@include rfs.margin-bottom(16px);
		}

		a {
			color: inherit;
			text-decoration: none;
			@include rfs.font-size(16px);
			@include rfs.margin-top(16px);
			@include rfs.margin-bottom(16px);
		}
	}
</style>
