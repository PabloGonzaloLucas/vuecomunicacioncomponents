<template>
  <div>
    <button @click="generarNum">Generar num</button>
    <ul>
        <li v-for="num in numeros" :key="num">
            <router-link :to="'/tablamultiplicar/'+num">{{num}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "MenuTablaMultiplicar",
    data(){
        return{
            numeros: []
        }
    },
    methods:{
        generarNum(){
            for(var i=1; i<parseInt(Math.random()*10); i++){
                this.numeros.push(parseInt(Math.random()*50))
            }
        }
    }

}
</script>

<style scoped>
div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

button {
    padding: 15px 40px;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(245, 87, 108, 0.4);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
}

button::before {
    content: '🎲';
    position: absolute;
    left: 15px;
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

button:hover::before {
    transform: rotate(360deg);
}

button:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 40px rgba(245, 87, 108, 0.6);
}

button:active {
    transform: translateY(-2px) scale(1.02);
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
    max-width: 800px;
    width: 100%;
}

li {
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.3s ease;
}

li:hover {
    transform: scale(1.1) translateY(-5px);
    z-index: 10;
}

a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(79, 172, 254, 0.3);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

a::before {
    content: '×';
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 1.2rem;
    opacity: 0.5;
}

a::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: translate(-50%, -50%);
    transition: width 0.5s, height 0.5s;
}

a:hover::after {
    width: 200px;
    height: 200px;
}

a:hover {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    box-shadow: 0 12px 30px rgba(250, 112, 154, 0.5);
    transform: rotateY(10deg) rotateX(5deg);
}

/* Variaciones de color para cada número */
li:nth-child(3n+1) a {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

li:nth-child(3n+2) a {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

li:nth-child(3n+3) a {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

li:nth-child(3n+1) a:hover {
    background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
}

li:nth-child(3n+2) a:hover {
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
}

li:nth-child(3n+3) a:hover {
    background: linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%);
}

/* Animación de entrada */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

li {
    animation: fadeInUp 0.5s ease forwards;
    opacity: 0;
}

li:nth-child(1) { animation-delay: 0.1s; }
li:nth-child(2) { animation-delay: 0.15s; }
li:nth-child(3) { animation-delay: 0.2s; }
li:nth-child(4) { animation-delay: 0.25s; }
li:nth-child(5) { animation-delay: 0.3s; }
li:nth-child(6) { animation-delay: 0.35s; }
li:nth-child(7) { animation-delay: 0.4s; }
li:nth-child(8) { animation-delay: 0.45s; }
li:nth-child(9) { animation-delay: 0.5s; }
li:nth-child(n+10) { animation-delay: 0.55s; }

/* Responsive */
@media (max-width: 768px) {
    ul {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 15px;
    }
    
    a {
        height: 60px;
        font-size: 1.5rem;
    }
    
    button {
        padding: 12px 30px;
        font-size: 1.1rem;
    }
}
</style>