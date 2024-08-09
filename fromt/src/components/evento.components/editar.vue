<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Evento
      </div>
      <div class="card-body">
        <form @submit.prevent="editarEvento">
          <div class="form-group">
            <label for="nombre">Nombre del Evento:</label>
            <input type="text" class="form-control" required v-model="evento.nombre" id="nombre" placeholder="Nombre del Evento">
          </div>
          <div class="form-group">
            <label for="fecha">Fecha del Evento:</label>
            <input type="date" class="form-control" required v-model="evento.fecha" id="fecha">
          </div>
          <div class="form-group">
            <label for="capacidad">Capacidad de Personas:</label>
            <input type="number" class="form-control" required v-model="evento.capacidad_personas" id="capacidad" placeholder="Capacidad de Personas">
          </div>
          <div class="form-group">
            <label for="ubicacion">Ubicación:</label>
            <input type="text" class="form-control" required v-model="evento.ubicacion" id="ubicacion" placeholder="Ubicación del Evento">
          </div>
          <div class="form-group">
            <label for="organizador">Organizador:</label>
            <input type="text" class="form-control" required v-model="evento.organizador_id" id="organizador" placeholder="Organizador del Evento">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" required v-model="evento.descripcion" id="descripcion" rows="3" placeholder="Descripción del Evento"></textarea>
          </div>
          <div class="form-group">
            <label for="tipo">Tipo de Evento:</label>
            <input type="text" class="form-control" required v-model="evento.tipo_evento_id" id="tipo" placeholder="Tipo de Evento">
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Guardar Cambios</button>
            <router-link to="/eventos" class="btn btn-warning">Cancelar</router-link>
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
  name: 'EditarEvento',
  data() {
    return {
      evento: {
        id: this.$route.params.id,
        nombre: '',
        fecha: '',
        capacidad_personas: '',
        ubicacion: '',
        organizador_id: '',
        descripcion: '',
        tipo_evento_id: ''
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

      // Cargar los datos del evento a editar
      await this.fetchEvento();
    } catch (error) {
      console.error('Error al obtener el token CSRF o el evento:', error);
    }
  },
  methods: {
    async fetchEvento() {
      try {
        const response = await instance.get(`/eventos/${this.evento.id}`);
        this.evento = response.data;
      } catch (error) {
        console.error('Error al obtener el evento:', error);
      }
    },
    async editarEvento() {
      try {
        await instance.put(`/eventos/${this.evento.id}`, this.evento, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        this.$router.push('/eventos');
      } catch (error) {
        console.error('Error al guardar el evento:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo guardar el evento.';

        Swal.fire({
          icon: 'error',
          title: 'Error al guardar el evento',
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
