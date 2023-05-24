import { createApp } from 'vue'
import './scss/main.sass'
import 'vue-toastification/dist/index.css';
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import pinia from './plugins/pinia'
import Toast from './plugins/vue-toastification'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(pinia)
app.use(Toast)
app.mount('#app')
