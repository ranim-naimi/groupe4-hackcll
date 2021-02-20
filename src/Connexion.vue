<template>
    <div class="Conexion">
      <div class="bg-light">
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
          <div class="row">
              <div class="col-5">
              <CompteConnexion />  
              </div>
              <div class="col-2">
                <span id="vertical-line"></span>
              </div>
              <div class="col-5">
              <CompteConnexionCreer />  
              </div>
          </div>
        </div>
      </div> 
      <BeforeFooter />
    </div>   
</template>

<script>
import BarNavigation from './components/BarNavigation.vue'
import BarRecherche from './components/BarRecherche.vue'
import BeforeFooter from './components/BeforeFooter.vue'
import Menu from './components/Menu.vue'
import MenuHorizantale from './components/MenuHorizantale.vue'
import CompteConnexion from './components/CompteConnexion.vue'
import CompteConnexionCreer from './components/CompteConnexionCreer.vue'
window.$ = require('jquery')
window.JQuery = require('jquery')
export default {
  name: 'Connexion',
  components: {
    BarNavigation,
    BarRecherche,
    BeforeFooter,
    CompteConnexion,
    Menu,
    MenuHorizantale,
    CompteConnexionCreer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#titre
{
  color: darksalmon;
  font-size: 30px;
  font-style: italic;
  margin-top: 25px;
}
#vertical-line{
        border-left: 1px solid rgb(204, 197, 197);
        display: inline-block;
        height: 370px;
        margin: 35px 20px;
        
      }
</style>