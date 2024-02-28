<template>
  <header class="header">
      <nav class="header__nav">
          <a href="#" class="logo"><img src="../assets/images/logo.svg" alt="">vue weather</a>
          <div class="header__search">
              <img src="@/assets/images/water.png" alt="">
              <input type="text" class="header__search-input" v-model="query" @keydown.enter="sendData" placeholder="Выбрать город"> 
          </div>
      </nav>
  </header>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return{
            query:null
        }
    },
    methods:{
        ...mapActions(['getWeather']),
        sendData(){
            this.getWeather(this.query)
            this.query = null
        }
    },
    // mounted(){
    //     this.getWeather("Tashkent")
    // }
}
</script>

<style>

</style>