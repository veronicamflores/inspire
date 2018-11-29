import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex)

let apiWeather = Axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35',
  timeout: 3000
});
let apiQuote = Axios.create({
  baseURL: 'http://quotesondesign.com/api/3.0/api-3.0.json',
  timeout: 3000
});

export default new Vuex.Store({
  state: {
    user: {},
    weather: {},
    todo: [],
    music: {},
    quote: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setTodo(state, todo) {
      state.todo = todo
    },
    setMusic(state, music) {
      state.music = music
    },
    setQuote(state, quote) {
      state.quote = quote
    },
    setWeather(state, weather) {
      state.weather = weather
    }
  },
  actions: {
    //User
    //Quote
    getQuote({ commit }) {
      apiQuote.get()
        .then(res => {
          commit('setQuote', res.data)
        })
    },
    //Weather
    getWeather({ commit }) {
      apiWeather.get("")
        .then(res => {
          commit('setWeather', res.data)
        })
    }
    //Todo
    //Music
  }
})
