<template>
	<div id="Deck">
		<template v-if="!Requesting">		
			<h1>Deck for Arena {{Deck.Arena}}</h1>
			<!-- <highcharts :options="Chart"></highcharts> -->

			<section>
				<!-- 
					trying to work arround a render bug related to the Thumbnail CSS class 
					maybe it be on the flex styling of App or even in for not be using computed properties.
				-->
				<template v-for="Card of Deck.Cards">
					<router-link :to="`/card/${Card._id}`" class="Thumbnail" :key="Card._id">
						<img :src="`http://www.clashapi.xyz/images/cards/${Card.idName}.png`" alt="Image">
						<p><b>{{Card.idName}}</b></p>
					</router-link>
				</template>
			</section>

			<section>
				<!-- insanelly @click.native and Type property isn't working O.o -->
				<Button @click="GenerateDeck ()" class="CTA">generate another</Button>
			</section>
		</template>
	</div>
</template>

<script>

	// Import the Button component.
	import Button from "@/components/Button";


	// Export the Deck view.
	export default {
		name: "Deck",
		data: () => ({
			Deck: {
				Cards: [],
				CardsImages: [],
				Arena: 0,
				CardsCount: null
			},
			Arena: 0,
			Requesting: true
		}),
		methods: {

			/**
			 * Generate a new Deck.
			 */
			GenerateDeck () {

				this.Requesting = true;

				// Get a random deck.
				const test = this.$api.get ("/random-deck")
				.then (
					(Response) => {

						// Configure the Deck on the store.
						this.ConfigureDeck (Response.data);

						// Tell that we're no longer requesting the data.
						this.Requesting = false;
					}
				);
			},

			/**
			 * Configure the generated Deck.
			 * @param {Object} Deck the Deck to be configured
			 */
			ConfigureDeck (Deck) {

				// Set the Deck based on the created Deck.
				this.Deck.Cards = Deck;

				// Set the Arena.
				this.Deck.Arena = this.GetArena ();

				// Set the Cards count.
				this.Deck.CardsCount = this.GetCardsCount ();


				// Save the Deck to the store.
				this.$store.commit ("SetDeck", this.Deck);
			},

			/**
			 * Get the arena of the generated Deck.
			 */
			GetArena () {

				// The initial arena.
				let Arena = 0;

				// Loop on all cards of the deck and set the higher as the Arena.
				for (const Card of this.Deck.Cards) {
					if (Card.arena > Arena) {
						Arena = Card.arena;
					}
				}

				// Return the arena.
				return Arena;
			},

			/**
			 * Count all types of cards present in the Deck.
			 */
			GetCardsCount () {

				// Set the common cards.
				const CommonCards = this.CountCards ("Common");

				// Set the rare cards.
				const RareCards = this.CountCards ("Rare");

				// Set the epic cards.
				const EpicCards = this.CountCards ("Epic");

				// Set the legendary cards.
				const LegendaryCards = this.CountCards ("Legendary");


				// Return an Object with the collected informations.
				return {
					CommonCards,
					RareCards,
					EpicCards,
					LegendaryCards
				};
			},

			/**
			 * Count all cards present in the Deck based on your rarity.
			 * @param {String} Type the type to count
			 */
			CountCards (Type) {

				// The initial amount of cards.
				let Count = 0;

				// Loop on all cards of the Deck and sum the times where the received
				// rarity appears.
				for (const Card of this.Deck.Cards) {
					if (Card.rarity === Type) {
						Count += 1;
					}
				}

				// Return the amount of cards.
				return Count;
			}
		},
		created () {

			// Generate a new Deck.
			this.GenerateDeck ();
		}
	}

</script>

<style lang="scss">

	.Thumbnail {
		width: 150px;
		height: 186px;
		padding: 10px;
		display: inline-block;
	}

</style>
