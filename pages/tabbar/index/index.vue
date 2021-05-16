<template>
	<view class="page-index">
		<titlebar></titlebar>
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
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.page-index {
		padding-top: 96rpx;
	}
</style>
