<template>
  <div class="background">
    <h2>Crear Ticket</h2>
    <form @submit.prevent="createSponsor">
      <label>Codigo:</label>
      <input v-model="Codigo" type="text" required>
      <label>Precio:</label>
      <input v-model="Precio" type="text" required>
      <label for="estado">Estado:</label>
        <select id="estado" v-model="nuevoTicket.estado" required>
          <option value="">Seleccionar</option>
          <option value="Activo">Activo</option>
          <option value="Cancelado">Cancelado</option>
          <option value="Vendido">Vendido</option>
        </select>

      <label>Participantes:</label>
      <input v-model="Participantes" type="text" required>

      <div class="button-group">
        <a href="/tickets" class="action-btn">Editar</a>
        <a href="/tickets" class="cancel-btn">Cancelar</a>
      </div>
    </form>
  </div>
</template>

  
  <script>
  export default {
    name: 'CrearTicket',
    data() {
    return {
      nuevoTicket: {
        codigo: '',
        precio: 0,
        estado: '',
        participantes: '',
      },
    };
  },
  methods: {
    guardarTicket() {
      // Lógica para guardar el nuevo ticket (por ejemplo, enviarlo a una API)
      console.log('Nuevo ticket:', this.nuevoTicket);
      // Limpia el formulario después de guardar
      this.nuevoTicket = {
        codigo: '',
        precio: 0,
        estado: '',
        participantes: '',
      };
    },
    cancelarAgregar() {
      // Lógica para cancelar la creación y probablemente cerrar el formulario
      console.log('Cancelada la creación del ticket');
      // Puedes ocultar el formulario aquí (dependiendo de tu implementación)
    },
  },
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
  input {
    padding: 5px;
    margin-top: 5px;
  }
  .button-group {
    display: flex;
    justify-content: flex-start; /* Cambia a flex-start para alinear los botones al inicio */
    gap: 10px; /* Ajusta el espacio entre los botones */
    margin-top: 20px;
    margin-left: 270px
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
  
  