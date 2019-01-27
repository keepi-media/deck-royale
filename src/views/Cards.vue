<template>
	<div id="Cards">
		<template v-if="!Requesting">
			<h1>Common</h1>

			<section>
				<template v-for="Card of Cards.Common">
					<router-link :to="`/card/${Card._id}`" class="Thumbnail" :key="Card._id">
						<img :src="`http://www.clashapi.xyz/images/cards/${Card.idName}.png`" alt="Image">
						<p><b>{{Card.idName}}</b></p>
					</router-link>
				</template>
			</section>

			<section>
				<h1>Rare</h1>

				<section>
					<template v-for="Card of Cards.Rare">
						<router-link :to="`/card/${Card._id}`" class="Thumbnail" :key="Card._id">
							<img :src="`http://www.clashapi.xyz/images/cards/${Card.idName}.png`" alt="Image">
							<p><b>{{Card.idName}}</b></p>
						</router-link>
					</template>
				</section>
			</section>

			<section>
				<h1>Epic</h1>

				<section>
					<template v-for="Card of Cards.Epic">
						<router-link :to="`/card/${Card._id}`" class="Thumbnail" :key="Card._id">
							<img :src="`http://www.clashapi.xyz/images/cards/${Card.idName}.png`" alt="Image">
							<p><b>{{Card.idName}}</b></p>
						</router-link>
					</template>
				</section>
			</section>

			<section>
				<h1>Legendary</h1>

				<section>
					<template v-for="Card of Cards.Legendary">
						<router-link :to="`/card/${Card._id}`" class="Thumbnail" :key="Card._id">
							<img :src="`http://www.clashapi.xyz/images/cards/${Card.idName}.png`" alt="Image">
							<p><b>{{Card.idName}}</b></p>
						</router-link>
					</template>
				</section>
			</section>
		</template>
	</div>
</template>

<script>

	// Export the Cards view.
	export default {
		name: "Cards",
		data: () => ({
			Cards: [],
			Reqesting: true
		}),
		methods: {

			/**
			 * Get all Cards.
			 */
			GetCards () {

				// Connect to the API.
				this.$api.get ("/cards")
				.then (
					(Response) => {

						// Get the Cards.
						const Cards = Response.data;

						// Filter them by type.
						const Common = Cards.filter ((Card) => Card.rarity === "Common");
						const Rare = Cards.filter ((Card) => Card.rarity === "Rare");
						const Epic = Cards.filter ((Card) => Card.rarity === "Epic");
						const Legendary = Cards.filter ((Card) => Card.rarity === "Legendary");

						// Set the Cards to Cards.
						this.Cards = {
							Common,
							Rare,
							Epic,
							Legendary
						};

						// Tell that we're no longer requesting the data.
						this.Reqesting = false;
					}
				);
			}
		},
		created () {

			// Set the Header title.
			this.$store.commit ("SetHeader", "Cards");

			// Get all cards.
			this.GetCards ();
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
