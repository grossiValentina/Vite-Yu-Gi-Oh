<script>
export default {
    props: {
        card: Object,
    }

}
</script>

<template>
    <div class="container ">
        <div class="row">
            <div class="col-3">
                <div class="card" style="width: 18rem;">
                    <img :src="card.card_images[0].image_url"  class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">{{ card.archetype }}</p>
                        <p class="card-text">{{ card.name }}</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@use "./style/partials/variables" as *;
</style>