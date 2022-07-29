<template>
    <h2>Name: {{nombre}}</h2>
    <h3>Age: {{edad}}</h3>
</template>

<script>

export default {
    props: [
        'nombre','edad'
    ],
    data() {
        return {
            name:'Yuyis',
            age:15,
        }
    }
}
</script>
