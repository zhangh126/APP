<template>
	<div class="mine-navbar">
		<div class="mine-navbar-left" v-if="$slots.left">
			<!-- //插槽 -->
			<slot name='left'></slot>
		</div>
		<div class="mine-navbar-center" v-if="$slots.center">
			<slot name='center'></slot>
		</div>
		<div class="mine-navbar-right" v-if="$slots.right">
			<slot name='right'></slot>
		</div>
		<h1 class="mine-navbar-title">
			<span class="mine-navbar-text" v-if="title" v-text="title"></span>
		</h1>
	</div>
</template>

<script>
	export default{
		name:'navbar',
		props:{
			title:{
				type:String,
				title:''
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.mine-navbar{
		@include flex-between();
		height: 50px;
		background-color: #fff;
		
		&-left{
			margin-left: 10px;
			~ .mine-navbar-right{
				position: static;
			}
		}
		&-center{
			flex:1;
			margin: 0 10px;
			~ .mine-navbar-right{
				position: static;
			}
		}
		&-right{
			position: absolute;
			right: 0;
			@include flex-center();
			height: 100%;
			margin-right: 10px;
		}
		&-title{
			position: absolute;
			top: 0;
			bottom: 0;
			left: 20%;
			right: 20%;
			@include flex-center();
			text-align: center;
			font-size: 18px;
			@include ellipsis();
		}
		&-text{
			width: 100%;
			font-size: 18px;
			line-height: 1.5;
			@include ellipsis();
		}
	}
</style>
