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
  color: #2c3e50;
}
</style>
