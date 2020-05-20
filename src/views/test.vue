<template>
  <div class="home">
    <p>increase:</p>
    state: {{ count }} <br />
    getter: {{ getCount }} <br />
    <Button @click="increaseSync">add</Button>
    <Button @click="actionIncrease">addAction</Button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { INCRAESE } from '@/store/increase/mutations.js';
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('increase');

import { homeGet, homePost } from '@/server/home/api.js';

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
    ...mapMutations([INCRAESE]),
    ...mapActions(['increase']),
    increaseSync() {
      this.INCRAESE(2);
    },
    actionIncrease() {
      this.increase(4);
    },
    async getHttp() {
      let res = await homeGet();
      console.log(res);
    },
    async postHttp() {
      let res = await homePost();
      console.log(res);
    }
  },
  created() {
    this.getHttp();
    this.postHttp();
  }
};
</script>
