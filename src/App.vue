<template>
  <div class="container-fluid" />
  <h1>
    Mars photos
  </h1>
  <search-component />
  <div class="row">
    <results-component />
  </div>
</template>

<script>
import { computed } from 'vue'
import SearchComponent from './components/SearchComponent.vue'
import { AppState } from './Appstate'
export default {
  name: 'App',
  setup () {
    return {
      appstate: computed(() => Appstate)
    }
  },
  components: {
    SearchComponent
  }

}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
