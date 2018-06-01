<!--从后台取数据-->
<template>
  <div>
    <a @click="search">按钮</a>
    <ul>
      <li v-for="item in dataToList" >
        <span v-text="item.id"></span>
        <span v-text="item.name"></span>
        <span v-text="item.address"></span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "data-list",
      data() {
        return {
          dataToList: '[]',
        }
      },
      // mounted:function(){
      //   this.search();
      // },
      methods: {
        search: function () {
          let myself = this;
          this.axios.get('/ttt')
            .then(function (response) {
              console.log(response);
              myself.dataToList = response.data;
            }).catch(function (response) {
            console.log(response);
          });
        }
      }
    }
</script>

<style scoped>

</style>
