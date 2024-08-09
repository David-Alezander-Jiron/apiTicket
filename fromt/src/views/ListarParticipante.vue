<template>
  <div class="background">
    <h2>Listado de participantes</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(participant, index) in participants" :key="index">
          <td>{{ participant.nombre }}</td>
          <td>{{ participant.apellido }}</td>
          <td>{{ participant.correo }}</td>
          <td>{{ participant.telefono }}</td>
          <td>
          <router-link :to="`/participantes/editar/${participanteId}`">
          <button class="action-btn">Editar</button>
          </router-link><button class="action-btn">Eliminar</button>
          <button class="action-btn">Opciones</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/participantes/crear" class="add-btn">Añadir Participante</router-link>
  </div>
</template>

<script>
export default {
  name: 'ListarParticipante',
  data() {
    return {
      participants: [
        { nombre: 'Kevin', apellido: 'Martínez', correo: 'kevinmar@gmail.com', telefono: '0987654321' },
        { nombre: 'Angel', apellido: 'Hernández', correo: 'angelher@gmail.com', telefono: '0942154376' },
        { nombre: 'Alejandro', apellido: 'Rodríguez', correo: 'alejandro@gmail.com', telefono: '0983412764' }
      ]
    };
  },
  methods: {
    addParticipant() {
      // Lógica para añadir un participante
      console.log('Botón de añadir participante clickeado');
    }
  }
};
</script>

<style scoped>
.background {
  border: 1px solid #D9D9D9;
  padding: 20px;
  max-width: 1600px; /* Ajusta el ancho máximo según tu preferencia */
  margin: 0 auto; /* Centra horizontalmente */
}

.table {
  width: 100%; /* Ajusta el ancho de la tabla al contenedor */
  border-collapse: collapse;
  margin-left: 10px;
}
.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center; /* Centra el texto en las celdas */
}
.table th {
  background-color: #f2f2f2;
}
.action-btn, .add-btn, .cancel-btn {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px; /* Añade espacio alrededor de los botones */
}
.action-btn:hover, .add-btn:hover, .cancel-btn:hover {
  background-color: #17A1FA;
}
.add-btn {
  background-color: #17A1FA;
  padding: 10px 20px;
  margin-top: 10px;
}
.cancel-btn {
  background-color: #f44336;
}
.cancel-btn:hover {
  background-color: #d32f2f;
}


</style>
