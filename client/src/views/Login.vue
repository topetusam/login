<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center text-white">
    <h1 class="font-poppins font-bold mb-10 text-3xl mr-60">Log in</h1>
    <!-- Otros elementos del formulario se mantienen sin funcionalidad -->

    <!-- Botones de login con los enlaces de autenticación -->
    <div class="flex flex-row mb-32 gap-x-4">
      <button
        class="border border-slate-0 rounded-lg px-11 py-4 w-28 bg-color1 bg-white"
        @click="loginWithProvider('facebook')"
      >
        <img class="w-6" :src="facebookImg" />
      </button>
      <button
        class="border border-slate-0 rounded-lg px-11 py-4 w-28 bg-color1 bg-white"
        @click="loginWithProvider('google')"
      >
        <img class="w-6" :src="googleImg" />
      </button>
      <button
        class="border border-slate-0 rounded-lg px-11 py-4 w-28 bg-color1 bg-white"
        @click="loginWithProvider('discord')"
      >
        <img class="w-6" :src="appleImg" />
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

import googleImg from "../assets/img/google.svg";
import facebookImg from "../assets/img/facebook.svg";
import appleImg from "../assets/img/apple.png";

export default {
  setup() {
    const router = useRouter();

    // Función para redirigir a la ruta de autenticación
    const loginWithProvider = (provider) => {
      const providerUrls = {
        facebook: "http://login-chi-pearl.vercel.app/auth/facebook",
        google: "http://login-chi-pearl.vercel.app/auth/google",
        discord: "http://login-chi-pearl.vercel.app/auth/discord",
      };
      // Redirige a la ruta del proveedor correspondiente
      window.location.href = providerUrls[provider];
    };

    return {
      googleImg,
      facebookImg,
      appleImg,
      loginWithProvider,
    };
  },
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
