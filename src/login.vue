<template>
    <div class="login">
        <div>
        <NavCLL />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
        <b-form @submit="onSubmit" @reset="onReset">
        <br>
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
        <b-button block type="submit" id="btn"><b-icon iscale="1.25" icon="envelope-fill"></b-icon> CRÉER VOTRE COMPTE</b-button>
        <hr>
        <b-button block type="submit" id="btnfacebook" ><a href="#" id="fa fa-google"></a> CRÉER VOTRE COMPTE AVEC Google</b-button>
    </b-form>
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
#input1
{
    margin-left: -490px;
    margin-bottom: -10px;
    font-size: 15px;
    color: #008081;
}
#input2
{
    margin-left: -460px;
    margin-bottom: -10px;
    font-size: 15px;
    color: #008081;
}
#mot
{
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
#sign
{
  color: rgb(71, 70, 70);
  text-decoration: none;
}

</style>