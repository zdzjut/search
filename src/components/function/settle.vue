<template>
  <div>
    <!--@change='changeType'-->
    <!--select的model和option的value保持一致-->
    <select v-model="landowner">
      <option v-for="user in users" v-bind:value="user.id">
        {{ user.name }}
      </option>
    </select>
    <span>地主: {{ landowner }}</span>
  </div>
</template>

<script>
  export default {
    name: "result",
    data() {
      return {
        landowner: 1,
        users: [
          { id: 1, name: 'A' },
          { id: 2, name: 'B' },
          { id: 3, name: 'C' }
        ]
        // users: [
        //   {value:'A'},
        //   {value:'B'},
        //   {value:'C'},
        //   {value:'D'}],
        // landowner: 'A',

      }
    },
    //function (ele) {  var optionTxt = $(ele.target).find("option:selected").text();
  // var optionVal = ele.target.value;
  props: ['user']
  }
</script>

<style scoped>

</style>
