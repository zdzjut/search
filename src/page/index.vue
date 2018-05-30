<template>
  <div>
    <Header></Header>
    <First></First>
    <Footer></Footer>
  </div>
</template>
<script>
  import First from '../components/first.vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'

  export default {
    components: {First,Header, Footer}
  }
</script>
