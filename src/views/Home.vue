<template>
	<div id="Home">
		<h1>Welcome to Deck Royale!</h1>
		<p>Where you can generate Clash Royale decks</p>

		<Button Type="cta" @click.native="$router.push ('/deck')">generate deck</Button>
	</div>
</template>

<script>

	// Import the Button component.
	import Button from "@/components/Button";

	// Export the Home view.
	export default {
		name: "Home",
		components: {Button},
		created () {

			// Set the Header title.
			this.$store.commit ("SetHeader", "Deck Royale");
		}
	}

</script>