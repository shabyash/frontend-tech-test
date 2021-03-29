<template>
  <img  calss="samknows-logo" alt="Vue logo" src="./assets/samknows1.png" />
  <CurrencyConvertor />
</template>

<script>
import CurrencyConvertor from './components/CurrencyConvertor.vue';
export default {
components: {
     CurrencyConvertor
  },
  data() {
    return {
    }
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.samknows-logo {
  height: 40px;
}
</style>