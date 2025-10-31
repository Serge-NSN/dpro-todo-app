<template>
  <div>
    <el-row>
      <!-- Sidebar -->
      <el-col :span="3" class="sidebar">
        <h5>My Vue</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Services</span>
            </template>
            <el-menu-item index="1-1">Web Application</el-menu-item>
            <el-menu-item index="1-2">Mobile Application</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>Changelog</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span>Element Vue</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Projects</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <!-- Main Content -->
      <el-col :span="21" class="main-content">
        <TodoList />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TodoList from './TodoList.vue';

export default {
  name: 'MyVue',
  components: {
    TodoList, 
  },  
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh; /* full screen height */
  overflow-y: auto;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1000;
}

.main-content {
  margin-left: 5%; /* match sidebar width */
  padding: 20px;
}

.el-menu-vertical-demo {
  border-right: 1px solid #dcdfe6; /* vertical line */
  height: 100%;
}
</style>
