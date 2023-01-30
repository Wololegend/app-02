<template>
  <div class="container">
    <div class="row">
      <h2 class="col-12 col-lg-3">
        {{ capitalizeFirstLetter(this.arrayPokemon.name) }}
      </h2>

      <pokeCard class="col-12 col-lg-3 mb-1" 
      :name="arrayPokemon.name"
      :url="arrayUrls[arrayPokemon.id - 1].url">
      </pokeCard>

      <table class="table col-12 col-lg-6">
        <tbody>
          <tr>
            <th scope="row">Height / Weight:</th>
            <td>{{ this.arrayPokemon.height }} cm / {{ this.arrayPokemon.weight }} g.</td>
          </tr>
          <tr>
            <th scope="row">Attack / Defense:</th>
            <td>{{ this.arrayPokemon.stats[1].base_stat }} pts. / {{ this.arrayPokemon.stats[2].base_stat }} pts.</td>
          </tr>
          <tr>
            <th scope="row">Sp. Attack / Sp. Defense:</th>
            <td colspan="2">{{ this.arrayPokemon.stats[3].base_stat }} pts. / {{ this.arrayPokemon.stats[4].base_stat }} pts.</td>
          </tr>
          <tr>
            <th scope="row">Health Points:</th>
            <td colspan="2">{{ this.arrayPokemon.stats[0].base_stat }} pts.</td>
          </tr>
          <tr>
            <th scope="row">Speed:</th>
            <td colspan="2">{{ this.arrayPokemon.stats[5].base_stat }} pts.</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import pokeCard from '../components/pokeCard.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    pokeCard
  },
  data() {
    return {
      arrayPokemon: [],
      arrayUrls: []
    }
  },
  created() {
    this.getSinglePokemon(this.$route.params.name);
    this.getPokemonUrl();
  },
  methods: {
    getSinglePokemon(v) {
      const name = v
      console.log(name)
      var config = {
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${name}`,
        headers: {}
      };
      axios(config)
        .then((response) => {
          this.arrayPokemon = response.data
          console.log(this.arrayPokemon)
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getPokemonUrl() {
      var config = {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon',
        headers: {}
      };
      axios(config)
        .then((response) => {
          this.arrayUrls = response.data.results
        })
        .catch((e) => {
          console.log(e);
        });
    },
    capitalizeFirstLetter(name) {
      const word = name
      const firstLetter = word.charAt(0).toUpperCase()
      const remainingLetter = word.slice(1)
      name = firstLetter + remainingLetter
      return name
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