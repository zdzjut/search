<template>
    <div>
      <input v-model="newItem" @keyup.enter="addNewItem"/>
      <ul>
        <li v-for="item in items" v-on:click="change(item)">
          <span v-text="item.timStr"></span>
          <span v-bind:class="{done:!item.done}" v-text="item.thing"></span>
        </li>
      </ul>
    </div>
</template>

<script>
  import Store from "../../utils/store";

  export default {
    data() {
      return {
        title: '待办事项',
        items: Store.getMap("items"),
        newItem: ''
      }
    },
    watch: {
      items: {
        handler: function (items) {
          Store.setMap("items", items);
        },
        deep: true   //表示key变更也算变更
      }
    },
    methods: {
      addNewItem: function () {
        let date = new Date();//获取系统当前时间
        let timStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
        this.items.push({
          thing: this.newItem,
          done: false,
          timStr: timStr
        });
        this.newItem = '';
      },
      change: function (item) {
        item.done = !item.done
      }
    }
  }
</script>

<style scoped>

</style>
