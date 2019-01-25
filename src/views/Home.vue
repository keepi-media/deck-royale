<template>
	<div id="Home">
		<h1>Welcome to Deck Royale!</h1>
		<p>Where you can generate Clash Royale decks</p>

		<Button Type="cta">generate deck</Button>
	</div>
</template>

<script>

	import Button from "@/components/Button";

	export default {
		name: "Home",
		components: {Button}
	}

</script>