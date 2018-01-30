import Vue from 'vue/dist/vue.js'
import HelloWord from './components/HelloWord.vue'

new Vue({
    el:"#app",
    render: h => h(HelloWord)
})