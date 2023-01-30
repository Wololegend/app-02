<template>
  <routerLink class="text-reset" :to="'/pokemon/' + name">
    <div class="card">
      <imgCard :url="url"></imgCard>
      <div class="card-body">
        <h5 class="card-title"> {{ capitalizeFirstLetter(name) }} </h5>
        <typesCard :url="url"></typesCard>
      </div>
    </div>
  </routerLink>
</template>

<script>
import imgCard from './imgCard.vue'
import typesCard from './typesCard.vue'
export default {
  name: 'pokeCard',
  props: ['url', 'name'],
  components: {
    imgCard,
    typesCard
  },
  methods: {
    capitalizeFirstLetter(name) {
      const word = name
      const firstLetter = word.charAt(0).toUpperCase()
      const remainingLetter = word.slice(1)
      name = firstLetter + remainingLetter
      return name
    }
  },
}
</script>

<style scoped>
h5:hover {
  text-decoration: underline;
  text-decoration-color: rgb(57, 94, 169);
  color: rgb(255, 203, 5);
}
</style>