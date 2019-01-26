<template>
	<div id="Card">
		<div>
			<img class="Thumbnail" :src="`http://www.clashapi.xyz/images/cards/${Card.idName}.png`" alt="Image">
			<p><b>{{Card.idName}}</b></p>
		</div>

		<section>
			<p>{{Card.description}}</p>
		</section>
	</div>
</template>

<script>

	// Export the Card view.
	export default {
		name: "Card",
		computed: {

			/**
			 * Use a computed property to get the Card based on the stored
			 * Cards and the received Id by the route.
			 */
			Card () {

				return this.$store.getters.Deck.Cards.filter (
					(Card) => Card._id == this.$route.params.id
				)[0];
			}
		}
	}

</script>
