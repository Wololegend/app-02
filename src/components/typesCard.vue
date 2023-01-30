<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="item in types" :key="item"> {{capitalizeFirstLetter(item.type.name)}} </li>
    </ul>
</template>

<script>
// import { genPropsAccessExp } from '@vue/shared';
import axios from 'axios'
export default {
    name: 'typesCard',
    props: ['url'],
    data () {
       return {
            types: []
        }
    },
    created(){
      this.getPokemonTypes(this.url);
    },
    methods: {
        getPokemonTypes(url) {
          var config = {
              method: 'get',
              url: url,
              headers: { }
            };
            axios(config)
            .then((response) => {
             this.types = response.data.types
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
        },
        typeBgColor(type) {
            switch (type) {
                case "grass":
                    return "bg-success"
            }
        }
    }
}
</script>