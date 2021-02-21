<template>
 <div class="container" bg-color="light">
   <div>
        <NavCLL />
      </div>
      
      <br>
           <h1>Welcome to CLL</h1>
           <div class="row">
               <div class="col-3">
                 <img src="https://i.ibb.co/ZBkJ14L/group.png" class="img" >
                   <br>
                  <a href="#">  Members management</a>
               </div>
               <div class="col-3">
                   <img src="https://i.ibb.co/hdcV30K/materiel.jpg"  class="img">
                     <br>
                <a href="#"> Materials management</a>
               </div>
                <div class="col-3">
                    <img src="https://i.ibb.co/PjYcnPm/3-D-Character-holding-a-golen-key-chain-with-keys-Isolated-on-white.jpg"  class="img">
                    <br>
                  <a href="#">Keys management</a>
               </div>
           </div>
           <div class="row">
               <div class="col-3">
                   <img src="https://i.ibb.co/YN5Bg55/money.jpg"  class="img">
                     <br>
                <a href="#"> Valt management</a>
               </div>
               <div class="col-3">
                  <img src="https://i.ibb.co/mvQdpvy/meeting.jpg"  class="img">
                    <br>
                 <a href="#"> Meetings management</a>
               </div>
             </div>
         </div>
</template>

<script>
import NavCLL from './components/NavCLL.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
     NavCLL
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(98, 98, 119);
  text-decoration: none;
  font-family: Comic Sans MS;
}
img{
  width : 90% ;
  height : 90%;
  padding-top : 30px;
}
b-card{
 background-color: #008081;
}
.principal {
  padding-top : 30%;
  font-family: Comic Sans MS;
}
a:active {
  background-color: #008081;
}
h1{
  color: #008081;
  font-family: Comic Sans MS;
}
.container{
padding-left: 250px;
}
</style>