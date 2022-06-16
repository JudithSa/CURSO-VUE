Vue.createApp({
    data() {
        return {
            num:0,
            cadena: 'Todavia no Llegamos',
        }
    },
    watch: {
        num(value){
            if(value > 37) {
                this.cadena='Ya nos Pasamos'; 
                const that = this;
                setTimeout(() => {
                    that.num = 0;
                }, 5000);
            } else {
                this.cadena='Todavia no Llegamos';
            }
        }
    },
    methods: {
        sumar5() {
            this.num += 5;
        },
        sumar1() {
            this.num += 1;
        }
    }

}).mount('#assignment');
