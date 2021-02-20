<template>
    <div class="AidePassword">
        <br>
    <h5><b>Aide avec le mot de passe</b></h5>
    <div class="row">
        <div class="col-2">
            <b-icon icon="exclamation-triangle-fill" scale="1.6" id="exclamation"></b-icon> 
        </div>
        <div class="col-10">
            <p>Saisissez l'adresse e-mail associé à votre compte MRS. BAY. Nous vous enverrons un lien sur cette adresse e-mail pour réinitialiser votre mot de passe.</p>
        </div>    
    </div>
    <b-form @submit="onSubmit" @reset="onReset">
      <br>
        <label for="email" id="input1">Email</label>
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Entrez votre email"
          required
        ></b-form-input>
        <br><br>
        <b-button block type="submit" id="btn"> RÉINITIALISER</b-button>
        <br>
        <b-button id="retour"><router-link to="/Connexion" title="Retour" id="lien"> RETOUR</router-link></b-button>
    </b-form>
    <br><br><br>
    </div>
</template>
<script>
export default {
  name: 'AidePassword',
  data() {
      return {
        form: {
          email: ''
        }
    }      
},
methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      }
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
h5
{
    color: darksalmon;
    margin-left: -500px;
}
#exclamation
{
    color: darksalmon;
   margin-left: -400px;
}
p
{
    margin-left: -210px;
    text-align: left;
    font-size: 15px;
}
#btn
{
    background-color: darksalmon;
    border-color: darksalmon;
    font-size: 15px;
    height: 50px;
     font-family: Comic Sans MS;
     width: 530px;
     margin-left: -200px;
}
#input1
{
    margin-left: -700px;
    margin-bottom: -10px;
    font-size: 15px;
    color: darksalmon;
}
#email
{
    width: 530px;
    margin-left: -200px;
}
#retour
{
    color: darksalmon;
    border: 0px;
    background-color: rgba(233,150,122,0);
    font-family: Comic Sans MS;
    margin-left: -200px;
}
#lien
{
  text-decoration: none; 
  color: darksalmon;
}
</style>