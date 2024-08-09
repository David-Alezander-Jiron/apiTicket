<template>
  <div class="container">
    <h2>Listado de Tickets</h2>

    <table class="table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Precio</th>
          <th>Estado</th>
          <th>Participantes</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticket in tickets" :key="ticket.codigo">
          <td>{{ ticket.codigo }}</td>
          <td>{{ ticket.precio }}</td>
          <td>{{ ticket.estado }}</td>
          <td>{{ ticket.participantes }}</td>
          <td>
            <a href="/tickets/editar/1" class="btn">Editar</a>
            <a href="" class="btn">Eliminar</a>
          </td>
        </tr>
      </tbody>
    </table>

    <a href="/tickets/crear" class="btn">agregar Ticket</a>
  </div>
</template>

<script>
export default {
  name: 'TicketsNew',
  data() {
    return {
      tickets: [
        { codigo: "TICK12345", precio: 34.50, estado: "Activo", participantes: "Juan Pérez" },
        { codigo: "TICK67890", precio: 20.00, estado: "Cancelado", participantes: "María García" },
        { codigo: "TICK11223", precio: 10.15, estado: "Vendido", participantes: "Luis López" },
      ],
    };
  },
  methods: {
    editarTicket(ticket) {
      // Implementar la lógica para editar el ticket
      console.log("Editar ticket:", ticket);
    },
    eliminarTicket(ticket) {
      // Implementar la lógica para eliminar el ticket
      console.log("Eliminar ticket:", ticket);
    },
    agregarTicket() {
      // Implementar la lógica para agregar un nuevo ticket
      console.log("Agregar ticket");
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px 12px;
  border: 1px solid #ddd;
}

th {
  text-align: left;
  background-color: #f0f0f0;
}

.btn {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

.btn:hover {
  background-color: #0056b3;
}
</style>