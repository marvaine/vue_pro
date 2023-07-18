import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app").directive("maxsize",(el,order)=>{
    el.style.fontSize =order.value +"px";
}).directive("color",(el,order)=>{
    el.style.color = order.value ;
});
