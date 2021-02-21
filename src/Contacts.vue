<template>
    <div class="Contacts">
         <div>
        <NavCLL />
      </div> 
      <br><br><br> 
      <div class="container">
      <div class="row">
        <div class="col-6">    
             <b-form @submit="onSubmit" @reset="onReset">
        <br>
        <label for="nom" id="input3">Nom</label>
        <b-form-input
          id="nom"
          v-model="form.lastname"
          placeholder="Entrez votre nom"
          required
        ></b-form-input>
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
        <label for="text-password" id="input4">Message</label>
        <b-form-textarea
        id="textarea-large"
        size="lg"
        placeholder="Message"
      ></b-form-textarea>
            <br>
        <b-button block type="submit" id="btn">SEND MESSAGE</b-button>
    </b-form>
          </div> 
          <br><br><br><br><br><br>
          <div class="col-2">
                  <a href="https://www.facebook.com/cllfst" class="fa fa-facebook"></a>
                  </div>
              <div class="col-2">
              <a href="https://www.instagram.com/cllfst/?hl=de" class="fa fa-instagram"></a>
              </div>
                <div class="col-2">
              <a href="https://www.linkedin.com/company/cllfst" class="fa fa-linkedin"></a>
              </div>
        </div>   
    </div>
</div>
</template>
<script>
import NavCLL from './components/NavCLL.vue'
export default {
  name: 'Contacts',
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
#input3
{
    margin-left: -490px;
    margin-bottom: -10px;
    font-size: 15px;
    color: #008081;
}
#input4
{
    /*margin-left: -100px;*/
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
#sign
{
  color: rgb(71, 70, 70);
  text-decoration: none;
}
.fa {
  padding: 20px;
  font-size: 30px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}


.fa-instagram {
  background: #3f729b;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}
</style>