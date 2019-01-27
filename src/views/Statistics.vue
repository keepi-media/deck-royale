<template>
  <div id="Statistics">
    <h2>Select your filter</h2>

    <section>
		<Button class="CTA" @click.native="SortByMinTrophies">Min Trophies per league</Button>
		<Button class="CTA" @click.native="SortByKingHealth">King Health per arena</Button>
		<Button class="CTA" @click.native="SortByTowerHealth">Tower Health per arena</Button>
		<Button class="CTA" @click.native="SortByChestsGold">Chests gold average</Button>
		<Button class="CTA" @click.native="SortByChestsByArena">Chests by arena</Button>
		<Button class="CTA" @click.native="SortByChestCost">Chests gem cost</Button>
		<Button class="CTA" @click.native="SortByCardsCount">Card rarity count</Button>
    </section>
    <highcharts class="" :options="Chart" :updateArgs="Update"></highcharts>
  </div>
</template>

<script>

	import Button from "@/components/Button";

	export default {
		name: "Statistics",
		components: {Button},
		data: () => ({
			Names: [],
			Chart: {
				chart:{
					type: "spline",
				},
				series: [{
					name: "",
					data: [],
				}],
				xAxis : {
					categories: []
				},
				title:{
					text: ""
				},
			},
			Update: [true, true, {duration: 100}]
		}),
		methods: {

			SortByMinTrophies () {

				const Names = [];

				this.$api.get ("/leagues")
				.then (
					(Response) => {

						const MinTrophies = Response.data.map (
							(Element) => {

								Names.push (Element.name);

								return {
									name: Element.name,
									y: Element.minTrophies,
									color: "purple"
								};
							}
						);

						const Options = {
							chart: {
								type: "spline"
							},
							series: [
								{
									name: "Leagues",
									data: MinTrophies
								}
							],
							xAxis: {
								categories: Names
							},
							title: {
								text: "Leagues min trophies"
							}
						};

						this.Chart = Options;
					}
				);
			},
			SortByKingHealth () {

				this.$api.get ("/players")
				.then (
					(Response) => {

						const HitPoints = Response.data.map (
							(Element) => ({
								name: Element.idName,
								y: Element.kingsTower.hitpoints
							})
						);

						const Options = {
							chart: {
								type: "spline"
							},
							series: [
								{
									name: "Health",
									data: HitPoints,
									color: "red"
								}
							],
							xAxis: {
								categories: this.Names
							},
							title: {
								text: "King tower health"
							}
						};

						this.Chart = Options;
					}
				);
			},
			SortByTowerHealth () {

				this.$api.get ("/players")
				.then (
					(Response) => {

						const HitPoints = Response.data.map (
							(Element) => ({
								name: Element.idName,
								y: Element.arenaTowers.hitpoints
							})
						);

						const Options = {
							chart: {
								type: "spline"
							},
							series: [
								{
									name: "Health",
									data: HitPoints,
									color: "blue"
								}
							],
							xAxis: {
								categories: this.Names
							},
							title: {
								text: "Arena tower health"
							}
						};

						this.Chart = Options;
					}
				);
			},
			SortByChestsGold () {

				this.$api.get ("/chests")
				.then (
					(Response) => {

						const Arenas = new Array (this.Names.length).fill (0);
						const Count = new Array (this.Names.length).fill (0);

						Response.data.forEach (
							(Element) => {
								Arenas[Element.arena] += (Element.gold.max + Element.gold.min) / 2;
								Count[Element.arena] += 1;
							}
						);

						for (const Arena in Arenas) {

							Arenas[Arena] /= Count[Arena];
							Arenas[Arena] = parseInt (Arenas[Arena] * 100) / 100;
						}

						const Options = {
							chart: {
								type: "spline"
							},
							series: [
								{
									name: "Chest arena count",
									data: Arenas,
									color: "gold"
								}
							],
							xAxis: {
								categories: this.Names
							},
							title: {
								text: "Gold average by chest in each arena"
							}
						};

						this.Chart = Options;
					}
				);
			},
			SortByChestsByArena () {

				this.$api.get ("/chests")
				.then (
					(Response) => {

						const Count = new Array (this.Names.length).fill (0);

						Response.data.forEach (
							(Element) => Count[Element.arena] += 1
						);

						const Options = {
							chart: {
								type: "spline"
							},
							series: [
								{
									name: "Count of all disponible chests in each arena",
									data: Count,
									color: "brown"
								}
							],
							xAxis: {
								categories: this.Names
							},
							title: {
								text: "Gold average by chest in each arena"
							}
						};

						this.Chart = Options;
					}
				);
			},
			SortByChestCost () {

				this.$api.get ("/chests")
				.then (
					(Response) => {

						const Names = [];
						const Cost = new Array (this.Names.length).fill (0);
						const Count = new Array (this.Names.length).fill (0);

						Response.data.forEach (
							(Element) => {

								Cost[Element.arena] += Element.gemCost;
								Count[Element.arena] += 1;
							}
						);

						for (const CostInformation in Cost) {

							Cost[CostInformation] /= Cost[CostInformation];
							Cost[CostInformation] = parseInt (Cost[CostInformation] * 100) / 100;
						}

						const Options = {
							chart: {
								type: "spline"
							},
							series: [
								{
									name: "Chest gem cost average",
									data: Count,
									color: "gold"
								}
							],
							xAxis: {
								categories: this.Names
							},
							title: {
								text: "Gem cost average to open chest by each arena"
							}
						};

						this.Chart = Options;
					}
				);
			},
			SortByCardsCount () {

				this.$api.get ("/cards")
				.then (
					(Response) => {

						const Count = new Array (4).fill (0);

						Response.data.forEach (
							(Element) => {

								Count[Element.rarity === "Common" ? 0 :
									Element.rarity === "Rare" ? 1 :
									Element.rarity === "Epic" ? 2 :
									3] += 1
							}
						);

						const Options = {
							chart: {
								type: "spline"
							},
							series: [
								{
									name: "Cards raritys count",
									data: Count,
									color: "green"
								}
							],
							xAxis: {
								categories: ["Common", "Rare", "Epic", "Legendary"]
							},
							title: {
								text: "Cards raritys count"
							}
						};

						this.Chart = Options;
					}
				);
			}
		},
		created () {

			this.$api.get ("/arenas")
			.then (
				(Response) => {

					this.Names = Response.data.map (
						(Arena) => Arena.name
					);

					this.SortByMinTrophies ();
				}
			);
		}
	}

</script>
