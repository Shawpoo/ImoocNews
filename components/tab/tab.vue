<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x="true" show-scrollbar="false">
			<view class="tab-scroll-box">
				<view v-for="(item, index) in list" class="tab-scroll-item" :key="index">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			}
		},
		name: "tab",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px #F5F5F5 solid;
		box-sizing: border-box;

		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;

			.tab-scroll-box {
				display: flex;
				height: 45px;
				flex-wrap: nowrap;
				align-items: center;
				box-sizing: border-box;

				.tab-scroll-item {
					flex-shrink: 0;
					padding: 0 12px;
					color: #333;
					font-size: 14px;
				}
			}
		}

		.tab-icons {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;

			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #DDD;
			}
		}
	}
</style>
