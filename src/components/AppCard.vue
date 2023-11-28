<script>
export default {
    props: {
        card: Object,
    }

}
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="row row-cols-5 mt-4">
                <div class="col">
                    <div class="card text-center mb-3" style="width: 10rem; height: 23rem;">
                        <img :src="card.card_images[0].image_url" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text fw-bold text-uppercase text-white">{{ card.name }}</p>
                            <p class="card-text fw-light">{{ card.archetype }}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@use "./style/partials/variables" as *;


.card {
  background-color: $orange;
  width: 100%;
}


</style>