const app = new Vue({

    el: '#app',
    data: {

        titulo: 'Hola Mundo con VUE',
        frutas: [
            { nombre: 'pera', cantidad: '10' },
            { nombre: 'manzana', cantidad: '0' },
            { nombre: 'fresa', cantidad: '10' }
        ],
        nuevaFruta: ''

    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
        }
    }

})