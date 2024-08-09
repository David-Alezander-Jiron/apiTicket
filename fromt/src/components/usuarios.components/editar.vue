<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Usuario
      </div>
      <div class="card-body">
        <form @submit.prevent="actualizarUsuario">
          <div class="form-group">
            <label for="nombres">Nombres</label>
            <input type="text" v-model="usuario.nombres" class="form-control" id="nombres" required />
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" v-model="usuario.apellidos" class="form-control" id="apellidos" required />
          </div>
          <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input type="email" v-model="usuario.correo" class="form-control" id="correo" required />
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono</label>
            <input type="text" v-model="usuario.telefono" class="form-control" id="telefono" required />
          </div>
          <div class="form-group">
            <label for="estado">Estado</label>
            <select v-model="usuario.estado" class="form-control" id="estado" required>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
              <option value="eliminado">Eliminado</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Guardar Cambios</button>
          <router-link to="/usuarios" class="btn btn-secondary">Cancelar</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'EditarUsuario',
  data() {
    return {
      usuario: {
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',
        estado: 'activo'
      },
      csrfToken: ''
    };
  },
  async created() {
    try {
      // Obtener el token CSRF del backend
      const response = await instance.get('/');
      this.csrfToken = response.data.csrfToken;
      // Configurar el token CSRF en Axios
      instance.defaults.headers['X-CSRF-Token'] = this.csrfToken;

      // Cargar los datos del usuario
      const usuarioId = this.$route.params.id;
      const userResponse = await instance.get(`/usuarios/${usuarioId}`);
      this.usuario = userResponse.data;
    } catch (error) {
      console.error('Error al obtener el token CSRF o los datos del usuario:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al cargar los datos del usuario'
      });
      this.$router.push('/usuarios');
    }
  },
  methods: {
    async actualizarUsuario() {
      try {
        const usuarioId = this.$route.params.id;
        await instance.put(`/usuarios/${usuarioId}`, this.usuario, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Usuario actualizado correctamente'
        });
        this.$router.push('/usuarios');
      } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo actualizar el usuario.';

        Swal.fire({
          icon: 'error',
          title: 'Error',
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
