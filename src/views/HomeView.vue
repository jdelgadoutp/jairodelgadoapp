<script setup>
</script>

<template>
  <div class="bg-white text-black dark:bg-gray-900 dark:text-white p-6">
    Modo claro y oscuro en Tailwind CSS
  </div>
  <nav class="w-full flex justify-between p-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    <img src="@/assets/logoblanco.png" alt="logo" class="logo ml-2 aspect-3/2 ...">
    <ul class="flex space-x-4 menu">
      <li><a href="#" class="hover:text-teal-400">Inicio</a></li>
      <li><a href="#" class="hover:text-teal-400">Acerca de</a></li>
      <li><a href="#" class="hover:text-teal-400">Servicios</a></li>
      <li><a href="#" class="hover:text-teal-400">Proyectos</a></li>
      <li><a href="#" class="hover:text-teal-400">Contacto</a></li>
    </ul>
  </nav>
  <div class="w-full flex justify-start p-5 bg-white dark:bg-gray-800">
    <img src="@/assets/bannerdark.png" alt="json" class="banner">
  </div>
  <section class="h-screen flex items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    <div class="text-center">
      <h1 class="text-5xl font-bold">👨‍💻 Ing. Jairo Andrés Delgado López</h1>
      <p class="text-gray-400 mt-2">Desarrollo | Infraestructura | Seguridad IT</p>
      <button class="mt-5 px-6 py-3 bg-teal-200 hover:bg-teal-400 rounded-lg transition">Ver Portafolio</button>
    </div>


  </section>

</template>

<style scoped>
.logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  align-items: center;
  margin-left: 50px;
  margin-top: 0;
  text-align: center;
}

.menu {
  margin-right: 50px;
  margin-top: 20px;
}

.banner {
  margin-top: 0;
  margin-left: 150px;
  width: 800px;
}
</style>
