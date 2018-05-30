<template>
  <div>
    {{msg}}
    <introduceList v-bind:introduceList="mylist"></introduceList>

  </div>
</template>

<script>
  import introduceList from '../components/function/list'

  export default {
    name: "content",
    data() {
      return {
        msg: "实体内容",
        mylist: [
          {name: 'apple', chinese: '苹果'},
          {name: 'banana', chinese: '香蕉'}
        ],
      }
    },
    components: {
      introduceList
    },
  }
</script>

<style scoped>

</style>
