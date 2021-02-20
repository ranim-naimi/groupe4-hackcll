<template>
    <div class="bar">
        <div id="a" class="row">
            <div class="col-3">Restez chez vous, livraison à domicile </div>                        
            <div class="col-4">
                <svg id="icon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg><router-link to="/Connexion" title="Connectez-vous à votre compte client" id="lien">Connexion </router-link> | <svg id="cp" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
              </svg><router-link to="/CreerCompte" title="Créer un compte" id="lien">  Créer un compte</router-link>
            </div>
            <div class="col-5">
              <svg id="icon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg><a id="lien" href="https://www.google.com/maps/dir//%D9%86%D9%87%D8%AC+%D8%A7%D9%84%D9%82%D8%A7%D8%B6%D9%8A+%D8%B1%D8%B8%D8%A7+%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%D8%8C+Raf-Raf%E2%80%AD/@37.1902825,10.179301,15.39z/data=!4m9!4m8!1m0!1m5!1m1!1s0x12e2c1e5b841bd8b:0xb8541e8fba8d3c3!2m2!1d10.1857413!2d37.1906904!3e2" title="no-magasin">Notre magasin  &nbsp;</a>
              <svg id="icon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
              </svg><a id="lien" href="#">Pour commander: 55141186  </a>
              <svg id="icon"  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-question-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
              </svg><router-link to="/Aide" title="Aider " id="lien"> Aide</router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'bar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
#a {
    background-color:darksalmon;
    padding: 10px;
    border: 0px solid;
    text-align: left;
    font-size: 13px;
}
#icon
{
  font-size:18px;
  margin-left: 15px;
  margin-top: -6px;
}
#cp
{
  font-size:18px;
  margin-left: 4px;
  margin-top: -6px;
}
#lien
{
  text-decoration:none; 
  color: #2c3e50;
}
</style>