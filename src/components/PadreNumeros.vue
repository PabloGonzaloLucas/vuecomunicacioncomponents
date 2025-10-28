<template>
  <h1>Numeros Padre</h1>
  <h2 style="red">La suma es {{suma}}</h2>
  <button @click="generarNum">Nuevo Numero</button>
  <div>
    <HijoNumero v-for="num in numerosAleatorios" :key="num" :numero="num" v-on:sumarPadre="sumarPadre"/>
  </div>
</template>

<script>
import HijoNumero from "./HijoNumero.vue";
export default {
    
    
    name: "PadreNumeros",
    data(){
        return{
            numerosAleatorios : [4,9,7,26,14],
            suma : 0
        }
    },
    methods:{
        generarNum(){
            this.numerosAleatorios.push(parseInt(Math.random()*100))
        },
        sumarPadre(numero){
            this.suma += numero
        }
    },
    components: {
        HijoNumero
    }
}
</script>

<style>

</style>