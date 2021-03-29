<template>
        <select v-model="selcountry" @change="selectChange(selcountry)" class="select-country">
            <option :key="contr.id"  v-for="contr in countries"> {{contr}} </option>
        </select>
</template>

<script>

export default {
    name: 'CurrencySelection',
    props: {
        countries: Array,
        base: String,
        target: String
    },
    methods: {
        selectChange(selcountry) {
            console.log('selcountry' + selcountry)
            this.$emit('select-changed', selcountry)
        }
    }
}

</script>


<style>

</style>