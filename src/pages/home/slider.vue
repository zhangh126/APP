<template>
	<!-- 分开传参语义化更清晰容易校验 -->
	<div class="slider-wrapper">
		<loading v-if="!sliders.length"></loading>
		<me-slider 
		:data="sliders"
		:dorection="direction" 
		:loop="loop" 
		:interval="interval" 
		:pagination="pagination" 
		v-else
		>
			<swiper-slide v-for="(item,index) in sliders" :key="index">
				<a :href="item.linkUrl" class="slider-link">
					<img :src="item.picUrl" alt="" class="slider-img">
				</a>
			</swiper-slide>
		</me-slider>
	</div>
</template>

<script>
	import MeSlider from 'base/slider';
	import {swiperSlide} from 'vue-awesome-swiper';
	import {
		getHomeSlider
	} from 'api/home';
	import loading from 'base/loading';
	export default {
		name: 'HomeSlider',
		components: {
			MeSlider,
			loading,
			swiperSlide
		},
		data() {
			return {
				direction: 'vertical',
				loop: false,
				interval: 0,
				pagination: true,

				// 	// 本地图片一定要通过require()引入
				// 	{
				// 		'linkUrl':'https://www.baidu.com',
				// 		'picUrl':require('./1.jpg')
				// 	},
				// 	{
				// 		'linkUrl':'https://www.baidu.com',
				// 		'picUrl':require('./2.jpg')
				// 	},
				// 	{
				// 		'linkUrl':'https://www.baidu.com',
				// 		'picUrl':require('./3.jpg')
				// 	},
				// 	{
				// 		'linkUrl':'https://www.baidu.com',
				// 		'picUrl':require('./4.jpg')
				// 	},
				// 
				sliders: []
			}
		},
		created() {
			this.getSlider();
		},
		methods: {
			//api
			update(){
				return this.getSlider()
			},
			getSlider() {
				return getHomeSlider().then(data => {
					this.sliders = data;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slider-wrapper {
		height: 183px;
	}

	.slider-link,
	.slider-img {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
