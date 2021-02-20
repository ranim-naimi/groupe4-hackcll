<template>
    <div class="parteners">
        <div class="row">
            <div class="col-6"></div>
            <p id="title"><i>Nos Parteners</i></p>
        </div>
        <div class="row">
            <div v-for="(imgPart, index) in imgParteners" :key="index">
                <div class="col-3">
                    <img :src="imgPart" id="img">
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
  name: 'parteners',
  data: () => {
    return {
      imgParteners: [
      'https://i.ibb.co/fCxYPWq/vermeg.png',
      'https://i.ibb.co/0czRXNV/ooredoo.png',
      'https://i.ibb.co/fCxYPWq/vermeg.png',
      'https://i.ibb.co/0czRXNV/ooredoo.png'
    ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#img
{
    width: 200px;
    height: 70px;
    margin-left: 50px;
    
}
#title
{
    color: darksalmon;
    font-size: 20px;
}
</style>