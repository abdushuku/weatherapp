<template>
  <div class="main_week">
    <div class="main_week-btns">
      <button class="main_week-btn">На неделю</button>
      <button class="main_week-btn">Отменить</button>
    </div>
    <div class="main_week-days">
        <PerDay v-for="(day, index) in getDailyWeather" :key="index" :day="day" :index="index"/>
    </div>
  </div>
</template>

<script>
import PerDay from "../components/Perday.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    PerDay,
  },
  computed:{
    ...mapGetters(['getDailyWeather'])
  }
};
</script>

<style>
</style>