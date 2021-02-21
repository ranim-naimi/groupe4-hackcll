<template>
    <div class="navCLL">

      <div>
  <b-navbar toggleable="lg" type="dark" variant="info" >
        <img id="logo" title="CLL" href="#" src="./../assets/log.jpg">
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-brand href="#"><router-link to="/" id="sign"> <em>Home</em></router-link></b-navbar-brand>
         <b-navbar-brand href="#"><router-link to="/login" id="sign"> <em>Login</em></router-link></b-navbar-brand>
         <b-navbar-brand ><router-link to="/CreateAccounts" id="sign"> <em>SignUp</em></router-link></b-navbar-brand>
         <b-navbar-brand href="#"><router-link to="/Contacts" id="sign"> <em>Contacts</em></router-link></b-navbar-brand>
         <b-navbar-brand href="#"><router-link to="/Abouts" id="sign"> <em>Abouts</em></router-link></b-navbar-brand>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>     
    </div>
</template>
<script>
export default {
  name: 'NavCLL'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav
{
  color:#3b5998;

}
#sign
{
  text-decoration: none;
  color: white;
}
#logo
{
  width: 200px;
  height: 80px;
}
</style>