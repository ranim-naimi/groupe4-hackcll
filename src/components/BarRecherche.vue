<template>
  <div class="barrech">
    <div class="row">
      <div class="col-2">
        <img id="logo" title="MRS.BAY" href="#" src="./../assets/logo.jpeg">
      </div> 
      <div class="col-4">
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
              <input id="search" class="form-control mr-sm-2 bg-light" type="text" placeholder="Rechercher dans MRS.BAY" aria-label="Search"> 
              <button type="submit" id="submit_search" class="bg_light">
              <svg  width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
            </button>   
         </form>
        </nav>
      </div>
      <div class="col-1">
        <span id="qte" class="badge badge-light">{{ counter }}</span>
          <button type="submit" id="submit_cart" title="voir mon panier">
              <svg  width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg>
          </button>
      </div> 
      <div class="col-2.5">
        <button href="#" id="numail" title="modes et frais de livraison">
          <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-truck" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
        </button>
        <strong><a id="lien" href="#"> Ventes en Ligne</a></strong><br><div id="num">55141186</div>
      </div> 
      <div class="col-2.5">
        <button href="#" id="numail">
          <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
          </svg>
        </button>
        <strong><a id="lien" href="#"> Services Entreprises</a></strong><br><div id="num">devis@mrsbay.com</div>
      </div> 
    </div>
  </div>
</template>


<script>
export default {
  name: 'barrech',
  data: () => {
    return {
      counter: 0   
    }
  },
  mounted() {
    if (localStorage.counter) {
      this.counter = localStorage.counter;
    }
  },
  watch:{
    counter(newCounter) {
      localStorage.counter = newCounter;
    }
  },
}

/*local storage:  https://fr.vuejs.org/v2/cookbook/client-side-storage.html  counter: https://fr.vuejs.org/v2/guide/components.html*/ 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo
{
  width: 140px;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 5px;
}
#search
{
   width: 380px;
   margin-top: 20px;
   margin-left: -40px;
   border-radius: 35px;

}
#submit_search
{
  border: 0px;
  margin-left: -50px;
  margin-bottom: -20px;
  border-radius: 30px;
  color:darksalmon; /*hex: #E9967A , rgb(233,150,122)*/
  width: 40px;
  height: 35px;
  background-color: rgba(233,150,122,0);
}
#submit_cart
{
  border-color: darksalmon;
  margin-left: -10px;  
  margin-top: -20px;
  border-radius: 30px;
  color:darksalmon;
  width: 45px;
  height: 45px;
  background-color: rgba(233,150,122,0);
}
#numail
{
  border-color: darksalmon;
  margin-left: 45px;
  margin-top: 20px;
  border-radius: 30px;
  color:darksalmon;
  width: 40px;
  height: 40px;
  background-color: rgba(233,150,122,0);
}
#lien
{
  text-decoration:none; 
  color: #2c3e50;
  font-size: 14px;
}
#num
{
  margin-top: -16px;
  margin-left: 80px;
  font-size: 13px;
}
#qte
{
  color: black;
  background-color:darksalmon;
  margin-top: 10px;
  margin-left: 25px;
  border-radius: 15px;
  font-size: 15px;
}
</style>