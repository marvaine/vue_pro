<template>
     <h3>Slots in Vue</h3>
  <p>We create card-like div boxes from the foods array.</p>
 
    <h1>Food!</h1>
    <p>I like most types of food.</p>
    <button @click="fetchData">Fetch Data</button>
    <div id="wrapper" >
    <slot-comp v-for="x in foods " :key="x" v-show="!is_fetch">
      <img :src="x.url">
      <h4>{{x.name}}</h4>
      <p>{{x.desc}}</p>
    </slot-comp>
    <slot-comp style=" background-color: blue;" v-if="randomMammal && is_fetch">
        <img :src="randomMammal.url">
      <h4>{{randomMammal.name}}</h4>
      <p>{{randomMammal.desc}}</p>
    </slot-comp>
  </div>
  <MyMainTwo>
    
    <template #Slotcomp>
<h3>MyMainTwo</h3>

</template>
</MyMainTwo >
  <footer>
    <slot-comp>
  <h3>Footer</h3>
    </slot-comp>
  </footer>
</template>                  

<script>
  import MyMain from '../components/MyMain.vue';
  import MyMainTwo from '../components/MyMain Two.vue';
 

  export default {
    name: 'MyFoods',
    components:{
      "slot-comp":MyMain,
      MyMainTwo ,
     
    },
    data() {
    return {
      randomMammal: null,
      is_fetch:false,
      is_not_fetch:!this.is_fetch,
    };
    },
    inject: ['foods'],
    methods: {
    async fetchData() {
      const response = await fetch("../foods.json");
      const data = await response.json();
      const randIndex = Math.floor(Math.random()*data.results.foods.length);
      this.randomMammal = data.results.foods[randIndex];
      this.is_fetch=!this.is_fetch;
     
    },
    }}
</script>
<style scoped>

h1, h2 {
  font-weight: normal;
  margin: 20px;
}
.list {
  align-items: left;
}

li {
    font-size: 22px;
    margin-left: 10px;
    list-style: circle;
 }
 #wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  footer > div {
    background-color: lightpink !important;
  }
  #wrapper img {
    display: block; 
    margin: 20% auto 0; 
    width: 100%;
    height: 50px;
  }
  h3, h4 {
    text-align: center;
  }
  footer >div:hover {
  box-shadow: none !important;
  }
</style>