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

let apiPhoto = Axios.create({
  baseURL: "",
  timeout: 3000
})
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//lit-hamlet-73267.herokuapp.com/' : '//localhost:3000/';

let auth = Axios.create({
  baseURL: baseUrl + "auth/",
  timeout: 3000,
  withCredentials: true
});

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});
export default new Vuex.Store({
  state: {
    user: {},
    weather: {},
    todo: [],
    music: {},
    quote: {},
    photo: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setPhoto(state, photo) {
      state.photo = photo
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
    register({ commit }, newUser) {
      auth.post("register", newUser).then(res => {
        commit("setUser", res.data);
      });
    },
    authenticate({ commit }) {
      auth.get("authenticate").then(res => {
        commit("setUser", res.data);
      });
    },
    login({ commit }, creds) {
      auth.post("login", creds).then(res => {
        commit("setUser", res.data);
      });
    },
    logout({ commit }) {
      auth.delete("logout").then(() => {
        commit("clearUser");
      });
    },

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
