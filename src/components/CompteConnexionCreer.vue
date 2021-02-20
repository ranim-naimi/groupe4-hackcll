<template>
    <div class="compteConnexionCreer">
        <div id="titre">Créer un compte</div>
        <p id="prest">Créez votre compte client MRS. BAY en quelques clics ! Vous pouvez vous inscrire soit en utilisant votre adresse e-mail, soit votre compte Facebook.</p>
        <br><br><br><br><br>
        <b-button block type="submit" id="btn"><b-icon iscale="1.25" icon="envelope-fill"></b-icon><router-link to="/CreerCompte" title="Créer un compte" id="lien">  CRÉER VOTRE COMPTE</router-link></b-button>
        <br>
        <b-button block type="submit" id="btnfacebook" ><a href="#" class="fa fa-facebook"></a> <router-link to="/CreerCompte" title="Créer un compte" id="lien"> CRÉER VOTRE COMPTE AVEC FACEBOOK</router-link></b-button>
        <br><br><br><br><br>
    </div>
</template>
<script>
export default {
  name: 'compteConnexionCreer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#titre
{
    margin-top: 20px;
    color: darksalmon;
    font-size: 25px;
}
#prest
{
    text-align: left;
    font-style: arial;
    margin-top: 40px;
    font-size: 15px;
}
#btn
{
    background-color: darksalmon;
    border-color: darksalmon;
    font-size: 13px;
    height: 50px;
    font-family: Comic Sans MS;
}
#btnfacebook
{
    background-color: #3b5998;
    border-color: #3b5998;
    font-size: 13px;
    height: 50px;
    font-family: Comic Sans MS;
}    
.fa {
  padding: 8px;
  font-size: 15px;
  width: 8px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}
.fa-facebook {
  /*background: #3B5998;*/
  color: white;
}
#lien
{
  text-decoration:none; 
  color: white;
}
</style>