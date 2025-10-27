<template>
  <div>
    <h4 style="color:red">{{nombreDeporte}}</h4>
  </div>
</template>

<script>
export default {
    name: "HijoDeporte",
    props: ["nombreDeporte"],
    mounted() {
        console.log(this.nombreDeporte)
    }
}
</script>

<style>

</style>