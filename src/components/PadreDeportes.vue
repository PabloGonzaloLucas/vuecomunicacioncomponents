<template>
  <div>
    <h1 style="color: blue">Padre deportes</h1>
    <ul>
      <li v-for="sport in deportes" :key="sport">
        <HijoDeporte :nombreDeporte="sport" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>     
      </li>
    </ul>
  </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue'
export default {
    name: "PadreDeportes",
    components: {
      HijoDeporte
    },
    data(){
      return {
        deportes: ['Curling', 'Peonza', 'Canicas', 'Bolos']
      }
    },
    methods: { 
        seleccionarFavoritoParent(deporteFavorito) { 
        console.log("Yo soy tu padre") 
        this.favorito = deporteFavorito; 
      } 
    } 
}
</script>

<style>

</style>