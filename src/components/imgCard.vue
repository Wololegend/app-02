<template>
    <img :src="img" class="card-img-top"/>
</template>

<script>
import axios from 'axios'
export default {
    name: 'imgCard',
    props: ['url'],
    data () {
       return {
            img: ""
        }
    },
    created(){
      this.getPokemonImage(this.url);
    },
    methods: {
        getPokemonImage(url) {
          var config = {
              method: 'get',
              url: url,
              headers: { }
            };
            axios(config)
            .then((response) => {
             this.img = response.data.sprites.front_default
            })
            .catch((e) => {
              console.log(e);
            });
        }
    }
}
</script>