<template >
    <div :class="{active:isFavorite}">
        <h2>
            {{ foodName }}
            <img :src=url v-show="isFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <button v-on:click.stop="()=>$emit('sender', this.foodName)">Favorite</button>
    </div>
</template>

<script>
export default {
    name:'FoodItem',
    props: ['foodName','foodDesc','isFavorite'],
    emits: ['toggle-favorite'],
    data() {
        return {
           // foodIsFavorite: this.isFavorite
           url:"/img_quality.svg",
        }
    },
    methods: {
        //toggleFavorite() {
          //  this.foodIsFavorite = !this.foodIsFavorite;
        //}
     //   toggleFavorite() {
     // this.$emit('sender', this.foodName);}
    }
};
</script>

<style>
    img {
        height: 1.5em;
        float: right;
    }
    .active{
    background-color:blue !important;
}
</style>                      