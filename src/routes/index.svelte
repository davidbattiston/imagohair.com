<script>
	import Banner from '$lib/components/banner.svelte';
	import StylistGrid from '$lib/components/stylistGrid.svelte';
	import imagoInterior from '$lib/assets/imago-salon-interior.jpg';
	import imagoBuilding from '$lib/assets/imago-salon-building.jpg';
</script>

<svelte:head>
	<title>Imago Salon Studios in Richmond, VA - Chic salon and spa studios</title>
	<meta
		name="description"
		content="Located in the heart of the Fan in
	Richmond, Imago offers a local, cozy atmosphere. We provide studios for professional specializing in beauty and wellness."
	/>
	<meta
		name="og:title"
		content="Imago Salon Studios in Richmond, VA - Chic salon and spa studios"
	/>
	<meta
		name="og:description"
		content="Located in the heart of the Fan in
	Richmond, Imago offers a local, cozy atmosphere. We provide studios for professional specializing in beauty and wellness."
	/>
	<meta
		name="og:site_name"
		content="Imago Salon Studios in Richmond, VA - Chic salon and spa studios"
	/>
	<meta name="og:url" content="https://imagohair.com" />
	<meta
		name="twitter:title"
		content="Imago Salon Studios in Richmond, VA - Chic salon and spa studios"
	/>
	<meta
		name="twitter:description"
		content="Located in the heart of the Fan in
	Richmond, Imago offers a local, cozy atmosphere. We provide studios for professional specializing in beauty and wellness."
	/>
</svelte:head>

<div>
	<Banner />
	<div class="content-wrapper">
		<h2>
			Imago is a salon and spa studio provider specializing in beauty and wellness professionals.
		</h2>
		<p>
			We opened our doors in September of 1999 with the goal of delivering high quality, chic
			haircuts and color as well as the highest quality products. Located in the heart of the Fan in
			Richmond, our salon space offers a local, cozy atmosphere.
		</p>
		<p>
			Imago salon studios are move in ready. There are different layouts and equipment for each type
			of service you provide. We can accomodate you and you're unique needs.
		</p>
		<div class="aspect-ratio-container-interior">
			<img alt="proof of concept" src={imagoInterior} />
		</div>
		<h3>Location and contact information</h3>
		<div class="location-wrapper">
			<div class="location-description">
				<p>
					Imago is located on Main Street in Richmond, Va. Our address is 2602 W Main St, Richmond
					Va 23220. There is parking available in the alley directly behind our building and on a
					cement paved lot, in the alley across Robinson.
				</p>
				<p>If you'd like to rent a studio at Imago you can reach us at (804) 355-1040</p>
			</div>
		</div>
		<h3>Our Stylists</h3>
		<StylistGrid />
	</div>
</div>

<style lang="scss">
	@use '../node_modules/rfs/scss.scss' as rfs;

	div.content-wrapper {
		@include rfs.margin-top(40px);
		@include rfs.margin-bottom(40px);
		p {
			max-width: 900px;
		}
		padding: 0px 8px;
	}

	div.aspect-ratio-container-interior {
		@include rfs.margin-top(40px);
		height: 0;
		overflow: hidden;
		position: relative;
		padding-top: 100%;
		@media only screen and (min-width: 600px) {
			padding-top: 80%; /* 3:2 Aspect Ratio */
		}
		@media only screen and (min-width: 800px) {
			padding-top: 60%; /* 3:2 Aspect Ratio */
		}
		@media only screen and (min-width: 1200px) {
			padding-top: 44%; /* 16:9 Aspect Ratio */
		}
		box-shadow: 0.5px 0.6px 2.2px rgba(0, 0, 0, 0.017), 1.2px 1.3px 5.3px rgba(0, 0, 0, 0.024),
			2.3px 2.5px 10px rgba(0, 0, 0, 0.03), 4px 4.5px 17.9px rgba(0, 0, 0, 0.036),
			7.5px 8.4px 33.4px rgba(0, 0, 0, 0.043), 18px 20px 80px rgba(0, 0, 0, 0.06);

		border-radius: 16px;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 16px;
		}
	}
</style>
