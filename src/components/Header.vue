<template>
	<header class="Header" id="Header">
		<div v-if="left" class="LeftAction">
			<div @click="$router.go (-1)">
				<i data-eva="chevron-left-outline"></i>
			</div>
		</div>

		<div v-if="title" class="Title">{{title}}</div>

		<div v-if="right" class="RightAction">
			<i data-eva="close-outline"></i>
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
			left: {
				type: Boolean,
				default: false,
				required: false
			},
			title: {
				type: String,
				default: "Urban",
				required: false
			},
			right: {
				type: Boolean,
				default: false,
				required: false
			},
			light: {
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

	header.Header {
		width: 100%;
		height: 48px;
		position: absolute;
		background: #3581b8;
		color: #fff;
		top: 0;
		left: 0;
		padding: 12px;
		z-index: 999999999;
		display: flex;
		flex-direction: row;
		align-content: space-around;
		justify-content: flex-start;

		& > * {
			align-self: center;
		}

		& .LeftAction, & .RightAction {
			& svg {
				fill: #fff;
			}
		}

		& .LeftAction {
			order: 1;
			flex-shrink: 2;
			width: 24px;
			height: 24px;
		}

		& .Title {
			order: 2;
			flex-grow: 4;
			text-align: left;
			padding-left: 20px;
		}

		& .RightAction {
			order: 3;
			flex-shrink: 2;
			width: 24px;
			height: 24px;
		}
	}

</style>
