<template>
    <div class="articles">
        <div v-for="(art, index) in Articles" :key="index">
        <div class="row">
            <b-container fluid id="contain">
                <div class="row" id="head">
                    <div class="col-10" id="title"><b>{{ art.catégorie }}</b></div>
                    <div class="col-2"><a :href="art.link" id="link"><p id="link1">VOIR PLUS <b-icon icon="chevron-right" scale="1"></b-icon></p></a></div>
                </div>
                <b-row class="p-4 bg-dark">
                    <div v-for="(details, i) in art.tabArticle" :key="i">
                    <b-col-1 id="test">
                        <div id="translationDiscount"><div id="prixDiscounted">{{ details.discount }}</div></div>
                        <b-img fluid rounded :src="details.src" id="img"></b-img>
                        <p id="data">{{ details.marque }} {{ details.nom }}<br> {{ details.prixDiscounted }} </p><div id="realPrix"> {{ details.prix }}</div> 
                        <b-button id="bt" @click="persist"><b>AJOUTER AU PANIER</b></b-button>
                    </b-col-1>
                    </div>
                </b-row>
            </b-container>
        </div>
        <br>
        </div>
    </div>
</template>
<script>

class Article
{
    constructor(reference, marque, nom,prixDiscounted, prix, src,discount)
    {
        this.reference = reference;
        this.marque = marque;
        this.nom = nom;
        this.prix = prix;
        this.prixDiscounted = prixDiscounted;
        this.src = src;
        this.discount = discount;     
    }
}
var a1 = new Article(123456,"Samsung", "Glaxy s7", 600.253, 704.147,'https://i.ibb.co/41JknFk/articles.gif',"-20%");
var a2 = new Article(123458,"Samsung","Glaxy s8", 900.258, 800.147,'https://i.ibb.co/41JknFk/articles.gif',"-20%");
var a3 = new Article(258741,"Samsung","Glaxy s9", 890.999, 990.999,'https://i.ibb.co/41JknFk/articles.gif',"-50%");
var a4 = new Article(658921,"Samsung","Glaxy s10", 1000.000,1040.125,'https://i.ibb.co/41JknFk/articles.gif',"-20%");
var a5 = new Article(475896,"Samsung","Glaxy s11", 1100.625, 1170.478,'https://i.ibb.co/41JknFk/articles.gif',"-30%");
var a6 = new Article(813695,"Samsung","Glaxy s12", 1200.235, 1270.145,'https://i.ibb.co/41JknFk/articles.gif',"-20%");

export default {
  name: 'articles',
   data: () => {
    return {
      Articles: [
      { catégorie: 'Smartphones', link: 'https://www.google.com', tabArticle: [a1, a2, a3, a4, a5, a6] },
      { catégorie: 'Autre Marque', link: 'https://www.google.com', tabArticle: [a1, a2, a3, a4, a5, a6] },
      { catégorie: 'Nos Offres Black Friday | 70%', link: 'https://www.google.com', tabArticle: [a1, a2, a3, a4, a5, a6] }
    ],
    counter :0
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
   methods: {
    persist() {
        if( isNaN(localStorage.counter) )
        {
            localStorage.counter = 0;
        }
      localStorage.counter++;  
      //window.localstorage.getItem("counter");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contain
{
    width: 1140px;
}
#head
{
    background-color: darksalmon;
    color: rgb(44, 42, 42);
    height: 50px;
    border-radius: 10px 10px 0px 0px;
}
#title
{
    margin-top: 10px;
    font-size: 18px;
    text-align: left;
}
#link
{
   /* margin-top: 20px;*/
    font-size: 15px;
    margin-left: 40px;
    color: rgb(44, 42, 42);
    text-decoration: none;
    margin-bottom: 20px;
}
#link1
{
    margin-left: 35px;
    margin-top: -10px;
}
#img
{
    width: 172px;
    height: 172px;
    margin-right: 10px;
    position: relative;
    
}
#bt
{
    background-color: darksalmon;
    color: rgb(58, 54, 54);
    width: 172px;
    height: 45px;
    font-size: 14px;
    font-family: Alex Brush;
}
#data
{
    margin-left: 10px;
    color: white;
    text-align: left;
}
#realPrix
{
    color: rgb(184, 181, 181);
    text-decoration: line-through;
    text-align: left;
    margin-left: 10px;
    margin-top: -20px;
}
#prixDiscounted
{
    background-color: rgb(218, 84, 40);
    color: rgb(233, 218, 196);
    width: 45px;
    height: 25px;
    text-align: center;
    border-radius: 3px 3px 3px 3px;
}
#translationDiscount
{
    z-index: 1;
    position: absolute;
    margin-left: 121px;
    margin-top: 6px;
}
</style>