<template>
  <div>
    <span class="SelectName">选择打牌倍数：</span>
    <select v-model="timemuch" class="select" @change="chooseTime()">
      <option v-for="time in times" v-bind:value="time">
        {{ time }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "select-time",
    data() {
      return {
        timemuch:10,
        times: [10, 5, 20, 50, 1],
      }
    },
    methods: {
      chooseTime(){
        let data = {
          timemuch:this.timemuch
        };
        //子组件向父组件传值
        this.$emit('muchtime',data);
      }
    },
  }
</script>

<style scoped>
  .SelectName {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .select {
    width: 50%;
    height: 3rem;
    border: 0.1rem solid #2B94FF;
    border-radius: 0.3rem;
  }
</style>
