<template>
	<swiper :options="swiperOption" ref="swiper">
		<div class="mine-scroll-pull-down" v-if="pullDown">
			<me-loading :text="pullDownText" inline ref="pullDownLoading"></me-loading>
		</div>
		<swiper-slide>
			<slot></slot>
		</swiper-slide>
		<div class="mine-csroll-pull-up" v-if="pullup">
			<me-loading :text="pullupText" inline ref="pullupLoading"></me-loading>
		</div>
		<div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
	</swiper>
</template>

<script>
	// 导入组件
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	import MeLoading from 'base/loading';
	import {PULL_UP_HEIGHT,PULL_UP_TEXT_INIT,PULL_UP_TEXT_START,PULL_UP_TEXT_ING,PULL_UP_TEXT_END,PULL_DOWN_HEIGHT,PULL_DOWN_TEXT_INIT,PULL_DOWN_TEXT_START,PULL_DOWN_TEXT_ING,PULL_DOWN_TEXT_END} from 'base/scroll/config.js'
	export default{
		name:"MeScroll",
		// 注册组件
		components:{
			swiper,
			swiperSlide,
			MeLoading
		},
		props:{
			scrollbar:{
				type:Boolean,
				default:true
			},
			data:{
				type:[Array,Object]
			},
			pullDown:{
				type:Boolean,
				default:false
			},
			pullup:{
				type:Boolean,
				default:false
			}
		},
		watch:{
			data(){
				this.update()
			}
		},
		created(){
			this.init()
		},
		methods:{
			update(){
				this.$nextTick(()=>{
					this.$refs.swiper && this.$refs.swiper.swiper.update();
				})
			},
			scrollToTop(speed,runCallbacks){
				this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0,speed,runCallbacks);
			},
			init(){
					this.pulling=false,
					this.pullupText=PULL_UP_TEXT_INIT,
					this.pullDownText='在拉在拉刷给你看',
					this.swiperOption={
						direction:'vertical',
						slidesPerView:'auto',
						freeMode:true,
						setWrapperSize: true,
						scrollbar:{
							el:this.scrollbar ? '.swiper-scrollbar':null,
							hide:true
						},
						on:{
							sliderMove:this.scroll,
							touchEnd:this.touchEnd,
							transitionEnd:this.scrollEnd
						}
					}
			},
			scroll(){
				const swiper=this.$refs.swiper.swiper;
				if(this.pulling){
					return
				}
				this.$emit('scroll',swiper.translate,this.$refs.swiper.swiper)
				if(swiper.translate>0){//下拉
					if(!this.pullDown){
						return
					}
					if(swiper.translate>PULL_DOWN_HEIGHT){
						this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START)
					}else{
						this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT)
					}
				}else if(swiper.isEnd){//上拉
					if(!this.pullup){
						return;
					}
					const ispullup = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'));
					if(ispullup){
						this.$refs.pullupLoading.setText(PULL_UP_TEXT_START)
					}else{
						this.$refs.pullupLoading.setText(PULL_UP_TEXT_INIT)
					}
				}
			},
			scrollEnd(){
				this.$emit('scroll-end',this.$refs.swiper.swiper.translate,this.$refs.swiper.swiper,this.pulling)
			},
			touchEnd(){
				if(this.pulling){
					return
				}
				const swiper=this.$refs.swiper.swiper;
				if(swiper.translate>PULL_DOWN_HEIGHT){//下拉
					if(!this.pullDown){
						return;
					}
					this.pulling=true;
					swiper.allowTouchMove=false;//禁止触摸
					swiper.setTransition(swiper.params.speed);//初始速度
					swiper.setTranslate(PULL_DOWN_HEIGHT);
					swiper.params.virtualTranslate=true;//定住不给回弹
					this.$refs.pullDownLoading.setText(PULL_UP_TEXT_ING);
					this.$emit('pull-down',this.pullDownEnd);
				}else if(swiper.isEnd){//底部
					const totalHeight=parseInt(swiper.$wrapperEl.css('height'));
					const ispullup=Math.abs(swiper.translate) + swiper.height-PULL_UP_HEIGHT>totalHeight;
					if(!this.pullDown){
						return;
					}
					this.pulling=true;
					swiper.allowTouchMove=false;//禁止触摸
					swiper.setTransition(swiper.params.speed);//初始速度
					swiper.setTranslate(-(totalHeight+PULL_UP_HEIGHT-swiper.height));
					swiper.params.virtualTranslate=true;//定住不给回弹
					this.$refs.pullDownLoading.setText(PULL_UP_TEXT_ING);
					this.$emit('pull-up',this.pullUpEnd);
				}
			},
			pullDownEnd(){
				this.pulling=false
				const swiper= this.$refs.swiper.swiper;
				this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
				swiper.params.virtualTranslate=false;
				swiper.allowTouchMove=true;
				swiper.setTransition(swiper.params.speed);
				swiper.setTranslate(0);
				setTimeout(()=>{
					this.$emit('pull-down-transition-end');
					
				},swiper.params.speed)
			},
			pullUpEnd(){
				const swiper=this.$refs.swiper.swiper;
				this.pulling=false;
				this.$refs.pullupLoading.setText(PULL_UP_TEXT_END);
				swiper.params.virtualTranslate=false;
				swiper.allowTouchMove=true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-container{
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
	.swiper-slide{
		height: auto;
	}
	.mine-scroll-pull-down{
		position: absolute;
		left: 0;
		bottom: 100%;
		width: 100%;
		height: 80px;
	}
	.mine-scroll-pull-up{
		position: absolute;
		left: 0;
		top: 100%;
		width: 100%;
		height: 30px;
	}
</style>
