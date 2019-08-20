<template>
	<div class="personal">
		<header class="g-header-container">
			<cart-navbar/>
		</header>
		<me-scroll>
			<div class="g-content-container">
				<img src="../cart/img/personal.png" />
			</div>
		</me-scroll>
	</div>
</template>

<script>
	import CartNavbar from './header.vue';
	import MeScroll from 'base/scroll';
	export default{
		name:'Cart',
		components: {
			CartNavbar,
			MeScroll
		},
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	 img {
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.personal {
	  overflow:hidden;
	  width:100%;
	  height:100%;
	  background-color: $bgc-theme;
	}
	.g-content-container {
	  display: flex;
		height: 100%;
		width: 100%;
	}
</style>
