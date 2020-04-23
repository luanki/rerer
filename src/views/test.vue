<template>
  <div class="home">
    <p>increase:</p>
    state: {{ count }} <br />
    getter: {{ getCount }} <br />
    <Button @click="increaseww">add</Button>
    <Button @click="actionIncrease">addAction</Button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { INCRAESE } from '@/store/increase/mutations.js';

const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('increase');

export default {
  name: 'Test',
  data() {
    return {
      localCount: 2
    };
  },
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count
    }),
    ...mapGetters(['getCount'])
  },

  methods: {
    ...mapMutations({
      aaaa: INCRAESE
    }),
    ...mapMutations([[INCRAESE]]),
    ...mapActions(['increase']),
    increaseww() {
      this.aaaa(2);
    },
    actionIncrease() {
      this.increase(4);
    }
  }
};
</script>
