<template>
    <div class="CreerCompte">
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
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <Help />
                </div>
                <div class="col-3"></div>
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
import Help from './components/Help.vue'
window.$ = require('jquery')
window.JQuery = require('jquery')
export default {
  name: 'CreerCompte',
  components: {
    BarNavigation,
    BarRecherche,
    BeforeFooter,
    Menu,
    MenuHorizantale,
    Help
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>