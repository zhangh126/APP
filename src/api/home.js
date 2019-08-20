import axios from 'axios';
import jsonp from 'assets/js/jsonp.js';
//获取幻灯片数据 ajax

// 打乱数组顺序
const shuffle=(arr)=>{
	const arrLength=arr.length;
	let i=arrLength;
	let rndNum;
	
	while(i--){
		if(i!==(rndNum=Math.floor(Math.random()*arrLength))){
			[arr[i],arr[rndNum]]=[arr[rndNum],arr[i]];
		}
	}
	return arr;
}
export const getHomeSlider =()=>{
	return axios.get('http://www.imooc.com/api/home/slider').then(res=>{
		if(res.data.code==0){
			let sliders=res.data.slider;
			const slider=[sliders[Math.floor(Math.random() * sliders.length)]];
			// 随机取图片
			sliders=shuffle(sliders.filter(()=>Math.random()>=0.5));
			if(sliders.length===0){
				sliders=slider
			}
			
			return sliders
		}
		// 主动抛出错误
		throw new Error('没有成功获取到数据')
	}).catch(err=>{
		if(err){
			console.log(err)
		}
		return[
			{
				linkUrl:'https:/www.baidu.com',
				picUrl:require('assets/img/404.png')
			}
		];
	}).then(data=>{
		return new Promise(resolve=>{
			setTimeout(()=>{
				resolve(data);
			},1000);
		});
	})
}
export const getHomeRecommend=(page=1,psize=20,)=>{
	const url="https://ju.taobao.com/json/tg/ajaxGetItemsV2.json";
	const params={
		page,
		psize,
		type:0,
		frontCatId:''
	};
	return jsonp(url,params,{
		param:'callback'
	}).then(res=>{
		if(res.code==='200'){
			return res;
		}
		// 主动抛出错误
		throw new Error('没有成功获取到数据')
	}).catch(err=>{
		if(err){
			console.log(err)
		}
	}).then(data=>{
		return new Promise(resolve=>{
			setTimeout(()=>{
				resolve(data);
			},1000);
		});
	})
}
