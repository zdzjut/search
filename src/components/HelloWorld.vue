<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>列表1</h2>
    <ul>
      <li>
        <a href="#" target="_blank">页面1</a>
      </li>
      <li>
        <a href="#" target="_blank">页面2</a>
      </li>
      <li>
        <a href="#" target="_blank">页面3</a>
      </li>
    </ul>
    <h2>列表2</h2>
    <ul>
      <li>
        <a href="#" target="_blank">页面1</a>
      </li>
      <li>
        <a href="#" target="_blank">页面2</a>
      </li>
      <li>
        <a href="#" target="_blank">页面3</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Platform'
      }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
