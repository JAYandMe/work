<template>

   
    <div class="box">
        <input v-model="message">
        <p>输入框输入的值是：{{message}}</p>
        <checkbox></checkbox>
    </div>
   
</template>
<script>
import checkbox from "./CheckBox.vue";
export default {
    
    data (){
        return{
            message:''
        }
    },
    components: {
    checkbox
  }
}
</script>
<style lang="scss" scoped>
    .box{
        input{
            color:red;
        }
    }
</style>
