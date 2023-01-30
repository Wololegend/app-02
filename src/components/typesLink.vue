<template>
    <a class="nav-link" :href="'/type/' + type"> {{capitalizeFirstLetter(type)}} </a>
</template>

<script>
export default {
    name: 'typesLink',
    props: ['type'],
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