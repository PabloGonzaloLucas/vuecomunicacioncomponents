<template>
  <div>
    <h1>Numero doble</h1>
    <h1>{{mensaje}}</h1>
    {{doble}}
    <button @click="redirectToHome">Pa home</button>
  </div>
</template>

<script>
export default {
    name: "NumeroDoble",
    data(){
        return{
            doble: 0,
            mensaje: ""
        }
    },
    methods: {
        redirectToHome(){
            this.$router.push('/')
        }
    },
    mounted(){
        console.log("Param: "+ this.$route.params.numero)
        let numero = this.$route.params.numero;
        if(numero == ""){
            this.mensaje = "Sin parámetros en routing";
        }
        else{
            this.mensaje= "Parametro recibido: "+ numero
        }
    },
    watch: {
        '$route.params.numero' (nextVal, oldVal){
            this.mensaje = "Esto ha cambiado" + this.$route.params.numero;
            console.log("Next: " + nextVal);
            console.log("Old: " + oldVal);
            this.doble = parseInt(nextVal * 2)
        }
    }
}
</script>

<style>

</style>