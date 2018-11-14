<template>
  <div class="home container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-xs-12 col-md-4" v-if="todoView"></div>
        <div class="col-xs-12 col-md-4" v-if="weatherView"></div>
        <div class="col-xs-12 col-md-4" v-if="musicView"></div>
        <div class="col-xs-12 col-md-8">
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <p>change user</p>
            </div>
            <div class="col-xs-12 col-md-12">
              <h1>02:02</h1>
            </div>
            <div class="col-xs-12 col-md-12">
              <p><i class="fas fa-sun"></i> | <i class="fas fa-music"></i> | <i class="fas fa-list-ul"></i></p>
            </div>
            <div class="col-xs-12 col-md-12">
              <h2>Hello <strong>Stranger</strong></h2>
            </div>
            <div class="col-xs-12 col-md-12">
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
