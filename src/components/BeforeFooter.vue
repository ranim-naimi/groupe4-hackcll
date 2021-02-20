<template>
    <div class="footer">
        <div id="cont1">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <img id="logo" title="MRS.BAY" href="#" src="/img/logo.a7aa0f17.jpeg">
                    </div>
                    <div class="col-2"></div>
                    <div class="col-5">
                        <p id="title1">NOUVEAU SUR MRS.BAY ?</p>
                        <p id="title2">Inscrivez-vous à nos communications pour recevoir nos meilleures offres!</p>
                        <b-form @submit="onSubmit" v-if="show">
                            <div class="row">
                            <div class="col-9">
                            <b-form-group id="input-group-1" label-for="input-1">
                                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email"></b-form-input>
                            </b-form-group>
                            </div>
                            <div class="col-1">
                            <b-button type="submit" id="button">S'inscrire</b-button> 
                            </div>
                            </div>
                        </b-form>
                    </div>
                    <div class="col-3">
                        <p id="title3"><b-icon icon="cart4" font-scale="2"></b-icon><I> MRS.BAY:</I> De la commande en ligne à la réception de vos produits.</p>
                    </div>
                </div>    
            </div>
        </div>
        <div id="cont2">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <p id="r1">SERVICE CLIENT</p>
                        <a href="#" id="link">Centre d'assistance</a><br>
                        <a href="#" id="link">Acheter sur MRS.BAY</a><br>
                        <a href="#" id="link">Méthodes de paiement</a><br>
                        <a href="#" id="link">Expédition & Livraison</a><br>
                        <a href="#" id="link">Politique de retour</a><br>
                        <a href="#" id="link">Signaler un Produit</a>
                    </div>
                    <div class="col-3">
                        <p id="r1">A PROPOS</p>
                        <a href="#" id="link">Qui sommes-nous</a><br>
                        <a href="#" id="link">Carrières</a><br>
                        <a href="#" id="link">Propriété intellectuelle</a><br>
                        <a href="#" id="link">Politique de Confidentialité</a><br>
                        <a href="#" id="link">Conditions d'utilisation</a><br>
                        <a href="#" id="link">MRS.BAY Services</a><br>
                        <a href="#" id="link">MRS.BAY Prime</a><br>
                        <a href="#" id="link">MRS.BAY B2B</a><br>
                        <a href="#" id="link">MRS.BAY Logistics</a><br>
                        <a href="#" id="link">MRS.BAY Advertising</a>
                    </div>
                    <div class="col-3">
                        <p id="r1">GAGNEZ DE L'ARGENT !</p>
                        <a href="#" id="link">Vendez sur MRS.BAY</a><br>
                        <a href="#" id="link">Affiliation - Gagnez de l'argent !</a><br>
                        <a href="#" id="link">MRS.BAY JForce</a><br>
                        <a href="#" id="link">Devenez un partenaire logistique de MRS.BAY</a><br>
                    </div>
                    <div class="col-3">
                        <p id="r1">MODES DE PAIEMENT</p>
                        <p id="icon"><b-icon icon="credit-card2-back-fill" font-scale="2"></b-icon></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5"></div>
                    <p id="title4">NO MARQUES</p>
                </div>
                <div class="row">
                    <div class="col-1">
                        <a href="#" id="link">Adidas</a><br>
                        <a href="#" id="link">Al Jazira</a><br>
                        <a href="#" id="link">Apple</a><br>
                        <a href="#" id="link">Babyliss</a><br>
                        <a href="#" id="link">Bein</a><br>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-1">
                        <a href="#" id="link">Brother</a><br>
                        <a href="#" id="link">Canon</a><br>
                        <a href="#" id="link">Condor</a><br>
                        <a href="#" id="link">Calvin Klein</a><br>
                        <a href="#" id="link">DELL</a><br>                        
                    </div>
                    <div class="col-1"></div>
                    <div class="col-1">
                        <a href="#" id="link">Guess</a><br>
                        <a href="#" id="link">Hexabyte</a><br>
                        <a href="#" id="link">Diesel</a><br>
                        <a href="#" id="link">Festina</a><br>
                        <a href="#" id="link">Evertek</a><br>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-1">
                        <a href="#" id="link">Guess</a><br>
                        <a href="#" id="link">Hexabyte</a><br>
                        <a href="#" id="link">Diesel</a><br>
                        <a href="#" id="link">Festina</a><br>
                        <a href="#" id="link">Evertek</a><br>
                    </div>  
                    <div class="col-1"></div>
                    <div class="col-1">
                        <a href="#" id="link">Guess</a><br>
                        <a href="#" id="link">Hexabyte</a><br>
                        <a href="#" id="link">Diesel</a><br>
                        <a href="#" id="link">Festina</a><br>
                        <a href="#" id="link">Evertek</a><br>
                    </div>  
                    <div class="col-1"></div>
                    <div class="col-1">
                        <a href="#" id="link">Guess</a><br>
                        <a href="#" id="link">Hexabyte</a><br>
                        <a href="#" id="link">Diesel</a><br>
                        <a href="#" id="link">Festina</a><br>
                        <a href="#" id="link">Evertek</a><br>
                    </div>      
                </div>
                <br>
                <div class="row">
                    <div class="col-5"></div>
                    <p id="title4">RETROUVEZ-NOUS SUR</p>
                </div>    
                <div class="row">
                    <div class="col-5"></div>
                        <i class="fa fa-facebook-square" id="media"></i>
                        <i class="fa fa-instagram" id="media"></i>  
                        <i class="fa fa-youtube-square" id="media"></i>
                        <i class="fa fa-twitter" id="media"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'footer',
  data() {
      return {
        form: {
          email: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()    //The preventDefault() method cancels the event if it is cancelable(annulable), meaning that the default action that belongs(appartient) to the event will not occur()ne se produira pas.
        //alert(JSON.stringify(this.form))
      },
    }
}
</script>

<style scoped>
#cont1
{
    background-color: #292b2c;
    height: 160px;
}
#cont2
{
    background-color: #313333;
    height: 620px;
}
#logo
{
    margin-top: 40px;
    width: 120px;
    height: 60px;
}
#title1
{
    margin-top: 20px;
    color: #b8baba;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
}
#title2
{
    color: #b8baba;
    font-size: 12px;
    margin-top: -15px;
    font-family: cursive;
}
#title3
{
    color: darksalmon;
    margin-left: 80px;
    font-size: 14px;
    margin-top: 50px;
}
#title4
{
    text-align: center;
    color: darksalmon;
    margin-top: 20px;
}
#button
{
    border: 1px solid darksalmon;
    color: darksalmon;
    background-color: white;
    margin-left: -20px;
}
#button:hover
{
    background-color: darksalmon;
    color: white;
}
#r1
{
    color:#b8baba;
    margin-top: 20px;
    font-size: 13px;
    font-weight: bold;
}
#link
{
    color:#b8baba;
    text-decoration: none;
    text-align: left;
    font-size: 12px;
}
#link:hover{
    color: darksalmon;
}
#icon
{
    color: darksalmon;
    margin-left: 55px;
}
div
{
    text-align: left;
}
#media
{
    color: darksalmon;
    font-size: 40px;
    margin-left: 10px;
}
</style>