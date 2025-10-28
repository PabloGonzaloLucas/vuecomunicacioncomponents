<template>
  <div>
    <h4 style="color:red">{{nombreDeporte}}</h4>
    <button @click="seleccionarFavorito"> 

            Seleccionar favorito 

        </button> 
  </div>
</template>

<script>
export default {
    name: "HijoDeporte",
    props: ["nombreDeporte"],
    mounted() {
        console.log(this.nombreDeporte)
    },
    methods: { 
      seleccionarFavorito() { 
      console.log("Soy el hijo " + this.nombredeporte); 
      //PARA ENVIAR INFORMACION SE REALIZA A PARTIR DE LA LLAMADA 
      //CON CADA PARAMETRO SEPARADO CON COMAS, DENTRO DEL METODO  
      //$emit 
      this.$emit("seleccionarFavoritoParent", this.nombredeporte); 
      } 
    } 
}
</script>

<style>

</style>