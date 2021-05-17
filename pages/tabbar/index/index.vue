<template>
	<view class="page-index">
		<titlebar></titlebar>
		<tab :list="tabList"></tab>
		<view>
			<view v-for="(item, index) in 100" :key="index">{{index}} xxxxx</view>
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
			loadLabelData() {
				uniCloud.callFunction({
					name: 'get_label',
				}).then((res) => {
					const {result} = res;
					this.tabList = result.data;
					console.log(this.tabList);
				})
			}
		}
	}
</script>

<style lang="scss">
	.page-index {
		padding-top: 96rpx;
	}
</style>
