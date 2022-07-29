Vue.createApp({
    data() {
        return {
            arreglo: [],
            input: '',
            mostrar: true,
            boton: 'Ocultar Lista'
        }
    },
    methods: {
        capturarDatos() {
            this.arreglo.push(this.input); //va añadiendo los datos al arreglo
            console.log(this.arreglo);
        },
        mostrarOcultar() {
            if(this.mostrar == false) {
                this.mostrar = true;
                this.boton = 'Ocultar Lista';
            } else {
                this.mostrar = false;
                this.boton = 'Mostrar Lista';
            }
        },
    }

}).mount('#assignment');