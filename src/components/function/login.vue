<template>
  <div>
    <h3 v-text="title"></h3>
    <input v-model="username" v-on:blur="usernameLegal"/>
    <ul>
      <li v-for="item in items" v-on:click="change(item)">
        <span v-text="item.timStr"></span>
        <span v-bind:class="{done:!item.done}" v-text="item.thing"></span>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        title: '添加用户',
        username: '',
      }
    },
    methods: {
      addNewItem: function () {
        let date = new Date();//获取系统 当前时 间
        let timStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
        this.items.push({
          thing: this.newItem,
          done: false,
          timStr: timStr
        });
        this.newItem = '';
      },
      usernameLegal: function () {

      },
      change: function (item) {
        item.done = !item.done
      }
    }
  }
</script>

<style scoped>

</style>
