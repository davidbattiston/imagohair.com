<script>
	import maryLouise from '$lib/assets/mary-louise.jpg';
	import taylor from '$lib/assets/taylor.jpg';
	import chrissy from '$lib/assets/chrissy.jpg';
</script>

<div class="grid">
	<div class="grid-item">
		<img alt="proof of concept" src={maryLouise} />
		<span class="name"> Mary Louise </span>
		<span> (804) 234-9004 </span>
		<span>hello@marylouisecurls.com</span>
		<span>Instagram & Facebook</span>
		<span>@marylouisecurls</span>
		<span>marylouisecurls.com</span>
		<hr />
		<span>Please text or DM to request appointments or information</span>
	</div>
	<div class="grid-item">
		<img alt="proof of concept" src={taylor} />
		<span class="name"> Taylor </span>
		<span> Hairbytaylor27@gmail.com </span>
		<span>Instagram @hairby_taylorm</span>
		<hr />
		<span>Please send your name and number so I can reach out to you.</span>
	</div>
	<div class="grid-item">
		<img alt="proof of concept" src={chrissy} />
		<span class="name"> Chrissy </span>
		<span> (804) 814-1934 </span>
		<hr />
		<span
			>Please text this number or leave voicemail with your name and appointment request and Chrissy
			will get back to you when she is next available. Thank you.</span
		>
		<hr />
		<span>You can also follow her instagram @hairby_chrissyw </span>
	</div>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* see notes below */
		column-gap: 140px;
		row-gap: 60px;
		margin: 0px 24px;
	}

	.grid-item {
		display: flex;
		flex-direction: column;
		justify-content: start;
		margin: 0 auto;
	}

	img {
		width: 100%;
		object-fit: cover;
		box-shadow: 0.5px 0.6px 2.2px rgba(0, 0, 0, 0.017), 1.2px 1.3px 5.3px rgba(0, 0, 0, 0.024),
			2.3px 2.5px 10px rgba(0, 0, 0, 0.03), 4px 4.5px 17.9px rgba(0, 0, 0, 0.036),
			7.5px 8.4px 33.4px rgba(0, 0, 0, 0.043), 18px 20px 80px rgba(0, 0, 0, 0.06);
		border-radius: 4px;
	}

	span {
		margin: 0px;
	}

	span.name {
		font-weight: 500;
		font-size: 20px;
		margin: 12px 0px;
	}
</style>
