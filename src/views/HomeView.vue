<template >
  <div class="home-route" v-on:mousemove="updatePos">
   <h1>{{ home_msg }}</h1>

   <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </div>
  <p>{{ xDiff-oldVal }}</p> 
<p>{{ xDiff }}</p> 
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      home_msg: 'This is a home route!',
      name :'marwane',
      xPos: 0,
      xDiff: 0,
      oldVal:'',
    }
  },
  watch: {
    xPos(newVal,oldVal){
      this.xDiff = newVal;
      this.oldVal=oldVal
    } },
    methods: {
    updatePos(evt) {
      this.xPos = evt.offsetX
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.home-route {
  padding: 20px;
  background-color: rgb(24, 180, 180);
}

p {
  padding: 10px;
}
</style>