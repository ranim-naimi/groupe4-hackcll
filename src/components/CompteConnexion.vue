<template>
    <div class="compteConnexion">
        <div id="titre">Se Connecter</div>
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
        <br>
        <label for="text-password" id="input2">Password</label>
        <b-form-input 
            type="password" 
            v-model="form.password"
            id="text-password" 
            aria-describedby="password-help-block"
            placeholder="Entrez votre mot de passe"
            required
            ></b-form-input>
            <br>
            <div class="row">
                <div class="col-5">
                    <b-form-checkbox v-model="form.check" size="sm">Rester connecté</b-form-checkbox>
                </div>
                <div class="col-2"></div>
                <div class="col-5"><router-link to="/PasswordOubliee" title="Mot de passe oublié" id="mot">Mot de passe oublié ?</router-link></div>
            </div>
            <br>
        <b-button block type="submit" id="btn"><b-icon iscale="1.25" icon="envelope-fill"></b-icon> SE CONNECTER</b-button>
        <br>
        <b-button block type="submit" id="btnfacebook" ><a href="#" class="fa fa-facebook"></a> CRÉER VOTRE COMPTE AVEC FACEBOOK</b-button>
    </b-form>
        <br><br><br><br>
    </div>
</template>
<script>

export default {
  name: 'compteConnexion',
  data() {
      return {
        form: {
          email: '',
          password: ''
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
    margin-top: 20px;
    color: darksalmon;
    font-size: 25px;
}

#input1
{
    margin-left: -395px;
    margin-bottom: -10px;
    font-size: 15px;
    color: darksalmon;
}
#input2
{
    margin-left: -365px;
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
  color: white;
}
#mot
{
    color: darksalmon;
}
</style>