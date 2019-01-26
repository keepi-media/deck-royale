<template>
	<header class="Header" id="Header">
		<div v-if="Title != 'Deck Royale'" class="LeftAction">
			<div @click="$router.go (-1)">
				<i data-eva="chevron-left-outline"></i>
			</div>
		</div>

		<span class="Title">{{Title}}</span>

		<div class="RightActions">
			<router-link to="/deck">
				Deck
			</router-link>
			<router-link to="/cards">
				Cards
			</router-link>
			<router-link to="/arenas">
				Arenas
			</router-link>
			<router-link to="/statistics">
				Statistics
			</router-link>
		</div>
	</header>
</template>

<script>

	// Use eva icons as icon set.
	import * as eva from "eva-icons";

	// Export the Header component, where it uses dynamic data for navigation.
	export default {
		name: "Header",
		props: {
			Left: {
				type: Boolean,
				default: false,
				required: false
			},
			Title: {
				type: String,
				default: "Urban",
				required: false
			},
			Right: {
				type: Boolean,
				default: false,
				required: false
			}
		},
		mounted () {

			// Prevent from the icons don't be updated.
			eva.replace ();
		},
		updated () {

			// Prevent from the icons don't be updated.
			eva.replace ();
		}
	}

</script>

<style lang="scss">

	// The Header component styling.
	header.Header {

		// Set the dimensions.
		width: 100%;
		height: 48px;
		padding: 12px;

		// Set the position
		position: absolute;
		z-index: 999999999;
		top: 0;
		left: 0;

		// Set the background and typography.
		background: #3581b8;
		color: #fff;

		// Set the arrangement.
		display: flex;
		flex-direction: row;
		align-content: space-around;
		justify-content: flex-start;

		// Make all items aligned to its center.
		& > * {
			align-self: center;
		}

		// Set the icons color fill to white.
		& .LeftAction {
			& svg {
				fill: #fff;
			}
		}

		// Configure the back button.
		& .LeftAction {
			order: 1;
			flex-shrink: 2;
			width: 24px;
			height: 24px;
		}

		// Configure the title.
		& .Title {
			order: 2;
			flex-grow: 4;
			text-align: left;
		}

		// Configure the actions at right.
		& .RightActions {
			display: none;
		}

		@media (min-width: 30em) {

			// Remove the back button on bigger screens.
			& .LeftAction {
				order: 2;
				flex-shrink: 2;
				display: none;
			}

			// Set the title to the first item.
			& .Title {
				order: 1;
				flex-shrink: 2;
			}

			// Set the action to the last.
			& .RightActions {
				display: flex;
				text-align: left;
				order: 3;

				// Configure all actions.
				& * {

					// Set a margin to them.
					margin-right: 20px;

					// And remove the margin from the last one.
					&:last-child {
						margin: 0;
					}

					// Got some styling behaviour from Button.
					-webkit-transform: perspective(1px) translateZ(0);
					transform: perspective(1px) translateZ(0);
					-webkit-transition-duration: 0.3s;
					transition-duration: 0.3s;
					-webkit-transition-property: transform;
					transition-property: transform;

					&:active {
						-webkit-transform: scale(1.1);
						transform: scale(1.1);
					}

					&:hover {
						color: #22303e !important;
					}
				}
			}
		}
	}

</style>
