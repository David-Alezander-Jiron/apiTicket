<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Personal
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
            <button type="submit" class="btn btn-success">Guardar</button>
            <router-link to="/personal" class="btn btn-warning">Cancelar</router-link>
          </div>
        </form>
        <div v-if="mensajeExito" class="mensaje-centro">
          <div class="mensaje-contenido">
            <img :src="imagenExito" alt="" class="mensaje-imagen">
            <p>Editado correctamente!!</p>
            <button @click="ocultarMensaje" class="btn btn-primary">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'EditarPersonal',
  data() {
    return {
      personal: {
        nombre: '',
        apellido: '',
        telefono: '',
        rol: ''
      },
      csrfToken: '',
      mensajeExito: false,
      imagenExito: '' // Asegúrate de que esta imagen esté disponible
    };
  },
  async mounted() {
    try {
      // Obtén el token CSRF del backend
      const response = await instance.get('/');
      this.csrfToken = response.data.csrfToken;
      // Configura el token CSRF en Axios
      instance.defaults.headers['X-CSRF-Token'] = this.csrfToken;

      // Obtén los datos del personal para editar
      const id = this.$route.params.id;
      const personalResponse = await instance.get(`/personal/${id}`);
      this.personal = personalResponse.data;
    } catch (error) {
      console.error('Error al obtener el token CSRF o los datos del personal:', error);
    }
  },
  methods: {
    async submitForm() {
      try {
        const id = this.$route.params.id;
        await instance.put(`/personal/${id}`, this.personal, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de que este valor sea correcto
          }
        });
        this.mensajeExito = true;
        setTimeout(() => {
          this.$router.push('/personal');
        }, 2000); // Redirige después de mostrar el mensaje
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
    },
    ocultarMensaje() {
      this.mensajeExito = false;
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
.mensaje-centro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.mensaje-contenido {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.mensaje-imagen {
  width: 50px;
  height: 50px;
}
.alert {
  text-align: center;
}
</style>
