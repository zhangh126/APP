<template>
	<swiper :options="swiperOption" :key="keyid">
		<!-- 插槽 -->
		<slot></slot>
		<!-- 分页器 -->
		<div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
	</swiper>

</template>

<script>
	import {swiper} from 'vue-awesome-swiper';
	export default {
		name: 'MeSlider',
		components: {
			swiper
		},
		props: {
			// 滑动方式 水平 垂直
			direction: {
				type: String,
				default: 'horizontal',
				validator(value) {
					return [
						'horizontal',
						'vertical'
					].indexOf(value) > -1;
				}
			},
			// 自动轮播
			interval: {
				type: Number,
				default: 1000,
				validator(value) {
					return value >= 0;
				}
			},
			// 无缝滚动
			loop: {
				type: Boolean,
				default: true
			},
			// 分页器
			pagination: {
				type: Boolean,
				default: true
			},
			data:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				keyid:Math.random(),
				
			};
		},
		watch:{
			data(newDate){
				if(newDate.length===0){
					return
				}
				this.swiperOption.loop=newDate.length ===1 ? false : this.loop;
				this.keyid=Math.random()
			}
		},
		// 方法放在里面
		created(){
			this.init()
		},
		// 数据
		methods: {
			init() {
				this.swiperOption={
					// 如果只有一张图片不让滑动
					
					watchOverflow:true,
					direction:this.direction,
					// 自动轮播 disableOnInteraction如果滑动上图片停止滚动
					autoplay:this.interval ?{
						delay:this.interval,
						disableOnInteraction:false
					}:false,
					// 容器同时显示几张图片
					slidesPerView:1,
					// 无缝滚动
					loop:this.data.length <= 1 ?  false : this.loop,
					// 分页器
					pagination:{
						el:this.pagination ? '.swiper-pagination':null
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-container{
		width: 100%;
		height: 100%;
	}
</style>
