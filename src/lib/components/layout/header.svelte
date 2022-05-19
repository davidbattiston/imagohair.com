<script>
	import logo from '$lib/assets/imago-logo.png';
</script>

<header>
	<div class="wrapper">
		<a href="/"> <img alt="Imago Salon Studios Logo" src={logo} class="logo" /></a>
		<nav>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/stylists">Stylists</a>
				</li>
				<li>
					<a href="/contact-us">Contact Us</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	@use '../node_modules/rfs/scss.scss' as rfs;

	header {
		position: relative;
	}

	div.wrapper {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding: 20px;
	}

	.logo {
		width: 160px;
		// @media only screen and (min-width: 400px) {
		// 	padding-top: 120%; /* 16:9 Aspect Ratio */
		// }
		// @media only screen and (min-width: 500px) {
		// 	padding-top: 100%; /* 3:2 Aspect Ratio */
		// }
		// @media only screen and (min-width: 600px) {
		// 	padding-top: 80%; /* 3:2 Aspect Ratio */
		// }
		// @media only screen and (min-width: 800px) {
		// 	padding-top: 60%; /* 3:2 Aspect Ratio */
		// }
		@media only screen and (min-width: 1200px) {
			width: 200px;
		}
	}

	ul {
		display: flex;
		flex-direction: row;
		padding: 0;
		gap: 24px;
		list-style: none;
		margin: 0;
		height: 100%;
		li {
			display: flex;
			a {
				margin: auto 0;
				color: white;
				text-decoration: none;
				@include rfs.font-size(20px);
				font-weight: 500;
			}
		}
	}
</style>
