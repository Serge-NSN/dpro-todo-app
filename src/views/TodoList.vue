<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <form @submit.prevent="addTask()">
        <el-input class="inputtext" type="text" placeholder="Add a new task" v-model = "task"></el-input>
    </form>
    
     <el-row :gutter="10">
      <todo-item  :key="index" v-for="( task, index ) in newTasks"  
        :todo="task" 
        :index="index"
        @remove="removeTask(index)">
      </todo-item>

     </el-row>

     
  </div>

  
</template>
<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'TodoList',
  components:{
         TodoItem
    },
  data() {
    return {
      task:"",
      newTasks: []
    }
  },
  methods: {
    addTask() {
      if (this.task.trim() !== "") {
        this.newTasks.push(this.task);
        this.task = "";
      }
    },
    removeTask(index) {
      this.newTasks.splice(index, 1);
    }
  },
};
  
</script>
<style>
  .todo-list {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-weight: bold;
  }
  .inputtext{
    width: 50%;
    border-bottom: solid 1px #2A91ECFF;
    margin-bottom: 50px;
  }
</style>