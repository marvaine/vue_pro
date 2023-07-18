<template >
  <div id="app">
      <NavBar/>
          <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/navBar.vue";
export default {
  name: "App",
  props: {},
  components: {
    NavBar,
  },
};
</script>
