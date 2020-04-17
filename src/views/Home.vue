<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <system-menu />
  </div>
</template>

<script>
// @ is an alias to /src
import SystemMenu from '@/components/basic/menu.vue';

export default {
  name: 'Home',
  components: {
    SystemMenu
  }
};
</script>
