<script>
import {store} from "../store";

export default {
  data(){
    return{
        store,
    }
  } 

}
</script>



<template>

<select class="form-select form-select-lg mb-3" v-model="store.searchArchetype" @change="$emit(`performSearch`)">
  
  <option value="Alien"> Alien</option>
  <option value="Ally of Justice">Ally of Justice</option>
  <option value="Ancient Gear">Ancient Gear</option>
</select>



    <!-- <div class="d-flex w-50 p-4 ">
        <input type="search" class="form-control" placeholder="cerca archetipo" v-model.trim="store.searchArchetype"/>
        <button @click="$emit(`performSearch`)" type="button" class="btn btn-danger">Cerca</button>

    </div>  -->
</template>



<style scoped lang="scss">

</style>