<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">¡Bienvenido, Usuario!</h1>
    <p class="mt-4 text-lg">Has iniciado sesión correctamente.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Usuario", // Valor por defecto
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const response = await fetch("http://login-chi-pearl.vercel.app/auth/user", {
          credentials: "include", // Incluye la cookie de sesión
        });
        if (response.ok) {
          const data = await response.json();
          this.username = data.displayName || "Usuario"; // Actualiza el nombre de usuario
        } else {
          console.error("No estás autenticado");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales */
</style>
