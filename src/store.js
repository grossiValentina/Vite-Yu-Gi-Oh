import {reactive} from "vue"

export const store = reactive({
    list: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    searchArchetype: "",

  });