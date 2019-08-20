<template>
	<NavBar class="header" v-show="visible">
		<i class="iconfont icon-scan" slot="left"></i>
		<searchBox
		 placeholder="搜搜看"
		 slot="center"
		 fake
		 @query="Getquery"
		 @click.native="goToSearch" 
		
		 > <!-- //自定义组件事件需要加native -->
		 </searchBox>
		<!-- <div slot="center">搜索框搜索框搜索框搜索框搜索框搜索框搜索框搜索框搜索框搜索框搜索框搜索框</div> -->
		<i class="iconfont icon-msg" slot="right"></i>
	</NavBar>
</template>

<script>
	import NavBar from '../../base/navbar/index.vue';
	import searchBox from '../../base/search-box/index.vue';
	export default{
		name:'HomeHeader',
		components:{
			NavBar,
			searchBox
		},
		data(){
			return{
				visible:true
			}
		},
		methods: {
			show() {
				this.visible=true
			},
			hide(){
				this.visible=false
			},
			Getquery(query){
				console.log(query)
			},
			goToSearch(){
				this.$router.push('/search')
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.header{
		&.mine-navbar{
			background-color: transparent;
			transition: background-color 0.5s; 
			//background-color: $header-bgc-translucent;
		}
		&.header-transition{
			background-color: $header-bgc-translucent;
		}
		.iconfont{
			color: $icon-color-default;
			font-size: $icon-font-size;
		}
	}
</style>
