<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppList from "./components/AppList.vue";
import { store } from "./store.js";

 export default {
  data() {
    return {
      store
    };
  },
  created(){
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
    .then((resp) => {this.store.list = resp.data.data;

    })
  },
  


  components :{
    AppHeader,
    AppList,
  }
  
 }

</script>

<template>

  <AppHeader />
  <AppList />

</template>

<style lang="scss">
@use "./components/style/general.scss";
</style>
