<template>
	<button :class="Type === 'cta' ? 'CTA' : ''">
		<slot name="default"/>
	</button>
</template>

<script>

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

	button {
		user-select: none;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-font-smoothing: antialiased;
		color: #fff;

		&.CTA {

			color: #22303e;

			margin: .4em;
			padding: 1em 2em;
			border-radius: 2em;
			cursor: pointer;
			background: #fcb07e;
			text-decoration: none;


			-webkit-transform: perspective(1px) translateZ(0);
			transform: perspective(1px) translateZ(0);
			-webkit-transition-duration: 0.3s;
			transition-duration: 0.3s;
			-webkit-transition-property: transform;
			transition-property: transform;

			&:active {
				-webkit-transform: scale(1.1);
				transform: scale(1.1);
			}

			&:hover {
				background: darken(#fcb07e, 2)
			}
		}
	}

</style>
