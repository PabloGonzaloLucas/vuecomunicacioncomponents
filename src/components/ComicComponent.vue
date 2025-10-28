<template>
    <div id="comicsContainer">
        <div id="comic">
            <button v-on:click="seleccionarFavorito" class="verde">Seleccionar favorito</button>
            <button class="rojo" @click="deleteComic">
                Delete comic
            </button>
            <h2>{{comic.titulo}}</h2>
            <p>{{comic.descripcion}}</p>
            <img :src="comic.imagen" alt="comic.titulo">
            <h4 :class="{
                rojo: comic.year <= 2000,
                verde: comic.year > 2000
            }">Year: {{comic.year}}</h4>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "ComicComponent",
    props: ["comic", "index"],
    methods: {
        seleccionarFavorito() {
            console.log(this.comic)
            this.$emit("seleccionarFavorito", this.comic)
        },
        deleteComic(){
            this.$emit("deleteComic", this.index)
        }
    }
}
</script>

<style>
    @import "../assets/css/comics.css";
</style>