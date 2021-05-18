<template>
	<view class="page-index">
		<titlebar></titlebar>
		<tab :list="tabList" @clickTab="clickTab"></tab>
		<view class="scroll">
			<scroll-view class="scroll-list" scroll-y="true">
				<view>
					<view>
						<view v-for="(item, index) in 100" :key="index">{{index}} xxxxx</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	// easyCom
	// import titlebar from "@/components/titlebar/titlebar.vue";
	export default {
		// components: {
		// 	titlebar
		// },
		data() {
			return {
				title: 'Hello',
				tabList: []
			}
		},
		onLoad() {
			this.loadLabelData();
		},
		methods: {
			clickTab({
				data,
				index
			}) {
				console.log(data, index);
			},
			loadLabelData() {
				this.$api.get_label({
					name: 'get_bebel',
				}).then((res) => {
					const {
						data
					} = res;
					this.tabList = data;
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		display: flex;
		height: 100%;
	}

	.page-index {
		display: flex;
		padding-top: 96rpx;
		flex-direction: column;
		flex: 1;

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
	}
</style>
