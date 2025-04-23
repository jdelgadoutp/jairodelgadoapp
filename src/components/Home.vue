<template>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
                class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Es el presente. Innovar, automatizar y evolucionar
                para liderar la era digital. <Router-link :to="'/contact'" class="font-semibold text-indigo-600"><span
                        class="absolute inset-0" aria-hidden="true" />Más Información <span
                        aria-hidden="true">&rarr;</span></Router-link>
            </div>
        </div>
        <div class="text-center">
            <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Jairo
                Andrés Delgado López.</h1>
            <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Ingeriero de Sistemas y
                Computación</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <Router-link :to="'/services'"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ver
                    Portafolio</Router-link>
                <RouterLink :to="'/contact'" class="text-sm/6 font-semibold text-gray-900">Más Información
                    <span aria-hidden="true">→</span>
                </RouterLink>
            </div>
        </div>
    </div>

</template>

<script>
import { RouterLink } from 'vue-router';




</script>