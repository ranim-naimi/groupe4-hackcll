<template>
    <div class="Abouts">
          <div>
            <NavCLL />
        </div>
      <br>
        <div class="container">
            <div class="row">
                <div class="mt-4">
    <h4 id="titre">CLL : Club des Logiciels Libres</h4>
    <b-card img-src="https://i.ibb.co/k3QdfNy/photo4.jpg" id="img" img-alt="Card image" img-left class="mb-3">
      <b-card-text id="para">
        The CLLFST: Free Software Club within the Faculty of Sciences of
            Tunis. The CLL was founded in May 2004 by a group of teachers and
            students, with the aim of making students aware of the various
            disciplines and the use of free software. In a technical and
            socio-cultural setting, the Free Software Club members organize,
            throughout the year, events that bring together Tunisian students
            from different specialties. On the other hand, the CLLFST organizes
            events every year in order to spread the philosophy of free in the
            student environment include: JLL Free Software Day, JSL High School
            Day, Code Sprint, Install Party (install Linux) Our members whose
            number exceeds 1500 on our Facebook group, are from different
            disciplines, future engineers, engineers, chemists, professors,
            students ... In short, our diversity is our strength!
      </b-card-text>
    </b-card>
    </div>
            </div>
        </div>
         
    <br>
    </div>
</template>
<script>
import NavCLL from './components/NavCLL.vue'
export default {
  name: 'Abouts',
  components: {
     NavCLL
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#img
{
    /*width: 600px;*/
    height: 400px;
}
#titre
{
    color: #008081;
}
#para
{
    font-family: Comic Sans MS;
    font-size: 18px;
}
</style>