<template>
<!-- La página está dividida en una serie de rows y cols. No podemos controlar cuántos hay,
sólo cuántos rows/cols mide cada uno de nuestros elementos. La img de Pokemon mide 12 cols,
mientras que la PokeCard (cada una) sólo 3. -->
  <div class="container">
    <div class="row">
        <h2> {{ this.$route.params.type }}</h2>


    </div>
</div>
</template>

<script>
// import pokeCard from '../components/pokeCard.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    // pokeCard
  },
  data() {
    return {
      arrayDatos: []
    }
  },
  created() {
    this.getPokemon();
  },
  methods: {
    getPokemon(v) {
      const type = v
      console.log(type)
      
      var config = {
          method: 'get',
          url: `https://pokeapi.co/api/v2/type/${type}/pokemon`,
          headers: { }
        };
        axios(config)
        .then((response) => {
          this.arrayDatos = response.data.results
          console.log(this.arrayDatos)
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
