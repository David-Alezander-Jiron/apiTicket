<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Agregar Nuevo Personal
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" required v-model="personal.nombre" id="nombre" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el nombre del personal</small>
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" class="form-control" required v-model="personal.apellido" id="apellido" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el apellido del personal</small>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="text" class="form-control" required v-model="personal.telefono" id="telefono" placeholder="Teléfono">
            <small id="helpId" class="form-text text-muted">Escribe el teléfono del personal</small>
          </div>
          <div class="form-group">
            <label for="rol">Rol:</label>
            <input type="text" class="form-control" required v-model="personal.rol" id="rol" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el rol del personal</small>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Agregar</button>
            <router-link to="/personal" class="btn btn-warning">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'AgregarPersonal',
  data() {
    return {
      personal: {
        nombre: '',
        apellido: '',
        telefono: '',
        rol: ''
      },
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
    } catch (error) {
      console.error('Error al obtener el token CSRF:', error);
    }
  },
  methods: {
    async submitForm() {
      try {
        await instance.post('/personal', this.personal, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de que este valor sea correcto
          }
        });
        this.$router.push('/personal');
      } catch (error) {
        console.error('Error al guardar el personal:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo guardar el personal.';

        Swal.fire({
          icon: 'error',
          title: 'Error al guardar el personal',
          text: message
        });
      }
    }
  }
};
</script>


<style scoped>
.container {
  max-width: 600px;
  margin: 20px auto;
}
.card {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #f8f9fa;
  font-size: 1.25rem;
  font-weight: bold;
}
.card-body {
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
.form-text {
  color: #6c757d;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn {
  padding: 10px 20px;
  font-size: 1rem;
}
</style>
