<template>
	<view class="search-box">
		<view class="search-content">
			<uni-icons class="search-box-icon" type="search"></uni-icons>
			<text class="search-box-text">html vue</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "titlebar",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.search-box {
		height: 96rpx;
		box-sizing: border-box;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 19rpx 20rpx;
		background-color: $theme-color;

		.search-content {
			background-color: #fff;
			border-radius: 30px;
			padding: 10rpx 20rpx;

			.search-box-icon {
				padding: 5rpx 5rpx;
				margin-right: 16rpx;
			}

			.search-box-text {}
		}
	}
</style>
