<template>
  <div>
    <h1 style="blue">Numero Hijo: {{numero}}</h1>
    <button @click="sumarHijo">Sumar {{numero}}</button>
  </div>
</template>

<script>
export default {
    name:"HijoNumero",
    props: ["numero"],
    methods:{
        sumarHijo(){
            this.$emit("SumarPadre", this.numero)
        }
    }
}
</script>

<style>

</style>