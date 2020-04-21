<template>
  <div class="home">
    state {{ count }}
    <br />
    {{ countPlusLocalState }}
    <br />
    {{ countAlias }}
    <Button @click="increase">increase</Button> <br />
    getter {{ $store.getters.useCount }} {{ useCount }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Test',
  data() {
    return {
      localCount: 2
    };
  },
  computed: {
    localAttr() {
      return 1;
    },
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.localCount;
      }
    }),
    ...mapGetters(['useCount'])
  },
  methods: {
    increase() {
      // this.$store.commit({
      //   type: 'INCREMENT',
      //   aa: 2
      // });
      this.INCREMENT(2)
    },
    ...mapMutations([
      'INCREMENT', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ])
  }
};
</script>
