<template>
 <div>
    <h1>World Wide Web</h1>

   <p>{{ msg }}</p>

  <ul class="list">

  <p>Choose what part of this page you want to see:</p>
  <button @click="activeComp = 'AnimalsCollection'">Animals</button>
  <button @click="activeComp = 'MyFoods'">Food</button><br>
  <button @click="activeComp = 'CheckenBox'">CheckenBox</button><br>
  <button @click="activeComp = 'RaD'">Radiobox</button><br>
  <button @click="activeComp = 'SL'">select</button><br>
  <button @click="activeComp = 'RD'">read file</button><br>
  <button @click="activeComp = 'RG'">range</button><br>
  </ul>  
 
  </div> 
  
<component :is="activeComp"></component>
    
  
  
</template>



  <script>
  import RG from '../Range.vue'
  import  RD  from "../ReadOnlyfile.vue";
  import SL from '../select .vue'
  import RaD from '../RadioButton.vue'
 import  CheckenBox  from '../checkbox.vue';
 import AnimalsCollection from '../AnimalsCollection.vue'
 import MyFoods from '../MyFoods.vue'
  export default {
    name: 'WebView',
    components:{
      RG,
      RD,
      SL,
      RaD,
      CheckenBox,
      AnimalsCollection ,
      MyFoods
    },
    data () {
      return {
        activeComp: '',
        msg: 'The World Wide Web (WWW), commonly known as the Web, is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs, such as https://example.com/), which may be interlinked by hypertext, and are accessible over the Internet.'
        ,foods: [
        { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: '../img_apple.svg'},
        { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: '../img_pizza.svg'},
        { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: '../img_rice.svg'},
        { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: '../img_fish.svg'},
        { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: '../img_cake.svg'}
      ]
      }
    },
    provide() {
        return {
      foods: this.foods,
    }
  }}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>