<template>
    <div>
        <img src="../assets/poster.png" alt="wizard">
        <img :src="card.pic" alt="wizard">
        <p>{{card.name}}</p>
        <p>{{card.price}}</p>
        <div>
            <select v-model="card.isFound" name="card" id="card">
                <option value=false>
                    Missing
                </option>
                <option value=true>
                    Found
                </option>
            </select>
            <button @click="this.$emit('delete-wizard', card.id)">
                Delete Wizard
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WizardCard',
        props: {
            card: {
            type: Object,
            default: ()=>({})
             },
        },
        data() {
            return {
            }
        },
    }
</script>
<style lang="scss" scoped>

</style>

composition API en vue3 reemplazaran a los mixinsm
mixin es un componente que permite compartir funcionalidad entre componentes
mixin es logica global de componentes
usar slot aquimaybe
