<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const response = await fetch('/data/settings');
		return {
			status: response.status,
			props: {
				settings: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	import banner from '$lib/assets/giorgio-trovato-wSpkThmoZQc-unsplash.jpg';
	export let settings;
</script>

<svelte:head>
	<title>{settings.meta_title}</title>
	<meta name="description" content={settings.meta_description} />
	<meta name="og:image" content={settings.og_image} />
	<meta name="og:title" content={settings.og_title} />
	<meta name="og:description" content={settings.description} />
	<meta name="og:site_name" content={settings.title} />
	<meta name="og:url" content="https://imagohair.com" />

	<meta name="twitter:image" content={settings.twitter_image} />
	<meta name="twitter:title" content={settings.twitter_title} />
	<meta name="twitter:description" content={settings.twitter_description} />
	<meta name="twitter:site" content={settings.twitter} />
</svelte:head>
<div>
	<div>
		<div class="banner-wrapper">
			<img alt="proof of concept" src={banner} />
			<div class="gradient" />
		</div>
		<h1>Own your work</h1>
	</div>
	<div class="content-wrapper">
		<h2>
			Imago is a salon and spa studio provider specializing in beauty and wellness professionals.
		</h2>
		<p>
			We opened our doors in September of 1999 with the goal of delivering high quality, chic
			haircuts and color as well as the highest quality products. Located in the heart of the Fan in
			Richmond, our salon space offers a local, cozy atmosphere.
		</p>
		<h2>Who's here?</h2>
	</div>
</div>

<style lang="scss">
	@use '../node_modules/rfs/scss.scss' as rfs;
	div.wrapper {
		padding: 10px;
		max-width: 1200px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		@media only screen and (min-width: 1200px) {
			padding: 20px;
		}
	}
	div.banner-wrapper {
		position: relative;
		width: 100%;
		padding-top: 150%; /* 4:3 Aspect Ratio */
		@media only screen and (min-width: 400px) {
			padding-top: 120%; /* 3:2 Aspect Ratio */
		}
		@media only screen and (min-width: 500px) {
			padding-top: 100%; /* 3:2 Aspect Ratio */
		}
		@media only screen and (min-width: 600px) {
			padding-top: 80%; /* 3:2 Aspect Ratio */
		}
		@media only screen and (min-width: 800px) {
			padding-top: 60%; /* 3:2 Aspect Ratio */
		}
		@media only screen and (min-width: 1200px) {
			padding-top: 44%; /* 16:9 Aspect Ratio */
		}

		div.gradient {
			background-image: linear-gradient(
				146deg,
				hsla(40.21, 83.93%, 43.92%, 0.66) 0%,
				hsla(39.16, 78.97%, 45.21%, 0.658) 8.1%,
				hsla(36.54, 70.07%, 47.78%, 0.654) 15.5%,
				hsla(32.69, 63.14%, 50.67%, 0.646) 22.5%,
				hsla(27.61, 62.32%, 53.59%, 0.637) 29%,
				hsla(21.23, 61.71%, 56.46%, 0.626) 35.3%,
				hsla(13.49, 61.3%, 59.21%, 0.614) 41.2%,
				hsla(4.34, 61.1%, 61.83%, 0.601) 47.1%,
				hsla(354.34, 63.4%, 61.99%, 0.589) 52.9%,
				hsla(346.02, 67.29%, 60.25%, 0.576) 58.8%,
				hsla(339.37, 70.87%, 58.3%, 0.564) 64.7%,
				hsla(334.08, 74.05%, 56.13%, 0.553) 71%,
				hsla(329.89, 76.79%, 53.74%, 0.544) 77.5%,
				hsla(326.6, 79.06%, 51.1%, 0.536) 84.5%,
				hsla(324.07, 86.78%, 48.23%, 0.532) 91.9%,
				hsla(322.17, 100%, 45.1%, 0.53) 100%
			);
			width: 100%;
			padding-top: 150%; /* 4:3 Aspect Ratio */
			@media only screen and (min-width: 400px) {
				padding-top: 120%; /* 16:9 Aspect Ratio */
			}
			@media only screen and (min-width: 500px) {
				padding-top: 100%; /* 3:2 Aspect Ratio */
			}
			@media only screen and (min-width: 600px) {
				padding-top: 80%; /* 3:2 Aspect Ratio */
			}
			@media only screen and (min-width: 800px) {
				padding-top: 60%; /* 3:2 Aspect Ratio */
			}
			@media only screen and (min-width: 1200px) {
				padding-top: 44%; /* 16:9 Aspect Ratio */
			}
			position: absolute;
			top: 0;
			left: 0;
		}

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	// h1 {
	// 	position: absolute;
	// 	top: 0;
	// 	left: 30px;
	// 	color: white;
	// 	padding-top: 60%; /* 4:3 Aspect Ratio */
	// 	@media only screen and (min-width: 400px) {
	// 		padding-top: 40%; /* 16:9 Aspect Ratio */
	// 	}
	// 	@media only screen and (min-width: 800px) {
	// 		padding-top: 30%; /* 3:2 Aspect Ratio */
	// 	}
	// 	@media only screen and (min-width: 1200px) {
	// 		padding-top: 20%; /* 16:9 Aspect Ratio */
	// 	}
	// }

	h1 {
		margin-top: -140px;
		margin-bottom: 140px;
		padding-left: 40px;
		z-index: 1;
		position: relative;
		color: white;
	}

	div.content-wrapper {
		@include rfs.margin-top(40px);
		@include rfs.margin-bottom(40px);
		max-width: 900px;

		h2 {
			@include rfs.font-size(30px);
			@include rfs.font-size(30px);
		}
	}
</style>
