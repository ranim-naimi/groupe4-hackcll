<template>
    <div class="bg-light">
    <div class="HomeCLL">
        <div>
        <NavCLL />
      </div>
      <br>
      <div class="container">
          <div class="row">
            <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        >
        <div id="car">
            <div v-for="(imgLink, index) in imgCarousel" :key="index">
                <b-carousel-slide :img-src="imgLink" id="img"></b-carousel-slide>
            </div>
        </div>
        </b-carousel>
          </div>
          
      </div>
      <br>
    </div>
    
    </div>
</template>
<script>
import NavCLL from './components/NavCLL.vue'
export default {
  name: 'HomeCLL',
  components: {
     NavCLL
   },
  data: () => {
    return {
      imgCarousel: [
      'https://i.ibb.co/x81zy3D/photo.jpg',
      'https://i.ibb.co/zGfyt8B/photo2.jpg',
      'https://i.ibb.co/QJNK89V/photo3.jpg'
    ]
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carousel-1
{
    width: 1124px;
    height: 500px;
}
#img
{
    width: 1124px;
    height: 500px;
}
</style>