<template>
	<header class="Header">
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

	import * as eva from "eva-icons";

	export default {
		name: "Header",
		props: {
			id: {
				type: String,
				default: "Header"
			},
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
		render (h) {

			const Data = {
				"class": "Header",
				domProps: { id: this.id }
			};

			return h ("div", Data, [this.$slots.default]);
		},
		mounted () {
			eva.replace ();
		},
		updated () {
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
