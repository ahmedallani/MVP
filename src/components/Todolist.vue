<template>
  <div>
    <Header />
    <form @submit.prevent="onSubmit">
      <Label for="Title"> Categories: </Label>
      <select id="Title" type="text" placeholder="Title..." v-model="Title">
        <option> Shopping </option>
        <option> Exercices </option>
        <option> Haircut </option>
        <option> Divers </option>
      </select>
      <input type="text" placeholder="Description..." v-model="Description" />
      <input type="date" placeholder="Todo Date " v-model="Date" />
      <input type="submit" value="SUBMIT" />
    </form>
  </div>
</template>

<script>
import Header from "./Header";
import axios from 'axios';
export default {
  components: {
    Header,
  },

  data() {
    return {
      Title: "",
      Description: "",
      Date: undefined,
    };
  },
  methods: {
    async onSubmit() {
      console.log('hello')
      let newtodo = {
        Title: this.Title,
        Description: this.Description,
        Date: this.Date,
      };
      try {
       await axios.post("http://localhost:3000/api/todos", newtodo)
       this.$emit("submit")
      } catch (error) {
        console.log(error)
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
form input {
  color: #888;
  border: none;
  outline: none;
  font-size: 20px;
}
form input::placeholder {
  color: #aaa;
}
form input:not([type="submit"]) {
  display: block;
  background: #fff;
  border: none;
  outline: none;
  padding: 5px 15px;
}
form input[type="submit"] {
  display: block;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 500;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 5px 15px;
  background-color: #ffce00;
  cursor: pointer;
}
form input:first-of-type {
  border-radius: 8px 0px 0px 8px;
}
form input:last-of-type {
  border-radius: 0px 8px 8px 0px;
}
</style>
