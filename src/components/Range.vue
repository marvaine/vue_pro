<template>
    <h1>Input Type Range</h1>
    <form @submit.prevent="registerAnswer">
      <label>How tall are you?<br>
        <input v-model="heightInp" type="range" min="50" max="235"> {{ heightInp }} cm
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
    name:'RG',
    data() {
      return {
        heightInp: null,
        inpValSubmitted: 'Not submitted yet'
      }
    },
    methods: {
      registerAnswer() {
        if(this.heightInp) {
          this.inpValSubmitted = this.heightInp + ' cm';
        }
      }
    }
  }
  </script>