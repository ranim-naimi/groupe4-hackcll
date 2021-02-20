<template>
    <div class="Compte">
    <b-form @submit="onSubmit" @reset="onReset">
        <br>
        <label for="prénom" id="input1">Prénom</label>
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
            <div>
                <b-form-checkbox v-model="form.check" size="sm">Je souhaite recevoir la newsletter de MRS. BAY avec les meilleures offres du jour.</b-form-checkbox>
            </div>
            <br>
        <b-button block type="submit" id="btn"><b-icon iscale="1.25" icon="envelope-fill"></b-icon> CRÉER VOTRE COMPTE</b-button>
        <hr>
        <b-button block type="submit" id="btnfacebook" ><a href="#" class="fa fa-facebook"></a> CRÉER VOTRE COMPTE AVEC FACEBOOK</b-button>
    </b-form>
    <br><br>
        <p>Vous possédez déjà un compte ?<br><router-link to="/Connexion" title="Connectez-vous à votre compte client" id="lien">CONNECTEZ-VOUS </router-link></p>
      <br><br><br>
      </div>
        
</template>
<script>
export default {
  name: 'Compte',
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
    color: darksalmon;
}
#input2
{
    margin-left: -490px;
    margin-bottom: -10px;
    font-size: 15px;
    color: darksalmon;
}
#input3
{
    margin-left: -485px;
    margin-bottom: -10px;
    font-size: 15px;
    color: darksalmon;
}
#input4
{
    margin-left: -455px;
    margin-bottom: -10px;
    font-size: 15px;
    color: darksalmon;
}
#input5
{
    margin-left: -405px;
    margin-bottom: -10px;
    font-size: 15px;
    color: darksalmon;
}
#btn
{
    background-color: darksalmon;
    border-color: darksalmon;
    font-size: 15px;
    height: 50px;
    /*font-family: "Gill Sans", sans-serif;*/
     font-family: Comic Sans MS;
}
#lien
{
    color: darksalmon;
    font-size: 12px;
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
</style>