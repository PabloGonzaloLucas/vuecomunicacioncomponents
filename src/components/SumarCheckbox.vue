<template>
    <div>
        <h1>Ejemplo Checkbox</h1>
        <h1>la suma es {{suma}}</h1>
        <button @click="generarCheckbox">Generar Checkbox</button>
        <div v-for="(check, index) in checks" :key="check" :index="index" :value="check">
            <input type="checkbox" :value="check" v-model="seleccionados" @change="sumarRestar(index)">
            <label>{{check}}</label>
        </div >
    </div>
</template>

<script>
export default {
    data(){
        return{
            seleccionados: [],
            checks: [],
            suma: 0
        }
    },
    methods: {
        generarCheckbox(){
            for(var i=1; i<parseInt(Math.random()*10000); i++){
                this.checks.push(parseInt(Math.random()*1000));
            }
        },
        sumarRestar(index){
            for(var i=0; i<this.seleccionados.length; i++){
                this.suma += this.seleccionados[i];
            }
            console.log(this.suma, index, this.checks[index])
        }
    }

}
</script>

<style>

</style>