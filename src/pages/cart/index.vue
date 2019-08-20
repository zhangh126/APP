<template>
	<div class="category">
		<header class="g-header-container">
			<cart-navbar />
		</header>
		<div class="g-content-container">
			<me-scroll>
					<img src="./img/cart.png" />
			</me-scroll>
		</div>
	</div>
</template>

<script>
	import CartNavbar from './header.vue';
	import MeScroll from 'base/scroll';
	export default {
		name: 'Cart',
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
	
	
	.category {
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
