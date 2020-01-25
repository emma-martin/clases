<template>
    <ul>
        <li :bind="houseData">
        <p class="">{{ `House name: ${houseData.name}`}}</p>
        <p class="">{{ `Mascot: ${houseData.mascot}`}}</p>
        <p class="">{{ `Head: ${houseData.headOfHouse}`}}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'HouseCard',
        props: {
            houseData: {
            type: Object,
            default: ()=>({}),
            // validator(){
            //     return ;
            // },
        }
        }
    }
</script>

<style lang="scss" scoped>

</style>