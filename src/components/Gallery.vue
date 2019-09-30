<template>
<div>
<div class="images">
    <div @click="selectedImage = image" v-for="(image, index) in images" :key="index" class="image-square" v-lazy:background-image="image"></div>
</div>

<div class="modal" :class="{'is-active': selectedImage}">
  <div @click="selectedImage=''" class="modal-background"></div>
  <div class="modal-content">
    <p class="image">
      <img :src="selectedImage" alt="">
    </p>
  </div>
  <button @click="selectedImage = ''" class="modal-close is-large" aria-label="close"></button>
</div>

</div>
</template>
<script>
export default {
   data(){
       return {
           selectedImage: '',
           images:[
               'https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176654/nekd5ypuajmdtq2se4jr.jpg',
               'https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176655/vwlvj7mxfy7ujtxaiecr.jpg',
               'https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176655/uv8c4qeehmahwwwlmedt.jpg',
               'https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176655/tyoomrkkuvf9x1miebie.jpg',
               'https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176655/pqyd928jub8phbzakm6o.jpg',
               'https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176655/feybr6voi0jhjhethv3g.jpg',
               'https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176655/ublncwibmsc2is1bmuuf.jpg',
               'https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176655/ff8emgayoejueukkzhkm.jpg',
               'https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176655/hp6tpvnu2dljr5xefihg.jpg'
           ]
       }
   } 
}
</script>
<style scoped>
.images{
    display : flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 50px;
    cursor: pointer;
}
.image-square {
    margin-top: 20px;
    max-width: 30%;
    width: 400px;
     background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  height: 400px;
  filter:  none;
}
.image[lazy=loading] {
    background-color: rgba(0,0,0,0.1);
    transition: filter 0.2s ease;
    filter: blur();
 }
</style>