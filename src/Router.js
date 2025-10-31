import { createRouter, createWebHistory } from "vue-router";
import PadreDeportes from './components/PadreDeportes.vue'
import ComicsComponent from './components/ComicsComponent.vue'
import PadreNumeros from './components/PadreNumeros.vue'
import NumeroDoble from './components/NumeroDoble.vue'
import TablaMultiplicar from './components/TablaMultiplicar.vue'
const myRoutes = [
    {path: '/', component: PadreDeportes},
    {path: '/comics:id?', component: ComicsComponent},
    {path: '/numeros', component: PadreNumeros},
    {path: '/numerodoble/:numero?', component: NumeroDoble},
    {path: '/tablamultiplicar/:num', component: TablaMultiplicar}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;