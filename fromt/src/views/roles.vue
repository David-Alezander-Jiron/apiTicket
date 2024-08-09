<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Crear Rol
      </div>
      <div class="card-body">
        <form @submit.prevent="crearRol">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" v-model="nuevoRol.nombre" class="form-control" id="nombre" required>
          </div>
          <div class="form-group">
            <label for="estado">Estado:</label>
            <select v-model="nuevoRol.estado" class="form-control" id="estado" required>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
              <option value="eliminado">Eliminado</option>
            </select>
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea v-model="nuevoRol.descripcion" class="form-control" id="descripcion"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Crear Rol</button>
        </form>
      </div>
    </div>
    
    <div class="card mt-4">
      <div class="card-header">
        Lista de Roles
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rol in roles" :key="rol.id">
              <td>{{ rol.id }}</td>
              <td>{{ rol.nombre }}</td>
              <td>{{ rol.estado }}</td>
              <td>{{ rol.descripcion }}</td>
              <td>
                <router-link :to="`/roles/editar/${rol.id}`" class="btn btn-warning">Editar</router-link>
                <button @click="eliminarRol(rol.id)" class="btn btn-danger">Eliminar</button>
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
  name: 'ListarRoles',
  data() {
    return {
      roles: [],
      nuevoRol: {
        nombre: '',
        estado: 'activo',
        descripcion: ''
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

      // Cargar la lista de roles
      await this.fetchRoles();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los roles:', error);
    }
  },
  methods: {
    async fetchRoles() {
      try {
        const response = await instance.get('/roles');
        this.roles = response.data;
      } catch (error) {
        console.error('Error al obtener los roles:', error);
      }
    },
    async crearRol() {
      try {
        await instance.post('/roles', this.nuevoRol, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchRoles(); // Recargar la lista de roles después de crear uno nuevo
        this.nuevoRol = {
          nombre: '',
          estado: 'activo',
          descripcion: ''
        }; // Limpiar el formulario después de crear el rol
      } catch (error) {
        console.error('Error al crear el rol:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo crear el rol.';

        Swal.fire({
          icon: 'error',
          title: 'Error al crear el rol',
          text: message
        });
      }
    },
    async eliminarRol(id) {
      try {
        await instance.delete(`/roles/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchRoles(); // Recargar la lista de roles después de eliminar
      } catch (error) {
        console.error('Error al eliminar el rol:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo eliminar el rol.';

        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el rol',
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
