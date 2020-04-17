<template>
  <div>
    test{{ name }}
    <Button @click="click">Default</Button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      name: 43232
    };
  },
  methods: {
    click() {
      console.log(121);
    },
    clickq() {
      console.log(121);
    }
  }
};
</script>
