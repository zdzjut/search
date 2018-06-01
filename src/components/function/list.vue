<template>
  <div>
    <ul>
      <li v-for="item in list" v-text="item.name + ' - ' + item.chinese"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'zdList',
    data: function () {
      return {
        list:this.introduceList
      }
    },
    // 传递数据
    props: ['introduceList']
  }


</script>
