<template>
	<div id="App">
		<Header title="Deck Royale"/>
		<div class="Wrapper">
			<router-view/>
		</div>
	</div>
</template>

<script>

	// Import the Header component.
	import Header from "@/components/Header";

	// Export the App component.
	export default {
		name: "App",
		components: {Header}
	}

</script>


<style lang="scss">

	// Clear a few browser styles.
	@import "./assets/ress.css";

	// Define the typography scale.
	@import "./assets/modernscale.css";


	/**
	 * App component styling.
	 */
	#App {

		// Set the typography.
		font-family: Arial, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #fff;
		font-size: 1em;
		line-height: 1.25;
		text-align: center;
		background: #3581b8;

		// Set the display mode.
		display: flex;
		width: 100%;
		overflow: auto;

		// Configure all links to remove a few defaults.
		a {
			cursor: pointer;
			text-decoration: none;
			color: inherit;
		}


		// Set the Wrapper where the content goes on.
		.Wrapper {

			// Configure your display to fill the entire container (#App).
			display: flex;
			flex: 1 1 auto;
			flex-direction: row;
			position: relative;
			width: 100%;
			height: 100vh;
			min-height: min-content;

			// Force GPU accelerated rendering.
			backface-visibility: hidden;

			// Add a pretty space.
			padding: 20px;
			padding-top: 48px;

			// Configure all items to be centered vertically.
			align-items: center;
			display: flex;
			justify-content: center;
		}
	}


	// Enlarge the font size and line height in bigger screens.
	@media (min-width: 43.75em) {

		#App {
			font-size: 1em;
			line-height: 1.375;
		}
	}


	// Add a pretty space for sections.
	section {
		margin-top: 20px;
	}

</style>
