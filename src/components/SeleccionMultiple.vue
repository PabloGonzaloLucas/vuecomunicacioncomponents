<template>
  <div class="container">
    <div class="snowflakes">
      <div v-for="i in 50" :key="i" class="snowflake">❄</div>
    </div>
    <div class="christmas-lights">
      <div v-for="i in 20" :key="i" class="light"></div>
    </div>
    <div class="content">
      <h1 class="resultado">🎄 {{seleccionadosCopia.join(', ') || '¡Feliz Navidad!' }} 🎅</h1>
      <div class="santa-hat">🎅</div>
      
      <div class="select-wrapper">
        <div class="gift-bow">🎀</div>
        <select multiple v-model="seleccionados">
          <option v-for="num in numeros" :key="num" :value="num" >
            🎁 {{num}}
          </option>
        </select>
        <div class="select-glow"></div>
      </div>
      
      <button @click="mostrarSeleccionados">
        <span class="button-text">⭐ Mostrar Regalos ⭐</span>
        <div class="button-particles">
          <span v-for="i in 20" :key="i" class="particle">✨</span>
        </div>
      </button>
      
      <div class="ornaments">
        <div class="ornament">🔴</div>
        <div class="ornament">🟢</div>
        <div class="ornament">🔴</div>
        <div class="ornament">🟡</div>
      </div>
    </div>
  </div>
</template>

<script>

//import Select from 'primevue/select';

export default {
    data(){
        return{
            numeros : [1,2,3,4],
            seleccionados:[],
            seleccionadosCopia: []
        }
    },
    methods:{
        mostrarSeleccionados(){
            // Copia por valor para hacer un "snapshot" de la selección actual
            this.seleccionadosCopia = [...this.seleccionados]
        }   
    }
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0a1128 0%, #1a0f2e 50%, #2d1b3d 100%);
    perspective: 1000px;
}

/* Fondo navideño con nieve */
.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 80%, rgba(220, 20, 60, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(34, 139, 34, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.2) 0%, transparent 60%);
    animation: christmasGlow 8s ease infinite;
}

/* Copos de nieve cayendo */
.snowflakes {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    pointer-events: none;
}

.snowflake {
    position: absolute;
    top: -10%;
    color: #fff;
    font-size: 1.5rem;
    opacity: 0.8;
    animation: snowfall linear infinite;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.snowflake:nth-child(1) { left: 5%; animation-duration: 10s; animation-delay: 0s; font-size: 1rem; }
.snowflake:nth-child(2) { left: 10%; animation-duration: 12s; animation-delay: 1s; font-size: 1.8rem; }
.snowflake:nth-child(3) { left: 15%; animation-duration: 9s; animation-delay: 2s; font-size: 1.2rem; }
.snowflake:nth-child(4) { left: 20%; animation-duration: 11s; animation-delay: 0.5s; font-size: 1.5rem; }
.snowflake:nth-child(5) { left: 25%; animation-duration: 13s; animation-delay: 1.5s; font-size: 1.3rem; }
.snowflake:nth-child(6) { left: 30%; animation-duration: 10s; animation-delay: 3s; font-size: 1.6rem; }
.snowflake:nth-child(7) { left: 35%; animation-duration: 14s; animation-delay: 0.2s; font-size: 1.1rem; }
.snowflake:nth-child(8) { left: 40%; animation-duration: 11s; animation-delay: 2.5s; font-size: 1.7rem; }
.snowflake:nth-child(9) { left: 45%; animation-duration: 12s; animation-delay: 1.2s; font-size: 1.4rem; }
.snowflake:nth-child(10) { left: 50%; animation-duration: 10s; animation-delay: 3.5s; font-size: 1.9rem; }
.snowflake:nth-child(11) { left: 55%; animation-duration: 13s; animation-delay: 0.8s; font-size: 1.2rem; }
.snowflake:nth-child(12) { left: 60%; animation-duration: 11s; animation-delay: 2.8s; font-size: 1.5rem; }
.snowflake:nth-child(13) { left: 65%; animation-duration: 12s; animation-delay: 1.8s; font-size: 1.3rem; }
.snowflake:nth-child(14) { left: 70%; animation-duration: 14s; animation-delay: 0.3s; font-size: 1.6rem; }
.snowflake:nth-child(15) { left: 75%; animation-duration: 10s; animation-delay: 3.2s; font-size: 1.1rem; }
.snowflake:nth-child(16) { left: 80%; animation-duration: 11s; animation-delay: 2.2s; font-size: 1.8rem; }
.snowflake:nth-child(17) { left: 85%; animation-duration: 13s; animation-delay: 1.3s; font-size: 1.4rem; }
.snowflake:nth-child(18) { left: 90%; animation-duration: 12s; animation-delay: 0.7s; font-size: 1.7rem; }
.snowflake:nth-child(19) { left: 95%; animation-duration: 10s; animation-delay: 2.3s; font-size: 1.2rem; }
.snowflake:nth-child(20) { left: 3%; animation-duration: 14s; animation-delay: 1.1s; font-size: 1.5rem; }
.snowflake:nth-child(n+21) { left: calc((100% / 30) * (var(--i, 1))); animation-duration: calc(10s + (var(--i, 1) * 0.5s)); animation-delay: calc(var(--i, 1) * 0.2s); }

/* Luces navideñas */
.christmas-lights {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    z-index: 5;
}

.light {
    width: 20px;
    height: 30px;
    border-radius: 50% 50% 40% 40%;
    animation: lightBlink 2s ease-in-out infinite;
}

.light:nth-child(odd) {
    background: radial-gradient(circle at 30% 30%, #ff0000, #cc0000);
    box-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000;
}

.light:nth-child(even) {
    background: radial-gradient(circle at 30% 30%, #00ff00, #00cc00);
    box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00;
    animation-delay: 1s;
}

.light:nth-child(3n) {
    background: radial-gradient(circle at 30% 30%, #ffd700, #ffaa00);
    box-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700;
    animation-delay: 0.5s;
}

.content {
    position: relative;
    z-index: 10;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Gorro de Santa */
.santa-hat {
    position: absolute;
    top: 50px;
    right: 50px;
    font-size: 4rem;
    animation: santaBounce 2s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.6));
}

/* Título navideño */
.resultado {
    font-size: 4rem;
    font-weight: 900;
    background: linear-gradient(45deg, 
        #dc143c, #228b22, #ffd700, #dc143c, #228b22, #ffd700);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: christmasColors 5s ease infinite;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 50px;
    position: relative;
    filter: drop-shadow(0 0 20px rgba(220, 20, 60, 0.8))
            drop-shadow(0 0 40px rgba(34, 139, 34, 0.6))
            drop-shadow(0 0 60px rgba(255, 215, 0, 0.4));
    transform: rotateX(10deg);
    transition: all 0.5s ease;
}

.resultado:hover {
    transform: rotateX(0deg) scale(1.15);
    animation: jingleBell 0.5s ease infinite;
}

/* Lazo de regalo */
.gift-bow {
    position: absolute;
    top: -30px;
    right: 20px;
    font-size: 3rem;
    z-index: 15;
    animation: bowSpin 3s linear infinite;
    filter: drop-shadow(0 0 10px rgba(255, 192, 203, 0.8));
}

/* Wrapper del select como regalo */
.select-wrapper {
    position: relative;
    margin: 30px 0;
    padding: 20px;
    background: 
        repeating-linear-gradient(
            90deg,
            rgba(220, 20, 60, 0.1) 0px,
            rgba(220, 20, 60, 0.1) 40px,
            transparent 40px,
            transparent 80px
        ),
        repeating-linear-gradient(
            0deg,
            rgba(34, 139, 34, 0.1) 0px,
            rgba(34, 139, 34, 0.1) 40px,
            transparent 40px,
            transparent 80px
        );
    border-radius: 25px;
}

.select-glow {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(45deg, #dc143c, #228b22, #ffd700, #dc143c);
    background-size: 400% 400%;
    border-radius: 30px;
    filter: blur(20px);
    opacity: 0.6;
    animation: christmasGlowPulse 3s ease infinite;
    z-index: -1;
}

select {
    width: 400px;
    height: 300px;
    padding: 20px;
    font-size: 1.8rem;
    font-weight: bold;
    border: 5px solid transparent;
    border-radius: 20px;
    background: 
        linear-gradient(135deg, rgba(139, 0, 0, 0.9), rgba(0, 100, 0, 0.9)),
        linear-gradient(45deg, #dc143c, #228b22, #ffd700, #dc143c);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 10px 40px rgba(0, 0, 0, 0.5),
        inset 0 0 30px rgba(255, 215, 0, 0.2);
    text-align: center;
    transform-style: preserve-3d;
}

select:hover {
    transform: translateY(-10px) rotateX(5deg) scale(1.05);
    box-shadow: 
        0 20px 60px rgba(220, 20, 60, 0.5),
        0 0 40px rgba(34, 139, 34, 0.4),
        inset 0 0 40px rgba(255, 215, 0, 0.3);
    animation: giftShake 0.5s ease infinite;
}

select:focus {
    outline: none;
    transform: translateY(-15px) rotateX(5deg) scale(1.08);
}

option {
    background: linear-gradient(135deg, #8b0000, #006400);
    padding: 15px;
    font-size: 1.6rem;
    margin: 5px 0;
    border-radius: 10px;
    transition: all 0.3s ease;
    text-align: center;
}

option:hover {
    background: linear-gradient(135deg, #dc143c, #228b22);
    transform: scale(1.05);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

option:checked {
    background: linear-gradient(135deg, #ffd700, #dc143c, #228b22);
    font-weight: 900;
    text-shadow: 0 0 20px rgba(255, 255, 255, 1);
    animation: unwrapGift 0.5s ease;
}

/* Botón navideño */
button {
    margin-top: 40px;
    padding: 20px 60px;
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #fff;
    background: linear-gradient(135deg, #dc143c, #228b22, #ffd700, #dc143c);
    background-size: 300% 300%;
    border: 4px solid rgba(255, 255, 255, 0.5);
    border-radius: 100px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 10px 30px rgba(220, 20, 60, 0.5),
        0 0 40px rgba(34, 139, 34, 0.3),
        inset 0 0 20px rgba(255, 215, 0, 0.2);
    animation: christmasButtonGlow 3s ease infinite;
    transform-style: preserve-3d;
}

.button-text {
    position: relative;
    z-index: 2;
    display: block;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: width 0.8s ease, height 0.8s ease;
}

button:hover::before {
    width: 500px;
    height: 500px;
}

button:hover {
    transform: translateY(-10px) scale(1.1) rotateX(10deg);
    box-shadow: 
        0 20px 50px rgba(220, 20, 60, 0.8),
        0 0 60px rgba(34, 139, 34, 0.6),
        0 0 80px rgba(255, 215, 0, 0.4),
        inset 0 0 30px rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 1);
    animation: bellRing 0.3s ease infinite;
}

button:active {
    transform: translateY(-5px) scale(1.05);
}

/* Partículas del botón (estrellas navideñas) */
.button-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.particle {
    position: absolute;
    font-size: 1.5rem;
    opacity: 0;
    top: 50%;
    left: 50%;
}

button:hover .particle {
    animation: starExplode 1s ease-out forwards;
}

.particle:nth-child(1) { animation-delay: 0s; }
.particle:nth-child(2) { animation-delay: 0.05s; }
.particle:nth-child(3) { animation-delay: 0.1s; }
.particle:nth-child(4) { animation-delay: 0.15s; }
.particle:nth-child(5) { animation-delay: 0.2s; }
.particle:nth-child(6) { animation-delay: 0.25s; }
.particle:nth-child(7) { animation-delay: 0.3s; }
.particle:nth-child(8) { animation-delay: 0.35s; }
.particle:nth-child(9) { animation-delay: 0.4s; }
.particle:nth-child(10) { animation-delay: 0.45s; }
.particle:nth-child(11) { animation-delay: 0.5s; }
.particle:nth-child(12) { animation-delay: 0.55s; }
.particle:nth-child(13) { animation-delay: 0.6s; }
.particle:nth-child(14) { animation-delay: 0.65s; }
.particle:nth-child(15) { animation-delay: 0.7s; }
.particle:nth-child(16) { animation-delay: 0.75s; }
.particle:nth-child(17) { animation-delay: 0.8s; }
.particle:nth-child(18) { animation-delay: 0.85s; }
.particle:nth-child(19) { animation-delay: 0.9s; }
.particle:nth-child(20) { animation-delay: 0.95s; }

/* Adornos decorativos */
.ornaments {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 30px;
}

.ornament {
    font-size: 3rem;
    animation: ornamentSwing 3s ease-in-out infinite;
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5));
}

.ornament:nth-child(1) { animation-delay: 0s; }
.ornament:nth-child(2) { animation-delay: 0.3s; }
.ornament:nth-child(3) { animation-delay: 0.6s; }
.ornament:nth-child(4) { animation-delay: 0.9s; }

/* ========== ANIMACIONES NAVIDEÑAS ========== */

@keyframes christmasGlow {
    0%, 100% { 
        filter: hue-rotate(0deg) brightness(1); 
    }
    50% { 
        filter: hue-rotate(30deg) brightness(1.2); 
    }
}

@keyframes snowfall {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }
}

@keyframes lightBlink {
    0%, 100% { 
        opacity: 1; 
        transform: scale(1);
    }
    50% { 
        opacity: 0.3; 
        transform: scale(0.9);
    }
}

@keyframes santaBounce {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(10deg);
    }
}

@keyframes christmasColors {
    0%, 100% { 
        background-position: 0% 50%; 
    }
    50% { 
        background-position: 100% 50%; 
    }
}

@keyframes jingleBell {
    0%, 100% { 
        transform: rotateZ(0deg) scale(1.15); 
    }
    25% { 
        transform: rotateZ(-5deg) scale(1.18); 
    }
    75% { 
        transform: rotateZ(5deg) scale(1.18); 
    }
}

@keyframes bowSpin {
    0%, 100% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
}

@keyframes christmasGlowPulse {
    0%, 100% {
        opacity: 0.4;
        transform: scale(1);
        background-position: 0% 50%;
    }
    50% {
        opacity: 0.8;
        transform: scale(1.1);
        background-position: 100% 50%;
    }
}

@keyframes giftShake {
    0%, 100% { 
        transform: translateY(-10px) rotateX(5deg) scale(1.05) rotateZ(0deg); 
    }
    25% { 
        transform: translateY(-10px) rotateX(5deg) scale(1.05) rotateZ(-2deg); 
    }
    75% { 
        transform: translateY(-10px) rotateX(5deg) scale(1.05) rotateZ(2deg); 
    }
}

@keyframes unwrapGift {
    0% { 
        transform: scale(1) rotateY(0deg); 
    }
    50% { 
        transform: scale(1.3) rotateY(180deg); 
    }
    100% { 
        transform: scale(1) rotateY(360deg); 
    }
}

@keyframes christmasButtonGlow {
    0%, 100% { 
        background-position: 0% 50%; 
    }
    50% { 
        background-position: 100% 50%; 
    }
}

@keyframes bellRing {
    0%, 100% { 
        transform: translateY(-10px) scale(1.1) rotateX(10deg) rotateZ(0deg); 
    }
    25% { 
        transform: translateY(-10px) scale(1.1) rotateX(10deg) rotateZ(-3deg); 
    }
    75% { 
        transform: translateY(-10px) scale(1.1) rotateX(10deg) rotateZ(3deg); 
    }
}

@keyframes starExplode {
    0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0) rotate(0deg);
    }
    100% {
        opacity: 0;
        transform: translate(
            calc(-50% + (var(--rand-x, 0.5) - 0.5) * 300px),
            calc(-50% + (var(--rand-y, 0.5) - 0.5) * 300px)
        ) scale(2) rotate(360deg);
    }
}

@keyframes ornamentSwing {
    0%, 100% {
        transform: rotate(-5deg);
    }
    50% {
        transform: rotate(5deg);
    }
}

/* Efectos responsive */
@media (max-width: 768px) {
    .resultado {
        font-size: 2rem;
    }
    
    .santa-hat {
        font-size: 2.5rem;
        top: 20px;
        right: 20px;
    }
    
    select {
        width: 300px;
        font-size: 1.4rem;
    }
    
    button {
        padding: 15px 40px;
        font-size: 1.2rem;
    }
    
    .ornaments {
        bottom: 20px;
        gap: 15px;
    }
    
    .ornament {
        font-size: 2rem;
    }
}
</style>