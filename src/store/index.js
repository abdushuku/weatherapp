import {createStore} from "vuex"
import axios from "axios"
export default createStore({
    state:{
        apiKey:'56c7ef3aeae347b9682ead9b3f1ca375',
        getFullWeather:null,
        icons: null
    },
    getters:{
        getDailyWeather:state => state.getFullWeather.daily.filter((day, i) => i != 0),
        
    },
    mutations:{
        getWeather(state, payload){
            state.getFullWeather = payload
        },
        getIcons(state, payload){
            state.icons = payload 
        }
    },
    actions:{
        async getWeather({commit, state}, city = 'Tashkent'){
            try {
                let queryLatLon = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${state.apiKey}`)
                // console.log(queryLatLon);
                let {lat, lon , name} = queryLatLon.data[0]
                let getWeather = await 
                axios.get(
                    `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,minutley,hourly&appid=${state.apiKey}&lang=ru
                ` )
                let weatherInfo = getWeather.data
                let weatherObj = {...weatherInfo, name:name}
                commit('getWeather', weatherObj)
            } catch (error) {
                console.error(error);
            }
        },
    }
    
})