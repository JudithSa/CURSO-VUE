<template>
<active-user v-bind="usuario"></active-user>
<label for="nombre">
    Nombre:
</label>
    <input @keydown="capturarNombre" type="text" name="nombre" title="nombre">
<br><br>
<label for="años">
    Edad:
</label>
    <input @keydown="capturarAños" type="text" name="años" title="años">
</template>

<script>
export default {
    data() {
        return {
            usuario: {
                nombre:'',
                edad: 0,
            }
        }
    },
    methods: {
        capturarNombre(event){
            this.usuario.nombre = event.target.value;
            console.log(this.usuario.nombre);
        },
        capturarAños(event) {
            this.usuario.edad = event.target.value;
            console.log(this.usuario.edad);
        }
    }
}
</script>
