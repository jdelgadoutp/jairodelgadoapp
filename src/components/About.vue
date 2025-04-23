<template>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <h1>Acerca de Jairo Delgado</h1>
<!--         <router-link :to="{ name: 'irAExterno' }">Ir a Pagar</router-link>
        <p>Id pago: {{ id }}</p>
        <p>Evento: {{ env }}</p> -->
    </div>
</template>


<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();
const params = new URLSearchParams(window.location.search);
const id = params.get('id') ? params.get('id') : 0;
const env = params.get('env') ? params.get('env') : false;
console.log("id: ", id, " env: ", env)

if (id) {
    router.push({ name: 'about' })
}

</script>