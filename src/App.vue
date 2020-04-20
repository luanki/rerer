<template>
  <div id="app">
    <SysLayout />
  </div>
</template>

<script>
// @ is an alias to /src
import SysLayout from '@/components/basic/layout.vue';

export default {
  name: 'Home',
  components: {
    SysLayout
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
