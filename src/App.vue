<template>
  <div>
    <Homepage v-if="page === 'Homepage'" @click="changePage" />
    <Todolist v-if="page === 'Todolist'" @submit="UpdateTodos"/>
  </div>
</template>

<script>

import Homepage from "./components/Homepage.vue";
import Todolist from "./components/Todolist.vue";
import axios from 'axios';

export default {
  name: "App",
  components: {
    Homepage,
    Todolist,
  },
  data() {
    return { page: "Homepage",
    todos:[] };
  },
  methods: {
    changePage(evt) {
      if (typeof evt === "string") {
        this.page = evt;
      }
    },
    UpdateTodos(){
      axios
      .get('/api/todos').then(response =>{
        this.todos = response.data

      })
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d0d0f;
  margin-top: 40px;
  padding: 40px 40px;
}
</style>
