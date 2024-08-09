<template>
  <div class="background">
    <h2>Editar Usuario</h2>
    <form @submit.prevent="updateUser">
      <label>Nombre:</label>
      <input v-model="usuario.nombres" type="text" required>
      <label>Apellidos:</label>
      <input v-model="usuario.apellidos" type="text" required>
      <label>Correo Electrónico:</label>
      <input v-model="usuario.correo" type="email" required>
      <label>Teléfono:</label>
      <input v-model="usuario.telefono" type="text" required>
      <label>Estado:</label>
      <select v-model="usuario.estado" required>
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
        <option value="eliminado">Eliminado</option>
      </select>
      <div class="button-group">
        <button type="submit" class="action-btn">Actualizar</button>
        <button type="button" class="cancel-btn" @click="cancelEdit">Cancelar</button>
      </div>
    </form>
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
    async updateUser() {
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
    },
    cancelEdit() {
      this.$router.push('/usuarios');
    }
  }
};
</script>

<style scoped>
.background {
  border: 1px solid black;
  padding: 20px;
  max-width: 800px; /* Ajusta el ancho máximo según tu preferencia */
  margin: 80px auto; /* Centra horizontalmente */
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input, select {
  padding: 5px;
  margin-top: 5px;
}

.button-group {
  display: flex;
  justify-content: center; /* Centra los botones en el contenedor */
  gap: 10px; /* Ajusta el espacio entre los botones */
  margin-top: 20px;
}

.action-btn, .cancel-btn {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #f44336;
}

.cancel-btn:hover {
  background-color: #d32f2f;
}

.action-btn:hover {
  background-color: #0b7dda;
}
</style>
