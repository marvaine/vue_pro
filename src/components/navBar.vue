<template>
    <nav id="vue" >
      <div class="menu-item"><router-link v-show="is_active" to="/">Home</router-link></div>
        <div class="menu-item"><router-link v-show="is_active" to="/about">About</router-link></div>
        <div class="menu-item"><router-link v-show="is_active" to="/contact">Contact</router-link></div>
        <Services v-show="is_active" title="Services" /> 
        
        
    </nav>
</template>

<script>
import ServicesView from '@/views/ServicesView';

//import { ref } from 'vue';

let id = 0


export default {
  data() {
    return {
   is_active:true,   
   links : [
  { id: id++,root:"/", text: 'Home' },
  { id: id++,root:"/about" ,text: 'About' },
  { id: id++,root:"/contact" ,text: 'Contact' },
  { id: id++,root:"/Services" ,text: 'Services' }
  
 
]}},
props: {
  },
  name: 'NavBar',
  components: {
  "Services" : ServicesView,
  },
  methods:{},
};
</script>

<style lang="scss" scoped>
nav {
  width: 100vw;
  background-color: #0d0d0e;
  display: flex;
  align-items: center;
  justify-content: center;


.menu-item {
  color: #FFF;
  padding: 25px 40px;
  position: relative;
  text-align: center;
  border-bottom: 5px solid transparent;
  display: flex;
  transition: 0.4s;


 &.active,
 &.hover {
  background-color: #0d0d0e;
  border-bottom-color: #bb3030;
}}
  a {
  color: inherit;
  text-decoration: none;

}
}
</style>