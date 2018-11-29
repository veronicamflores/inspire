<template>
  <div class="home container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-xs-12 col-md-4"><h2>ToDo</h2></div>
        <div class="col-xs-12 col-md-4"><h2>Songs</h2></div>
        <div class="col-xs-12 col-md-4"><Weather></Weather></div>
        <div class="col-xs-12 col-md-8">
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <button class="btn">Sign In/Log In</button>
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
              <h3>quote quote</h3>
             <p>quote author</p>
             <button class="btn">New Quote</button>
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
  // data() {
  //   return {
  //     todoView: false,
  //     weatherView: false,
  //     musicView: false
  //   };
  // },
  computed: {
    quote() {
      this.$store.state.quote;
    }
  },
  created() {
    this.$store.dispatch("getWeather");
    this.$store.dispatch("getQuote");
  },
  components: {
    Todo,
    Weather,
    Music
  }
};
</script>
