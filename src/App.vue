<script setup>
import { onMounted, reactive, ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/20/solid'

const show = ref(false)

const form = reactive({})

const key = 'userData'

const deviceTypes = [
    { id: '1', title: 'Browser' },
    { id: '2', title: 'Hardphone/Softphone' },
    { id: '3', title: 'Mobile Phone/Other' },
]

function onSubmit() {
    chrome.storage.local.set({ 
        userData: {
            username: form.username,
            ciscoExtension: form.ciscoExtension,
            remoteExtension: form.remoteExtension,
            deviceType: form.deviceType
        }
    }).then(() => {
        console.log("userData is set to " + form.userData)

        show.value = true
    })
}

onMounted(() => {
    loadUserData()
})

function loadUserData() {
    chrome.storage.local.get(["userData"]).then((result) => {
        if (! result.userData) return console.log("userData not found")

        console.log("userData currently is", result.userData)

        form.username = result.userData.username

        form.ciscoExtension = result.userData.ciscoExtension

        form.remoteExtension = result.userData.remoteExtension

        form.deviceType = result.userData.deviceType
    })
}

</script>
<template>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
        <form @submit.prevent="onSubmit">
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Agent Settings</h2>
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                        <div>
                            <label class="text-base font-semibold text-gray-900">Device Type</label>
                            <p class="text-sm text-gray-500">Select a preferred device type</p>
                            <fieldset class="mt-4">
                                <legend class="sr-only">Notification method</legend>
                                <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                    <div v-for="deviceType in deviceTypes" :key="deviceType.id" class="flex items-center">
                                        <input 
                                            @click="form.deviceType = deviceType.id" 
                                            :id="deviceType.id" name="notification-method" type="radio" :checked="deviceType.id == form.deviceType" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" 
                                        />
                                        <label 
                                            @click="form.deviceType = deviceType.id" 
                                            :for="deviceType.id" class="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                        >{{ deviceType.title }}</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <template v-if="form.deviceType == 1">
                            <div>
                                <label class="text-base font-semibold text-gray-900">CTI Port</label>
                                <p class="text-sm text-gray-500">Enter your CTI Port number</p>
                                <div class="mt-2">
                                    <input v-model="form.ciscoExtension" type="text" id="ciscoExtension" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label class="text-base font-semibold text-gray-900">WebRTC Extension</label>
                                <p class="text-sm text-gray-500">Enter your WebRTC extension</p>
                                <div class="mt-2">
                                    <input v-model="form.remoteExtension" type="text" id="remoteExtension" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </template>
                        <template v-if="form.deviceType == 2">
                            <div>
                                <label class="text-base font-semibold text-gray-900">Cisco Extension</label>
                                <p class="text-sm text-gray-500">Enter your Cisco extension</p>
                                <div class="mt-2">
                                    <input v-model="form.ciscoExtension" type="text" id="ciscoExtension" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </template>
                        <template v-if="form.deviceType == 3">
                            <div>
                                <label class="text-base font-semibold text-gray-900">CTI Port</label>
                                <p class="text-sm text-gray-500">Enter your CTI Port number</p>
                                <div class="mt-2">
                                    <input v-model="form.ciscoExtension" type="text" id="ciscoExtension" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label class="text-base font-semibold text-gray-900">Mobile/Other Extension</label>
                                <p class="text-sm text-gray-500">Enter your extension</p>
                                <div class="mt-2">
                                    <input v-model="form.remoteExtension" type="text" id="remoteExtension" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button @click="loadUserData" type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    </div>
    <!-- Global notification live region, render this permanently at the end of the document -->
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div class="flex w-full h-full flex-col items-center space-y-4">
            <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
            <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="show" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium text-gray-900">Successfully saved!</p>
                                <p class="mt-1 text-sm text-gray-500">These settings will be used when logging in to the agent desktop.</p>
                            </div>
                            <div class="ml-4 flex flex-shrink-0">
                                <button type="button" @click="show = false" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>