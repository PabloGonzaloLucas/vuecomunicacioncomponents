<template>
  <nav>
    <ul id="menu">
        <li>
            <router-link to='/'>Deportes</router-link>
        </li>
        <li>
            <router-link to='/comics/14'>Comics</router-link>
        </li>
        <li>
            <router-link to='/numeros'>Numeros</router-link>
        </li>
        <li v-for="num in numeros" :key="num">
            <router-link :to="'/numerodoble/' +num">Numero Doble {{num}}</router-link>
        </li>
        <!-- <li>
            <router-link to='/numerodoble'>Numero Doble</router-link>
        </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
    name: "MenuComponent",
    data(){
        return{
            numeros: [77,33,22]
        }
    }
}
</script>

<style>
    ul#menu li{
        display: inline;
    }
</style>