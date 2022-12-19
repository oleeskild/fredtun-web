<template>
  <div>
    <hero />
    <div style="display: flex; justify-content: center;">
      <navigation />
    </div>
    <events-container />
    <div style="margin: 100px 0; display: flex; justify-content: center;">
      <rent-info-box />
    </div>
    <fredtun-footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Navigation from '~/components/Navigation.vue'
import LastBlogPost from '~/components/LastBlogPost.vue'
import EventsContainer from '~/components/EventsContainer.vue'
import RentInfoBox from '~/components/RentInfoBox.vue'
import FredtunFooter from '~/components/FredtunFooter.vue'

export default {
  name: "Fremside",
  components: {
    Hero,
    Navigation,
    EventsContainer,
    RentInfoBox,
    FredtunFooter,
    LastBlogPost
  },
  layout: 'blank',
  mounted: function () {
    let constrain = 200;
    let mouseOverContainer = document.body;
    let ex1Layer = document.getElementById("christmas");

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;

      return "perspective(500px) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
    };

    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    mouseOverContainer.onmousemove = function (e) {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([ex1Layer]);

      window.requestAnimationFrame(function () {
        transformElement(ex1Layer, position);
      });
    };
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title,
h1 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.wrap {
  min-width: 1024px;
}

@media (max-width: 1080px) {
  .wrap {
    min-width: 80%;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
