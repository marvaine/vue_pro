<template>
    <div id="contact-form" class="contact-form">
          <h1 class="contact-form_title">Contact Form</h1>
      <div class="separator"></div>
  
      <form class="form">
        <input name="name" placeholder="Name" type="text" autocomplete="off">
        <input name="email" placeholder="E-mail" type="email"  v-model="inpAddress" autocomplete="off">
        <textarea name="message" rows="4" placeholder="Message"></textarea>
        <button class="button">Send</button>
        <p v-bind:class="myClass"><code>{{ feedbackText }}</code></p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data () {
      return {
    msg: 'Contact us', 
    inpAddress: '',
    feedbackText: '',
    myClass: 'invalid'
  }},
  watch: {
    inpAddress(newVal,oldVal) {
      if( !newVal.includes('@') ) {
        this.feedbackText = 'The e-mail address is NOT valid';
        this.myClass = 'invalid';
      }
      else if( !oldVal.includes('@') && newVal.includes('@') ) {
        this.feedbackText = 'Perfect! You fixed it!';
        this.myClass = 'valid';
      }
      else {
        this.feedbackText = 'The e-mail address is valid :)';
      }
    }} 
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .contact-form .form {
      display: flex;
      flex-direction: column;
      font-size: 16px;
  }
  
  .contact-form_title {
      color: #333;
      text-align: left;
      font-size: 28px;
  }
  
  .contact-form input[type="email"],
  .contact-form input[type="text"],
  .contact-form textarea {
      border: solid 1px #e8e8e8;
      font-family: 'Roboto', sans-serif;
      padding: 10px 7px;
      margin-bottom: 15px;
      outline: none;
  }
  
  .contact-form textarea {
      resize: none;
  }
  
  .contact-form .button {
      background: #da552f;
      border: solid 1px #da552f;
      color: white;
      cursor: pointer;
      padding: 10px 50px;
      text-align: center;
      text-transform: uppercase;
  }
  
  .contact-form .button:hover {
      background: #ea532a;
      border: solid 1px #ea532a;
  }
  
  .contact-form input[type="email"],
  .contact-form input[type="text"],
  .contact-form textarea,
  .contact-form .button {
      font-size: 15px;
      border-radius: 3px
  }
  p {
      font-size: large;
      font-weight: bold;
    }
    .valid {
      color: green;
    }
    .invalid {
      color: red;
    }
  </style>