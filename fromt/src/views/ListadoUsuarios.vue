<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Lista de Usuarios
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.nombres }}</td>
              <td>{{ usuario.apellidos }}</td>
              <td>{{ usuario.correo }}</td>
              <td>{{ usuario.telefono }}</td>
              <td>{{ usuario.estado }}</td>
              <td>
                <router-link :to="`/usuarios/editar/${usuario.id}`" class="btn btn-warning">Editar</router-link>
                <button @click="eliminarUsuario(usuario.id)" class="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'ListarUsuarios',
  data() {
    return {
      usuarios: [],
      csrfToken: ''
    };
  },
  async mounted() {
    try {
      // Obtén el token CSRF del backend
      const response = await instance.get('/');
      this.csrfToken = response.data.csrfToken;
      // Configura el token CSRF en Axios
      instance.defaults.headers['X-CSRF-Token'] = this.csrfToken;

      // Cargar la lista de usuarios
      await this.fetchUsuarios();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los usuarios:', error);
    }
  },
  methods: {
    async fetchUsuarios() {
      try {
        const response = await instance.get('/usuarios');
        this.usuarios = response.data;
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    },
    async eliminarUsuario(id) {
      try {
        await instance.delete(`/usuarios/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchUsuarios(); // Recargar la lista de usuarios después de eliminar
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo eliminar el usuario.';

        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el usuario',
          text: message
        });
      }
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
