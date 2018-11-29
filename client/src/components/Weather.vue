<template>
  <div class="weather">
    <h1>{{temp}}</h1>
  </div>
</template>

<script>
export default {
  name: "weather",
  computed: {
    weather() {
      return this.$store.state.weather;
    },
    temp() {
      let temperature = Math.floor(
        (9 / 5) * (this.weather.main.temp - 273) + 32
      );
      return temperature;
    }
  }
};
</script>
