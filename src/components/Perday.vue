<template>
  <div class="main_week-day">
    <h3 class="main_week-title">{{ getWeek }}</h3>
    <p class="main_week-date">{{ getday }} {{ getMonth }}</p>
    <div class="main_week-img">
        <img :src="getWeatherIconUrl(this.day.weather[0].icon)" alt="Weather Icon">
      <!-- <img src="@/assets/images/sun.svg" alt="" v-if="getDescr == 'Clear'" />
      <img
        src="@/assets/images/mainly_cloudy.svg"
        alt=""
        v-else-if="getDescr == 'Clouds'"
      />
      <img
        src="@/assets/images/rain.svg"
        alt=""
        v-else-if="getDescr == 'Rain'"
      />
      <img
        src="@/assets/images/smollrain.svg"
        alt=""
        v-else-if="getDescr == 'Drizzle'"
      /> -->
    </div>
    <p class="main_week-tempDay">{{ Math.round(day.temp.day) }}°</p>
    <p class="main_week-tempNight">{{ Math.round(day.temp.night) }}°</p>
    <p class="main_week-descr">{{ day.weather[0].description }}</p>
  </div>
  {{ icons }}
</template>

<script>
import { timeStamp } from "../timeStamp";
import {mapState , mapActions} from "vuex"
export default {
  props: {
    day: Object,
    index: Number,
  },
  computed: {
    getWeek() {
      return timeStamp(this.day.dt, "weekday", this.index);
    },
    getday() {
      return timeStamp(this.day.dt, "day");
    },
    getMonth() {
      return timeStamp(this.day.dt, "month");
    },
    getDescr() {
      return this.day.weather[0].main;
    },
    ...mapState(['icons']),
    ...mapActions(['getIcons'])
  },
  methods:{
    getWeatherIconUrl(iconCode){
      return `http://openweathermap.org/img/wn/${iconCode}.png`;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>