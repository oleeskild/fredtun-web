<template>
    <div class="carousel-container">
        <div>
            <ClientOnly>
                <carousel :per-page="1" :mouse-drag="true" :loop="true" :autoplay="true" :autoplay-timeout="5000">
                    <slide v-for="img in images" :key="img.id">
                        <img :src="img.src" :alt="img.alt" />
                    </slide>
                </carousel>
            </ClientOnly>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        Carousel: () =>
            import('vue-carousel')
                .then(m => m.Carousel).catch(),
        Slide: () =>
            import('vue-carousel')
                .then(m => m.Slide).catch()
    },
    data() {
        return {
            images: [
                { id: 1, src: 'path_to_image1.jpg', alt: 'Image 1' },
                { id: 2, src: 'path_to_image2.jpg', alt: 'Image 2' },
                { id: 3, src: 'path_to_image3.jpg', alt: 'Image 3' }
                // Add as many images as you want...
            ]
        }
    }
}
</script>
<style scoped>
.events-container {
    width: 100%;
    background-color: #389583;
    display: flex;
    justify-content: center;
    padding: 50px;
}

.events {
    min-width: 1024px;
}

.event-title {
    text-align: center;
    color: white;
    font-size: 48px;
    font-weight: 700;
    padding: 10px 0;
}

.button {
    width: 100%;
    font-weight: 700;
    margin: 10px 0;
}

.is-link {
    background-color: rgba(5, 56, 106, 0.8);
}

.is-link:hover {
    background-color: rgba(5, 56, 106, 1);
}

@media (max-width: 760px) {
    .button {
        font-size: 20px;
    }

    .event-title {
        font-size: 36px;
    }
}

.carousel {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.carousel-item {
    width: 300px;
    height: 300px;
    margin: 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>