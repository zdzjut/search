<template>
  <div>
    <Header></Header>
    <First></First>
    <Conter></Conter>
  </div>
</template>
<script>

  import Header from '../../components/header'
  import First from '../../components/first.vue'
  import Conter from '../../page/fight/conter.vue'

  export default {
components:{
  Header,First,Conter
}
  }
</script>
