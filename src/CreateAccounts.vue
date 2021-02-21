<template>
    <div class="createAccounts">
      <div>
        <NavCLL />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
        <b-form @submit="onSubmit" @reset="onReset">
        <br>
        <label for="prénom" id="input1" variant="info" >Prénom</label>
        <b-form-input
           id="prénom"
           v-model="form.firstname"
          placeholder="Entrez votre prénom"
          required
        ></b-form-input>
      <br>
        <label for="nom" id="input2">Nom</label>
        <b-form-input
          id="nom"
          v-model="form.lastname"
          placeholder="Entrez votre nom"
          required
        ></b-form-input>
        <br>
        <label for="email" id="input3">Email</label>
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Entrez votre email"
          required
        ></b-form-input>
        <br>
        <label for="text-password" id="input4">Password</label>
        <b-form-input 
            type="password" 
            v-model="form.password"
            id="text-password" 
            aria-describedby="password-help-block"
            placeholder="Entrez votre mot de passe"
            required
            ></b-form-input>
            <br>
        <label for="tel" id="input5">Téléphone mobile</label>
        <b-form-input 
            type="tel" 
            v-model="form.tel"
            id="tel" 
            placeholder="Entrez votre téléphone"
            required
            ></b-form-input>
            <br>
        <b-button block type="submit" id="btn"><b-icon iscale="1.25" icon="envelope-fill"></b-icon> CRÉER VOTRE COMPTE</b-button>
        <hr>
        <b-button block type="submit" id="btnfacebook" ><a href="#" id="fa fa-google"></a> CRÉER VOTRE COMPTE AVEC Google</b-button>
    </b-form>
    <br><br>
        <p>Vous possédez déjà un compte ?<br><router-link to="/Connexion" title="Connectez-vous à votre compte client" id="lien">CONNECTEZ-VOUS </router-link></p>
      <br><br><br>
      </div>
      <div class="col-3"></div>
      </div>

      </div>
    </div>
</template>
<script>
import NavCLL from './components/NavCLL.vue'

export default {
  name: 'createAccounts',
   components: {
     NavCLL
   },
   data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          tel: '',
          check: ''
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
#input1
{
    margin-left: -470px;
    margin-bottom: -10px;
    font-size: 15px;
    color: #008081;
}
#input2
{
    margin-left: -490px;
    margin-bottom: -10px;
    font-size: 15px;
    color: #008081;
}
#input3
{
    margin-left: -485px;
    margin-bottom: -10px;
    font-size: 15px;
    color: #008081;
}
#input4
{
    margin-left: -455px;
    margin-bottom: -10px;
    font-size: 15px;
    color: #008081;
}
#input5
{
    margin-left: -405px;
    margin-bottom: -10px;
    font-size: 15px;
    color: #008081;
}
#btn
{
    color: white ;
    background-color: #008081;
    font-size: 15px;
    height: 50px;
    /*font-family: "Gill Sans", sans-serif;*/
     font-family: Comic Sans MS;
}
#lien
{
    color: #008081;
    font-size: 12px;
}
#btnfacebook
{
    background: #dd4b39;
    font-size: 13px;
    height: 50px;
    font-family: Comic Sans MS;
}    
.fa {
  padding: 20px;
  font-size: 30px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}
.fa-google {
  /*background: #dd4b39;*/
  color: white;
}
</style>