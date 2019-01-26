<template>
	<div id="Arenas">
		<template v-if="!Requesting">
			<template v-for="Arena of AllArenas">
				<div :key="Arena._id" >
					<img class="Thumbnail" :src="`http://www.clashapi.xyz/images/arenas/${Arena.idName}.png`" alt="Image">
					<p><b>{{Arena.number}} - {{Arena.name}}</b></p>

					<section class="Description">
						<p>
							<b>+ {{Arena.victoryGold}} Gold</b> per Victory<br>
							<b>Need at least {{Arena.minTrophies}} Trophies</b><br>

							<b>Can donate:</b><br>
							<b>&nbsp;&nbsp;&nbsp;&nbsp;{{Arena.clan.donate.common}} Common Card{{Arena.clan.donate.common > 0 ? "s" : ""}} to Clan</b><br>
							<b>&nbsp;&nbsp;&nbsp;&nbsp;{{Arena.clan.donate.rare}} Rare Card{{Arena.clan.donate.rare > 0 ? "s" : ""}} to Clan</b><br>

							<b>Can Request:</b><br>
							<b>&nbsp;&nbsp;&nbsp;&nbsp;{{Arena.clan.request.common}} Common Card{{Arena.clan.request.common > 0 ? "s" : ""}} to Clan</b><br>
							<b>&nbsp;&nbsp;&nbsp;&nbsp;{{Arena.clan.request.rare}} Rare Card{{Arena.clan.request.rare > 0 ? "s" : ""}} to Clan</b><br>
						</p>
					</section>
				</div>
			</template>
		</template>
	</div>
</template>

<script>

	// Export the Arenas view.
	export default {
		name: "Arenas",
		data: () => ({
			Requesting: true,
			AllArenas: []
		}),
		created () {

			// Get all arenas.
			this.$api.get ("/arenas")
			.then (
				(Response) => {

					// Set AllArenas based on the received data.
					this.AllArenas = Response.data;

					// Tell that we're no longer requesting the data.
					this.Requesting = false;
				}
			);
		}
	}

</script>

<style lang="scss">

	#Arenas {
		& .Description {
			text-align: initial;
		}
	}

	.Thumbnail {
		width: 150px;
		height: 186px;
		padding: 10px;
		// display: inline-block;
	}

</style>
