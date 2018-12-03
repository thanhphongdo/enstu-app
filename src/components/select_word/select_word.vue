<template>
    <Carousel>
        <div class="swiper-slide" v-for="(item, index) in words" :key="index">
            <WordComponent :word="item"></WordComponent>
        </div>
    </Carousel>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss" src="./select_word.scss"></style>
