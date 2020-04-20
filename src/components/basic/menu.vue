<template>
  <Menu theme="dark" width="auto" class="aa">
    <div v-for="(menu, index) in menus" :key="index">
      <Submenu v-if="menu.children && menu.children.length" :name="menu.name">
        <template slot="title">
          <Icon :type="menu.icon"></Icon>
          <span>{{ menu.name }}</span>
        </template>
        <MenuItem
          v-for="(child, i) in menu.children"
          :key="i"
          :name="child.name"
          :to="`/${menu.path}/${child.path}`"
        >
          <!-- <Icon :type="child.icon"></Icon> -->
          <span>{{ child.name }}</span>
        </MenuItem>
      </Submenu>

      <MenuItem v-else :name="menu.name" :to="`/${menu.path}`">
        <Icon :type="menu.icon"></Icon>
        <span>{{ menu.name }}</span>
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
import routes from '@/router/router.js';

export default {
  name: 'SystemMenu',
  data() {
    return {
      menus: routes
    };
  },
  methods: {
    displayArrow(attr) {
      let arrows = document.querySelectorAll('.aa .ivu-menu-submenu-title-icon');
      arrows.forEach(v => {
        v.style.display = attr;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ivu-menu-item {
  text-align: left;
}
.ivu-menu-submenu {
  text-align: left;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i.ivu-menu-submenu-title-icon {
  display: none;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
