<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
    data() {
        return {
            store,
        };
    },
    components: { AppCard },
};


</script>

<template>
    
    <div class="container">
        <div class="row row-cols-5">
            <div class="col align-items-stretch" v-for="card in store.list" :key="card.id">
                <AppCard :card="card" />
            </div>
        </div>
    </div>
    
    
   
</template>

<style scoped lang="scss">
.container{
    background-color: white;
    width: 70%;
}

</style>