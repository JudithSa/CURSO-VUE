Vue.createApp({
    data() {
        return {
            name:'Judith',
            age: 21,
            link: 'https://www.aquariumcostadealmeria.com/wp-content/uploads/2019/12/pez-betta.jpg',
            random: Math.random(),
        }
    },
    methods: {
        calcularNum(){
            return  Math.random();
        }
    }
}).mount('#assignment');