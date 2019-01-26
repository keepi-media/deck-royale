<template>
	<div id="App">
		<Header title="Deck Royale"/>
		<div class="Wrapper">
			<router-view/>
		</div>
	</div>
</template>

<script>

	import Header from "@/components/Header";

	export default {
		name: "App",
		components: {Header}
	}

</script>


<style lang="scss">

	@import "./assets/ress.css";
	@import "./assets/modernscale.css";

	#App {

		display: flex;
		font-size: 1em;
		line-height: 1.25;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #fff;
		background: #3581b8;
		width: 100%;
		overflow: auto;

		a {
			cursor: pointer;
			text-decoration: none;
			color: inherit;
		}

		.Wrapper {
			display: flex;
			flex: 1 1 auto;
			flex-direction: row;
			position: relative;
			width: 100%;
			height: 100vh;
			min-height: min-content;
			backface-visibility: hidden;
			padding: 20px;
			padding-top: 48px;

			align-items: center;
			display: flex;
			justify-content: center;
		}
	}

	@media (min-width: 43.75em) {
		#App {
			font-size: 1em;
			line-height: 1.375;
		}
	}

	section {
		margin-top: 20px;
	}

</style>
