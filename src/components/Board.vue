<script setup>
import { ref } from "vue";

const kpis = [
    { title: "Ventas Totales", value: "$35,400", growth: "8%" },
    { title: "Clientes Nuevos", value: "120", growth: "12%" },
    { title: "Órdenes Completadas", value: "980", growth: "5%" },
];

const chartData = ref([65, 70, 75, 80, 90, 85, 100]);
</script>

<template>
    <div class="mx-auto max-w-5xl py-0 sm:py-20 lg:py-20">
        <div class="min-h-scree p-4">
            <!-- Header -->
            <header class="mb-6">
                <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p class="text-sm text-gray-600">Resumen de métricas clave</p>
            </header>

            <!-- KPI Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div v-for="(kpi, index) in kpis" :key="index" class="bg-white-200 shadow rounded-lg p-4">
                    <h2 class="text-lg font-semibold text-gray-700">{{ kpi.title }}</h2>
                    <p class="text-2xl font-bold text-blue-500">{{ kpi.value }}</p>
                    <p class="text-sm" :class="{
                        'text-green-500': parseFloat(kpi.growth) > 0,
                        'text-red-500': parseFloat(kpi.growth) < 0,
                    }">
                        Crecimiento: {{ kpi.growth }}
                    </p>
                </div>
            </div>

            <!-- Chart Section -->
            <div class="bg-white-200 shadow rounded-lg p-4">
                <h2 class="text-lg font-semibold text-gray-700 mb-4">Gráfico de Ventas</h2>
                <div class="h-48 flex items-center justify-center bg-blue-50 rounded">
                    <p class="text-gray-500">[Aquí se puede agregar un gráfico]</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* Estilos adicionales si los necesitas */
</style>
