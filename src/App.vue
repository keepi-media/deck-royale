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
		color: #2c3e50;
		background: #fff;
		width: 100%;
		height: 100vh;
		overflow: auto;

		a {
			cursor: pointer;
		}

		.Wrapper {
			display: flex;
			flex: 1 1 auto;
			flex-direction: column;
			position: relative;
			width: 100%;
			height: 100vh;
			min-height: min-content;
			backface-visibility: hidden;
			padding: 20px;
			padding-top: 48px;
		}
	}

	@media (min-width: 43.75em) {
		#App {
			font-size: 1em;
			line-height: 1.375;
		}
	}

</style>
