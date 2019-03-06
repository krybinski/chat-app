<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row mt-4 mb-4">
        <div class="col-md-6 offset-md-3">
          <Chat />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from './components/Chat.vue'

export default {
  name: 'app',
  components: {
    Chat
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
