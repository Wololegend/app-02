<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 mb-4">
        <img alt="Pokemon logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" />
      </div>

      <nav class="nav nav-tabs justify-content-center mb-4 col-lg-12">
        <li class="nav-item">
          <a class="nav-link" href="/"> Pokémon </a>
        </li>

        <li class="nav-item"
        v-for="type in arrayTypes"
        :key="type">
          <RouterLink class="nav-link" 
          :to="'/type/' + type.name">
            {{ capitalizeFirstLetter(type.name) }}
          </RouterLink>
        </li>
      </nav>
    </div>
  </div>
  <router-view />
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      arrayTypes: []
    }
  },
  created() {
    this.getTypes();
  },
  methods: {
    capitalizeFirstLetter(name) {
      const word = name
      const firstLetter = word.charAt(0).toUpperCase()
      const remainingLetter = word.slice(1)
      name = firstLetter + remainingLetter
      return name
    },
    getTypes() {
      var config = {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/type/',
        headers: {}
      };
      axios(config)
        .then((response) => {
          this.arrayTypes = response.data.results
        })
        .catch((e) => {
          console.log(e);
        });
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
