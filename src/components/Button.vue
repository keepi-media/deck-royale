<template>
	<button :class="Type === 'cta' ? 'CTA' : ''">
		<slot name="default"/>
	</button>
</template>

<script>

	// Export the Button component.
	export default {
		name: "Button",
		props: {
			Type: {
				type: String,
				required: false,
				default: ""
			}
		}
	}

</script>

<style lang="scss">

	/**
	 * Button component styling.
	 */
	button {

		// Configure the font.
		user-select: none;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-font-smoothing: antialiased;
		color: #fff;

		// Configure the CTA buttons.
		&.CTA {

			// Set a better color for the eye based on the new background.
			color: #22303e;
			background: #fcb07e;
			cursor: pointer;
			text-decoration: none;


			// Configure the dimensions.
			margin: .4em;
			padding: 1em 2em;
			border-radius: 2em;


			// Set the transitions.
			-webkit-transform: perspective(1px) translateZ(0);
			transform: perspective(1px) translateZ(0);
			-webkit-transition-duration: 0.3s;
			transition-duration: 0.3s;
			-webkit-transition-property: transform;
			transition-property: transform;

			&:active {

				// If active make it bigger.
				-webkit-transform: scale(1.1);
				transform: scale(1.1);
			}

			&:hover {

				// When mouse hover make it darker.
				background: darken(#fcb07e, 2)
			}
		}
	}

</style>
