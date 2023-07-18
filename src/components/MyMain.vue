<template>
   
    <div>
        <slot></slot>
        
    </div>
  
</template>

<script>
export default {
  name: 'MyMain',
  props:{
    name:{
        type:String,
    },
  },

};
  </script>

<style scoped>
    div {
        background-color: lightgreen;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        flex-basis: 150px;
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 20px 10px 0 10px;
    }
    div:hover {
        box-shadow: 7px 7px 0px 1px rgb(142, 255, 166);
        border: solid rgb(255, 255, 255) 2px;
    }
</style>              