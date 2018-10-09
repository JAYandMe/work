<template>
	<div>
	<div>
	</div>
	<div>
		<input v-for="(item,index) in arrs" type="checkbox" v-model="item.status" :value="item.label" @click="getValue(item)"/>
		<label>box{{num?num:'?'}}选中的值是：</label>{{value?value:'未选中'}}
	</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				inputValue:'',
				num:'',
				value:'',
				arrs: [{
						value: 1,
						label: '苹果',
						status:false
					},
					{
						value: 2,
						label: '栗子',
						status:false,
					},
					{
						value: 3,
						label: '香蕉',
						status:false,
					}
				]
			}
		},
		methods:{
			//单选框实现
			getValue(obj){
				let that = this.arrs
				for(let item in that){
					if(that[item]==obj){
						obj.status?obj.status=false:obj.status=true
						if(obj.status){
							this.num = obj.value
							this.value = obj.label
						}else{
							this.num = ''
							this.value = ''
						}
					}else{
						that[item].status=false
					}
				}
			}
		}
	}
</script>


<style lang="scss">

</style>

