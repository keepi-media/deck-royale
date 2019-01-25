<template>
	<div id="Deck">
		<template v-if="!Requesting">		
			<h1>Deck for Arena {{Deck.Arena}}</h1>
			<highcharts :options="Chart"></highcharts>
		</template>
	</div>
</template>

<script>

	export default {
		name: "Deck",
		data: () => ({
			Chart: {
				chart: {
					backgroundColor: "",
					plotBackgroundColor: "",
					plotBorderWidth: null,
					plotShadow: false,
					type: "pie",
					space: [0, 0, 0, 0]
				},
				series: [],
				credits: {
					enabled: false
				},
				title: "",
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: "pointer",
						colors: ["#fff", "#afb", "#c4d", "#d73", "#a9c"],
						dataLabels: {
							enabled: true,
							format: "{point.name} {point.percentage:.1f}",
							distance: -50,
							filter: {
								property: 'percentage',
								operator: '>',
								value: 0
							}
						}
					}
				}
			},
			Deck: {
				Cards: [],
				Arena: 0,
				CardsCount: null
			},
			Arena: 0,
			Requesting: true
		}),
		methods: {
			GenerateDeck () {

				this.Requesting = true;

				const test = this.$api.get ("/random-deck")
				.then (
					(Response) => {

						this.ConfigureDeck (Response.data);
						this.ConfigureChart ();

						this.Requesting = false;
					}
				);
			},
			ConfigureDeck (Deck) {

				this.Deck.Cards = Deck;
				this.Deck.Arena = this.GetArena ();
				this.Deck.CardsCount = this.GetCardsCount ();
			},
			GetArena () {

				let Arena = 0;

				for (const Card of this.Deck.Cards) {
					if (Card.arena > Arena) {
						Arena = Card.arena;
					}
				}

				return Arena;
			},
			GetCardsCount () {

				const CommonCards = this.CountCards ("Common");
				const RareCards = this.CountCards ("Rare");
				const EpicCards = this.CountCards ("Epic");
				const LegendaryCards = this.CountCards ("Legendary");

				return {
					CommonCards,
					RareCards,
					EpicCards,
					LegendaryCards
				};
			},
			CountCards (Type) {

				let Count = 0;

				for (const Card of this.Deck.Cards) {
					if (Card.rarity === Type) {
						Count += 1;
					}
				}

				return Count;
			},
			ConfigureChart () {

				this.Chart.series.push ({
					data: [
						{
							name: "Common<br>", 
							y: this.Deck.CardsCount.CommonCards
						},
						{
							name: "Rare<br>", 
							y: this.Deck.CardsCount.RareCards
						},
						{
							name: "Epic<br>", 
							y: this.Deck.CardsCount.EpicCards
						},
						{
							name: "Legendary<br>", 
							y: this.Deck.CardsCount.LegendaryCards
						}
					]
				});
			}
		},
		created () {

			this.GenerateDeck ();
		}
	}

</script>
