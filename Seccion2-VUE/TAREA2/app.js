Vue.createApp({
    data() {
        return {
        input1:'',
        input2:'',
        }
    },
    methods: {
        alerta() {
            alert('Hiciste Click');
        },
        capturarLetra(event) {
            this.input1 = event.target.value;
        },
        capturarEnter(event) {
            this.input2 = event.target.value;
        }
    }
}).mount('#assignment');