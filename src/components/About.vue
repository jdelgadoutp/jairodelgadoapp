<template>
    <div class="mx-auto max-w-6xl py-15 sm:py-15 lg:py-15 prose lg:prose-sm sm:prose-sx">
        <div class="grid md:grid-cols-1 sm:grid-cols-1 sx:grid-cols-1 gap-4">
            <div class="justify-items-center">
                <section>
                    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                            <div>
                                <div class="max-w-lg md:max-w-none">
                                    <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                        Hola! Soy Jairo Andrés Delgado López
                                    </h2>

                                    <p class="mt-4 text-gray-700 text-justify">
                                        Busco desarrollo profesional en un entorno donde pueda aportar mi experiencia,
                                        formación y conocimientos en tecnología, desarrollo de software y automatización
                                        de procesos, con una visión integral orientada a la mejora operativa y a la
                                        generación de valor a través de soluciones digitales. Me especializo en el
                                        diseño e implementación de sistemas que optimizan flujos de trabajo, mejoran la
                                        eficiencia y fortalecen la capacidad tecnológica de las organizaciones,
                                        aplicando buenas prácticas, pensamiento estructurado y una actitud proactiva.
                                    </p>

                                    <p class="text-justify">
                                        Apasionado por la innovación, el aprendizaje continuo y el uso responsable de la
                                        tecnología para generar impacto positivo, tanto dentro de los equipos de trabajo
                                        como en el entorno empresarial. Poseo experiencia en proyectos del sector
                                        privado enfocados en transformación digital, integración de sistemas y
                                        modernización de plataformas, con el compromiso de contribuir al logro de
                                        objetivos estratégicos desde el conocimiento técnico, la ética profesional y el
                                        trabajo en equipo.
                                    </p>
                                    <h3>Ingeniero de Sistemas y Computación</h3>
                                    <h4>Universidad Tecnologíca de Pereira UTP</h4>
                                </div>
                            </div>

                            <div class="justify-items-center">
                                <img src="@/assets/perfil1.jpg" class="rounded w-full h-130 object-cover" alt="" />

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

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