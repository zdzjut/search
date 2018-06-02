<!--从后台取数据-->
<template>
  <div>
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
          myurl:'',
        }
      },
      created:function(){
        this.search();
      },

      methods: {
        search: function () {
          let myself = this;
          let myurl=this.myurl;
          this.axios.get(myurl).then(function (response) {
              console.log(response);
              myself.dataToList = response.data;
            }).catch(function (response) {
            console.log(response);
          });
        }
      },
      // 传递数据，本组件标签传递过去后 v-bind：props 对应的值，就能传递相应的数据过来
      props: ['myurl']
    }

</script>

<style scoped>

</style>
