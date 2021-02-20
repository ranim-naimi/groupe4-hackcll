<template>
    <div class="carousel">
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
</template>
    
<script>
export default {
  name: 'carousel',
  data: () => {
    return {
      imgCarousel: [
      'https://i.ibb.co/2tgq5GJ/car4.gif',
      'https://i.ibb.co/4dkGczh/car5.png',
      'https://i.ibb.co/GMjxNKZ/car3.jpg',
      'https://i.ibb.co/Kj86q9t/car2.jpg'
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
    height: 400px;
}
#img
{
    width: 1124px;
    height: 400px;
}
</style>