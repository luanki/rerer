<template>
  <Layout>
    <Sider
      ref="side1"
      collapsible
      :collapsed-width="78"
      v-model="isCollapsed"
      :style="{ position: 'fixed', height: '100vh', left: 0, overflow: 'auto' }"
      @on-collapse="collapse"
    >
      <SystemMenu :class="menuClasses" ref="sss" />
    </Sider>
    <Layout>
      <Header class="layout-header-bar">
        header
      </Header>
      <Content>
        Content
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import SystemMenu from '@/components/basic/menu.vue';

export default {
  name: 'SysLayout',
  components: {
    SystemMenu
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuClasses() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    }
  },
  methods: {
    collapse(bool) {
      if (bool) {
        // this.$refs.sss && this.$refs.sss.displayArrow('none');
      } else {
        // this.$refs.sss && this.$refs.sss.displayArrow('inline');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
</style>
