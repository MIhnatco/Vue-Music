import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './includes/validation'

import App from './App.vue'
import router from './router'

import Icon from './directives/Icon'
import i18n from './includes/i18n'
import { registerSW} from 'virtual:pwa-register';

import GlobalComponents from './includes/_globals'

import './assets/base.css'
import './assets/main.css'


import {auth}  from './includes/firebase'
registerSW({immediate: true})
let app;

auth.onAuthStateChanged(() => {
    if(!app){

        app = createApp(App)
    
        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin)
        app.use(i18n)
        app.use(GlobalComponents)
        app.directive('icon', Icon)
        
        app.mount('#app')
    }
})


