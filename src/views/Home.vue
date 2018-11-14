<template>
  <div class="home container-fluid">
      <div class="row">
        <div class="col-md-4" v-if="todoView">
          <Todo/>
        </div>
        <div class="col-md-4" v-if="weatherView">
          <Weather/>
        </div>
        <div class="col-md-4" v-if="musicView">
          <Music/>
        </div>
        <div class="col-md-12 d-flex justify-content-center">
          <div class="row">
            <div class="col-xs-12">
              <p>change user</p>
            </div>
            <div class="col-xs-12">
              <h1>02:02</h1>
            </div>
            <div class="col-xs-12">
              <p>Weather | Music | Todo</p>
            </div>
            <div class="col-xs-12">
              <h2>Hello <strong>Stranger</strong></h2>
            </div>
            <div class="col-xs-12">
              <p>Quote</p>
            </div>
          </div>
        </div>
      </div>  
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import Weather from "@/components/Weather.vue";
import Music from "@/components/Music.vue";

export default {
  name: "home",
  data() {
    return {
      todoView: false,
      weatherView: false,
      musicView: false
    };
  },
  components: {
    Todo,
    Weather,
    Music
  }
};
</script>
