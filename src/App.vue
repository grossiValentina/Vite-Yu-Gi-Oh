<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";
import AppList from "./components/AppList.vue";
import { store } from "./store.js";

 export default {
  data() {
    return {
      store
    };
  },
  


  components :{
    AppHeader,
    AppCard,
    AppList
  }
  
 }

</script>

<template>

  <AppHeader />
  <AppCard />
  <AppList />

</template>

<style lang="scss">
@use "./components/style/general.scss";
</style>
