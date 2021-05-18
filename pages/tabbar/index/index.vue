<template>
	<view class="page-index">
		<titlebar></titlebar>
		<tab :list="tabList" @clickTab="clickTab"></tab>
		<scroll-list>
			<view>
				<view v-for="(item, index) in 100" :key="index">{{index}} xxxxx</view>
			</view>
		</scroll-list>
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
	}
</style>
