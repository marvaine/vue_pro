<template style="display:block">
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <span>Multiline message is:</span>
<button 
style="white-space: pre-line;
width:100px ;
height: 30px;
border: 5px;
border-color: burlywood;
border-radius: 20px;
margin-top: 200px;
">{{ message }}</button>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
</template>
<script setup>
import { ref , onMounted }  from 'vue'

const message = ref('')
onMounted(() => {
  console.log(`the component is now mounted.`)
})

</script>
