<template>
    <div>
        <h1>Issues</h1>
        <el-button @click="getIssues()" type="success">
      Get Issue
    </el-button>
    <el-row :gutter="12">
      <!-- Code 1 -->
      <todo-item :key="issue.id" :span="12" v-for="( issue, index ) in issues"
        :todo="issue.title" 
        :index="index"
        @remove="closeIssue(index)">

      </todo-item>
    </el-row>
    </div>
</template>
<script>
    import TodoItem from '@/components/TodoItem.vue';
import axios from 'axios';


    const client = axios.create({  //--1
    baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`, //--2
    headers: { //--3
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type':'application/json',
        'Authorization':`token ${process.env.VUE_APP_GITHUB_TOKEN}`  //--4
    },
})


    export default {
        name: 'IssueList',
        components:{
         TodoItem
    },
        data() {
            return {
                issues: []
            };
        },
        methods: {
        getIssues() {
            client.get('/issues')
                .then((res) => {
                    this.issues = res.data;
            })
        },
        closeIssue(number){
            client.patch(`/issues/${number}`, // --Code 2
                    {
                        state: 'closed'
                    },
                )
                .then(() => {
                    this.issues.some((v, i) => { // --Code 3
                        if(v.number == number) this.issues.splice(i, 1); // --Code 4
                    })
            })
        },

       
    },
     created() {
       this.getIssues();}
    };

</script>