<script>
	import banner from '$lib/assets/hairstylist-cutting-hair.jpg';
</script>

<div>
	<div class="banner-wrapper">
		<img alt="proof of concept" src={banner} />
		<div class="gradient" />
	</div>
	<h1>Own your work.</h1>
</div>

<style lang="scss">
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
			border-radius: 16px;
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
			border-radius: 16px;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			box-shadow: 0.5px 0.6px 2.2px rgba(0, 0, 0, 0.017), 1.2px 1.3px 5.3px rgba(0, 0, 0, 0.024),
				2.3px 2.5px 10px rgba(0, 0, 0, 0.03), 4px 4.5px 17.9px rgba(0, 0, 0, 0.036),
				7.5px 8.4px 33.4px rgba(0, 0, 0, 0.043), 18px 20px 80px rgba(0, 0, 0, 0.06);
		}
	}

	h1 {
		margin-top: -140px;
		margin-bottom: 140px;
		padding-left: 30px;
		z-index: 1;
		position: relative;
		color: white;
	}
</style>
