import {reactive} from "vue"

export const store = reactive({
    List: [],
    apiUrl: "https://rickandmortyapi.com/api/character",
  });