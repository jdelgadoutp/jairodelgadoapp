<template>
    <Popover class="relative">
        <PopoverButton
            class="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            <span>Servicios</span>
            <ChevronDownIcon class="size-5" aria-hidden="true" />
        </PopoverButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel v-slot="{ close }" class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div
                    class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                    <div class="p-4">
                        <div v-for="item in solutions" :key="item.name"
                            class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                            <div
                                class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <component :is="item.icon" class="size-6 text-gray-600 group-hover:text-indigo-600"
                                    aria-hidden="true" />
                            </div>
                            <div>
                                <RouterLink :to="item.path" class="font-semibold text-gray-900" @click="close">
                                    {{ item.name }}
                                    <span class="absolute inset-0" />
                                </RouterLink>
                                <p class="mt-1 text-gray-600">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        <RouterLink v-for="item in callsToAction" :key="item.name" :to="item.path" @click="close"
                            class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                            <component :is="item.icon" class="size-5 flex-none text-gray-400" aria-hidden="true" />
                            {{ item.name }}
                        </RouterLink>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, PlayCircleIcon, } from '@heroicons/vue/20/solid'
import {
    ArrowPathIcon,
    ComputerDesktopIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    UserIcon,
    FolderIcon,
} from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

const solutions = [
    { name: 'Software', description: 'Desarrollo FullStack', path: '/services', icon: ComputerDesktopIcon },
    { name: 'Bases de datos', description: 'Bases de datos SQL, NoSQL', path: '/', icon: FolderIcon },
    { name: 'Seguridad', description: "Los datos de sus clientes estarán seguros y protegidos", href: '/', icon: FingerPrintIcon },
    { name: 'Integraciones', description: 'Conectarse con herramientas de terceros', path: '/', icon: SquaresPlusIcon },
    { name: 'Automatomatizaciones', description: 'Construya embudos estratégicos que convertirán', path: '/', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Ver demostración', path: '/contact', icon: PlayCircleIcon },
    { name: 'Contacto', path: '/contact', icon: UserIcon },
]
</script>