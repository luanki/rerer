<template>
  <div>
    <Menu
      v-show="!isCollapsed"
      theme="dark"
      width="auto"
      ref="menu"
      :active-name="currentMenu"
      :open-names="openNames"
    >
      <template v-for="(menu, index) in menus">
        <Submenu v-if="menu.children && menu.children.length" :name="menu.name" :key="index">
          <template slot="title">
            <Icon :type="menu.icon"></Icon>
            <span>{{ menu.name }}</span>
          </template>
          <MenuItem
            v-for="(child, i) in menu.children"
            :key="i"
            :name="child.name"
            :to="getPath(`${menu.path}/${child.path}`)"
          >
            <span>{{ child.name }}</span>
          </MenuItem>
        </Submenu>

        <MenuItem v-else :name="menu.name" :to="getPath(menu.path)" :key="index">
          <Icon :type="menu.icon"></Icon>
          <span>{{ menu.name }}</span>
        </MenuItem>
      </template>
    </Menu>

    <div v-show="isCollapsed" class="collapsed">
      <template v-for="(menu, index) in menus">
        <Dropdown
          placement="right"
          :key="index"
          v-if="menu.children && menu.children.length"
          transfer
        >
          <Icon :type="menu.icon" class="ivu-menu-item"></Icon>
          <DropdownMenu slot="list">
            <DropdownItem v-for="(child, i) in menu.children" :key="i">
              <router-link :to="getPath(`${menu.path}/${child.path}`)">
                {{ child.name }}
              </router-link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <router-link v-else :to="getPath(menu.path)" :key="index" class="ivu-menu-item">
          <Icon :type="menu.icon" :title="menu.name"></Icon>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SystemMenu',
  props: {
    isCollapsed: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      currentMenu: '',
      openNames: []
    };
  },
  computed: {
    ...mapState({
      menus: state => state.permission.routes.filter(v => !v.hidden)
    })
  },
  methods: {
    displayArrow(attr) {
      let arrows = document.querySelectorAll('.aa .ivu-menu-submenu-title-icon');
      arrows.forEach(v => {
        v.style.display = attr;
      });
    },
    getPath(path) {
      let reg = /^\//;
      if (reg.test(path)) {
        return path;
      } else {
        return '/' + path;
      }
    },
    openSideList() {
      console.log('this.$router', this.$router, this.$route);
      this.openNames = [];
      if (this.$route.matched[0].name === 'main') {
        this.openNames.push(this.$route.matched[1].name);
      } else {
        this.openNames.push(this.$route.matched[0].name);
      }
      console.log(this.openNames);
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
      });
    }
  },
  watch: {
    isCollapsed(newValue) {
      console.log(newValue);
    },
    $route() {
      this.openSideList();
      this.currentMenu = this.$route.name;
    }
  },
  mounted() {
    this.openSideList();
    this.currentMenu = this.$route.name;
  }
};
</script>

<style lang="scss" scoped>
.menu-list {
  .ivu-menu-dark.ivu-menu-vertical {
    text-align: left;
    .ivu-menu-item {
      background-color: #515a6e;
      &.ivu-menu-item-active,
      &:hover {
        border-right: none;
        color: #1cc7a4 !important;
        background-color: #363e4f !important;
      }
    }
    span {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width 0.2s ease 0.2s;
    }
    i {
      transform: translateX(0px);
      transition: font-size 0.2s ease, transform 0.2s ease;
      vertical-align: middle;
      font-size: 16px;
    }
  }
}
.collapsed-menu {
  span {
    width: 0px;
    transition: width 0.2s ease;
  }
  i {
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 20px;
  }
}
.collapsed {
  color: rgba(255, 255, 255, 0.7);
  & > * {
    width: 100%;
    height: 50px;
    overflow: hidden;
    text-align: center;
    &:hover {
      color: #1cc7a4 !important;
      background-color: #363e4f;
    }
  }
  .ivu-menu-item {
    display: block;
    padding: 14px 29px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all 0.2s ease-in-out;
  }
}
</style>
