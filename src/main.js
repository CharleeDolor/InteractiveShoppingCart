import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
//injecting a global variable named searchItems
app.config.globalProperties.$searchItems = [
    { name: "A4-tech Keyboard", price: 300 },
    { name: "A4-tech webcam", price: 420 },
    { name: "Asus Prime A320M-K Motherboard", price: 1700 },
    { name: "MSI B550M PRO-VDH WIFI Motherboard", price: 4300 },
    { name: "Biostar RX 5700 XT", price: 9300 },
    { name: "Gigabyte Eagle RX 6600", price: 12995 },
    { name: "NVIDIA RTX 4090", price: 120000 },
    { name: "NVIDIA RTX 4060 Super", price: 28000 }
];
app.config.globalProperties.$addedToCart= [];

app.use(router).mount('#app')