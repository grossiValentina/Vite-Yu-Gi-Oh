<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import AppList from "./components/AppList.vue";
import { store } from "./store.js";

 export default {
  data() {
    return {
      store
    };
  },
  created(){
    axios.get(this.store.apiUrl, {
      params: {
        num: 20,
        offset: 0,
      }}).then((resp) => {
        this.store.list = resp.data.data;
        console.log(this.store.list)
    })
  },
  methods: {
    handleSearch(){
      console.log("cerca")
      axios.get(this.store.apiUrl, {
        params: {
          archetype: this.store.searchArchetype,
          num: 20,
          offset: 0,
        }}).then((resp) => { this.store.list = resp.data.data;
      console.log(this.store.list) })
      }
     

    },

  components :{
    AppHeader,
    AppSearch,
    AppList,
}
  
 }

</script>

<template>

  <AppHeader />
  <AppSearch @performSearch="handleSearch"/>
  <AppList />

</template>

<style lang="scss">
@use "./components/style/general.scss";
</style>
