<template>
	<me-navbar>
		    <div slot="left">欢迎</div>
			<div slot="center" class="center">购物车</div>
			<i class="iconfont icon-msg" slot="right"></i>
	</me-navbar>
</template>

<script>
	import MeNavbar from '../../base/navbar/index.vue'
	export default{
		name:'CartNavbar',
		components: {
			MeNavbar
		},
	}
</script>

<style lang="scss" scoped>
	.center{
		text-align: center;
	}
</style>
