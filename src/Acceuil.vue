<template>
  <div id="acceuil">
    <div  class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <BarNavigation />
          </div>
        </div>
        <div class="row">
          <BarRecherche />
       </div>
       <div class="row">
          <div class="col-1">
            <Menu />
          </div>
         <div class="col-11">
            <MenuHorizantale />
         </div>
       </div> 
       <!--<br>
       <div class="row">
          <Position title="Informatique"/>
       </div>-->
       <div class="row">
          <Carousel />
       </div>
       <br>
       <div class="row">
          <Articles />
       </div>
       <br><br>
      <div class="row">
          <Partners />
       </div>
       <br><br><br>
      </div>

      
       <br><br><br>
    </div>
    <BeforeFooter />
  </div>
</template>

<script>
import BarNavigation from './components/BarNavigation.vue'
import BarRecherche from './components/BarRecherche.vue'
//import Position from './components/Position.vue'
import Menu from './components/Menu.vue'
import MenuHorizantale from './components/MenuHorizantale.vue'
import BeforeFooter from './components/BeforeFooter.vue'
import Carousel from './components/Carousel.vue'
import Partners from './components/Partners.vue'
import Articles from './components/Articles.vue'
window.$ = require('jquery')
window.JQuery = require('jquery')

export default {
  name: 'acceuil',
  components: {
    BarNavigation,
    BarRecherche,
    //Position,
    Menu,
    MenuHorizantale,
    BeforeFooter,
    Carousel,
    Partners,
    Articles
  }
}
</script>

<style>
#acceuil {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>