import Vue from 'vue';
import Router from 'vue-router';

//路由
// import Home from 'pages/home/index.vue';
// import Category from 'pages/category/index.vue';
// import Product from 'pages/product/index.vue';
// import Search from 'pages/search/index.vue';
// import Cart from 'pages/cart/index.vue';
// import Personal from 'pages/personal/index.vue';
Vue.use(Router);

const routes=[
	{
		name:'home',
		path:'/home',
		component:()=>import('pages/home'),//路由懒加载
		children:[// 二级路由
		{
			name:'home-product',
			path:'product/:id',
			component:()=>import('pages/product')//路由懒加载
		}
			
		]
	},

	{
		name:'category',
		path:'/category',
		component:()=>import('pages/category')//路由懒加载
	},
	{
		name:'personal',
		path:'/personal',
		component:()=>import('pages/personal')//路由懒加载
	},
	{
		name:'cart',
		path:'/cart',
		component:()=>import('pages/cart')//路由懒加载
	},
	{
		name:'search',
		path:'/search',
		component:()=>import('pages/search')//路由懒加载
	},
	{
		path:'*',
		redirect:'/home'
	}
]
export default new Router({
  routes
});
