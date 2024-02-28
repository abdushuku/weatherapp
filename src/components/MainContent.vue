<template>
  <div class="main_content">
    <div class="main_content-left">
      <p class="main_content-degree">
        {{ Math.round(getFullWeather.current.temp) }}°
      </p>
      <p class="main_content-today">Сегодня</p>
      <p class="main_content-time">Время: {{ getTime }}</p>
      <p class="main_content-city">Город: {{ getFullWeather.name }}</p>
      <div class="main_content-img">
        <img :src="getWeatherIconUrl(this.getFullWeather.current.weather[0].icon)" alt="Weather Icon">
      </div>
    </div>
    <div class="main_content-right">
      <img src="../assets/images/cloud-bg.png" alt="" class="main_content-bg" />
      <div class="main_content-item">
        <div class="main_content-icon">
          <img src="../assets/images/temp.svg" alt="" />
        </div>
        <span>Температура</span>
        <span class="main_content-temp">{{Math.round(getFullWeather.current.temp)}}° - ощущается как {{Math.round(getFullWeather.current.feels_like)}}°</span>
      </div>
      <div class="main_content-item">
        <div class="main_content-icon">
          <img src="../assets/images/pressure.svg" alt="" />
        </div>
        <span>Давление</span>
        <span class="main_content-temp"
          >{{getFullWeather.current.pressure}} мм ртутного столба - нормальное</span
        >
      </div>
      <div class="main_content-item">
        <div class="main_content-icon">
          <img src="../assets/images/asat.svg" alt="" />
        </div>
        <span>Осадки</span>
        <span class="main_content-temp">{{getFullWeather.current.weather[0].main}}</span>
      </div>
      <div class="main_content-item">
        <div class="main_content-icon">
          <img src="../assets/images/wind.svg" alt="" />
        </div>
        <span>Ветер</span>
        <span class="main_content-temp">{{Math.round(getFullWeather.current.wind_speed)}} м/с {{getCompassDirection(this.getFullWeather.current.wind_deg)}} - легкий ветер</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapAction, mapGetters } from "vuex";
export default {
  computed: {
    getDescr(){
        return this.getFullWeather.current.weather[0].main
    },
    
    ...mapState(["getFullWeather"]),
    getTime() {
      return new Date().toLocaleString("en-US", {
        timeZone: this.getFullWeather.timezone,
        timeStyle: "short",
        hourCycle: "h24",
      });
    },
  },
  methods:{
    getWeatherIconUrl(iconCode){
      return `http://openweathermap.org/img/wn/${iconCode}.png`;
    },
    getCompassDirection(degree){
      let direction;
        switch (true) {
            case (degree >= 337 || degree < 22):
                direction = "Север";
                break;
            case (degree >= 22.5 && degree < 67.5):
                direction = "Северо-восток ";
                break;
            case (degree >= 67.5 && degree < 112.5):
                direction = "Восток ";
                break;
            case (degree >= 112.5 && degree < 157.5):
                direction = "Юго-восток";
                break;
            case (degree >= 157.5 && degree < 202.5):
                direction = "Юго";
                break;
            case (degree >= 202.5 && degree < 247.5):
                direction = "Юго-запад";
                break;
            case (degree >= 247.5 && degree < 292.5):
                direction = "Запад";
                break;
            case (degree >= 292.5 && degree < 337.5):
                direction = "Северо-запад";
                break;
        }
        return direction;
    },
  }
};
</script> 

<style>
</style>