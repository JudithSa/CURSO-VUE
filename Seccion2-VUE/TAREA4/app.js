Vue.createApp({
    data() {
        return {
            input: '',
            Botonvisible: true,
            color: 'background-color: ',
            visible: 'visible',
            input2: '',
        }
    },
    methods: {
        capturarLetra(event) {
            this.input = event.target.value;
        }, 
        botonAparecer(event) {
            this.Botonvisible= !this.Botonvisible //cambia el valor de true o false
            if(this.Botonvisible == true) {
                this.visible = 'visible';
            } else {
                this.visible = 'hidden';
            }
        }, 
        cambiarColor(event) {
            this.input2 = event.target.value;
            this.color = 'background-color: ' + this.input2;
            console.log(this.input2);
        }
    }
}).mount('#assignment');