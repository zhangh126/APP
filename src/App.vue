<template>
  <div id="app" class="g-container">
   <div class="g-view-container">
		 <keep-alive>
			 <router-view/>
		 </keep-alive>
	   
   </div>
    <div class="g-footer-container">
		<Tabbar></Tabbar>
	</div>
  </div>
</template>

<script>
	// 导入组件
	import Tabbar from 'components/tabbar/index.vue';
  export default {
    name: 'App',
	// 注册组件
	components:{
		Tabbar
	}
  };
</script>
