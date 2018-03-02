<template>
  <div>
    <Header></Header>

    <First></First>

    <!--<div class="article_list">-->
      <!--<ul>-->
        <!--<li v-for="i in list">-->
          <!--<router-link :to=" i.id">-->
            <!--{{ i .id}}-->
          <!--</router-link>-->
          <!--{{ i .message}}-->

          <!--<time v-text="i.createDate"></time>-->

        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <Footer></Footer>
  </div>
</template>
<script>
  import First from '../components/first.vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'

  export default {
    components: {First,Header, Footer},
  //   data() {
  //     return {
  //       list: []
  //     }
  //   },
  //   created() {
  //     this.getData()
  //   },
  //   methods: {
  //     getData() {
  //       this.$api.get('all', null, r => {
  //         this.list = r.data
  //       })
  //     }
  //   }
  }
</script>
