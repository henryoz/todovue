<template src='./App.html'></template>

<style lang='scss' src='./App.scss'></style>

<script>
  import TodoList from './components/TodoList.vue';
  import store from './vuex/store';

  export default {
    components: {
      TodoList
    },
    store
  };
</script>
