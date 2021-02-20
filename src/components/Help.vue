<template>
    <div class="Help">
        <br>
        <h4 id="titre"> ESPACE D'AIDE ET D'INFORMATION</h4>
        <br>
        <p>Bienvenue Sur notre espace d'aide et d'information. Accédez au questions les plus fréquemment posées et trouvez les réponses qui Vous recherchez.</p>
        <br>
        <h4 id="titre">ACCUEIL DE L'AIDE</h4>
        <br>
        <div class="row">
        <div v-for="(art, index) in Tab" :key="index">
            <b-img fluid rounded :src="art.link" id="img"></b-img>    
            <p id="titreImg"><b>{{ art.nom }}</b></p>
        </div>  
        </div>
        <br><br><br>
    </div>
</template>
<script>
export default {
  name: 'Help',
  data: () => {
    return {
      Tab: [
      { link: 'https://i.ibb.co/D1TQ9YK/3d-human-that-transport-some-boxes.jpg', nom: 'Commande' },
      { link: 'https://i.ibb.co/YQcvwNG/livraison.jpg', nom: 'Livraison' },
      { link: 'https://i.ibb.co/SdwQyvP/paiement.jpg', nom: 'Paiement' },
      { link: 'https://i.ibb.co/fFPzccC/SAR.jpg', nom: 'SAV' },
      { link: 'https://i.ibb.co/1LcV14q/emploi.jpg', nom: 'Offre Emploi' },
      { link: 'https://i.ibb.co/R44fXH5/condition.jpg', nom: 'Condition' },
      { link: 'https://i.ibb.co/1MQnFmN/compte.jpg', nom: 'Compte' },
      { link: 'https://i.ibb.co/Lgn761F/faq.jpg', nom: 'FAQ' },
      { link: 'https://i.ibb.co/Zfqb4xY/satisfaction.jpg', nom: 'Satisfaction' }
    ]
    }
  }    
}





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#titre
{
    color: darksalmon;
    font-family: Comic Sans MS;
}
#img
{
    width: 172px;
    height: 172px;
    margin-right: 10px;
    position: relative;
    margin-top: 20px;
}
#titreImg
{
    color: darksalmon;
    font-size: 16px;
    margin-top: 10px;
    font-family: Segoe Print;
}
</style>