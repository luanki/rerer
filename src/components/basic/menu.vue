<template>
  <Menu theme="dark" width="240px">
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
          :to="`${menu.path}${child.path}`"
        >
          <Icon :type="child.icon"></Icon>
          <span>{{ child.name }}</span>
        </MenuItem>
      </Submenu>

      <MenuItem v-else :name="menu.name" :to="menu.path">
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
  }
};
</script>
