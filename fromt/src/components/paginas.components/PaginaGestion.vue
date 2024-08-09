<template>
    <div class="container">
      <h1>Gestión de Páginas</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Evento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <PaginaItem
            v-for="evento in eventos"
            :key="evento.id"
            :evento="evento"
          />
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import PaginaItem from './PaginaItem.vue';
  
  export default {
    name: 'PaginaGestion',
    components: {
      PaginaItem
    },
    data() {
      return {
        eventos: [
          {
            id: 1,
            nombre: 'Concierto Tiago PZK',
            descripcion: 'Descripción del evento 1',
            fecha: '2024-08-10',
            ubicacion: 'Quito, Ecuador'
          }
        ]
      };
    }
  };
  </script>
  