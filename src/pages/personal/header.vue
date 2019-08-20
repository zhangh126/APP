<template>
	<me-navbar class="header">
			<div slot="center" class="center">个人中心</div>
			<i class="iconfont icon-msg" slot="right"></i>
			<i class="iconfont icon-home" slot="right"></i>
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
	@import "~assets/scss/mixins";
	.header{
		&.mine-navbar{
		background-color: $header-bgc-translucent;
		}
		.iconfont{
			color:$icon-color-default;
			font-size: $icon-font-size;
		}
	}
	.center{
		text-align: center;
	}
</style>