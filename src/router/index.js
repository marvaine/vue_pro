import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactView from '../views/ContactView.vue'
import ServicesView from '../views/ServicesView.vue'

import WebView from '../components/Dropdown_folder/Web'
import DesignView from '@/components/Dropdown_folder/Design'
import VideosView from '@/components/Dropdown_folder/Videos'
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView
    },
    {
      path: '/services/web',
      name: 'Web',
      component: WebView
    },
    {
      path: '/services/design',
      name: "design",
      component: DesignView
    },
    {
      path: '/services/videos',
      name: 'Videos',
      component: VideosView
    }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
