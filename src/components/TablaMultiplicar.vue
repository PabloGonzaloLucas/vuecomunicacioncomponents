<template>
  <div class="game-container">
    <div class="pixel-stars"></div>
    <div class="game-hud">
      <div class="score">SCORE: {{ totalScore }}</div>
      <div class="level">LVL: {{ $route.params.num }}</div>
    </div>
    <div class="game-title">🎮 MULTIPLICATION ARCADE 🕹️</div>
    <table>
        <thead>
            <tr>
                <th>⚔️ OPERACION</th>
                <th>💎 RESULTADO</th>
            </tr>
        </thead>
        <tbody v-html="genTabla">
        </tbody>
    </table>
    <div class="game-footer">PRESS START TO CONTINUE</div>
  </div>
</template>

<script>
export default {
    name:"TablaMultiplicar",
    data(){
        return{

        }
    },
    computed:{
        genTabla(){
            var numero = this.$route.params.num
            var multiplicacionesCopia = [];
            
            for(var i=1; i<10; i++){
                var multiplicacion = "<tr><td>"+numero + "*" + i+"</td><td>"+numero * i+"</td></tr>"
                multiplicacionesCopia.push(multiplicacion)
            }
            multiplicacionesCopia.push(`</tbody></table>`)
            return multiplicacionesCopia.join(" ");
        },
        totalScore(){
            var numero = this.$route.params.num
            var total = 0;
            for(var i=1; i<10; i++){
                total += numero * i;
            }
            return total;
        }
    },
    watch:{
        '$route.params.num'(nextVal, oldVal){
            if(nextVal != oldVal){
                this.genTabla
            }
        }
    }
    
}
</script>

<style scoped>
/* Importar fuente pixelada de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.game-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: 
        /* Patrón de píxeles */
        repeating-linear-gradient(
            0deg,
            #0f0f23 0px,
            #0f0f23 2px,
            #1a1a3e 2px,
            #1a1a3e 4px
        ),
        repeating-linear-gradient(
            90deg,
            #0f0f23 0px,
            #0f0f23 2px,
            #1a1a3e 2px,
            #1a1a3e 4px
        ),
        /* Fondo espacial */
        radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(0, 191, 255, 0.3) 0%, transparent 50%),
        linear-gradient(180deg, #0a0a1f 0%, #1a0f2e 50%, #0f0523 100%);
    padding: 40px 20px;
    font-family: 'Press Start 2P', 'Courier New', monospace;
    position: relative;
    overflow: hidden;
}

/* Estrellas píxeles de fondo */
.pixel-stars {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(2px 2px at 20% 30%, white, transparent),
        radial-gradient(2px 2px at 60% 70%, white, transparent),
        radial-gradient(1px 1px at 50% 50%, white, transparent),
        radial-gradient(1px 1px at 80% 10%, white, transparent),
        radial-gradient(2px 2px at 90% 60%, white, transparent),
        radial-gradient(1px 1px at 33% 50%, white, transparent),
        radial-gradient(2px 2px at 75% 25%, white, transparent);
    background-size: 200% 200%, 200% 200%, 300% 300%, 250% 250%, 400% 400%, 350% 350%, 180% 180%;
    background-position: 0% 0%;
    animation: starMove 120s linear infinite;
    opacity: 0.7;
}

/* HUD del juego (cabecera) */
.game-hud {
    position: absolute;
    top: 20px;
    width: 90%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    z-index: 100;
}

.score, .level {
    padding: 15px 25px;
    background: rgba(0, 0, 0, 0.8);
    border: 4px solid #00ff41;
    box-shadow: 
        0 0 20px rgba(0, 255, 65, 0.6),
        inset 0 0 20px rgba(0, 255, 65, 0.1);
    color: #00ff41;
    font-size: 0.8rem;
    letter-spacing: 2px;
    animation: hudBlink 2s ease-in-out infinite;
    text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
}

.level {
    border-color: #ff00ff;
    color: #ff00ff;
    box-shadow: 
        0 0 20px rgba(255, 0, 255, 0.6),
        inset 0 0 20px rgba(255, 0, 255, 0.1);
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.8);
}

/* Título del juego */
.game-title {
    font-size: 1.5rem;
    color: #ffff00;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 80px;
    text-shadow: 
        3px 3px 0 #ff00ff,
        6px 6px 0 #00ffff,
        0 0 20px rgba(255, 255, 0, 0.8);
    animation: titlePulse 1.5s ease-in-out infinite;
    letter-spacing: 3px;
    filter: drop-shadow(0 0 30px rgba(255, 255, 0, 0.6));
}

/* Tabla estilo arcade */
table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    max-width: 700px;
    background: rgba(0, 0, 0, 0.85);
    border: 6px solid #00ffff;
    box-shadow: 
        0 0 40px rgba(0, 255, 255, 0.8),
        inset 0 0 40px rgba(0, 255, 255, 0.1),
        0 20px 60px rgba(0, 0, 0, 0.8);
    position: relative;
    animation: tableGlitch 0.1s infinite;
    image-rendering: pixelated;
}

/* Efecto de pantalla CRT */
table::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        repeating-linear-gradient(
            0deg,
            rgba(0, 255, 255, 0.03) 0px,
            transparent 2px,
            transparent 4px
        );
    pointer-events: none;
    z-index: 10;
    animation: scanline 8s linear infinite;
}

/* Borde parpadeante tipo neón */
table::after {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00, #00ffff);
    background-size: 400% 400%;
    z-index: -1;
    animation: neonBorder 3s linear infinite;
    filter: blur(10px);
}

thead {
    background: linear-gradient(135deg, #8b00ff 0%, #ff0080 100%);
    color: white;
    position: relative;
}

/* Línea animada estilo juego retro */
thead::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: repeating-linear-gradient(
        90deg,
        #00ff00 0px,
        #00ff00 10px,
        #ffff00 10px,
        #ffff00 20px,
        #ff0000 20px,
        #ff0000 30px
    );
    animation: powerUpSlide 1s linear infinite;
}

th {
    padding: 20px;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: normal;
    text-shadow: 
        2px 2px 0 #000,
        0 0 20px rgba(255, 255, 255, 0.5);
    position: relative;
}

tbody {
    background: 
        linear-gradient(to bottom, rgba(0, 20, 40, 0.95), rgba(0, 0, 20, 0.95));
}

tbody :deep(tr) {
    transition: all 0.2s ease;
    position: relative;
    border-bottom: 2px solid rgba(0, 255, 255, 0.2);
}

tbody :deep(tr):nth-child(odd) {
    background: rgba(138, 43, 226, 0.1);
}

tbody :deep(tr):nth-child(even) {
    background: rgba(0, 191, 255, 0.1);
}

tbody :deep(tr):hover {
    background: linear-gradient(90deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3));
    transform: scale(1.05) translateX(10px);
    box-shadow: 
        0 0 30px rgba(0, 255, 255, 0.6),
        inset 0 0 20px rgba(255, 0, 255, 0.3);
    border-bottom: 2px solid #00ffff;
    animation: rowBlink 0.5s ease infinite;
}

tbody :deep(td) {
    padding: 18px 25px;
    font-size: 1rem;
    color: #00ff41;
    font-weight: normal;
    transition: all 0.2s ease;
    position: relative;
    text-shadow: 0 0 10px rgba(0, 255, 65, 0.6);
}

/* Primera columna (operación) - estilo código */
tbody :deep(td:first-child) {
    color: #00ffff;
    font-family: 'Press Start 2P', monospace;
    font-size: 1.1rem;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

/* Segunda columna (resultado) - estilo power-up */
tbody :deep(td:last-child) {
    color: #ffff00;
    font-weight: normal;
    font-size: 1.3rem;
    text-align: right;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 0, 0.1));
    text-shadow: 
        2px 2px 0 #ff00ff,
        0 0 20px rgba(255, 255, 0, 1);
}

tbody :deep(td:last-child::before) {
    content: '💎';
    position: absolute;
    left: 10px;
    font-size: 1.2rem;
    animation: coinSpin 2s linear infinite;
}

tbody :deep(tr:hover td) {
    animation: textGlitch 0.3s ease infinite;
}

tbody :deep(tr:hover td:last-child) {
    color: #ff00ff;
    transform: scale(1.15);
    text-shadow: 
        2px 2px 0 #00ffff,
        0 0 30px rgba(255, 0, 255, 1);
}

/* Footer estilo arcade */
.game-footer {
    margin-top: 30px;
    padding: 15px 30px;
    background: rgba(0, 0, 0, 0.8);
    border: 3px solid #ff00ff;
    color: #ff00ff;
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-align: center;
    box-shadow: 
        0 0 20px rgba(255, 0, 255, 0.6),
        inset 0 0 20px rgba(255, 0, 255, 0.1);
    animation: pressStart 1.5s ease-in-out infinite;
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.8);
}

/* ========== ANIMACIONES RETRO ========== */

@keyframes starMove {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 100%;
    }
}

@keyframes hudBlink {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
}

@keyframes titlePulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

@keyframes tableGlitch {
    0%, 90%, 100% {
        transform: translate(0, 0);
    }
    95% {
        transform: translate(2px, 0);
    }
}

@keyframes scanline {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 100%;
    }
}

@keyframes neonBorder {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes powerUpSlide {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 30px 0;
    }
}

@keyframes rowBlink {
    0%, 100% {
        box-shadow: 
            0 0 30px rgba(0, 255, 255, 0.6),
            inset 0 0 20px rgba(255, 0, 255, 0.3);
    }
    50% {
        box-shadow: 
            0 0 50px rgba(0, 255, 255, 1),
            inset 0 0 30px rgba(255, 0, 255, 0.5);
    }
}

@keyframes coinSpin {
    0%, 100% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(180deg);
    }
}

@keyframes textGlitch {
    0%, 90%, 100% {
        transform: translate(0, 0);
    }
    95% {
        transform: translate(1px, -1px);
    }
}

@keyframes pressStart {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .game-title {
        font-size: 0.9rem;
        margin-top: 100px;
    }
    
    .score, .level {
        padding: 10px 15px;
        font-size: 0.6rem;
    }
    
    table {
        max-width: 95%;
    }
    
    th {
        padding: 15px 10px;
        font-size: 0.7rem;
    }
    
    tbody :deep(td) {
        padding: 12px 15px;
        font-size: 0.8rem;
    }
    
    tbody :deep(td:first-child) {
        font-size: 0.85rem;
    }
    
    tbody :deep(td:last-child) {
        font-size: 1rem;
    }
    
    .game-footer {
        font-size: 0.5rem;
    }
}
</style>