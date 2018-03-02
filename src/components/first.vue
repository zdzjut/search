<template>
  <div>
    <input type="text" value="" v-model="id"/>
    <a href="javascript:void(0)" v-on:click="search">搜索</a>
    <a href="javascript:void(0)" v-on:click="up">上一条</a>
    <a href="javascript:void(0)" v-on:click="down">下一跳</a>
    <a href="javascript:void(0)" v-on:click="first">最新一条</a>
    <textarea>{{ message }}</textarea>
    <textarea>{{ summary }}</textarea>
  </div>
</template>

<script>
  export default {
    name: 'first',
    data() {
      return {
        message: '',
        summary: '',
        id: ''
      }
    },
    methods: {
      up: function () {
        this.$api.get(`up/${this.id}`, null, r => {
          this.message = r.data.message;
          this.summary = r.data.summary
        });
      },

      down: function () {
        this.$api.get(`down/${this.id}`, null, r => {
          this.message = r.data.message;
          this.summary = r.data.summary
        });
      },
      search: function () {
        this.$api.get(`search/${this.id}`, null, r => {
          this.message = r.data.message;
          this.summary = r.data.summary
        });
      },
      first: function () {
        this.$api.get('first', null, r => {
          this.message = r.data.message;
          this.summary = r.data.summary
        });
      }
    }
  }
</script>

<style scoped>

</style>
