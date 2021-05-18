<template>
	<view class="scroll">
		<scroll-view class="scroll-list" scroll-y="true">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "scroll-list",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.scroll {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;

		.scroll-list {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
