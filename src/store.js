import {reactive} from "vue"

export const store = reactive({
    list: [],
    apiUrl: "https://rickandmortyapi.com/api/character",
  });