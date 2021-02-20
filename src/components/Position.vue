<template>
    <div class="position">
        <div class="row">
            <div class="col-12">
                <strong><a id="lien" href="http://localhost:8080/"> Acceuil<span id="space">></span><span> {{ title }} </span></a></strong>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
  name: 'Position',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#lien
{
    margin-left: 5px;
    text-decoration:none; 
    color: #2c3e50;
    font-size: 15px;
}
#space
{
    margin-left: 10px;
    margin-right: 10px;
}
</style>