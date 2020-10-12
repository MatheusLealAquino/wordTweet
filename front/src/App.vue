<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <FindWord v-on:found="afterFoundWord" v-if="showFind && !showFound" />
  <FoundWord v-if="showFound && !showFind" :word="word" :username="username" :total="total" />
</template>

<script>
import FindWord from './components/FindWord.vue'
import FoundWord from './components/FoundWord.vue'

export default {
  name: 'App',
  components: {
    FindWord,
    FoundWord
  },
  data: () => ({
    word: null,
    username: null,
    total: 0,
    showFind: true,
    showFound: false
  }),
  methods: {
    afterFoundWord ({ word, username, total }) {
      this.showFind = false;
      this.showFound = true;
      this.word = word;
      this.username = username;
      this.total = total;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
