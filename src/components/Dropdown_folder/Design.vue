<template>
  <div>
   <h1>{{ msg }}</h1>

    <div class="e-card">
      <br>
        <div class="e-card-title">Designing made real</div>
        <br>
      </div>
      <div class="e-card-content">A designer is a person who plans the look or workings of something prior to it being made, by preparing drawings or plans. In practice, anyone who creates tangible or intangible objects, products, processes, laws, games, graphics, services, and experiences is referred to as a designer.</div>
    </div>
    <h1>Food</h1>
  <p>Each food item created with v-for is now identified uniquely with the key attribute, and the problem is fixed. The favorite image now stays with the 'Fish' element, and is not transferred to 'Cake'.</p>
  <button @click="removeItem">Remove Item</button>
  <div id="wrapper" >
    <FoodItem 
      v-for="x in foods"
      :key="x.name"
      :food-name="x.name"
      :food-desc="x.desc"
      :is-favorite="x.favorite"
      @sender="receiveEmit"/>
  </div> 
  </template>
  
  <script>


import FoodItem from '@/components/Fooditem.vue';
  export default {
    name: 'DesignView',
    components:{
      FoodItem
       },
    data () {
      return {
         class:"", 
        msg: 'Designer images',
        foods: [
        { name: 'Apples', desc: 'Apples are a type of fruit that grow on trees.', favorite: true},
        { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', favorite: false},
        { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', favorite: false},
        { name: 'Fish', desc: 'Fish is an animal that lives in water.', favorite: true},
        { name: 'Cake', desc: 'Cake is something sweet that tastes good.', favorite: false}
      ]
      }
    },
    methods: {
    removeItem() {
      this.foods.splice(1,1);
    },
 
    receiveEmit(foodName) {
      let foundFood = this.foods.find(
        food => food.name === foodName); 
      foundFood.favorite = !foundFood.favorite;
      
//alert(foodName)
}
  }
  }
  </script>
  
  <style scoped>
    #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }

.e-card {
    width: 300px;
    margin: auto;
}
.active{
    background-color:blue;
}
  </style>