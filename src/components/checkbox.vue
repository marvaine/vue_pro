<template>
    <h1>Checkbox Inputs in Vue</h1>
    <form @submit.prevent="registerAnswer">
      <p>What kinds of food do you like?</p>
      <label>
        <input type="checkbox" v-model="likeFoods" value="Pizza"> Pizza
      </label>
      <label>
        <input type="checkbox" v-model="likeFoods" value="Rice"> Rice
      </label>
      <label>
        <input type="checkbox" v-model="likeFoods" value="Fish"> Fish
      </label>
      <label>
        <input type="checkbox" v-model="likeFoods" value="Salad"> Salad
      </label>
      <button type="submit">Submit</button>
    </form>
    <div>
      <h3>Submitted answer:</h3>
      <p id="pAnswer">{{ inpValSubmitted }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:'CheckenBox',
    data() {
        
      return {
        likeFoods: [],
      
        inpValSubmitted: "{Not submitted yet}",
      }
    },
    methods: {
      registerAnswer() {
        this.inpValSubmitted = this.likeFoods;
        
      
      }
    }
  }
  </script>
  
  <style scoped>
    div {
      border: dashed black 1px;
      border-radius: 10px;
      padding: 0 20px 20px 20px;
      margin-top: 20px;
      display: inline-block;
    }
    button {
      margin: 10px;
    }
    label {
      display: block;
      width: 80px;
      padding: 5px;
    }
    label:hover {
      cursor: pointer;
      background-color: rgb(211, 244, 211);
      border-radius: 5px;
    }
    #pAnswer {
      background-color: lightgreen;
      padding: 5px;
    }
  </style>                  