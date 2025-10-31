<template>
  <div>
    <h1>
      todo list
    </h1>
    
    
    <form @submit.prevent="addTodo()">
      <el-input placeholder="todo" v-model="todo">
      </el-input>
    </form>
    <el-row :gutter="12">
    
        
      <todo-item  :key="index" v-for="( todo, index ) in todos"  
        :todo="todo" 
        :index="index"
        @remove="removeTodo(index)">
      </todo-item>

      <todo-item :key="issue.id" :span="12" v-for="( issue, index ) in issues"
        :todo="issue.title" 
        :index="index"
        @remove="closeIssue(index)">

      </todo-item>
      
      

      
    </el-row>
  </div>
</template>
<script>
  import axios from 'axios';
  import TodoItem from '@/components/TodoItem.vue'; 

const client = axios.create({
    baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
    headers: {
        'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type':'application/json',
    },
})

export default {
    name: 'TodosIssues',
    components:{
         TodoItem
    },
    data () {
        return {
            todo: '',
            todos: [],
            issues: []
        }
    },
    methods: {
        
        
        addTodo(){
            this.todos.push(this.todo);
            this.todo= '';
        },
        removeTodo(index){
            this.todos.splice(index, 1);
        },
       
        

        closeIssue(index){
            const target = this.issues[index];
            client.patch(`/issues/${target.number}`,
                    {
                        state: "closed"
                    },
                )
                .then(() => {
                  this.issues.splice(index, 1);
            })
        },
        getIssues() {
            client.get('issues')
                .then((res) => {
                    this.issues = res.data
            })
        }
    },
    created() {
        this.getIssues();
    }
}
</script>